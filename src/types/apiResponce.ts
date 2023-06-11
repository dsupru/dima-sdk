interface ApiResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
function isApiResponse<T>(obj: any, itemCheck: (item: any) => item is T): obj is ApiResponse<T> {
  return (
    Array.isArray(obj.docs) &&
    obj.docs.every(itemCheck) &&
    typeof obj.total === 'number' &&
    typeof obj.limit === 'number' &&
    typeof obj.page === 'number' &&
    typeof obj.pages === 'number'
  );
}

export { ApiResponse, isApiResponse };