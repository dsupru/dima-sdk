import { LOTRConfig } from "./types";

export function getConfig(): LOTRConfig {
  return {
    ingres: "prod",
    services: [
      {
        name: "movie",
        endpoint: "/movie",
        uniqueField: "_id",
        apiResponse: {
          _id: "string",
          name: "string",
          runtimeInMinutes: "number",
          budgetInMillions: "number",
          boxOfficeRevenueInMillions: "number",
          academyAwardNominations: "number",
          academyAwardWins: "number",
          rottenTomatesScore: "number"
        }
      },
      {
        name: "quote",
        endpoint: "/quote",
        uniqueField: "_id",
        apiResponse: {
          _id: "string",
          dialog: "string",
          movie: "string",
          character: "string",
          id: "string"
        }
      }
    ]
  }
}