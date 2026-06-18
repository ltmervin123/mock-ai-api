# Local Development Setup

This project uses **pnpm** as the package manager.

## Prerequisites

Make sure the following are installed:

* Node.js (LTS version recommended)
* Docker Desktop
* pnpm

## Install pnpm

If pnpm is not installed globally, run:

```bash
npm install -g pnpm@latest-11
```

## Install Dependencies

```bash
pnpm install
```

## Start PostgreSQL Database

Make sure Docker Desktop is running, then start the database container:

```bash
docker compose up -d
```

Verify the container is running:

```bash
docker ps
```

## Configure Environment Variables

Create a `.env` look for .env.example for variables needed


## Run Database Migrations

Apply the latest Prisma migrations:

```bash
pnpm prisma migrate dev
```

## (Optional) Open Prisma Studio

To inspect and manage database records locally:

```bash
pnpm prisma studio
```

Prisma Studio will be available at:

```text
http://localhost:5555
```

## Run the Application

Make sure Docker is running in the background, then start the development server:

```bash
pnpm run dev
```

## Access the Application

Open:

```text
http://localhost:3000
```
