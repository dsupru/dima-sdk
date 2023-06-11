import { Service } from "./service";
import { isQuoteAPIResponce, QuoteAPIResponce, ServiceConfig, ValidItems } from "../types";
import { LOTRRequest } from "../ingress";

class QuoteService extends Service<QuoteAPIResponce> {
    private quotes: QuoteAPIResponce[] = [];

    protected updateData(data: QuoteAPIResponce[]): void {
        this.quotes = data;
    }

    constructor(request: LOTRRequest, private serviceConfig: ServiceConfig) {
        super(request, serviceConfig.endpoint);
    }

    protected itemCheck(item: any): item is QuoteAPIResponce {
        return isQuoteAPIResponce(item);
    }
}

export { QuoteService };