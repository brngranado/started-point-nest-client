import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PassportModule, JwtService],
  exports: [PassportModule, AuthenticationService],
})
export class AuthenticationModule {}
