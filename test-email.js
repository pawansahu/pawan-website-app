require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('🧪 Testing Email Configuration...\n');

// Check if credentials are set
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.log('❌ Email credentials not found in .env file');
  console.log('💡 Please update .env file with your email credentials');
  console.log('\nExample:');
  console.log('EMAIL_USER=your-email@gmail.com');
  console.log('EMAIL_PASS=your-app-password');
  console.log('EMAIL_TO=pawansahu341@gmail.com');
  process.exit(1);
}

if (process.env.EMAIL_PASS === 'your-app-password-here') {
  console.log('❌ Please replace "your-app-password-here" with your actual Gmail App Password');
  console.log('\n📝 How to get Gmail App Password:');
  console.log('1. Visit: https://myaccount.google.com/apppasswords');
  console.log('2. Generate password for "Mail"');
  console.log('3. Copy the 16-character password');
  console.log('4. Update .env file');
  process.exit(1);
}

console.log('📧 Email User:', process.env.EMAIL_USER);
console.log('📬 Email To:', process.env.EMAIL_TO || 'pawansahu341@gmail.com');
console.log('🔑 Password:', process.env.EMAIL_PASS ? '✅ Set (hidden)' : '❌ Not set');
console.log('');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify connection
console.log('🔍 Verifying SMTP connection...');
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Connection failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Make sure 2-Step Verification is enabled on Gmail');
    console.log('2. Use App Password, not your regular Gmail password');
    console.log('3. Remove spaces from the app password');
    console.log('4. Visit: https://myaccount.google.com/apppasswords');
  } else {
    console.log('✅ SMTP connection successful!');
    console.log('\n📤 Sending test email...');
    
    // Send test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'pawansahu341@gmail.com',
      subject: '✅ Portfolio Email Test - Success!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #1e3c72;">🎉 Email Configuration Successful!</h2>
          <p>Your portfolio email notifications are working perfectly!</p>
          
          <div style="background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>✅ Test Status:</strong> PASSED</p>
            <p style="margin: 10px 0 0 0;"><strong>📅 Test Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
          
          <p>When someone submits your contact form, you'll receive an email just like this one with their details.</p>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px;"><strong>Next Steps:</strong></p>
            <ol style="margin: 10px 0 0 0; padding-left: 20px;">
              <li>Start your server: <code>node server.js</code></li>
              <li>Visit: <code>http://localhost:3000</code></li>
              <li>Test the contact form</li>
            </ol>
          </div>
          
          <p style="color: #888; font-size: 12px; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px;">
            This is a test email from your portfolio website
          </p>
        </div>
      `,
      text: `
✅ Email Configuration Successful!

Your portfolio email notifications are working perfectly!

Test Status: PASSED
Test Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

When someone submits your contact form, you'll receive an email just like this one with their details.

Next Steps:
1. Start your server: node server.js
2. Visit: http://localhost:3000
3. Test the contact form

This is a test email from your portfolio website
      `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('❌ Email sending failed:', error.message);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('📬 Check your inbox:', process.env.EMAIL_TO || 'pawansahu341@gmail.com');
        console.log('💡 Don\'t forget to check spam folder if you don\'t see it');
        console.log('\n🎉 Email setup complete! Your portfolio is ready to receive messages.');
      }
    });
  }
});
