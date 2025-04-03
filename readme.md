# Sellzaar Full Stack MERN App

A full-stack eCommerce application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with authentication, product management, and seamless user experience.

## 📌 Features

### 🛍️ User Features:
- User authentication (Register/Login with JWT).
- Browse products with categories and filters.
- Add products to the cart.
- Checkout with order summary.
- Edit Order details.
- Edit profile.
- Payment method.
- Responsive UI for mobile, tablet, and desktop.

### 🔑 Admin Features:
- Admin authentication and authorization.
- Add, edit, and delete products.
- Category, Subcategory.
- User Profile edit.
- Manage user orders.
- View order history.

### ⚙️ Additional Features:
- Secure authentication using **JWT**.
- Protected routes for admin and users.
- Search and filter products.
- Optimized database queries for performance.
- Fully deployed frontend and backend.

---

## **🛠️ Tools & Technologies Used**

### **Backend (Server-Side)**
- **[MongoDB](https://www.mongodb.com/)** – NoSQL database for storing users, products, and orders.  
- **[Express.js](https://expressjs.com/)** – Backend framework for handling routes, middleware, and APIs.  
- **[Node.js](https://nodejs.org/en)** – JavaScript runtime for executing server-side code.  
- **[Mongoose](https://mongoosejs.com/)** – ODM (Object Data Modeling) for MongoDB, used for defining schemas and database operations.  
- **[JsonWebToken (JWT)](https://www.npmjs.com/package/jsonwebtoken)** – Secure authentication and token-based authorization.  
- **[Dotenv](https://www.npmjs.com/package/dotenv)** – Loads environment variables from a `.env` file to secure sensitive data.  
- **[Resend Email API](https://resend.com/)** – Sends transactional emails (e.g., order confirmations, password reset).  

### **Frontend (Client-Side)**
- **[React.js](https://react.dev/)** – Frontend library for building an interactive user interface.  
- **[Vite (React Vite)](https://v3.vitejs.dev/guide/)** – Fast development server and build tool for React apps.  
- **[Redux Toolkit](https://react-redux.js.org/introduction/getting-started)** – Manages global state (cart, authentication, orders, etc.).  
- **[React Router](https://reactrouter.com/en/main/start)** – Enables navigation between pages in a single-page application (SPA).  
- **[Axios](https://www.npmjs.com/package/axios)** – HTTP client for making API requests to the backend.  
- **[Sweet Alert 2](https://sweetalert2.github.io/)** – Provides user-friendly popups and alerts.  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling and responsive design.  

### **Cloud & Payment Integrations**
- **[Cloudinary](https://cloudinary.com/)** – Stores and optimizes images uploaded by users/admins.  
- **[Stripe Payment Gateway](https://stripe.com/)** – Processes secure online payments for orders.  

### **Development & Testing Tools**
- **[VS Code](https://code.visualstudio.com/)** – Code editor for writing and debugging code.  
- **[Postman](https://www.postman.com/)** – API testing tool for verifying backend responses and debugging endpoints.  

---

## 🚀 Installation & Setup

### 🖥️ 1. Clone the Repositories

```bash
git clone https://github.com/Tooba1166/Sellzaar/tree/main/client
git clone https://github.com/Tooba1166/Sellzaar/tree/main/server

### 🔧 2. Backend Setup (Express & MongoDB)
#### Navigate to backend directory:
```bash
cd server
```
#### Install dependencies:
```bash
npm install
```
#### Create a `.env` file and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=8080
```
#### Start the backend server:
```bash
npm run dev
```

---

### 🎨 3. Frontend Setup (React)
#### Navigate to frontend directory:
```bash
cd client
```
#### Install dependencies:
```bash
npm install
```
#### Start the frontend:
```bash
npm start
```

## 💡 How to Contribute?
1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Push to your branch and submit a Pull Request.




