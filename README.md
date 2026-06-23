# Investment Calculator

An Angular investment calculator that estimates how an investment grows over time based on the starting amount, yearly contribution, expected annual return, and duration.

This project was built as an Angular learning project and focuses on component communication, template-driven forms, services, signals, and formatted result output.

## Features

- Enter an initial investment amount
- Enter annual investment contributions
- Set expected yearly return percentage
- Set investment duration in years
- Calculate yearly investment growth
- Display yearly results in a table
- Format money values with Angular currency pipes
- Shared calculation state through an Angular service

## Tech Stack

- Angular 18
- TypeScript
- Angular Forms
- CSS
- Angular signals

## Project Structure

```text
src/
  app/
    header/                    App header
    user-input/                Investment input form
    investment-results/        Results table
    investment.service.ts      Investment calculation and shared state
    investment-input.model.ts  Input and result interfaces
    app.component.*            Root component
    app.modules.ts             Root Angular module
  main.ts                      Angular module bootstrap
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/assemmohamed1677/Investment-Calculator.git
cd Investment-Calculator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

## Build

```bash
npm run build
```

The production build is generated in:

```text
dist/essentials-practice
```

## Tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## Recent Fixes

- Fixed Angular module bootstrap
- Fixed non-standalone component tests
- Cleaned unused imports and unused root state
- Fixed input binding and field names
- Added basic numeric input constraints

## Author

Assem Mohamed
