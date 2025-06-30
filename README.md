
## Project Setup
1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Backend
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

  
   ``` [
  {
    "_id": "68626f8b478a5338b200c074",
    "title": "Mens Shirts ",
    "price": 905,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "__v": 0
  }
  ]

```
---


#### 5. `GET /api/products/`

 ``` 
  ```
---
#### 6. `GET /api/products/top-sellers`

```[
  {
    "_id": null,
    "count": 8
  }
]
  ```
---

#### 8. `GET /api/products`

  ```
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


#### 9. `DELETE /api/products/:id`

- **Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```
---
