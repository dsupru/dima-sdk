import { LOTRRequest } from "../ingress";

abstract class Service<T> {
    static UPDATE_PERIOD_HRS = 1;

    protected data: any[] = [];
    private lastUpdateTime: number = 0;

    protected abstract updateData(data: T[]): void;
    protected abstract itemCheck(item: any): item is T;

    constructor(
        private request: LOTRRequest,
        private endpoint: string
    ){}

    async update(): Promise<void> {
      let data = await this.request.send<T>(this.endpoint, this.itemCheck);
      console.debug(data)
      this.updateData(data);
      this.lastUpdateTime = Date.now();
    }

    // Here `filters` is an object where each key is a key from the generic type T, and the value is an object
    // with an 'op' key that can be 'lt' (less than), 'gt' (greater than), or 'eq' (equal), and a 'value' key of type T[K]
    // i.e., you can provide a filter for each property of T, where each filter specifies a comparison operation and a value.
    async get(filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): Promise<T[]> {
        // update data if it has been a long time since the last update
        if (Date.now() - this.lastUpdateTime > Service.UPDATE_PERIOD_HRS * 60 * 60 * 1000) {
            await this.update();
        }

        return this.filterData(filters);
    }

    private filterData(filters: { [K in keyof T]?: { op: 'lt' | 'gt' | 'eq', value: T[K] } }): T[] {
        console.log(`data ${this.data}`)
        return this.data.filter(item => {
            console.log(`item: ${item}`)
            for (const key in filters) {
                console.log(`key: ${key}`)
                const filter = filters[key];
                console.log(`filter: ${filter}`)
                if (filter && !this.doesItemPassFilter(item, key, filter)) {
                    console.log('returning false')
                    return false;
                }
            }
            console.log('returning true')
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