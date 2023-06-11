abstract class LOTRRequest {
  abstract send<T>(endpoint: string, params?: any): Promise<any>;
}

export { LOTRRequest };