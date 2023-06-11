import fetch from 'node-fetch';
import { isApiResponse } from '../types';
import { LOTRRequest } from './LOTRRequest';

class ApiLOTRRequest extends LOTRRequest {
  private headers: { [key: string]: string }  = {};

  constructor(private token: string) {
    super();
    this.headers['Authorization'] = `Bearer ${this.token}`;
  }

  async send<T>(endpoint: string, itemCheck: (item: any) => item is T): Promise<T[]> {
    let page = 1;
    let data: T[] = [];

    while (true) {
      // always set pages and stop only if there is no data
      const url = `https://the-one-api.dev/v2${endpoint}?page=${page}`;

      const response = await fetch(url, {headers: this.headers} );
      if (!response.ok) {
        console.error(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const apiResponse = await response.json();
      if (!isApiResponse(apiResponse, itemCheck)) {
        throw new EvalError('Invalid API response');
      }

      data = [...data, ...apiResponse.docs];

      if (page >= apiResponse.pages) {
        break;
      }

      page++;
    }

    return data;
  }
}

export { ApiLOTRRequest };
