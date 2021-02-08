## Review scraper

This is a tool for identifying "overly positive" reviews for the McKaig Chevrolet Buick dealership on dealerrater.com. When running, it will output the top 3 most positive reviews to the console, with some details about each review. The criteria for determining which are the top reviews is included below.

### Criteria

This tool determines which reviews are "overly positive" by calculating a positivity score for each review, by adding together the following:

- The overall dealer rating provided the user (rangers from 0 to 50)
- The number of exclamation points in the review text
- The number of capital letters in the review text
- A sentiment analysis score (see details below)

#### Sentiment Score

This tool uses the [sentiment](https://github.com/thisandagain/sentiment) npm package for running a basic sentiment analysis on a body of text. This package takes a wordlist and produces a score (number) that represents the overall positive or negative sentiment of that wordlist. You can read more details about how it works [here](https://github.com/thisandagain/sentiment#how-it-works)

### Usage

To get started, clone the repo and run `npm install` from inside the project

This project is built with TypeScript. You can compile the Typescript and run the app from your console using the following commands:

```
npm run build
```

```
npm run start
```

You should then see the top 3 "overly positive" reviews printed to your console

#### Local development

If you want to develop locally, you can run `npm run dev`. This will watch for changes to your `*.ts` files and recompile/rerun the application on the fly.

#### Tests

There are mostly unit and a few integration tests included in this repo.

- Run unit tests with `npm run test`
- Run integration tests with `npm run test:integration`
- Run all tests with `npm run test:all`

Test suites will print coverage reports to the console when run. You can look in the jest config files at the project root to see some configuration options for coverage reports for each test suite

### Other notes

Please use node v10 or higher when running
