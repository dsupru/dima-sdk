import { Service } from "./service";
import { ServiceConfig, ValidItems, MovieAPIResponse, isMovieAPIResponse } from "../types";
import { LOTRRequest } from "../ingress";

class MovieService extends Service<MovieAPIResponse> {
    protected updateData(data: MovieAPIResponse[]): void {
        this.data = data;
    }
    constructor(request: LOTRRequest, serviceConfig: ServiceConfig) {
        super(request, serviceConfig.endpoint);
    }

    protected itemCheck(item: any): item is MovieAPIResponse {
      const validData = isMovieAPIResponse(item);
      return validData;// TODO fix typo
    }

}


export { MovieService };