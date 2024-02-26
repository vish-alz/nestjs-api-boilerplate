<head>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Source Sans Pro', sans-serif;
 
    }
    .nestjs {
      font-family: 'Source Sans Pro', sans-serif; /* Update this if you have a specific font */
      font-weight: 700; /* Assuming you want bold weight for "NESTJS" */
      color: #FBBD53; /* Color for "NESTJS" */
       font-size: 44px;
     letter-spacing: 3px;
    }
    .api {
      background-color: #FBBD53;
      color: white;
      font-family: 'Source Sans Pro', sans-serif; /* Same font family, for consistency */
      font-weight: 700;
       font-size: 44px;
    letter-spacing: 3px;
    }
    .boilerplate {
      color: #FBBD53;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 400; /* Normal weight for "BOILERPLATE" */
       font-size: 24px;
       letter-spacing: 3px;
    }
  </style>
</head>
<body>
  <p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  </p>
  <p align="center">
    <span class="nestjs">NESTJS</span> <span class="api" align="center"> API </span>
  </p>
  <p align="center" class="boilerplate">BOILERPLATE</p>
</body>

# NestJS Api Boilerplate

An API Boilerplate to create a ready-to-use REST API in seconds with NestJS 10.x and JWT Auth System :heart_eyes_cat:

## Installation

```bash
   $ npm install
```

## Set Environment for secret key JWT and other configurations

```bash
   $ cp .env.example .env
```

To set up on multiple environments, such as dev, stage or prod, we do as follows:

```bash
   $ cp .env.example .env.dev # or .env.stage, etc
```

## Config settings .env for sending a notification when a user registers, forgets password or changes password

```
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=2525
   EMAIL_AUTH_USER=[:user]
   EMAIL_AUTH_PASSWORD=[:password]
   EMAIL_DEBUG=true
   EMAIL_LOGGER=true
   EMAIL_LAYOUT_DIR='templates/emails/'
   EMAIL_PARTIAL_DIR='templates/emails/'
   EMAIL_VIEW_PATH='/templates/emails/'
   EMAIL_DEFAULT_LAYOUT='index'
```

## Config settings .env to connect MySQL

Once the database has been configured, start the Nest App via `npm run start:dev` it automatically synchronizes the entities so it is ready to use. :heart_eyes_cat:

```
   TYPEORM_CONNECTION = "mysql"
   TYPEORM_HOST = "localhost"
   TYPEORM_PORT = 3306
   TYPEORM_USERNAME = [:user]
   TYPEORM_PASSWORD = [:password]
   TYPEORM_DATABASE = [:database]
   TYPEORM_AUTO_SCHEMA_SYNC = true
   TYPEORM_ENTITIES = "dist/**/*.entity.js"
   TYPEORM_SUBSCRIBERS = "dist/subscriber/**/*.js"
   TYPEORM_MIGRATIONS = "dist/migrations/**/*.js"
   TYPEORM_ENTITIES_DIR = "src/entity"
   TYPEORM_MIGRATIONS_DIR = "src/migration"
   TYPEORM_SUBSCRIBERS_DIR = "src/subscriber"
```

## Install TypeScript Node

```bash
   $ npm install -g ts-node
```

## Running migrations with typeorm

```bash
   $ ts-node node_modules/.bin/typeorm migration:run -d dist/typeorm-cli.config
```

or

```bash
   $ node_modules/.bin/typeorm migration:run -d dist/typeorm-cli.config
```

## Running the app

```bash
    # development
    $ npm start

    # watch mode
    $ npm start:dev

    # production mode
    $ npm start:prod
```

## Running the app in REPL mode

```bash
   $ npm start --entryFile repl
```

or

```bash
   $ npm start:repl
```

## Docker

There is a `docker-compose.yml` file for starting MySQL with Docker.

`$ docker-compose up db`

After running, you can stop the Docker container with

`$ docker-compose down`

## Url Swagger for Api Documentation

```

http://127.0.0.1:3000/docs

```

or

```

http://127.0.0.1:3000/docs-json

```

or

```

http://127.0.0.1:3000/docs-yaml

```

Configure `SWAGGER_USER` and `SWAGGER_PASSWORD` in the .env file and set `NODE_ENV` to `local` or `dev` or `staging` to access the SWAGGER(Open API) documentation with basic authentication.

```

NODE_ENV=[:enviroments]
SWAGGER_USER=[:user]
SWAGGER_PASSWORD=[:password]

```

If you want to add more environments, include them in the `SWAGGER_ENVS` array in `main.ts`, see the following:

```typescript
const SWAGGER_ENVS = ['local', 'dev', 'staging'];
```

## Configuring the NODE_API_PORT environment variable as the default port if you don't want to use the default

```
   NODE_API_PORT=3000
```

## License

[MIT licensed](LICENSE)
