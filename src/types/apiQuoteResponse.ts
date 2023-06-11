// Interface and type guards to check the responce from the server is valid
// This should be combined with the config to have a 1 source of data shape

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