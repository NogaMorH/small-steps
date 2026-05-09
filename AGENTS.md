# AGENTS.md

## Project Purpose

Small Steps is a full-stack web application for creative practice and habit tracking. It helps users build long-term consistency around activities such as music practice, drawing, writing, exercise, and other skill-building routines.

The product should feel reflective, calm, and user-focused. It is not a generic productivity dashboard. Prioritize consistency, thoughtful daily logging, progress visibility, and lightweight reflection over heavy task-management patterns.

## Product Scope

The MVP is intentionally small:

- Authentication
- One user flow
- A single habit experience
- Daily practice logs
- Streak calculations
- Weekly progress tracking

Design the architecture so it can later support multiple users, multiple habits per user, richer analytics, reminders, media attachments, calendar heatmaps, and social features. Do not implement future-facing complexity before the MVP needs it.

Core domain concepts:

- `users`
- `habits`
- `practice_logs`

Example product capabilities:

- Create habits
- Log daily practice sessions
- Add summaries or reflections
- Track mood or qualitative practice notes
- Calculate current streaks
- Track weekly goal progress
- View practice history and statistics

## Repository Layout

Expected top-level structure:

- `client/` - React, TypeScript, Vite frontend
- `server/` - Node.js, TypeScript, GraphQL API, PostgreSQL access, auth

Keep client and server responsibilities separate. Shared domain concepts should be mirrored deliberately through typed API contracts, not by tightly coupling implementation details across the boundary.

## Frontend Guidelines

Use React with TypeScript and plain CSS. Do not introduce Tailwind.

Prefer a component-based structure with clear separation between:

- Pages and route-level screens
- Reusable UI components
- Feature-specific components
- API/client data access
- Local state or app state
- Styling files

Frontend code should be readable, strongly typed, and easy to change. Avoid large components that mix data fetching, layout, form state, and rendering logic without clear boundaries.

UX matters. Interfaces should feel quiet, warm, and practical for repeated daily use. Avoid corporate productivity aesthetics, cluttered dashboards, and excessive visual noise. Use spacing, hierarchy, empty states, and form feedback thoughtfully.

Use reusable components when a pattern appears more than once, but avoid abstracting too early. A small, clear component is better than a generic component that hides product intent.

## Backend Guidelines

Use Node.js, TypeScript, GraphQL, PostgreSQL, and JWT authentication.

Backend code should keep domain logic separate from transport concerns. GraphQL resolvers should be thin and delegate meaningful work to services or domain modules where appropriate.

Important backend responsibilities:

- Authentication and JWT handling
- User, habit, and practice log persistence
- Validation of user-owned resources
- Streak and weekly progress calculations
- GraphQL schema and resolver behavior
- Integration boundaries with PostgreSQL

Design the database around scalable relationships even during the single-habit MVP:

- Users can own many habits
- Habits can have many practice logs
- Practice logs belong to a habit and user context

Keep schema changes intentional and documented through migrations once migration tooling exists.

## Domain Logic

Business logic should be deterministic, testable, and independent of UI rendering or GraphQL resolver plumbing.

Streak and progress calculations are core product behavior. Keep them in focused modules with clear inputs and outputs. Be explicit about dates, time zones, skipped days, and duplicate logs for the same day.

Prefer clear domain models and TypeScript types over loosely shaped objects. Avoid `any` unless there is a narrow, documented reason.

## Testing Expectations

Use Jest for tests.

Prioritize tests around business-critical logic:

- Current streak calculation
- Weekly goal progress
- Practice log aggregation
- Date boundary behavior
- Auth and user ownership checks
- GraphQL API flows

Add unit tests for pure domain logic and integration tests for authentication and API behavior. Tests should document expected behavior for edge cases, not just happy paths.

When changing streak, progress, auth, or persistence behavior, update or add tests in the same change.

## Code Style

- Use TypeScript consistently and strictly where project configuration allows.
- Prefer explicit domain names over vague names like `data`, `item`, or `thing`.
- Keep functions small enough to understand without jumping through unrelated concerns.
- Use plain CSS with maintainable class names and local conventions.
- Avoid unnecessary libraries unless they solve a real problem for the MVP.
- Do not add broad abstractions, global state, or complex infrastructure without a clear product need.
- Keep error handling user-appropriate on the frontend and precise on the backend.

## AI Agent Workflow

Before changing code, inspect the relevant files and existing patterns. Fit changes into the current structure instead of introducing a parallel style.

For implementation work:

- Keep changes scoped to the requested behavior.
- Preserve user edits and unrelated work.
- Add or update tests when business logic, auth, API behavior, or persistence changes.
- Prefer readable, maintainable code over clever shortcuts.
- Run relevant checks when available, such as lint, build, and targeted tests.

If the backend or test setup is not yet scaffolded, create only the structure needed for the current task and keep it lightweight.

## Product Judgment

Small Steps should encourage steady creative practice without making users feel managed or judged. Product copy, empty states, forms, and statistics should support reflection and momentum. Make the MVP feel complete in its narrow scope before expanding into analytics-heavy or social features.
