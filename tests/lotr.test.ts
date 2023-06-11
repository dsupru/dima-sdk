import { LOTR } from '../src/lotr';
import { LOTRConfig, ValidItems} from '../src/types';
import { expect } from '@jest/globals';

// Define the configuration for the services
const config = {
  ingres: "test",
  services: [
    {
      name: 'movie',
      endpoint: '/movie',
      uniqueField: '_id',
      apiResponce: {
        '_id': "string",
        'name': "string", 
        'runtimeInMinutes': "number",
      },
    },
    {
      name: 'quote',
      endpoint: '/quote',
      uniqueField: '_id',
      apiResponce: {
        '_id': 'string',
        'dialog': 'string'
      }
    }
  ]
} as LOTRConfig;

describe('LOTR', () => {
  let lotr: LOTR;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should fetch movies with a rottenTomatoesScore greater than 70', async () => {
    const lotr = new LOTR('your-api-token', config);
    jest.runOnlyPendingTimers(); 

    const movies = await lotr.get(ValidItems.movie, { rottenTomatoesScore: { op: 'gt', value: 70 } });
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
    movies.forEach((movie: any) => {
      expect(movie.rottenTomatoesScore).toBeGreaterThan(70);
    });
  });
});
