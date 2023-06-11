interface MovieAPIResponce {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

function isMovieAPIResponce(obj: any): obj is MovieAPIResponce {
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

export { MovieAPIResponce, isMovieAPIResponce };