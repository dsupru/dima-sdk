import { ServiceConfig } from "../types";
import { MovieService } from "./movieService";
import {  QuoteService } from "./quoteService";
import { Service } from "./service";
import { LOTRRequest } from "../ingress";


function buildService(request: LOTRRequest, serviceConfig: ServiceConfig): Service<any> {
    switch(serviceConfig.name){
        case 'movie':
            return new MovieService(request, serviceConfig);
        case 'quote':
            return new QuoteService(request, serviceConfig);
        default:
            throw new TypeError(`Service with name ${serviceConfig.name} is not defined`);
    }
}

export { buildService };