import { Module } from '@nestjs/common';
import { OpenapiService } from './openapi.service';
import { OpenapiController } from './openapi.controller';

@Module({
  controllers: [OpenapiController],
  providers: [OpenapiService]
})
export class OpenapiModule {}
