import { LOTRRequest } from './ingress';
import { buildServiceMap } from './configurator';
import { buildIngres } from './ingress';
import { Service } from './services';
import { LOTRConfig, ValidItems } from './types';
import { QuoteAPIResponce, MovieAPIResponce } from './types';
import { getConfig } from './config';

export class LOTR {
  private request: LOTRRequest;
  private services: {[key: string]: Service<any>};

  // allows us to require the data to be initialized before returning control to the user
  static async init(token: string, config = getConfig()): Promise<LOTR> {
    const lotr = new LOTR(token, config);
    await lotr.updateServices();

    return lotr;
  }

  private constructor(token: string, config: LOTRConfig) {
    this.request = buildIngres(config.ingres, token);
    this.services = buildServiceMap(this.request, config.services)
  }

  async get<T extends MovieAPIResponce | QuoteAPIResponce>(service: ValidItems, filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): Promise<any> {
  
    // Return the data from the query
    return this.services[service].get(filters);
  }

  private async updateServices() {
    for (const service of Object.values(this.services)) {
        await service.update();
    }
  }
}
