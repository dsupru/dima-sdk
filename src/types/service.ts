interface LOTRConfig {
    ingres: "test" | "prod",
    services: ServiceConfig[]
}

interface ServiceConfig {
    name: "movie" | "quote",
    endpoint: string,
    uniqueField: string,
    apiResponse: {[key: string]: string}
}

const enum ValidItems { "quote" = "quote" , "movie" = "movie" } ;

export {
    LOTRConfig,
    ServiceConfig,
    ValidItems
};