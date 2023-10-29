## Description

Nestjs/Prisma backend for feedback app using Postgres database powered by Bun

## Installation

```bash
$ bun install
```

## Running the app

```bash
# development
$ bun start

# watch mode
$ bun start:dev

# production mode
$ bun start:prod
```

## Test

```bash
# unit tests
$ bun test

# e2e tests
$ bun test:e2e

# test coverage
$ bun test:cov
```

## Swagger Docs

```bash
$ /api
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

