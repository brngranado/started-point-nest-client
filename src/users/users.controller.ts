import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('send-to-microservice')
  async sendRabbitMQ() {
    const param = {
      user_id: 1,
      cedula: 12345678,
    };
    const data = await this.usersService.sendToMicroservice(param);
    return data;
  }


  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.usersService.login(loginDto);
  }

  @Get('refreshToken')
  async refreshToken(@Req() req, @Body() tokenData: RefreshTokenDto) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    tokenData.tokenData = token;
    return this.usersService.refreshToken(tokenData); 
  }
}
