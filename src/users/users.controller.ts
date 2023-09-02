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
  ExecutionContext,
  Inject
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('api/users')
export class UsersController {
  private readonly client: ClientProxy;
  private readonly context: ExecutionContext
  constructor() {}

  @Get()
  async findAll() {
    const requestHeaders  = this.context.switchToHttp().getRequest().headers;
    return await firstValueFrom(this.client.send('find_users', {}));
  }

}
