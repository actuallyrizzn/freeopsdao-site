# AI-Driven Podcasting Services Subsite

This is a single-page subsite for FreeOpsDAO's AI-driven podcasting services, located at `/podcast/`.

## Features

- **Single-page design** with smooth scrolling navigation
- **Unique navigation** specific to the podcast services (doesn't link back to main site)
- **Footer navigation** with links back to the parent site
- **Responsive design** that works on all devices
- **Contact form integration** using the existing contact submission system

## Sections

1. **Hero Section** - Eye-catching introduction with animated podcast wave visualization
2. **Concept Section** - Explains the AI-powered podcasting concept with feature cards
3. **Benefits Section** - Highlights why AI-driven podcasting is revolutionary
4. **Pricing Section** - Three-tier pricing structure (Starter, Professional, Enterprise)
5. **Contact Section** - Integrated contact form for inquiries

## Technical Details

- **HTML**: `index.html` - Main page structure
- **CSS**: `podcast.css` - Custom styling for the subsite
- **Dependencies**: 
  - `../css/main.css` - Base styles and variables
  - `../css/components.css` - Component styles
  - `../js/main.js` - Main JavaScript functionality
  - `../js/components/forms.js` - Form handling

## Contact Form Integration

The contact form submits to `../contact_submit.php` with a predefined subject line "AI Podcast Services Inquiry" to help identify leads from this subsite.

## Styling

The subsite uses the same Portland color palette and design system as the main site, but with custom styling specific to the podcasting services. The design includes:

- Animated podcast wave visualization in the hero section
- Glassmorphism effects on cards and forms
- Hover animations and transitions
- Responsive grid layouts
- Custom typography using Bebas Neue and Work Sans fonts

## Navigation

- **Top Navigation**: Links to sections within the page (concept, benefits, pricing, contact)
- **Footer Navigation**: Links back to main site pages (Home, About, Services, Projects, Clients, Contact)

## File Structure

```
public/podcast/
├── index.html          # Main page
├── podcast.css         # Custom styles
└── README.md          # This file
``` 