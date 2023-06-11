import { ApiLOTRRequest } from "./ApiLOTRRequest";
import { LOTRRequest } from "./LOTRRequest";
import { TestLotrRequest } from "./TestLOTRRequest";

function buildIngres(kind: string, token: string): LOTRRequest {
    switch(kind){
        case 'prod':
            return new ApiLOTRRequest(token);
        case 'test': // not the way to do it, should be a mock
            return new TestLotrRequest();
        default:
            throw new TypeError(`${kind} not defined`);
    }
}

export { buildIngres };