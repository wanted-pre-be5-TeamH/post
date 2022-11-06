import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OpenapiService } from './openapi.service';

@Controller('openapi')
export class OpenapiController {
  constructor(private readonly openapiService: OpenapiService) {}

  @Get('weather')
  getWeather(@Query('location') location: string) {
    return this.openapiService.getWeather(location);
  }
}
