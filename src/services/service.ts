import { LOTRRequest } from "../ingress";

abstract class Service<T> {
    static UPDATE_PERIOD_HRS = 1;
    protected data = [];

    protected abstract updateData(data: T[]): void;
    protected abstract itemCheck(item: any): item is T;

    constructor(
        private request: LOTRRequest,
        private endpoint: string
    ){}

    async update(): Promise<void> {
      let data = await this.request.send<T>(this.endpoint, this.itemCheck);
      this.updateData(data);
    }

    // Here `filters` is an object where each key is a key from the generic type T, and the value is an object
    // with an 'op' key that can be 'lt' (less than), 'gt' (greater than), or 'eq' (equal), and a 'value' key of type T[K]
    // i.e., you can provide a filter for each property of T, where each filter specifies a comparison operation and a value.
    async get(filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): Promise<T[]> {
        await this.waitForData();

        return this.filterData(filters);
    }

    private async waitForData(): Promise<void> {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (this.data.length > 0) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 1000);
        });
    }

    private filterData(filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): T[] {
        return this.data.filter(item => {
            for (const key in filters) {
                const filter = filters[key];
                if (filter && !this.doesItemPassFilter(item, key, filter)) {
                    return false;
                }
            }
            return true;
        });
    }

    private doesItemPassFilter(item: T, key: keyof T, filter: { op: 'lt' | 'gt' | 'eq', value: any }): boolean {
        const itemValue = item[key];
        switch (filter.op) {
            case 'lt':
                return itemValue < filter.value;
            case 'gt':
                return itemValue > filter.value;
            case 'eq':
                return itemValue === filter.value;
            default:
                return false;
        }
    }

}

export { Service };