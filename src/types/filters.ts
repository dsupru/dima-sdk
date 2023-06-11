type FilterTypes = {
    movie: MovieFilters;
    quote: QuoteFilters;
  };
  type MovieFilters = {
    name?: { op: 'eq'; value: string };
    rottenTomatesScore?: { op: 'eq'; value: string };
    // other fields...
  };
  
  type QuoteFilters = {
    dialog?: { op: 'eq'; value: string };
    // other fields...
  };

export {FilterTypes, MovieFilters, QuoteFilters};