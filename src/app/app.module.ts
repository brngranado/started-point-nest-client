import { Module } from '@nestjs/common';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
