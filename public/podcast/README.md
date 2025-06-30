# AI-Powered Podcast PR Services Subsite

This is a single-page subsite for FreeOpsDAO's AI-powered podcast PR services, located at `/podcast/`.

## Service Overview

We provide traditional PR services for podcast booking, enhanced by AI to scale human PR professionals. Our core services include:

- **Podcast Booking** - Human PR professionals build relationships with podcast hosts and producers
- **Guest Preparation** - AI-powered research and prep materials for compelling appearances
- **Press Kit Creation** - Professional media materials showcasing customer expertise
- **Social Asset Generation** - AI-created clips and content from podcast appearances

## Key Messaging

**"PR is Relationship-Based. AI Scales the Humans."**

We emphasize that podcast PR is built on human relationships that AI cannot replicate, but AI absolutely enables our human PR professionals to work more efficiently and secure more placements at scale.

## Features

- **Single-page design** with smooth scrolling navigation
- **Unique navigation** specific to the podcast PR services (doesn't link back to main site)
- **Footer navigation** with links back to the parent site
- **Responsive design** that works on all devices
- **Contact form integration** using the existing contact submission system

## Sections

1. **Hero Section** - "Human PR Powered by AI" with animated podcast wave visualization
2. **Concept Section** - Explains the relationship between human PR and AI scaling
3. **Benefits Section** - Highlights why human PR + AI is unstoppable
4. **Pricing Section** - Three-tier pricing structure (Starter $2,500, Professional $5,000, Enterprise $12,000)
5. **Contact Section** - Integrated contact form for PR inquiries

## Technical Details

- **HTML**: `index.html` - Main page structure
- **CSS**: `podcast.css` - Custom styling for the subsite
- **Dependencies**: 
  - `../css/main.css` - Base styles and variables
  - `../css/components.css` - Component styles
  - `../js/main.js` - Main JavaScript functionality
  - `../js/components/forms.js` - Form handling

## Contact Form Integration

The contact form submits to `../contact_submit.php` with a predefined subject line "Podcast PR Services Inquiry" to help identify leads from this subsite.

## Styling

The subsite uses the same Portland color palette and design system as the main site, but with custom styling specific to the podcast PR services. The design includes:

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