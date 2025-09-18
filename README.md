# Venkateshaa T D - Professional AI & Data Science Portfolio

A sleek, modern portfolio website showcasing AI and Data Science expertise, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Professional Design**: Modern gradient-based design with smooth animations
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: 
  - Hero section with animated background
  - About me with professional highlights
  - Featured projects showcase
  - Skills and technologies display
  - Experience timeline
  - Working contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and efficient animations

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Email**: EmailJS for contact form functionality
- **Fonts**: Inter & Poppins from Google Fonts

## 📧 Email Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Update `src/lib/emailjs-config.ts` with your credentials:
   ```typescript
   export const emailjsConfig = {
     publicKey: 'your_actual_public_key',
     serviceId: 'your_actual_service_id', 
     templateId: 'your_actual_template_id',
   };
   ```

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up EmailJS credentials (see Email Setup section)
4. Start development server: `npm run dev`
5. Build for production: `npm run build`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills display
│   ├── Experience.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── assets/             # Images and static assets  
├── lib/                # Utility functions and config
├── pages/              # Page components
└── index.css          # Global styles and design system
```

## 🎨 Design System

The portfolio uses a professional design system with:
- **Colors**: Dark blue professional palette
- **Typography**: Inter for body, Poppins for headings
- **Animations**: Smooth transitions and hover effects
- **Components**: Consistent spacing and styling

## 🔧 Customization

1. **Personal Information**: Update content in each component file
2. **Projects**: Modify the projects array in `src/components/Projects.tsx`
3. **Skills**: Update skills categories in `src/components/Skills.tsx`
4. **Experience**: Edit experience data in `src/components/Experience.tsx`
5. **Contact Info**: Update contact details in `src/components/Contact.tsx`
6. **Social Links**: Modify social media links throughout components

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements

## ⚡ Performance

- Lazy loading for images
- Optimized bundle size with tree shaking
- Efficient CSS with Tailwind CSS purging
- Fast loading with Vite build system

## 🌐 Deployment

The project is ready for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
