# 📝 NestJS GraphQL Task API

A **Task management API** built with **NestJS**, **GraphQL**, and **PostgreSQL** using **TypeORM**.  
Supports full **CRUD operations** for tasks and includes **user authentication** with JWT.

---

## 🚀 Features

- GraphQL API with **Playground support**
- TypeORM integration with **PostgreSQL**
- Full Task CRUD:
  - `tasks` → fetch all tasks
  - `createTask` → create a new task
  - `updateTask` → update an existing task
  - `removeTask` → delete a task
- Task fields: 
  - `id` (number)  
  - `title` (string)  
  - `description` (string)  
  - `status` (`pending | in-progress | completed`)
- User Authentication:
  - `signup(email, password, name)` → create a new user
  - `login(email, password)` → get JWT token and user info
- JWT-based authentication ready for protecting endpoints
- Playground queries for testing tasks and auth

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository


git clone https://github.com/naolleg/Nestjs-graphql.git
cd Nestjs-graphql


synchronize: true automatically generates tables — for production, use migrations.
### 2️⃣ Install Dependencies
npm install

### 3️⃣ Configure PostgreSQL Connection

Open app.module.ts (or create a .env file for environment variables) and update the database connection:



### 4️⃣ Run the Application

Start in development mode:

npm run start:dev


The server runs at: http://localhost:3000

Access GraphQL Playground at: http://localhost:3000/graphql
