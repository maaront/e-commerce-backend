# Ecommerce Backend

## Description
The Ecommerce Backend is a backend application for an ecommerce company. It provides a functional Express.js API for managing categories, products, and tags. The application uses MySQL as the database and Sequelize as the ORM (Object-Relational Mapping) tool to interact with the database. It allows users to perform various operations such as creating, updating, and deleting data in the database. The API routes are designed to handle requests related to categories, products, and tags, providing formatted JSON responses.

## Installation
1. Clone the repository: `git clone https://github.com/your-username/ecommerce-backend`
2. Navigate to the project directory: `cd ecommerce-backend`
3. Install the dependencies: `npm install`
4. Set up your MySQL database and update the connection details in the `.env` file
5. Run the schema and seed commands to create the development database and seed it with test data:
   `npm run seed`
## Usage
1. Start the application by running: `npm start`.
2. The server will start, and the Sequelize models will be synced with the MySQL database.
3. Use a tool like Insomnia Core to test the API routes.
4. The available API routes are:
   - GET `/api/categories`: Retrieves all categories from the database.
   - GET `/api/categories/:id`: Retrieves a specific category by its ID.
   - POST `/api/categories`: Creates a new category.
   - PUT `/api/categories/:id`: Updates a specific category by its ID.
   - DELETE `/api/categories/:id`: Deletes a specific category by its ID.
   - GET `/api/products`: Retrieves all products from the database.
   - GET `/api/products/:id`: Retrieves a specific product by its ID.
   - POST `/api/products`: Creates a new product.
   - PUT `/api/products/:id`: Updates a specific product by its ID.
   - DELETE `/api/products/:id`: Deletes a specific product by its ID.
   - GET `/api/tags`: Retrieves all tags from the database.
   - GET `/api/tags/:id`: Retrieves a specific tag by its ID.
   - POST `/api/tags`: Creates a new tag.
   - PUT `/api/tags/:id`: Updates a specific tag by its ID.
   - DELETE `/api/tags/:id`: Deletes a specific tag by its ID.
5. Send requests to these routes in Insomnia Core to interact with the API and view the formatted JSON responses.

## Technologies Used
- Express.js
- MySQL
- Sequelize

## Credits
This project was developed by Matt Turner.

## License
This project is licensed under the [MIT License].