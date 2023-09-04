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
  Inject,
  Injectable
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('api/users')
@Injectable()
export class UsersController {
 
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) { }

  @Get()
  async findAll(@Req() request) {
     const authHeader = request.headers['authorization'];
     return await firstValueFrom(this.client.send('find_users', {authHeader}));
  }
}
