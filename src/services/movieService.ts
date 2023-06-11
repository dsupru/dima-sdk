import { Service } from "./service";
import { ServiceConfig, ValidItems, MovieAPIResponce, isMovieAPIResponce } from "../types";
import { LOTRRequest } from "../ingress";

class MovieService extends Service<MovieAPIResponce> {
    protected updateData(data: MovieAPIResponce[]): void {
        this.data = data;
    }
    constructor(request: LOTRRequest, serviceConfig: ServiceConfig) {
        super(request, serviceConfig.endpoint);
    }

    protected itemCheck(item: any): item is MovieAPIResponce {
      const validData = isMovieAPIResponce(item);
      return validData;// TODO fix typo
    }

}


export { MovieService };