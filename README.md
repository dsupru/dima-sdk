# Installation

To install, please run :
```
npm install dsupru-sdk
```
# Considerations
The API uses pagination for quotes


# Usage

This SDK provides access to everything you would want to know about the movies and quotes within them of the Lord of the Rings univers.

## Before you begin
You have to establish authentication credentials, which can be done in 2 ways:
1. Grab a token from ""
2. Supply your public ssh key during registration here ""

## What can it do ?
This SDK allows you to answer questions like:
- What quotes were said in a movie ?
- Which movie is this quote from ?
- List movies in the Hobbit Series

You will run queries against 2 items: a __Movie__ and a __Quote__.  
Q: _How do I get a movie I want ?_  
A: Either by name, TODO its ranking, o . 
```
const movie = lotr.get({item: 'movie', filters:{name: 'The Unexpected Journey'}})
```
_What does that mean ?_  
If you want to know what quotes were said in a movie, you would run:
```
movie.get({item: 'quotes'})
```
If you would like to restrict the results only to specific characters, you would do:
```
movie.get({item: 'quotes', filters:{text: "<Enter all or part of the text>"}})
```
TODO If you would like to get a movie is a quote from:
```
quote.get({item: 'movie'})
```
You can also 
The full reference is at the end of this document.

## To use in your application:
### Step 1: Authenticate

If you opted to register and use SSH:  
```
lotr = lotr.auth_with({method: 'ssh', keypath: '~/.ssh/id_rsa.pub'})
```
If you are using a token:
```
lotr = lotr.auth_with({method: 'token', token: '<TOKEN_STRING>'})
```
### Step 2: 
Create a resource: Movie or Quote
1. Authenticate:
const movies 
Authentication can be done either by provid
# Test

To run unit tests, please run: 
```
npm run test
```
