# Budget

A personal budgeting application for tracking financial transactions organized into categories.

**Stack:** React + MobX + Vite (client) · NestJS + Fastify + Knex (API) · MySQL · Docker

---

## Running with Docker

### Production

```bash
docker compose up --build
```

- Client: http://localhost:5173
- Server: http://localhost:3000

### Development (hot reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

Both the API (`server/src`) and client (`client/src`) source directories are volume-mounted, so changes are reflected immediately without rebuilding the image.

### Environment variables

The `docker-compose` files read from a `.env` file in the project root. A default `.env` is included with reasonable development values:

```
DB_ROOT_PASSWORD=root_password
DB_USER=budget
DB_PASSWORD=budget_password
DB_NAME=budget
```

Adjust as needed before starting.

---

## Running locally (without Docker)

### Prerequisites

- Node.js 24+
- A running MySQL 8 instance

### SERVER

```bash
cd server
npm install
npm run migrate        # run database migrations
npm run start:dev      # starts with watch mode on port 3000
```

Available API scripts:

| Script                     | Description                        |
| -------------------------- | ---------------------------------- |
| `npm run start:dev`        | Start with hot reload              |
| `npm run build`            | Compile TypeScript                 |
| `npm run start`            | Run compiled output                |
| `npm run migrate`          | Apply pending migrations           |
| `npm run migrate:rollback` | Roll back the last migration batch |
| `npm run seed`             | Seed the database with sample data |
| `npm run seed:clear`       | Remove seeded data                 |

### Client

```bash
cd client
npm install
npm run dev            # starts Vite dev server on port 5173
```

The client expects the API to be running at `http://localhost:3000`.

Available client scripts:

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Type-check and bundle    |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

---

## API

Base URL: `http://localhost:3000`

### Categories

| Method | Path                      | Description         |
| ------ | ------------------------- | ------------------- |
| GET    | `/categories`             | List all categories |
| POST   | `/categories`             | Create a category   |
| PUT    | `/categories/:categoryId` | Update a category   |
| DELETE | `/categories/:categoryId` | Delete a category   |

### Transactions

| Method | Path                           | Description                              |
| ------ | ------------------------------ | ---------------------------------------- |
| GET    | `/transactions`                | List transactions (cursor-paginated)     |
| POST   | `/transactions`                | Create a transaction                     |
| PUT    | `/transactions/:transactionId` | Update a transaction                     |
| DELETE | `/transactions/:transactionId` | Delete a transaction                     |
| GET    | `/transactions/stats`          | Spending stats grouped by day/week/month |
