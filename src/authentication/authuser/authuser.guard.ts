import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { Reflector } from '@nestjs/core';
import { ClientProxy, RmqContext } from '@nestjs/microservices';
@Injectable()
export class AuthUserGuard extends AuthGuard('jwt') implements CanActivate {
  
  constructor(
    private reflector: Reflector,
    private readonly authenticationService: AuthenticationService,
    ) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rpcContext = context.switchToRpc();
    const rmqContext = rpcContext.getContext<RmqContext>();
    const message = rmqContext.getMessage();
    const headers = message.properties.headers;

    console.log('en el guard', headers);
    
    //TODO: follow here =)
    // const token = context.switchToHttp().getRequest().headers['Authorization']; 

    // console.log('TOKEN HEADER',authHeader);
    // const validate = this.authenticationService.validateToken(req);
    // const emailDecoded = validate.email; 
    // const passDecoded = validate.password; 

    // const user =  await this.userService.getByEmail(emailDecoded);
    // const validatedPass = this.authenticationService.validatePassword(passDecoded, user.password);
    // const isValid = user && validatedPass ? true : false;
  
    // if (isValid === false) {
    //   throw new UnauthorizedException(); 
    // }
    return false;
  }
}
