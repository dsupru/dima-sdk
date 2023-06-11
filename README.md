# Installation

To install, please run :
```
npm install dsupru-sdk
```


# Usage

This SDK provides access to everything you would want to know about the movies and quotes within them of the Lord of the Rings universe.

## Before you begin
You have to establish authentication credentials, grab a token from https://the-one-api.dev

## What can it do ?
This SDK allows you to query for movies and quotes and filter results.
In particular, every field from a movie and a quote can be compared as equal to, less than or greater than some value.  
Quotes link to movies so one can get a movie id from a quote object and query LOTR for movie with \_id filter to link the two together.  
Support for `Quote.get(ValidItems.movie, { name: { op: 'eq', value: 'some quote example' } }` is coming soon !  

You will run queries against a LOTR object and you will receive a list of __Movie__ or __Quote__ objects.  
Q: _How do I get a movie I want ?_  
A: You can query by any field presented by the interface (defined below) 
```
import { LOTR, ValidItems } from 'dsupru-sdk';
// Create a new instance of the SDK
async function runFunQuery() {
  console.log('This example shows how to use lotr sdk')
  // Create a new instance of the SDK
  const lotr = await LOTR.init('<your token>');
  // Query by name
  const movies = await lotr.get(ValidItems.movie, { name: { op: 'eq', value: 'The Unexpected Journey' } })
  // Do something with the movie
  console.log(movies);
}

runFunQuery();
```



## To use in your application:
### Step 1: Create an instance of the SDK
 
```
 // Create a new instance of the SDK
 const lotr = await LOTR.init('<your token>');
```

### Step 2: 
Query away !

# Test

To run unit tests, please run: 
```
npm run test
```
