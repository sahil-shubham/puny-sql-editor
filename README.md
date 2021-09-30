# Puny SQL Editor

A SQL Editor worthy of its name, it's puny.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c807a36f-535d-41db-b1b3-36d67a070b66/deploy-status)](https://app.netlify.com/sites/puny-sql-editor/deploys)

```
  NOTE: This project was made as a frontend interview task
```

## Try it out

This repository has been deployed to Netlify and can be visited [here](https://puny-sql-editor.netlify.app/).

Data for tables have been obtained from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) and queries of following formats should work:

- SELECT a,b,c from d ;
- select a,b,c from d where e=f;

```
NOTE: Mind the space between semicolon in SELECT statements without WHERE clause
```

## Setup

- Clone the repository

  ```
    git clone https://github.com/sahil-shubham/puny-sql-editor.git
  ```

- Install all the dependencies

  ```
    yarn
  ```

- Make a copy of `.env.template` and fill your supabase tokens (mostly safe for public view, read [here](https://supabase.io/docs/guides/api#api-url-and-keys)):

  ```
    cp .env.template .env
  ```

- Run the development server

  ```
    yarn start
  ```

  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. The linting is handled by husky before every commit.

## Possible features

This uses supabase for storing tables.

- This can be used to share specific tables of a database
- The shared tables are updated in real time and don't go old as a normal csv
- Some specific SQL Queries can be permitted to run to make filtering data on logic easier

## Shortcomings

This project focuses mostly on the frontend side of an SQL Editor, ignoring and/or circumnavigating the need of a backend whenever needed.
You are free to fork and improve this project to your liking.

- This doesn't do any SQL parsing
- This doesn't have any backend

### Misc

Didn't feel any need for optimizing page load time, due to it being around 0.6s. The results were obtained from Lighthouse report visible [here](https://puny-sql-editor.netlify.app/lighthouse-report.html).
