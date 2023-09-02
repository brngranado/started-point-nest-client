import { Module, ExecutionContext, Req } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://ivttfqug:uYBWHKFfNlmahTZ6CefRT8UnuMPlwPlW@fly.rmq.cloudamqp.com/ivttfqug'],
          queue: 'users_queue',
          queueOptions: {
            durable: false,
          },
          headers: {
            Authorization: ""
          }
        },
        
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [],
})

export class UsersModule {}
