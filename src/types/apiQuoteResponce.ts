interface QuoteAPIResponce {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}
 
function isQuoteAPIResponce(obj: any): obj is QuoteAPIResponce {
  return (
    typeof obj._id === 'string' &&
    typeof obj.dialog === 'string' &&
    typeof obj.movie === 'string' &&
    typeof obj.character === 'string'
  );
}

export { QuoteAPIResponce, isQuoteAPIResponce };