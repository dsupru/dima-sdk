import { ServiceConfig, ValidItems } from './types';
import { Service } from './services';
import { buildService } from './services';
import { LOTRRequest } from './ingress';

function buildServiceMap(request: LOTRRequest, services: ServiceConfig[]): {[key: string]: Service<any>} {
  let serviceMap: { [key in ValidItems]?: Service<any> }  = {};

// runtime checks for config validity are not necessary
// because the config is defined in the ts file and thus the compiles checks it
  services.forEach(serviceConfig => {
    serviceMap[serviceConfig.name] = buildService(request, serviceConfig);
  });

  return serviceMap;
}

export { buildServiceMap };