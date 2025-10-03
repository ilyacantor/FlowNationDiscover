# FlowNation - Event Discovery for Endurance Sports

## Overview

FlowNation is an event discovery platform for endurance sports (running, cycling, triathlon, obstacle courses). The application provides advanced filtering, event browsing, and personalized recommendations for athletes searching for their next race. The design philosophy emphasizes clean, professional aesthetics inspired by BikeReg.com, with a focus on clarity and efficient event browsing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server with HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query (React Query)** for server state management and data fetching
- **React Hook Form** with Zod resolvers for form validation

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Custom CSS variables for theming (light mode focused with navy blue primary color)

**Design System**
- Color palette: Navy blue (#003366), white, light gray (#f9fafb), accent blue (#2563eb)
- Responsive breakpoints: Desktop (4-column grid), Mobile (1-column stacked)
- Hover states with elevation effects using CSS variables (--elevate-1, --elevate-2)
- Consistent spacing, rounded corners (rounded-lg), and subtle shadows (shadow-md)

**Key UI Components**
- NavBar: Sticky navigation with active state indicators
- FilterBar: Multi-field search with pill-style inputs (date, location, type, distance, name)
- EventCard: Display event details with badges, icons, and hover effects
- FeaturedEventsCarousel: Horizontal scrollable carousel using Embla Carousel
- EventResults: Month-grouped event listings with location display

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Development mode integrates Vite middleware for SSR and HMR
- Production mode serves pre-built static assets
- Custom logging middleware for API request tracking

**API Design**
- RESTful API endpoints under `/api` prefix
- Current endpoints:
  - `GET /api/events` - Retrieve all events
- JSON response format with error handling middleware
- CORS and credential support configured

**Data Layer**
- **In-memory storage** (MemStorage class) for development/testing
- Interface-based storage abstraction (IStorage) for future database integration
- Mock event data generator for development

**Planned Database Integration**
- **Drizzle ORM** configured for PostgreSQL
- **Neon Database** serverless PostgreSQL (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` with Zod validation
- Migration support via drizzle-kit

### Data Storage Solutions

**Current State**
- Mock data stored in-memory via MemStorage class
- Event schema includes: id, title, type, date, location, distance, tags, source, url, image, logo

**Database Schema (Configured, Not Yet Connected)**
- **Users table**: id (UUID), username (unique), password (hashed)
- **Event schema**: Validated via Zod with support for multiple event types
- Connection string expected via `DATABASE_URL` environment variable
- Session storage planned with connect-pg-simple

**Schema Design Principles**
- Type-safe schemas using Drizzle ORM and Zod
- Shared schema definitions between client and server (`shared/schema.ts`)
- Insert schemas derived from table schemas for validation

### External Dependencies

**UI & Styling**
- Radix UI primitives (20+ component libraries for accessibility)
- Tailwind CSS with PostCSS and Autoprefixer
- Lucide React for iconography
- Google Fonts (Inter font family)
- Embla Carousel for featured events

**Data Management**
- TanStack Query for client-side caching and data synchronization
- React Hook Form for form state management
- Zod for runtime schema validation

**Database & ORM**
- Drizzle ORM with drizzle-zod for schema-to-validation integration
- Neon serverless PostgreSQL driver
- connect-pg-simple for session storage (future use)

**Development Tools**
- tsx for TypeScript execution in development
- esbuild for server-side bundling in production
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal)

**Utility Libraries**
- date-fns for date manipulation
- clsx and tailwind-merge for className utilities
- nanoid for unique ID generation

### Authentication and Authorization

**Planned Implementation**
- User schema prepared with username/password fields
- Password hashing required before storage
- Session-based authentication architecture (connect-pg-simple ready)
- Currently not implemented - app operates without authentication

### Event Data Sources

**Current Architecture**
- Multi-source event aggregation pattern (source field in Event schema)
- Support for different event providers: BAA, Ironman, NYRR, etc.
- URL field links to original event registration pages
- Extensible for future API integrations

**Future Integration Points**
- Event scraping/API integration for automated data collection
- Source-specific adapters to normalize event data
- Scheduled jobs for event data updates