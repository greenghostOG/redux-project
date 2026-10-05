# Full-Stack MERN User Management App with Redux Toolkit

A complete, production-ready full-stack web application built using modern web technologies to manage users with asynchronous state management.

## 🚀 Tech Stack

* **Frontend:** React.js, Redux Toolkit, Tailwind CSS, Axios, Vite
* **Backend:** Node.js, Express.js, Mongoose, MongoDB, Bcrypt, Dotenv
* **Architecture:** Monorepo structure with decoupled services and async thunks.

---

## 📋 Features

* **User Registration & Authentication:** Secure user sign-up with password hashing via `bcrypt`.
* **State Management (Redux Toolkit):** Centralized global state handling using `createSlice` and `createAsyncThunk`.
* **Asynchronous API Integration:** Clean decoupling of HTTP networking using `Axios` services.
* **CRUD Operations:** 
  * **CREATE:** Add new users dynamically.
  * **READ:** Fetch and display all registered users from the database.
  * **DELETE:** Remove users seamlessly with instant UI updates.
* **Modern UI:** Styled responsively with Tailwind CSS.

---

## 🛠️ Project Architecture

```text
redux-project/
├── backend/
│   ├── src/
│   │   ├── config/       # Environment configurations
│   │   ├── controllers/  # Route logic & controllers
│   │   ├── db/           # Database connection setup
│   │   ├── models/       # Mongoose schemas (User model)
│   │   └── routes/       # Express API endpoints
│   ├── package.json
│   └── server.js         # Entry point for Express
└── frontend/
    ├── src/
    │   ├── components/   # UI Components (AddUser, UserList, etc.)
    │   ├── redux/        # Redux Store & userSlice configuration
    │   ├── services/     # Axios API integration services
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

⚙️ Local Installation & Setup

Follow these steps to run the project locally on your machine:

1. Clone the RepositoryBashgit clone [https://github.com/greenghostOG/redux-project.git](https://github.com/greenghostOG/redux-project.git)
cd redux-project

2. Backend SetupNavigate to the backend directory, install dependencies, and configure your environment variables:Bashcd backend
npm install

Create a .env file inside the backend directory and add your configurations:
PORT=5000
MONGO_URI=your_mongodb_connection_string_here

Start the backend server:
npm run dev

3. Frontend Setup

Open a new terminal window, navigate to the frontend directory, install dependencies, and start the development server:
cd frontend
npm install
npm run dev

📜 API Endpoints Overview
Method      Endpoint                          Description
GET         /api/v1/user/users                Fetch all registered users
POST        /api/v1/user/register             Register a new user
POST        /api/v1/user/login                Authenticate user login
DELETE      /api/v1/user/users/:id            Delete a user by ID

👨‍‍💻 Author
Bhupender Kumar
