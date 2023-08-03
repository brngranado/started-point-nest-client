import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LoginDto } from './dto/login.dto';

interface DataSend {
  user_id: number;
  cedula: number;
}

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) {}

  async login(data: LoginDto) {
    return firstValueFrom(this.client.send('login', data));
  }

  async refreshToken(tokenData: RefreshTokenDto) {
    return firstValueFrom(this.client.send('refreshToken', tokenData));
  }

  async sendToMicroservice(data: DataSend) {
    return firstValueFrom(this.client.send('users_event', data));
  }
}
