# E-Commerce Project

This project is a simple e-commerce application with a backend built using Node.js, Express, and TypeScript, and a frontend built using React, Redux, and TypeScript. The application features user authentication and product listing functionalities.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine
- [Mongo DB](https://www.mongodb.com/) installed on your machine

## Setup and Running the Project

Follow these steps to set up and run the project using Docker.

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/JoniSutradhor/sample-auth-protected-routes.git

cd sample-auth-protected-routes

docker-compose up --build
```
# Backend
The backend is built with Node.js, Express, and TypeScript. It includes the following main functionalities:

User registration and login using JWT for authentication
Product listing with an optional search parameter
## Backend Endpoints
- POST /auth/signup: User registration
- POST /auth/login: User login
- GET /products: Get a list of products (requires authentication)
# Frontend
The frontend is built with React, Redux, and TypeScript. It includes the following main functionalities:

- User login and registration forms
- Product listing page (accessible only to authenticated users)
#### Frontend Pages
- Login: User login page
- Signup: User registration page
- Products: Product listing page
# MongoDB
MongoDB is used as the database for this project. The MongoDB service is configured to run as a Docker container.

## MongoDB Configuration
- Host: mongodb
- Port: 27017
- Database: elo-be-db
- MongoDB Data Persistence
- MongoDB data is persisted in a Docker volume.

# Docker Compose
The docker-compose.yml file sets up the backend, frontend, and MongoDB services