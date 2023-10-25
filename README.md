## Description

Nestjs/Prisma backend for feedback app using Postgres database

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
## Features

```bash
# endpoints
$ /login
$ /register
$ /logout
$ /me
$ /verify-email
$ /forgot-password
$ /reset-password
$ /change-password
$ /feedack
$ /feedback/:id #CRUD
$ /feedback/:id/like #CRUD
$ /feedback/:id/dislike #CRUD
$ /feedback/:id/comment #CRUD
$ /feedback/:id/comment/:id #CRUD
$ /feedback/:id/comment/:id/reply #CRUD
$ /feedback/:id/comment/:id/reply/:id #CRUD

