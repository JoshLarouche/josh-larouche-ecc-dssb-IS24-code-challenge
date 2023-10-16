# josh-larouche-ecc-dssb-IS24-code-challenge
React Django CRUD app to list and search other web apps

## Running the App Locally

### Prerequisites
- Git
- Python 3.6+
- npm (Node.js package manager)

### Clone the Repository

```bash
git clone git@github.com:JoshLarouche/josh-larouche-ecc-dssb-IS24-code-challenge.git
cd josh-larouche-ecc-dssb-IS24-code-challenge
```

### Set Up a Virtual Environment (optional but recommended)

```bash
python -m venv venv
source ./venv/bin/activate
```

### Install Python Dependencies

```bash
pip install -r requirements.txt
```

### Apply Database Migrations
```bash
cd backend
python manage.py migrate
```

### Start the Django Development Server

```bash
python manage.py runserver
```

### Install JavaScript Dependencies (in a separate terminal)

```bash
cd app
npm install
```

### Start the React Frontend Server

```bash
npm start
```

## Notes

I have completed all of the base criteria and bonus criteria.

### To Be Completed

- add input validation and ease of use error messages
- add testing
- add dockerization
- add CI pipeline

## API Base URL

All API endpoints can be accessed under the base URL: `http://localhost:8000/api/`

## Endpoints

### 1. List of Products

- **URL:** `/api/products/`
- **Method:** GET
- **Description:** Retrieve a list of all products.
- **Response:** Returns a JSON array containing product records.

### 2. Product Details

- **URL:** `/api/products/{id}/`
- **Method:** GET
- **Description:** Retrieve details of a specific product by ID.
- **Response:** Returns a JSON object representing the product.

### 3. Create a New Product

- **URL:** `/api/products/`
- **Method:** POST
- **Description:** Create a new product.
- **Request:** Requires a JSON object with product details.
- **Response:** Returns a JSON object representing the newly created product.

### 4. Update a Product

- **URL:** `/api/products/{id}/`
- **Method:** PUT
- **Description:** Update the details of a specific product by ID.
- **Request:** Requires a JSON object with updated product details.
- **Response:** Returns a JSON object representing the updated product.

### 5. Delete a Product

- **URL:** `/api/products/{id}/`
- **Method:** DELETE
- **Description:** Delete a specific product by ID.
- **Response:** Returns a success message.

## API Documentation

For more detailed information about the API, including request and response schemas, please refer to the interactive Swagger documentation.

- [Swagger API Documentation](http://localhost:8000/swagger/)

## Terms of Service

For terms of service, please visit our [Terms of Service](https://www.yourapp.com/terms/) page.

## Contact Information

For inquiries or support, you can contact us via email at joshua.t.larouche@gmail.com.

## License

The API is licensed under the Apache 2.0 license.

---

[Go to Swagger Documentation](http://localhost:8000/swagger/)