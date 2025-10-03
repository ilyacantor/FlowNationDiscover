# FlowNation Design Guidelines

## Design Philosophy
Clean, professional endurance sports event discovery platform inspired by BikeReg.com aesthetics. Focus on clarity, ease of navigation, and efficient event browsing.

## Color Palette

### Primary Colors
- Navy Blue: #003366 (primary brand color, headers, CTAs)
- White: #ffffff (backgrounds, text on dark)
- Light Gray: #f9fafb (subtle backgrounds, hover states)
- Accent Blue: #2563eb (links, interactive elements)

### Application
- Use navy for primary actions and branding elements
- White for main backgrounds and clean spaces
- Light gray for subtle differentiation and hover states
- Accent blue for clickable links and active states

## Typography
- Font Family: Sans-serif system stack
- Headers: Semi-bold weight
- Body Text: Medium weight
- Hierarchy: Clear size differentiation between titles, subtitles, and body copy

## Layout System

### Responsive Breakpoints
- **Desktop**: 4-column grid layout (events area + optional sidebar)
- **Mobile**: 1-column stacked layout
- Maintain consistent spacing and padding across breakpoints

### Spacing
- Component padding: Generous internal spacing
- Section gaps: Clear visual separation between major sections
- Card spacing: Consistent gaps in grids and lists

## Component Design System

### Navigation Bar
- White background with subtle shadow
- Horizontal layout with links: Home, Events, Match, Calendar, Other
- Hover State: Text color changes to navy blue
- Active Link: Bold weight + underline decoration
- Clean, minimal design for easy navigation

### Filter Bar (Events Page)
- White rounded container (rounded-lg) with shadow-md
- Pill-style input boxes for filters:
  - Event Date
  - Event Location
  - Event Type
  - Distance
  - Event Name
- Right-aligned actions: Reset (gray text) + Apply (navy button with white text)
- **Desktop**: Horizontal row layout
- **Mobile**: Stacked vertical layout

### Event Results Display
- Header row with count ("XXX results") and location indicator ("My location: ZIP")
- Events grouped by month with navy header bars
- Event Card Structure:
  - **Left Side**: Title (blue link, bold), location (gray text), tags (pill badges)
  - **Right Side**: Sponsor/team logo
- Hover Effect: Light gray background fill
- Rounded corners and subtle elevation

### Featured Events Carousel
- Section header: "Featured Events"
- Horizontal scrollable layout (hidden scrollbar)
- Card width: ~280px
- Card Structure:
  - Event image (top)
  - Event type badge (top-left overlay on image)
  - Title, date, location (below image)
- Swipeable on mobile devices
- Smooth horizontal scroll interaction

### Visual Design Patterns
- Rounded Corners: Use rounded-lg consistently
- Shadows: shadow-md for elevation
- Hover States: Subtle elevation increase or light gray background
- Pills/Badges: Rounded, subtle background for tags and categories

## Interactive Elements
- Links: Accent blue with hover underline
- Buttons: Navy background with white text, hover elevation
- Cards: Hover transforms with light gray background
- All interactions should feel smooth and professional

## Images
- Featured event cards require event images (top position)
- Sponsor/team logos displayed on event result rows (right side)
- Event type badges overlay on carousel card images
- Images should be optimized and responsive

## Data-Driven UI
Display dynamic content from event schema:
- Event ID, title, type, date, location, distance
- Tags array for filtering and display
- Source, URL for external links
- Event images and sponsor logos

## Mobile Experience
- Touch-friendly targets (minimum 44px)
- Swipeable carousel interactions
- Stacked filter layout for easy access
- Single column event listings for clarity
- Responsive images and logos