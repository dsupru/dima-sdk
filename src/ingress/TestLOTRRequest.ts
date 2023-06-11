import { LOTRRequest } from "./LOTRRequest";

// Should be a mock in the test function but jest refused to work in time
// so I defined this as an implementation of LOTRRequest
class TestLotrRequest extends LOTRRequest {
    async send(endpoint: string, params?: any): Promise<any> {
        // Return fake JSON data
        switch (endpoint) {
            case '/movie':
                return [
                        {
                            "_id": "5cd95395de30eff6ebccde5c",
                            "name": "The Fellowship of the Ring",
                            "runtimeInMinutes": 178,
                            "budgetInMillions": 93,
                            "boxOfficeRevenueInMillions": 871.5,
                            "academyAwardNominations": 13,
                            "academyAwardWins": 4,
                            "rottenTomatoesScore": 51
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
                    ]
            case '/quote':
                return [
                        {
                            "_id": "5cd96e05de30eff6ebcce7e9",
                            "dialog": "Deagol!",
                            "movie": "5cd95395de30eff6ebccde5d",
                            "character": "5cd99d4bde30eff6ebccfe9e",
                            "id": "5cd96e05de30eff6ebcce7e9"
                        },
                        {
                            "_id": "5cd96e05de30eff6ebcce7ea",
                            "dialog": "Deagol!",
                            "movie": "5cd95395de30eff6ebccde5d",
                            "character": "5cd99d4bde30eff6ebccfe9e",
                            "id": "5cd96e05de30eff6ebcce7ea"
                        },
                        {
                            "_id": "5cd96e05de30eff6ebcce9e4",
                            "dialog": "Why does he hates poor Smeagol? What has Smeagol ever done to him? Master? Master carries a heavy burden. Smeagol knows, heavy heavy burden. Fat one cannot know. He wants it. He needs it. Smeagol sees it in his eye. Very soon he will ask you for it. You will see. The fat one will take it from you!",
                            "movie": "5cd95395de30eff6ebccde5d",
                            "character": "5cd99d4bde30eff6ebccfe9e",
                            "id": "5cd96e05de30eff6ebcce9e4"
                        },
                        {
                            "_id": "5cd96e05de30eff6ebcce9e5",
                            "dialog": "But the fat Hobbit, he knows. Eyes always watching.",
                            "movie": "5cd95395de30eff6ebccde5b",
                            "character": "5cd99d4bde30eff6ebccfe9e",
                            "id": "5cd96e05de30eff6ebcce9e5"
                        }
                    ]
            default:
                return []
        }
    }
}

export { TestLotrRequest };