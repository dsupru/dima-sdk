// Interface and type guards to check the responce from the server is valid
// This should be combined with the config to have a 1 source of data shape

interface MovieAPIResponse {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

function isMovieAPIResponse(obj: any): obj is MovieAPIResponse {
  return (
    typeof obj._id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.runtimeInMinutes === 'number' &&
    typeof obj.budgetInMillions === 'number' &&
    typeof obj.boxOfficeRevenueInMillions === 'number' &&
    typeof obj.academyAwardNominations === 'number' &&
    typeof obj.academyAwardWins === 'number' &&
    typeof obj.rottenTomatoesScore === 'number'
  );
}

export { MovieAPIResponse, isMovieAPIResponse };