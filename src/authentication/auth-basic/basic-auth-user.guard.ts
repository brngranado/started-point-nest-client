import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthenticationService } from 'src/authentication/authentication.service';
import { Reflector } from '@nestjs/core';
@Injectable()
export class BasicAuthUserGuard extends AuthGuard('jwt') implements CanActivate {
  
  constructor(
    private reflector: Reflector,
    private readonly authenticationService: AuthenticationService,
    ) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.authenticationService.validateToken(token);
      request['user'] = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['Authorization'] ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}


