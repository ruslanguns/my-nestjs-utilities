import { Module } from '@nestjs/common';
import { NestUtilities } from './nest-utilities-provider';

@Module({
  providers: [NestUtilities],
  exports: [NestUtilities],
})
export class NestUtilitiesModule { }
