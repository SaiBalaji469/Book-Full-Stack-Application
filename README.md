# Bookstore Web Application (MERN Stack)

## Overview

This project is a **Bookstore Web Application** built using the **MERN** stack, consisting of **MongoDB**, **Express.js**, **React**, and **Node.js**. The application allows users to browse books, manage their shopping carts, and place orders. It also features an **Admin Dashboard** for managing the inventory, adding new books, updating details, and deleting products.

The application is designed with the following key features and functionalities:

- **Frontend:** Built with **React** and styled using **Tailwind CSS** for a clean and responsive UI.
- **State Management:** Leveraging **Redux** and **RTK Query Toolkit** to manage state and efficiently handle data fetching.
- **Backend:** Using **Node.js** with **Express.js** for creating the server and handling routes, authentication, and business logic.
- **Database:** **MongoDB** is used to store product data, user information, and orders.
- **Authentication:** **JWT (JSON Web Tokens)** is implemented for user and admin authentication.
- **Inventory Management System:** Admins can manage the entire book inventory, including adding, updating, and deleting books.

---

## Key Features

### 1. **User Side (Frontend)**

- **Browse Books:** Users can view a catalog of books, sorted by categories and genres.
- **Shopping Cart:** Users can add or remove books from their shopping cart.
- **Checkout System:** The app supports a **Cash on Delivery** (COD) system. Users can proceed to checkout, where they can provide their details for order fulfillment.
- **Order Placement:** Users can place orders, which are stored in the database with relevant details like order items and user information.

### 2. **Admin Dashboard (Backend)**

- **Admin Authentication:** Admins can log in to the admin panel using a secure username and password. JWT tokens are used to ensure secure authentication.
- **Book Management:**
  - **Add Books:** Admins can add new books to the inventory by uploading book details such as title, author, genre, price, and description.
  - **Update Books:** Admins can edit existing book details.
  - **Delete Books:** Admins can remove books from the inventory if needed.
- **Inventory Management:** Admins have full control over the inventory, ensuring that the book data is always up-to-date.

### 3. **State Management with Redux and RTK Query**

- **Redux** is used to manage global state throughout the application, making it easy to track the user's cart and orders.
- **RTK Query Toolkit** simplifies data fetching and reduces the amount of boilerplate code needed for API calls. It helps manage server-side interactions such as fetching book data and submitting orders.

### 4. **Responsive Design**

- The user interface is fully responsive, allowing users to access the bookstore from desktops, tablets, and mobile devices. **Tailwind CSS** is used for quick styling and ensuring a clean and modern design.

---

## Technologies Used

- **Frontend:**
  - **React**: A JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for styling the application.
  - **Redux**: For managing global state across the application.
  - **RTK Query Toolkit**: For efficient data fetching and caching.
  
- **Backend:**
  - **Node.js**: A JavaScript runtime for building the server-side of the application.
  - **Express.js**: A lightweight framework for building RESTful APIs with Node.js.
  - **JWT (JSON Web Tokens)**: For secure authentication of both users and admins.
  - **Mongoose**: A MongoDB ODM (Object Document Mapper) for interacting with the MongoDB database.

- **Database:**
  - **MongoDB**: A NoSQL database used to store book information, orders, and user data.

---

## Features in Detail

### User Flow

1. **Homepage**: Upon visiting the website, users can browse through different categories of books or search for specific titles.
2. **Product Details**: Users can click on any book to view its detailed information, including the price, author, description, and more.
3. **Add to Cart**: Users can add books to their cart, review them, and make adjustments (add/remove).
4. **Checkout**: Once the user is ready to place an order, they can proceed to checkout and choose the **Cash on Delivery** option. User details are captured during this process.
5. **Order Confirmation**: After placing an order, users will receive a confirmation of their purchase and will be able to track it through the order history (optional feature).

### Admin Flow

1. **Admin Login**: The admin can access the dashboard by logging in with a secure username and password.
2. **Manage Books:**
   - **Add**: Admins can add new books, including details such as the title, author, price, and description.
   - **Edit**: Admins can modify the details of existing books (e.g., price, description).
   - **Delete**: Admins can remove books from the inventory.
3. **Order Management** (optional): Admins can view and manage user orders (view status, process shipments, etc.).

---

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (for the database)

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/bookstore-app.git
   cd bookstore-app
2. **Install dependencies**:

Install both frontend and backend dependencies.
   ```bash
  Frontend:
  cd client
  npm install

  Backend:
  cd server
  npm install
```

3.  **Set up environment variables:**

Create a .env file in the root of the backend directory and add the necessary environment variables for your MongoDB connection and JWT secret.\
 MONGO_URI=your-mongodb-uri<br />
 JWT_SECRET=your-jwt-secret
Start the server:

4. **First, start the backend server**:
 ```bash
cd server
npm start
```
6.  **Then, start the frontend server**:
```bash
cd client
npm start
```


### **Conclusion**
This MERN Stack Bookstore Application provides a powerful solution for building a simple and scalable online bookstore. The combination of React, Node.js, Express.js, and MongoDB offers both a seamless user experience and robust backend management, making it suitable for real-world applications.

Here is my live website(Book-store)
https://book-app-frontend-silk.vercel.app/


