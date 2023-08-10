import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
            Authorization: 'Bearer 12312312312312328nkdjashdlasudklasjdklh' 
          }
        },
        
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
