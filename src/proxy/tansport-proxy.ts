import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';

export const RABBITMQ =  ClientsModule.register([
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
  ]);

  export const KAFKA =  ClientsModule.register([
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
  ]);