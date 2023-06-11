import { Service } from "./service";
import { isQuoteAPIResponse, QuoteAPIResponse, ServiceConfig, ValidItems } from "../types";
import { LOTRRequest } from "../ingress";

class QuoteService extends Service<QuoteAPIResponse> {
    protected updateData(data: QuoteAPIResponse[]): void {
        this.data = data;
    }

    constructor(request: LOTRRequest, private serviceConfig: ServiceConfig) {
        super(request, serviceConfig.endpoint);
    }

    protected itemCheck(item: any): item is QuoteAPIResponse {
        return isQuoteAPIResponse(item);
    }
}

export { QuoteService };