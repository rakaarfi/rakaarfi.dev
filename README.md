# Raka Arfi - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, multilingual support, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations using GSAP
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Multilingual**: Support for English, Indonesian, and German
- **Blog Integration**: Dynamic blog posts fetched from Medium RSS feed
- **Interactive Elements**: Custom animated cursor and scroll progress indicator
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **Performance**: Optimized for speed with Next.js
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **GSAP** - Professional animation library
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakaarfi/rakaarfi.dev.git
   cd rakaarfi.dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for optional configurations:

```env
# Tawk.to Live Chat (Optional)
NEXT_PUBLIC_TAWK_TO_ID=your_tawk_to_id_here
```

### Customization

#### Personal Information
Update the following files with your information:
- `components/hero.tsx` - Name and titles
- `components/about-hero.tsx` - About section content
- `components/footer.tsx` - Social links and contact info
- `app/layout.tsx` - Meta tags and SEO information

#### Blog Integration
The blog section fetches posts from Medium RSS feed. Update the RSS URL in:
- `components/blog-preview.tsx`
- `components/blog-grid.tsx`

Replace `https://medium.com/feed/@rakaarfi` with your Medium profile RSS URL.

#### Projects
Update your projects in:
- `components/featured-projects.tsx`
- `components/projects-grid.tsx`

#### Technologies
Update your tech stack in:
- `components/tech-stack.tsx`
- `components/tech-carousel.tsx`

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment

This project is configured for deployment on various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic deployment

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── navigation.tsx    # Navigation bar
│   └── ...               # Other components
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── scramble-text.ts  # Custom text animation
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
└── ...                   # Config files
```

## 🎨 Customization Guide

### Colors
The project uses CSS custom properties for theming. Update colors in `app/globals.css`:

```css
:root {
  --primary: 210 25% 58%;        # Primary brand color
  --secondary: 0 0% 96.1%;       # Secondary color
  --background: 0 0% 100%;       # Background color
  /* ... other colors */
}
```

### Fonts
The project uses Inter font by default. Change it in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### Animations
GSAP animations are configured in individual components. Modify timing and effects in:
- `components/hero.tsx` - Hero animations
- `components/about-hero.tsx` - About section animations
- Other component files as needed

## 🌐 Multilingual Support

The project supports multiple languages through a custom context provider:

1. **Add new language**: Update `components/language-provider.tsx`
2. **Add translations**: Add new language object in the translations constant
3. **Update language selector**: Add new language option in `components/navigation.tsx`

## 📱 Live Chat Integration

The project includes Tawk.to integration for live chat:

1. Sign up at [Tawk.to](https://tawk.to)
2. Get your property ID
3. Add it to your environment variables
4. The chat widget will appear automatically

## 🔍 SEO Features

- **Meta tags**: Comprehensive meta tags for social sharing
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Structured data**: JSON-LD structured data (can be added)
- **Performance**: Optimized images and lazy loading

## 🐛 Troubleshooting

### Common Issues

1. **GSAP Animation Errors**
   - Ensure components have `"use client"` directive
   - Check that elements exist before animating

2. **Blog Posts Not Loading**
   - Verify Medium RSS URL is correct
   - Check CORS policy for RSS feed

3. **Dark Mode Issues**
   - Clear browser cache
   - Check theme provider configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Raka Arfi**
- Website: [rakaarfi.dev](https://rakaarfi.dev)
- GitHub: [@rakaarfi](https://github.com/rakaarfi)
- LinkedIn: [rakaarfi](https://linkedin.com/in/rakaarfi)
- Email: hello@rakaarfi.dev

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [Pexels](https://pexels.com/) - Stock photos

---

⭐ If you found this project helpful, please give it a star on GitHub!
