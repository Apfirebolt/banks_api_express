# Recipe API in Express

_👀 Banks API having IFSC code of Banks in India

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Requirements 🏃

- Node
- MongoDB
- MongoDB Compass (Optional, GUI for MongoDB databases)
- Postman (Optional, for API testing)

## Install  💥

```
npm install
npm start
```

The Express app is configured to run by default on port 5000 but can be easily changed by tweaking server.js file

## Features

- User authentication 📦
- CRUD on recipes module.
- Recipes can have multiple images 🍗
- Recipes can have multiple steps 🚶
- Recipes can have multiple ingredients 🔖

## Database Structure

User table fields and data types are described in the table below.

| id  | username | email  | password |
|-----|----------|--------|----------|
| int | string   | string | string   |

Recipe table structure

| id  | title  | recipe |
|-----|--------|--------|
| int | string | string     |

Ingredients Table

| id  | name   | quantity | recipe |
|-----|--------|----------|--------|
| int | string | int      | string    |

Recipe column links ingredients with recipes.

| id  | title  | ingredient | recipe | name   |
|-----|--------|------------|--------|--------|
| int | string | string     | string | string |

The above table is for pictures table. It can be linked to either an 'ingredient' or a 'recipe', hence both these foreign key references are optional. Name is used to store the name of the final after it is generated by multer helper functions.

Database column structure for 'Steps'

| id  | description | recipe |
|-----|-------------|--------|
| int | string      | string |

## API Docs

Detailed documentation for this API is not available yet, but below you can find some sample end points from the server.js file.

```
app.use('/api/users', userRoutes)
app.use('/api/recipes', recipeRoutes)
app.use('/api/steps', stepRoutes)
app.use('/api/ingredients', ingredientRoutes)
app.use('/api/pictures', pictureRoutes)

```

## Deployment

Planned to be deployed on Azure using Docker containers.

## Development

_Easily set up a local development environment!_

- clone
- `npm install`
- `npm start`

**Start coding!** 🎉

Clone this repo on your machine, navigate to its location in the terminal and run:

## Contributing

All contributions are welcome!  
Please take a moment to review guidelines [PR](.github/pull_request_template.md) | [Issues](https://github.com/Apfirebolt/express-recipe-api/issues/new/choose)

# Properties of Banks

['BANK', 'IFSC', 'BRANCH', 'CENTRE', 'DISTRICT', 'STATE', 'ADDRESS',
       'CONTACT', 'IMPS', 'RTGS', 'CITY', 'ISO3166', 'NEFT', 'MICR', 'UPI',
       'SWIFT']
