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
      apiResponse: {
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

  it('fetch movies with a rottenTomatoesScore greater than 70', async () => {
    const lotr = await LOTR.init('your-api-token', config);

    let movies = await lotr.get(ValidItems.movie, { rottenTomatoesScore: { op: 'gt', value: 70 } });

    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
    movies.forEach((movie: any) => {
      expect(movie.rottenTomatoesScore).toBeGreaterThan(70);
    });
  });

  it('fetch movies with a name equal to The Return of the King', async () => {
    const lotr = await LOTR.init('your-api-token', config);

    let movies = await lotr.get(ValidItems.movie, { name: { op: 'eq', value: "The Return of the King" } });

    expect(movies).toBeDefined();
    expect(movies.length).toBe(1);
    movies.forEach((movie: any) => {
      expect(movie.name).toBe("The Return of the King");
    });
  });

  it('fetch all movies', async () => {
    const lotr = await LOTR.init('your-api-token', config);

    let movies = await lotr.get(ValidItems.movie, {});

    expect(movies).toBeDefined();
    expect(movies.length).toBe(2);
  });

  it('fetch all quotes', async () => {
    const lotr = await LOTR.init('your-api-token', config);

    let movies = await lotr.get(ValidItems.quote, {});

    expect(movies).toBeDefined();
    expect(movies.length).toBe(4);
  });
});
