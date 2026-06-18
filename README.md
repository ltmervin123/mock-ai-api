
---

# Local Development Setup

This project uses **pnpm** as the package manager.

## Prerequisites

Make sure the following are installed and running on your machine:

* **Node.js** (LTS version recommended)
* **Docker Desktop**
* **pnpm**

## 1. Install pnpm

If pnpm is not installed globally, run:

```bash
npm install -g pnpm@latest-11

```

## 2. Install Dependencies & Generate Client

Install the project dependencies. This will also automatically trigger the generation of your type-safe Prisma Client:

```bash
pnpm install

```

## 3. Configure Environment Variables

Create your local environment file by copying the example file:

```bash
cp .env.example .env

```

## 5. Run Database Migrations

Apply the latest database schema migrations to your local PostgreSQL instance:

```bash
pnpm db:migrate

```

*Note: If your database is already up to date but you are missing code autocomplete or types, you can manually force a client rebuild using `pnpm prisma generate`.*

## 6. Run the Application

With Docker running your database in the background, start the Hono development server:

```bash
pnpm run dev

```

The application will be accessible at:

```text
http://localhost:3000

```

---

## 🛠️ Optional Database Tools

### Open Prisma Studio

To visually inspect and manage your database records locally through a GUI web interface:

```bash
pnpm prisma studio

```

Prisma Studio will open automatically at:

```text
http://localhost:5555

```