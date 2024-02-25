# nestjs-api-boilerplate

A comprehensive boilerplate for building scalable, maintainable, and production-ready API services with NestJS, specifically tailored for MySQL database integration.

## Features

- **Pre-configured NestJS**: Set up with the best practices for project structure, configuration, and scalability.
- **Authentication & Authorization**: Integrated modules for secure authentication and authorization mechanisms.
- **MySQL Database Integration**: Seamless integration with MySQL for robust data management and operations.
- **Swagger Documentation**: Pre-configured Swagger for API documentation and testing.
- **Docker Support**: Dockerfile and docker-compose.yml for easy containerization and deployment.
- **Testing**: Unit and e2e testing setups with Jest.
- **Logging & Monitoring**: Configured logging and monitoring for better observability.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.x or later)
- npm/yarn
- Docker (for containerization features)
- MySQL Server (for database operations)

## Installation

To use the `nestjs-api-boilerplate`, follow these steps:

```bash
npm install nestjs-api-boilerplate
```

or using yarn:

```bash
yarn add nestjs-api-boilerplate
```

## Usage

After installation, proceed with the following steps to kickstart your NestJS project with MySQL integration:

1. **Initialize Your Project**: Create your new project using the boilerplate.

   ```bash
   npx create-nestjs-api-boilerplate my-api-project
   cd my-api-project
   ```

2. **Configure MySQL**: Adjust the database configuration settings in your `.env` file or within your application's configuration module to connect to your MySQL database.

3. **Run the Application**:

   - For development:

     ```bash
     npm run start:dev
     ```

   - For production:

     ```bash
     npm run start:prod
     ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
