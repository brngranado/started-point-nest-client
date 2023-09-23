import { SetMetadata } from '@nestjs/common';
import {  ExecutionContext } from '@nestjs/common';

export const BasicAuthUserDecorator = (context: ExecutionContext) => SetMetadata('basicAuthUserDecorator', context);
