import { LOTRRequest } from './ingress';
import { buildServiceMap } from './configurator';
import { buildIngres } from './ingress';
import { Service } from './services';
import { LOTRConfig, ValidItems } from './types';
import { QuoteAPIResponce, MovieAPIResponce } from './types';

export class LOTR {
  private request: LOTRRequest;
  private services: {[key: string]: Service<any>};
  private updateScheduler: NodeJS.Timeout | null = null;
  private initialized = false;

  constructor(token: string, config: LOTRConfig) {
    this.request = buildIngres(config.ingres, token);
    this.services = buildServiceMap(this.request, config.services)
    this.updateScheduler = setInterval(() => this.scheduleUpdate(), Service.UPDATE_PERIOD_HRS * 60 * 60 * 1000);
    this.scheduleUpdate().then(() => { this.initialized = true;})
  }

  async get<T extends MovieAPIResponce | QuoteAPIResponce>(service: ValidItems, filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): Promise<any> {
    while (!this.initialized) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
  
      // Return the data from the query
      return this.services[service].get(filters);
  }

  private async scheduleUpdate() {
    for (const service of Object.values(this.services)) {
        await service.update();
    }
    this.initialized = true;
  }


}
