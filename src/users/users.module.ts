import { Module, ExecutionContext, Req } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ } from 'src/transport/tansport-proxy';


@Module({
  imports: [RABBITMQ],
  controllers: [UsersController],
  providers: [],
})

export class UsersModule {}
