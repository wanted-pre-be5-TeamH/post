import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenapiService {
  constructor(private config: ConfigService) {
  }
  
  //클라이언트로 해당 지역의 날씨를 리턴해주는 openapi URL 리턴
  async getWeather(location: string) {
    const url = 'http://api.weatherapi.com/v1/current.json?key=';
    const param = `&q=${location}&api=no`;
    const result = url + this.config.get<string>('WEATHERAPI_KEY') + param;
    return result;
  }
}
