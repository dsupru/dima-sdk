interface LOTRConfig {
    ingres: "test" | "prod",
    services: ServiceConfig[]
}

interface ServiceConfig {
    name: ValidItems,
    endpoint: string,
    uniqueField: string,
    apiResponce: {[key: string]: string}
}

const enum ValidItems { "quote" = "quote" , "movie" = "movie" } ;

export {
    LOTRConfig,
    ServiceConfig,
    ValidItems
};