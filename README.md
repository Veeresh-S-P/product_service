
## Project Setup
1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Evaluation-1
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Start the server**
    ```bash
    npm start
    ```
---
## API Endpoints


#### 4. `GET /api/products(http://localhost:8080/api/products)`

  
    [
  {
    "_id": "68626f8b478a5338b200c074",
    "title": "Mens Shirts ",
    "price": 905,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "__v": 0
  },
  ]

```
---


#### 5. `GET /api/products/top-expensive(http://localhost:8080/api/products/top-expensive?n=5)`

  [
    {
      "title": "Expensive Product",
      "price": 999,
      "description": "High-end product",
      "category": "electronics",
      "image": "https://example.com/expensive.jpg",
      "rating": 3,
      
    }
  ]
  ```
---
#### 6. `GET /api/products/top-sellers`

[
  {
    "_id": null,
    "count": 8
  }
]
  ```
---

#### 8. `GET /api/products`
- **Description:** Fetch a single product by ID.
- **Request:**
  No body required.
- **Response:**
  ```json
  {
    "title": "name",
    "price": 'price in number',
    "description": "Product Desc",
    "category": "electronics",
    "image": "https://example.com/product.jpg",
    "rating":3,
    "userId": "60d0fe4f5311236168a109ca"
  }
  ```
---
#### 9. `POST /api/products`
- **Desc:** Create a new product.

  {
    "title": "Product Title",
    "price": 100,
    "description": "Product Description",
    "category": "electronics",
    "image": "https://example.com/image.jpg",
    "rating": 3
  }
  ```
- **Response:**
  ```json
  {
    "title": "Product Title",
    "price": 100,
    "description": "Product Description",
    "category": "electronics",
    "image": "https://example.com/image.jpg",
    "rating": 3,
    "userId": "60d0fe4f5311236168a109ca"
  }
  ```
---


#### 11. `DELETE /api/products/:id`
- **Description:** Delete a product by ID.
- **Request:**
  No body required.
- **Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```
---
