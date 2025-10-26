# Pawan Sahu - Portfolio Website

A professional portfolio website built with Node.js, Express, and EJS templating engine.

## Features

- Responsive design with modern UI
- Professional summary and experience showcase
- Skills categorization
- Education and key highlights sections
- Static file serving for images and assets

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
├── server.js           # Express server configuration
├── package.json        # Project dependencies
├── views/
│   └── index.ejs      # Main portfolio template
├── public/
│   └── pawan_sahu.jpeg # Profile image
└── README.md          # Project documentation
```

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
