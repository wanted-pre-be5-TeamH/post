import { OpenapiService } from './openapi.service';
export declare class OpenapiController {
    private readonly openapiService;
    constructor(openapiService: OpenapiService);
    getWeather(location: string): Promise<string>;
}
