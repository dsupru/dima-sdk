import { LOTR } from "./lotr";
import { ValidItems } from "./types";

async function runFunQuery() {
  // Create a new instance of the SDK
  const lotr = await LOTR.init('3tOOpYDY0n9_8cZmaRhv');
  // Use the SDK to get movies with a rottenTomatoesScore greater than 70
  const movies = await lotr.get(ValidItems.movie, { rottenTomatoesScore: { op: 'gt', value: 92 } })
  // Do something with the movies
  console.log(movies)

}

runFunQuery();
