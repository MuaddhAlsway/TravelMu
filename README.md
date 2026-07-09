# 🌍 Travel-MU - Travel Booking & Destination Discovery Platform

A modern, interactive travel booking website built with **React** and **Vite**. Browse stunning destinations, discover curated travel packages, and book your next adventure.

**Live Demo:** [Deploy on Vercel](#deployment)

---

## ✨ Features

- 🎯 **Interactive Hero Section** - Engaging floating cards with fullscreen experiences
- 🏙️ **Featured Destinations** - Beautiful masonry gallery showcasing top travel destinations
- 🔍 **Trip Discovery** - Browse 8+ curated travel packages with pricing and filtering
- ⭐ **Customer Testimonials** - Auto-scrolling carousel of traveler reviews
- 📱 **Responsive Design** - Fully optimized for desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎨 **Modern UI/UX** - Smooth animations and interactive elements throughout
- 🔝 **Smart Scroll-to-Top** - Dynamic button appears after scrolling

---

## 🏗️ Project Structure

```
travel-mu/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing hero section with interactive cards
│   │   ├── Featurecity.jsx       # Featured destinations masonry gallery
│   │   ├── Find.jsx              # Trip search & discovery section
│   │   ├── Testimonial.jsx       # Customer reviews carousel
│   │   ├── Banner.jsx            # Promotional banner
│   │   ├── BannerImage.jsx       # Image banner sections
│   │   ├── Hows.jsx              # About/How-it-works section
│   │   ├── Footer.jsx            # Footer with links & social media
│   │   ├── Header.jsx            # Header component
│   │   └── [CSS files]           # Component-scoped styling
│   ├── assets/                   # Destination images (PNG/JPG/WebP)
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint rules
├── vercel.json                   # Vercel deployment config
└── README.md                     # This file
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19.2.7, React DOM 19.2.7
- **Build Tool:** Vite 8.1.1
- **Styling:** CSS3 (component-scoped)
- **Icons:** React Icons (Feather Icons) - 1000+ SVG icons available
- **Code Quality:** ESLint 10.6.0
- **Hosting:** Vercel (configured & ready)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travel-mu.git
   cd travel-mu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This installs:
   - React & React DOM
   - Vite & @vitejs/plugin-react
   - React Icons (1000+ SVG icons: FiArrowRight, FiMapPin, FiArrowUp, etc.)
   - ESLint & development tools

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 📸 Screenshots

> **Add screenshots here to showcase your website!**
> 
> To add images to GitHub README:
> 1. Create a `.github/screenshots/` folder in your repository
> 2. Upload your website screenshots there
> 3. Uncomment the sections below and update image paths

### Hero Section
<!-- ![Hero Section](/.github/screenshots/hero.png) -->
*Interactive landing page with floating cards and smooth animations*

### Featured Destinations
<!-- ![Featured Destinations](/.github/screenshots/destinations.png) -->
*Beautiful masonry gallery showcasing top travel destinations*

### Trip Discovery
<!-- ![Trip Discovery](/.github/screenshots/trips.png) -->
*Browse curated travel packages with pricing and filtering options*

### Testimonials Section
<!-- ![Testimonials](/.github/screenshots/testimonials.png) -->
*Customer reviews in an auto-scrolling carousel*

### Footer
<!-- ![Footer](/.github/screenshots/footer.png) -->
*Complete footer with social media links and site navigation*

---

## 🎯 Page Sections

### 1. Hero
- Branded navbar (MUTRAVEL)
- Interactive floating cards (Bridge, Mountain, Island)
- Fullscreen modal experiences for each card
- "Explore The World" call-to-action

### 2. Featured Destinations
- 1 large featured city showcase
- 4 additional destination cards in grid
- Interactive overlays with arrow buttons
- Destination list with map pins

### 3. Find Your Perfect Trip
- 8 curated travel packages worldwide
- Trip details: title, location, price
- Filter options: Destination, Activity, Trip
- Quick-view buttons

### 4. How It Works
- Platform value proposition
- Multiple destination images
- "Travel with ease" messaging

### 5. Testimonials
- Auto-scrolling carousel (infinite loop)
- 5+ customer reviews
- Traveler names and roles
- Smooth animations

### 6. Footer
- Brand information
- Navigation links
- Social media integration (Instagram, Facebook, Twitter, YouTube)
- Copyright notice

---

## 📦 Destinations Featured

- 🗾 Tokyo, Japan
- 🇧🇷 Rio de Janeiro & Manaus, Brazil
- 🏔️ Zurich, Switzerland
- 🕌 Istanbul, Turkey
- 🏛️ Rome, Italy
- 🏝️ Maldives
- 🌉 Golden Gate (California)
- And more...

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

This project is pre-configured for Vercel deployment.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Add Vercel setup"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration
   - Click "Deploy"

3. **Auto-deployment**
   - Future pushes to `main` branch will trigger automatic deployments
   - Preview deployments for pull requests

**Configuration files included:**
- `vercel.json` - Build and deploy settings
- `.vercelignore` - Files to exclude from deployment

---

## 🔧 Customization

### Change Brand Name
Edit the navbar title in `src/components/Hero.jsx`:
```jsx
<div className="title1">YOUR_BRAND_NAME</div>
```

### Add/Update Destinations
Edit `src/components/Find.jsx` and `src/components/Featurecity.jsx` to add new trips and destinations.

### Modify Colors & Styles
Update component CSS files in `src/components/*.css` or global styles in `src/index.css`.

### Add New Components
Create new `.jsx` and `.css` files in `src/components/` and import them in `src/App.jsx`.

---

## 📋 Best Practices

- ✅ Component-scoped CSS (no global conflicts)
- ✅ React hooks for state management (useState, useEffect)
- ✅ Smooth scroll behavior for navigation
- ✅ Responsive design considerations
- ✅ Optimized images (PNG/JPG/WebP formats)
- ✅ ESLint configured for code quality

---

## 🎨 Using React Icons

React Icons is already integrated into this project. Here's how to use it:

```jsx
// Import icons from different icon sets
import { FiArrowRight, FiMapPin, FiArrowUp } from "react-icons/fi"; // Feather Icons
import { AiOutlinePhone } from "react-icons/ai"; // Ant Design Icons
import { BsInstagram, BsFacebook } from "react-icons/bs"; // Bootstrap Icons

// Use them in your components
function MyComponent() {
  return (
    <div>
      <FiArrowRight /> {/* Arrow icon */}
      <FiMapPin /> {/* Map pin icon */}
      <BsInstagram /> {/* Instagram icon */}
    </div>
  );
}
```

**Available Icon Sets:**
- `fi` - Feather Icons (used in this project)
- `ai` - Ant Design Icons
- `bs` - Bootstrap Icons
- `fa` - Font Awesome
- `cg` - CSS.gg
- `bi` - BoxIcons
- And many more...

**Browse all icons:** [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Created with ❤️ for travel enthusiasts

---

## 📞 Support

- 📧 Email: support@travel-mu.com
- 🐦 Twitter: [@travel_mu](https://twitter.com/travel_mu)
- 📱 Instagram: [@travel_mu](https://instagram.com/travel_mu)

---

## 🎉 Acknowledgments

- React community for amazing tools
- Vite for lightning-fast builds
- Vercel for easy deployment
- All the beautiful travel photography

---

**Happy travels! 🌎✈️**
