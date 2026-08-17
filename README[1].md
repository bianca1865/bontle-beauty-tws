# Bontle Beauty Lounge — Backend (Services module)

First pass of the backend: CRUD for the **Services** entity (name, duration, price).
Stylists, Appointments, and Auth will build on top of this same structure.

## Stack
- Node.js + Express
- PostgreSQL + Prisma ORM

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Copy `.env.example` to `.env` and set your `DATABASE_URL` (a local Postgres
   instance, or a free one from Railway/Supabase/Neon if you're not running
   Postgres locally yet):
   ```
   cp .env.example .env
   ```

3. Create the `services` table from the schema:
   ```
   npx prisma migrate dev --name init
   ```

4. Start the dev server (auto-restarts on changes):
   ```
   npm run dev
   ```

The API runs at `http://localhost:4000` by default. Check `http://localhost:4000/health` to confirm it's up.

## Endpoints

| Method | Route              | Description                                  |
|--------|--------------------|-----------------------------------------------|
| GET    | /api/services      | List active services (`?includeInactive=true` for all) |
| GET    | /api/services/:id  | Get one service                              |
| POST   | /api/services      | Create a service                             |
| PUT    | /api/services/:id  | Update a service                             |
| DELETE | /api/services/:id  | Soft-delete (deactivate). `?hard=true` to permanently remove |

### Example: create a service
```
POST /api/services
Content-Type: application/json

{
  "name": "Silk Press",
  "description": "Wash, treat, and silk press finish",
  "durationMinutes": 90,
  "price": 350.00
}
```

## Why soft-delete
Once Appointments exist, they'll reference a `serviceId`. If a service is hard-deleted,
past appointment records would break. `DELETE` deactivates by default so old bookings
still resolve — pass `?hard=true` only when you're sure nothing references it.

## Next steps
- Add `Stylist` model + CRUD
- Add `Appointment` model (links Service, Stylist, Customer, time slot) with
  availability-conflict checks
- Add auth (customer accounts + admin/stylist login) — likely JWT-based
