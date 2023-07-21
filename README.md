# Random Quote Generator

## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes. 

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](src/data/office_quotes.json) can be found in this repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You
1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given quotes [dataset](src/data/office_quotes.json). This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own github account and share it with us. If the repo is private please share it with `violet-hiring`.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 2-4 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Notes

I created methods to get a random quote, get all quotes, create a quote, update a quote, and delete a quote.

For my additional feature I wanted to add a way to get all quotes for a specified character so this can be done using a request with a character parameter in the body.

All of these methods are tried and in working order :D

The testing has me a bit stumped. I have some very basic tests for each of the original methods but the updating and deleting tests fail due to my lack of knowledge on mocking within tests. I know that I need to mock a small fake collection of quotes to test but can't seem to figure it out in this situation. I don't have a lot of test writing experience and normally consult several examples while writing them. I'm also unsure of how to test some of the methods better than just checking if response is null.