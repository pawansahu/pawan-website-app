const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Portfolio Setup...\n');

// Check if image exists in public folder
const imagePath = path.join(__dirname, 'public', 'pawan_sahu.jpeg');
if (fs.existsSync(imagePath)) {
  const stats = fs.statSync(imagePath);
  console.log('✅ Image found: public/pawan_sahu.jpeg');
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`);
} else {
  console.log('❌ Image NOT found: public/pawan_sahu.jpeg');
}

// Check if CSS exists
const cssPath = path.join(__dirname, 'public', 'styles.css');
if (fs.existsSync(cssPath)) {
  console.log('✅ CSS found: public/styles.css');
} else {
  console.log('❌ CSS NOT found: public/styles.css');
}

// Check if JS exists
const jsPath = path.join(__dirname, 'public', 'script.js');
if (fs.existsSync(jsPath)) {
  console.log('✅ JavaScript found: public/script.js');
} else {
  console.log('❌ JavaScript NOT found: public/script.js');
}

// Check if template exists
const templatePath = path.join(__dirname, 'views', 'index.ejs');
if (fs.existsSync(templatePath)) {
  console.log('✅ Template found: views/index.ejs');
} else {
  console.log('❌ Template NOT found: views/index.ejs');
}

// Check server.js
const serverPath = path.join(__dirname, 'server.js');
if (fs.existsSync(serverPath)) {
  const serverContent = fs.readFileSync(serverPath, 'utf8');
  
  // Check static file serving
  if (serverContent.includes('express.static')) {
    console.log('✅ Static file serving configured');
  } else {
    console.log('❌ Static file serving NOT configured');
  }
  
  // Check image path
  if (serverContent.includes("image: '/pawan_sahu.jpeg'")) {
    console.log('✅ Image path configured correctly');
  } else {
    console.log('⚠️  Image path might need checking');
  }
}

console.log('\n✨ Setup verification complete!');
console.log('\n📝 To start the server, run: node server.js');
console.log('🌐 Then visit: http://localhost:3000\n');
