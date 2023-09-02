import { Body, Controller, Post, UseGuards, Get, ExecutionContext, UnauthorizedException, Req, } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import { AuthGuard } from '@nestjs/passport';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Ctx } from '@nestjs/microservices';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Controller('api/auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  async login(@Body() createAuthenticationDto: CreateAuthenticationDto) {
    return  await this.authenticationService.getAuthenticatedUser(createAuthenticationDto.email, createAuthenticationDto.password);
  }

  @Get('refreshToken')
  async refreshToken(@Req() request) {
    const authHeader = request.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }
    const token = authHeader.split(' ')[1];
    return this.authenticationService.refreshToken(token);
  }
}
