import { ConfigService } from '@nestjs/config';
export declare class OpenapiService {
    private config;
    constructor(config: ConfigService);
    getWeather(location: string): Promise<string>;
}
