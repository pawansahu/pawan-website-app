const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Portfolio data
const portfolioData = {
  name: 'Pawan Sahu',
  title: 'Tech Lead - Full Stack / API Integration Specialist',
  location: 'Mumbai, Maharashtra',
  phone: '+91-8109797011',
  email: 'pawansahu341@gmail.com',
  linkedin: 'linkedin.com/in/pawan-sahu-99a73093',
  image: '/pawan_sahu.jpeg',
  
  summary: 'Results-oriented Technical Lead with 9+ years of experience in backend development, API integration, and scalable system design across travel, finance, and loyalty domains. Proven expertise in Node.js, MongoDB, AWS, CI/CD, and distributed systems. Adept at leading cross-functional teams, automating complex processes, and delivering secure, high-availability platforms that drive business efficiency and client satisfaction.',
  
  skills: {
    'Languages & Frameworks': ['Node.js', 'Angular', 'JavaScript', 'Express.js'],
    'Databases': ['MongoDB', 'MySQL'],
    'Cloud & DevOps': ['AWS (EC2, S3, Lambda)', 'CI/CD', 'Git', 'Docker'],
    'Messaging & Search': ['RabbitMQ', 'Solr'],
    'Methodologies': ['Agile', 'API-first design', 'Microservices Architecture']
  },
  
  experience: [
    {
      company: 'Vernost Marketing Technology Solutions Pvt. Ltd.',
      role: 'Technical Lead - Experiences (Activities)',
      responsibilities: [
        'Leading the Experiences (Activities) Aggregation Platform integrating multiple travel suppliers into a unified booking API',
        'Designed scalable APIs consolidating supplier inventory, pricing, and booking flows into a single standardized interface',
        'Improved data consistency and synchronization across distributed systems'
      ]
    },
    {
      company: 'Vernost Marketing Technology Solutions Pvt. Ltd.',
      role: 'Tech Lead - Kevin Shah Associates (KAT)',
      responsibilities: [
        'Built a GST Automation System enabling direct corporate GST filing to the government portal',
        'Automated data validation and submission, reducing manual effort and filing errors by 90%'
      ]
    },
    {
      company: 'Vernost Marketing Technology Solutions Pvt. Ltd.',
      role: 'Tech Lead - VernostPay (Vepay)',
      responsibilities: [
        'Developed a Payment Switch Platform acting as middleware between clients, aggregators, and banks',
        'Enabled support for multi-supplier routing and all payment methods'
      ]
    },
    {
      company: 'Interbook',
      role: 'Senior Software Engineer',
      responsibilities: [
        'Created a Hotel Booking Affiliate Platform for InterMiles, integrating multiple hotel suppliers',
        'Enhanced user experience and supplier management, increasing booking conversions'
      ]
    },
    {
      company: 'Noor Bank (On-Site, Dubai)',
      role: 'Software Developer',
      responsibilities: [
        'Implemented a Loyalty Rewards Platform awarding points based on customer transaction history',
        'Automated reward calculation and redemption, improving retention and engagement'
      ]
    },
    {
      company: 'Quick Enrolment',
      role: 'Software Developer',
      responsibilities: [
        'Built a Customer Enrollment Platform for pre/post-flight traveler registration and personalized offers',
        'Integrated with airline and partner systems for automated customer data flow and reward assignment'
      ]
    }
  ],
  
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Medicaps Institute of Technology & Management',
      year: '2012 - 2015'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      year: ''
    }
  ],
  
  highlights: [
    '9+ years of experience in enterprise-grade API and microservice development',
    'Proven record of automating business processes and optimizing integrations',
    'Strong leadership and client-facing experience, including on-site delivery in Dubai',
    'Hands-on expertise in cloud deployment, API security, and scalable architecture'
  ],
  
  year: new Date().getFullYear()
};

// Routes
app.get('/', (req, res) => {
  res.render('index', portfolioData);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
