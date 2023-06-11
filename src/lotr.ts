import { LOTRRequest } from './ingress';
import { buildServiceMap } from './configurator';
import { buildIngres } from './ingress';
import { Service } from './services';
import { LOTRConfig, ValidItems } from './types';
import { QuoteAPIResponse, MovieAPIResponse } from './types';
import { getConfig } from './config';

// LOTR API class.
// Initializes movies and quotes records
// Clients should us a `get` function to query for data
export class LOTR {
  // require the data to be initialized before returning control to the user
  static async init(token: string, config = getConfig()): Promise<LOTR> {
    const lotr = new LOTR(token, config);
    await lotr.updateServices();

    return lotr;
  }

  // Forwards a query to the specified valid item
  // Users can filter on =, <, > operations.
  // Currently no distinction is being made on string vs. numeric fields
  async get<T extends MovieAPIResponse | QuoteAPIResponse>(service: ValidItems, filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): Promise<any> {
  
    // Return the data from the query
    return this.services[service].get(filters);
  }

  private request: LOTRRequest;
  private services: {[key: string]: Service<any>};

  private constructor(token: string, config: LOTRConfig) {
    this.request = buildIngres(config.ingres, token);
    this.services = buildServiceMap(this.request, config.services)
  }

  private async updateServices() {
    for (const service of Object.values(this.services)) {
        await service.update();
    }
  }
}
