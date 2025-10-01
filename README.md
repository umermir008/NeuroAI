# NeuroAI - Smart AI Automation Platform

A responsive single-page website with GSAP animations for an AI automation product.

## Features
- Dark theme with neon accents
- Scroll-triggered animations
- Parallax backgrounds
- Animated cards and buttons
- Mobile navigation
- Contact form with animated feedback
- Testimonials auto-rotation
- YouTube video embed

## Tech Stack
- HTML5
- Tailwind CSS (CDN)
- JavaScript (vanilla)
- GSAP + ScrollTrigger (CDN)
- Font Awesome (CDN)
- Google Fonts (Inter)

## Project Structure
```
index.html
neuroai.js
responsive.css
package.json
README.md
```
## Run Locally
- Prerequisite: Node.js 18+ recommended
- Start a local static server on port 3000:
```bash
npm run start
# or
npm run dev
```
- Open http://localhost:3000/

## Deploy to Vercel (via GitHub)
1. Push this folder to a new GitHub repository.
2. In Vercel, "Add New Project" → Import the repository.
3. Framework preset: "Other" (static site).
4. Build command: None
5. Output directory: `.` (root)
6. Deploy.

Notes:
- Dependencies are loaded via public CDNs; no build step is required.
- Ensure `index.html` is at the project root so Vercel serves it as the default.

## Sections
- Hero
- About
- Features
- How It Works
- Video
- Pricing
- Testimonials
- Contact
- Footer

## License
MIT
