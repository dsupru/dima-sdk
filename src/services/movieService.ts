import { Service } from "./service";
import { ServiceConfig, ValidItems, MovieAPIResponce, isMovieAPIResponce } from "../types";
import { LOTRRequest } from "../ingress";

class MovieService extends Service<MovieAPIResponce> {
    private movies: MovieAPIResponce[] = [];

    protected updateData(data: MovieAPIResponce[]): void {
        this.movies = data;
    }
    constructor(request: LOTRRequest, serviceConfig: ServiceConfig) {
        super(request, serviceConfig.endpoint);
    }

    protected itemCheck(item: any): item is MovieAPIResponce {
      return isMovieAPIResponce(item); // TODO fix typo
    }

}


export { MovieService };