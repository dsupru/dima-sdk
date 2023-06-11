import { LOTRRequest } from "./LOTRRequest";

class TestLotrRequest extends LOTRRequest {
    async send(endpoint: string, params?: any): Promise<any> {
        // Return fake JSON data
        switch (endpoint) {
            case 'movie':
                return {
                    "docs": [
                        {
                            "_id": "5cd95395de30eff6ebccde5c",
                            "name": "The Fellowship of the Ring",
                            "runtimeInMinutes": 178,
                            "budgetInMillions": 93,
                            "boxOfficeRevenueInMillions": 871.5,
                            "academyAwardNominations": 13,
                            "academyAwardWins": 4,
                            "rottenTomatoesScore": 91
                        },
                        {
                            "_id": "5cd95395de30eff6ebccde5d",
                            "name": "The Return of the King",
                            "runtimeInMinutes": 201,
                            "budgetInMillions": 94,
                            "boxOfficeRevenueInMillions": 1120,
                            "academyAwardNominations": 11,
                            "academyAwardWins": 11,
                            "rottenTomatoesScore": 95
                        }
                    ],
                    "total": 8,
                    "limit": 1000,
                    "offset": 0,
                    "page": 1,
                    "pages": 1
                }
                default:
                    return {}
        }
    }
}

export {TestLotrRequest};