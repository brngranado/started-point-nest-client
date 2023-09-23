import { SetMetadata } from '@nestjs/common';
import {  ExecutionContext } from '@nestjs/common';

export const KeycloakAuthUserDecorator = (context: ExecutionContext) => SetMetadata('keycloakAuthUserDecorator', context);
