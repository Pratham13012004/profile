# Pratham Kumar - Portfolio Website

A modern, premium portfolio website featuring smooth page-turn animations inspired by book/magazine flips. Built with React, Vite, and Framer Motion.

![Portfolio](https://img.shields.io/badge/React-19.2.4-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.30.1-purple)

## ✨ Features

- 🔄 **Smooth Page-Turn Animations** - 3D flip transitions between sections
- 🎨 **Modern Design** - Purple/pink gradients with glassmorphism effects
- 📱 **Fully Responsive** - Mobile-first design with adaptive layouts
- 🧭 **Intuitive Navigation** - Dots sidebar + arrow controls
- 📧 **Contact Form** - EmailJS integration for direct messaging
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **6 Portfolio Sections** - Home, About, Skills, Experience, Projects, Contact

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# The dependencies are already installed
# If you need to reinstall:
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit **http://localhost:5173** to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📧 Email Configuration

The contact form uses EmailJS. To enable email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Update `src/pages/Contact.jsx` with your credentials:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',   // Replace
  'YOUR_TEMPLATE_ID',  // Replace
  { /* template data */ },
  'YOUR_PUBLIC_KEY'    // Replace
);
```

See the [walkthrough document](file:///C:/Users/KIIT/.gemini/antigravity/brain/8e83eaf5-22b7-4bc3-9c68-7e2e2e617bdc/walkthrough.md) for detailed setup instructions.

## 📁 Project Structure

```
profile/
├── src/
│   ├── components/         # Reusable components
│   │   ├── PageContainer.jsx   # Page-turn animation wrapper
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/              # Portfolio sections
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── assets/             # Images and media
│   ├── App.jsx             # Main app component
│   ├── App.css             # App-level styles
│   └── index.css           # Global design system
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

- **Colors**: Purple/Pink gradient theme with dark backgrounds
- **Typography**: Outfit font family from Google Fonts
- **Effects**: Glassmorphism, gradient text, glow animations
- **Responsive**: 4 breakpoints (480px, 768px, 1024px, 1400px)

## 🛠️ Tech Stack

- **React** 19.2.4 - UI framework
- **Vite** 7.3.1 - Build tool
- **Framer Motion** 12.30.1 - Animation library
- **EmailJS** 4.4.1 - Email service
- **React Icons** 5.5.0 - Icon library
- **Modern CSS** - Variables, Grid, Flexbox, Glassmorphism

## 📱 Portfolio Sections

1. **Home** - Profile photo, title, contact info, social links
2. **About** - Objective, education, languages, achievements
3. **Skills** - Technical skills categorized by type
4. **Experience** - Professional work history and certifications
5. **Projects** - Featured projects with tech stack
6. **Contact** - Contact form and direct communication links

## 🌐 Deployment

Deploy to any static hosting service:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📞 Contact

- **Email**: pratham13012004@gmail.com
- **LinkedIn**: [linkedin.com/in/pratham-kumar](https://linkedin.com/in/pratham-kumar)
- **GitHub**: [github.com/Pratham13012004](https://github.com/Pratham13012004)
- **Phone**: +91-7258953359
- **Location**: Bhubaneswar, Odisha

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using React + Vite + Framer Motion**
