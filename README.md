# Pawan Sahu - Portfolio Website

A stunning, interactive professional portfolio website built with Node.js, Express, and EJS templating engine.

## ✨ Features

### Design & UI
- 🎨 Modern, responsive design with smooth animations
- 🌓 Dark mode toggle with persistent theme preference
- 📱 Fully mobile-responsive layout
- 🎭 Smooth scroll animations and transitions
- 📊 Interactive progress bars for skills
- ⚡ Scroll progress indicator
- 🔝 Back-to-top button

### Sections
- 👤 Hero section with animated profile and typing effect
- 📈 Statistics cards showing experience metrics
- 💻 Skills showcase with animated progress bars
- 🚀 Featured projects with technology tags and highlights
- 📅 Timeline view for professional experience
- 🎓 Education section with elegant cards
- 💬 Testimonials slider with auto-rotation
- 📧 Working contact form
- ⭐ Key highlights grid

### Functionality
- 📥 Downloadable resume button
- 📮 Contact form with validation
- 🧭 Sticky navigation with smooth scrolling
- 📱 Mobile-friendly hamburger menu
- 🎯 Intersection Observer for scroll animations

## Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: Custom CSS with gradient designs

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pawan-website-app
```

2. Install dependencies:
```bash
npm install
```

3. Ensure the image file exists:
```bash
# Place pawan_sahu.jpeg in the public folder
ls public/pawan_sahu.jpeg
```

## Running the Application

Start the server:
```bash
node server.js
```

The application will be available at:
- Local: `http://localhost:3000`
- Network: `http://<your-ip>:3000`

## Project Structure

```
pawan-website-app/
├── server.js              # Express server with API endpoints
├── package.json           # Project dependencies
├── views/
│   └── index.ejs         # Enhanced portfolio template
├── public/
│   ├── pawan_sahu.jpeg   # Profile image
│   ├── styles.css        # Complete styling with animations
│   └── script.js         # Interactive features & animations
└── README.md             # Project documentation
```

## 🎯 New Interactive Features

1. **Dark Mode**: Toggle between light and dark themes with persistent storage
2. **Skill Animations**: Progress bars animate when scrolled into view
3. **Project Showcase**: Interactive cards with hover effects
4. **Timeline Experience**: Visual timeline for career journey
5. **Testimonials Slider**: Auto-rotating testimonials with manual controls
6. **Contact Form**: Functional form with success/error messages
7. **Smooth Animations**: Fade-in effects on scroll for all sections
8. **Mobile Menu**: Responsive hamburger menu for mobile devices

## Configuration

The portfolio data is configured in `server.js` in the `portfolioData` object. Update this object to modify:
- Personal information
- Skills
- Experience
- Education
- Highlights

## Deployment

The server is configured to listen on `0.0.0.0:3000`, making it accessible from external networks. Ensure your firewall allows traffic on port 3000.

For production deployment:
1. Use a process manager like PM2
2. Set up a reverse proxy with Nginx
3. Configure SSL certificates for HTTPS

## License

All rights reserved © 2025 Pawan Sahu

## Contact

- **Email**: pawansahu341@gmail.com
- **Phone**: +91-8109797011
- **LinkedIn**: [linkedin.com/in/pawan-sahu-99a73093](https://linkedin.com/in/pawan-sahu-99a73093)
