# 📝 NestJS GraphQL Task API

A **Task management API** built with **NestJS**, **GraphQL**, and **PostgreSQL** using **TypeORM**.  
Supports full **CRUD operations** for tasks: create, read, update, delete.

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

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

### 1️⃣ Clone the Repository


git clone <repo-url>
cd <repo-folder>

synchronize: true automatically generates tables — for production, use migrations.
### 2️⃣ Install Dependencies
npm install

### 3️⃣ Configure PostgreSQL Connection

Open app.module.ts (or create a .env file for environment variables) and update the database connection:

TypeOrmModule.forRoot({
  type: 'postgres',
  url: 'postgresql://neondb_owner:npg_yQi7TKV5PIAc@ep-wispy-pond-adwr4jd7-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  entities: [Task],
  synchronize: true, // auto-creates tables; disable in production
  ssl: {
    rejectUnauthorized: false, // required for some hosted DBs like Neon
  },
}),

### 4️⃣ Run the Application

Start in development mode:

npm run start:dev


The server runs at: http://localhost:3000

Access GraphQL Playground at: http://localhost:3000/graphql
