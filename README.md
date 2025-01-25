# Learning REST API with Express.js

This project demonstrates the basic CRUD operations (Create, Read, Update, Delete) for a REST API built using **Node.js**, **Express.js**, and **body-parser**. The project is based on a tutorial by [MikeLopster](https://www.youtube.com/@MikeLopster).

---

## Features

- **Create User**: Add a new user with an auto-generated ID.
- **Read Users**: Retrieve a list of users or a specific user by ID.
- **Update User**:
  - Fully replace user data using PUT.
  - Partially update user data using PATCH.
- **Delete User**: Remove a user by ID.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node app.js
```

The server will start at `http://localhost:8000`.

---

## API Endpoints

### **1. Create User**

- **Endpoint:** `POST /user`
- **Description:** Adds a new user.
- **Request Body:**

```json
{
  "name": "John",
  "lastname": "Doe"
}
```

- **Response:**

```json
{
  "message": "add ok",
  "user": {
    "id": 1,
    "name": "John",
    "lastname": "Doe"
  }
}
```

### **2. Get All Users**

- **Endpoint:** `GET /users`
- **Description:** Retrieves a list of all users.
- **Response:**

```json
[
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "fullname": "John Doe"
  }
]
```

### **3. Get User by ID**

- **Endpoint:** `GET /user/:id`
- **Description:** Retrieves a specific user by ID.
- **Response:**

```json
{
  "message": "User",
  "data": {
    "user": {
      "id": 1,
      "name": "John",
      "lastname": "Doe"
    }
  }
}
```

### **4. Update User (PUT)**

- **Endpoint:** `PUT /user/:id`
- **Description:** Fully updates a user.
- **Request Body:**

```json
{
  "name": "Jane",
  "lastname": "Smith"
}
```

- **Response:**

```json
{
  "message": "Updated",
  "data": {
    "user": {
      "name": "Jane",
      "lastname": "Smith"
    },
    "index": 0
  }
}
```

### **5. Update User (PATCH)**

- **Endpoint:** `PATCH /user/:id`
- **Description:** Partially updates a user.
- **Request Body:**

```json
{
  "lastname": "Brown"
}
```

- **Response:**

```json
{
  "message": "Updated",
  "data": {
    "user": {
      "lastname": "Brown"
    },
    "index": 0
  }
}
```

### **6. Delete User**

- **Endpoint:** `DELETE /user/:id`
- **Description:** Deletes a user by ID.
- **Response:**

```json
{
  "message": "Deleted",
  "indexDelete": 0
}
```

---

## Technologies Used

- **Node.js**
- **Express.js**
- **body-parser**

---

## Acknowledgments

Special thanks to [MikeLopster](https://www.youtube.com/@MikeLopster) for the tutorial inspiration!

