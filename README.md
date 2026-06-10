# Teen Equality Foundation Website

A comprehensive nonprofit website for the Teen Equality Foundation featuring 10 major sections designed to empower youth through education, support, and community action.

## ✨ Features

### 1. **Weekly Action Dashboard**
- Track community impact and weekly goals
- Categories: Shelter visits, food drives, school outreach, mental health campaigns, community events, volunteer projects, and fundraisers
- Interactive goal tracking system

### 2. **Find Help Near You**
- Location-based resource directory
- 8 categories of services:
  - Homeless Shelters
  - Youth Shelters
  - Food Pantries
  - Domestic Violence Services
  - Mental Health Clinics
  - LGBTQ+ Resources
  - Crisis Centers
  - Community Programs

### 3. **Professional Application Center**
- 7 types of applications:
  - Volunteer Application
  - Youth Ambassador Application
  - Board Member Application
  - Partnership Application
  - Community Organization Application
  - Guest Speaker Application
  - Media Request Application
- Comprehensive form fields with resume upload

### 4. **Professional Contact Page**
- Contact form with email and phone
- Office hours and response time information
- FAQ section with expandable answers
- Social media links
- Newsletter signup

### 5. **Donation System**
- Multiple donation amounts: $5, $10, $25, $50, $100
- Custom amount support
- Integration ready for:
  - Stripe
  - PayPal
  - Square
  - Donorbox
  - Givebutter
- Impact statement showing donation value

### 6. **News & Resources Center**
- 6 topics:
  - Mental Health
  - Bullying
  - LGBTQ+ Youth
  - Education
  - Teen Advocacy
  - Community Impact
- News from multiple sources
- API integration ready for real news feeds

### 7. **Resource Library**
- 10 comprehensive categories:
  - Mental Health
  - Bullying
  - Self-Esteem
  - Anxiety
  - Depression
  - School Stress
  - Career Planning
  - College Planning
  - LGBTQ+ Support
  - Crisis Help

### 8. **Community Stories**
- Anonymous story submissions
- Editorial review system
- Published stories gallery
- User-friendly submission form

### 9. **Events Page**
- Upcoming events listing
- Event types:
  - Volunteer Events
  - Fundraisers
  - Community Meetings
  - School Programs
  - Awareness Campaigns
- Calendar view and filtering

### 10. **Professional Footer**
- Quick links to main sections
- Emergency help access
- Social media integration
- Newsletter signup
- Legal policies (Privacy, Terms, Accessibility)

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Payment Processing**: Stripe-ready (with alternatives)
- **API Integration Ready**: News APIs, Geolocation Services

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Update with your API keys and configuration

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## 🔐 Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
NEXT_PUBLIC_GEOLOCATION_API_KEY=your_geolocation_key
NEXT_PUBLIC_CONTACT_EMAIL=nonprofit625@gmail.com
```

## 📁 Project Structure

```
├── pages/
│   ├── index.js              # Homepage
│   ├── dashboard.js          # Weekly action dashboard
│   ├── help-directory.js     # Local help resources
│   ├── applications.js       # Application center
│   ├── contact.js            # Contact page
│   ├── donate.js             # Donation system
│   ├── news.js               # News center
│   ├── resources.js          # Resource library
│   ├── stories.js            # Community stories
│   ├── events.js             # Events page
│   ├── _app.js               # App wrapper
│   └── _document.js          # Document structure
├── components/
│   ├── Layout.js             # Main layout wrapper
│   ├── Navigation.js         # Navigation bar
│   ├── Footer.js             # Footer component
│   └── ApplicationForm.js    # Reusable application form
├── styles/
│   └── globals.css           # Global styles
├── public/                   # Static assets
└── next.config.js            # Next.js configuration
```

## 🎨 Key Features

✨ **Responsive Design** - Mobile-first, works on all devices
✨ **Smooth Animations** - Framer Motion for polished UX
✨ **Professional UI** - Modern gradient design with accessibility
✨ **SEO Optimized** - Next.js built-in SEO support
✨ **Payment Ready** - Multiple payment processor integration support
✨ **Location-Based** - Geolocation features for resource discovery
✨ **News Integration** - Ready for real-time news feed integration
✨ **Form Handling** - Full-featured forms with validation

## 🎯 Customization

To customize the website:

1. **Colors**: Update `tailwind.config.js` color theme
2. **Content**: Edit page files in `pages/` directory
3. **Branding**: Update navigation logo and footer
4. **APIs**: Integrate real news feeds and location services
5. **Payments**: Connect to your preferred payment processor

## 🚀 Deployment

```bash
# Deploy to Vercel (recommended for Next.js)
vercel

# Or build and deploy to any Node.js hosting
npm run build
```

## 📞 Support

For questions or issues:
- Email: nonprofit625@gmail.com
- Phone: 606-373-1467

## 📄 License

MIT License - Feel free to use this project for your nonprofit organization.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

---

**Teen Equality Foundation** - Empowering youth through education, support, and community action.