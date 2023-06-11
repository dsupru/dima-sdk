import { ServiceConfig, ValidItems } from './types';
import { Service } from './services';
import { buildService } from './services';
import { LOTRRequest } from './ingress';

function buildServiceMap(request: LOTRRequest, services: ServiceConfig[]): {[key: string]: Service<any>} {
  let serviceMap: { [key in ValidItems]?: Service<any> }  = {};

  services.forEach(serviceConfig => {
    assertAPIConfigured(serviceConfig);
    serviceMap[serviceConfig.name] = buildService(request, serviceConfig);
  });

  return serviceMap;
}

// TODO
// runtime checks for config validity
function assertAPIConfigured(apiConfig: ServiceConfig) {
    if (!apiConfig.endpoint) {
        throw new Error('API configuration must include an endpoint');
    }
    return true;
}

export { buildServiceMap };