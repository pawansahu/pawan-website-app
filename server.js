const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Email Configuration
let transporter;

// Try to create transporter with provided credentials
if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your-app-password-here') {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Verify email configuration on startup
  transporter.verify(function(error, success) {
    if (error) {
      console.log('⚠️  Email configuration error:', error.message);
      console.log('');
      console.log('📧 Email notifications are DISABLED');
      console.log('💡 To enable email notifications:');
      console.log('   1. Visit: https://myaccount.google.com/apppasswords');
      console.log('   2. Generate an App Password (NOT your regular password)');
      console.log('   3. Update EMAIL_PASS in .env file');
      console.log('   4. Restart server');
      console.log('');
      console.log('📝 See VISUAL_EMAIL_SETUP.md for step-by-step guide');
      console.log('');
      transporter = null; // Disable email
    } else {
      console.log('✅ Email server is ready to send messages');
    }
  });
} else {
  console.log('⚠️  Email credentials not configured');
  console.log('📧 Email notifications are DISABLED');
  console.log('💡 Contact form will still work, but you won\'t receive emails');
  console.log('📝 See VISUAL_EMAIL_SETUP.md to enable email notifications');
  console.log('');
}

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
  
  projects: [
    {
      name: 'Experiences Aggregation Platform',
      description: 'Unified booking API consolidating multiple travel suppliers into a single standardized interface',
      technologies: ['Node.js', 'MongoDB', 'AWS', 'RabbitMQ'],
      highlights: ['Integrated 10+ suppliers', 'Reduced booking time by 60%', 'Handles 10K+ daily transactions'],
      icon: '🌍'
    },
    {
      name: 'GST Automation System',
      description: 'Direct corporate GST filing system with automated validation and submission',
      technologies: ['Node.js', 'Express', 'MySQL', 'Angular'],
      highlights: ['90% reduction in filing errors', 'Automated data validation', 'Real-time status tracking'],
      icon: '📊'
    },
    {
      name: 'Payment Switch Platform (Vepay)',
      description: 'Middleware platform enabling multi-supplier routing for all payment methods',
      technologies: ['Node.js', 'MongoDB', 'AWS Lambda', 'Docker'],
      highlights: ['Multi-bank integration', 'Real-time transaction processing', '99.9% uptime'],
      icon: '💳'
    },
    {
      name: 'Hotel Booking Affiliate Platform',
      description: 'Multi-supplier hotel booking system for InterMiles loyalty program',
      technologies: ['Node.js', 'MongoDB', 'Solr', 'Angular'],
      highlights: ['Integrated 5+ hotel suppliers', 'Increased conversions by 40%', 'Real-time inventory sync'],
      icon: '🏨'
    },
    {
      name: 'Loyalty Rewards Platform',
      description: 'Automated rewards system based on customer transaction history for Noor Bank',
      technologies: ['Node.js', 'MySQL', 'AWS', 'Angular'],
      highlights: ['Automated reward calculation', 'Improved customer retention', 'Real-time point tracking'],
      icon: '🎁'
    },
    {
      name: 'Customer Enrollment Platform',
      description: 'Pre/post-flight traveler registration with personalized offers',
      technologies: ['Node.js', 'MongoDB', 'Express', 'Angular'],
      highlights: ['Airline system integration', 'Automated data flow', 'Personalized offer engine'],
      icon: '✈️'
    }
  ],
  
  testimonials: [
    {
      name: 'Client - Vernost Marketing',
      role: 'Project Manager',
      text: 'Pawan\'s technical leadership and problem-solving skills were instrumental in delivering our complex API integration projects on time.',
      rating: 5
    },
    {
      name: 'Team Member',
      role: 'Senior Developer',
      text: 'Working with Pawan has been a great learning experience. His expertise in Node.js and system architecture is exceptional.',
      rating: 5
    },
    {
      name: 'Noor Bank Stakeholder',
      role: 'Technical Director',
      text: 'The loyalty platform Pawan developed exceeded our expectations. His attention to detail and commitment to quality is outstanding.',
      rating: 5
    }
  ],
  
  year: new Date().getFullYear()
};

// Routes
app.get('/', (req, res) => {
  res.render('index', portfolioData);
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.json({ 
      success: false, 
      message: 'Please fill in all fields.' 
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.json({ 
      success: false, 
      message: 'Please enter a valid email address.' 
    });
  }
  
  console.log('📧 Contact form submission:', { name, email, message });
  
  // Prepare email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || 'pawansahu341@gmail.com',
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #1e3c72; border-bottom: 3px solid #2a5298; padding-bottom: 10px;">
          📬 New Contact Form Message
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong style="color: #1e3c72;">Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #1e3c72;">Email:</strong> 
            <a href="mailto:${email}" style="color: #2a5298;">${email}</a>
          </p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-left: 4px solid #2a5298; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong style="color: #1e3c72;">Message:</strong></p>
          <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #555;">
            <strong>📅 Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
          <p style="margin: 0; color: #888; font-size: 12px;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Message

Name: ${name}
Email: ${email}

Message:
${message}

Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
    `
  };
  
  // Try to send email if transporter is configured
  if (transporter) {
    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully to:', process.env.EMAIL_TO);
      res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
    } catch (error) {
      console.error('❌ Email sending failed:', error.message);
      console.log('💡 Check VISUAL_EMAIL_SETUP.md for setup instructions');
      // Still return success to user, but log the error
      res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
    }
  } else {
    // Email not configured, just log to console
    console.log('📧 Contact form submission (email disabled):');
    console.log('   Name:', name);
    console.log('   Email:', email);
    console.log('   Message:', message);
    console.log('💡 Configure email in .env to receive notifications');
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  }
});

// Download resume endpoint
app.get('/download-resume', (req, res) => {
  const file = path.join(__dirname, 'Pawan_Sahu_Resume.pdf');
  res.download(file, 'Pawan_Sahu_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(404).send('Resume not found');
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
