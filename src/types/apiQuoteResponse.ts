interface QuoteAPIResponse {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}
 
function isQuoteAPIResponse(obj: any): obj is QuoteAPIResponse {
  return (
    typeof obj._id === 'string' &&
    typeof obj.dialog === 'string' &&
    typeof obj.movie === 'string' &&
    typeof obj.character === 'string'
  );
}

export { QuoteAPIResponse, isQuoteAPIResponse };