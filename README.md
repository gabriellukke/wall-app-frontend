# The Wall App - Frontend

### Backend Repo
- [Wall Backend](https://github.com/gabriellukke/wall-app-backend)

### Deploys
- [Frontend - Surge](https://wall-app-tsl.surge.sh/)
- [Backend - Heroku](https://rest-wall-api.herokuapp.com/post)

## About

In this project, users can create a new account, sign in or enter as a visitor. Users can create a post on a wall if they are logged, or just read the posts, if they aren't.
This project was built using [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Cypress](https://docs.cypress.io/).

## Installation

To run this application, open the terminal in any directory of your choice and run the commands below:

1. Clone the project
```bash
git clone git@github.com:gabriellukke/wall-app-frontend.git
```

2. Enter in project directory
```bash
cd wall-app-frontend
```

3. Install project dependencies
```bash
npm install
```
or
```bash
yarn install
```

## Environment Variables

1. Create a .env file in project root and configure the environment variables.
-  if you want to use the production backend:
```bash
REACT_APP_BASE_URL=https://rest-wall-api.herokuapp.com
```

- if you want to run the local backend:
```
REACT_APP_BASE_URL=http://localhost:3001 
```

## Tests
This project uses cypress for testing. Cypress is an end-to-end testing tool.
- To run the project tests, make sure your application is running at `http://localhost:3000`. If you want to change the application test url, change the key `baseUrl` in `cypress.config.js` to your application url.

- Tests are isolated from backend in this project, so you can run without backend connection.

Running tests on terminal:
```bash
npm run cypress
```
or
```bash
yarn run cypress
```

Running tests using Cypress UI:
```bash
npm run cypress:open
```
or
```bash
yarn run cypress:open
```

## Contacts
* [Gabriel Almeida](mailto:gabriel.dev.almeida@outlook.com)
* [LinkedIn](https://www.linkedin.com/in/gabriel-dev-almeida/)

## Thank you TSL
- I really liked to code this app.
