# migrate to flat html structure

**Proposed Flat HTML Structure:**
```
/new
├── index.html              # Home page
├── about.html             # About page
├── contact.html           # Contact page
├── css/
│   ├── main.css          # Global styles
│   ├── components.css    # Reusable component styles
│   └── pages/           # Page-specific styles
│       ├── home.css
│       ├── about.css
│       └── contact.css
├── js/
│   ├── main.js          # Global functionality
│   └── components/      # Reusable JS components
│       ├── navigation.js
│       ├── forms.js
│       └── modals.js
└── assets/
    ├── images/
    └── fonts/
```
Here's the migration plan:

1. **Page Structure**
   - Convert each React page to its own HTML file:
     - `index.html` (from Index.tsx)
     - `about.html` (from About.tsx)
     - `services.html` (from Services.tsx)
     - `projects.html` (from Projects.tsx)
     - `clients.html` (from Clients.tsx)
     - `governance.html` (from Governance.tsx)
     - `contact.html` (from Contact.tsx)
     - `404.html` (from NotFound.tsx)

2. **Navigation**
   - Create a consistent navigation header and footer
   - Use standard HTML links between pages
   - No client-side routing needed

3. **Styling Approach**
   - Extract all Tailwind styles into regular CSS
   - Create page-specific CSS files
   - Use CSS custom properties (variables) for theming
   - Keep styles modular and maintainable

4. **JavaScript Usage**
   - Minimal JavaScript, only where necessary
   - No framework dependencies
   - Use vanilla JS for:
     - Form validation
     - Interactive elements
     - Animations
     - Modal dialogs

5. **Migration Process**
   1. Start with the main layout and navigation
   2. Migrate each page one at a time
   3. Extract and convert styles
   4. Add minimal JS functionality
   5. Test each page independently

Would you like me to:
1. Start with creating the base HTML structure and navigation?
2. Begin with a specific page migration?
3. Show you a sample of how one of the current pages would look in pure HTML?

Let me know which approach you prefer, and I'll help you proceed with the migration.
