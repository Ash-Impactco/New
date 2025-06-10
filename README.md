# Aswin Raj - Portfolio

A modern, responsive portfolio website showcasing professional experience, skills, and projects in the sustainability and clean tech space.

## Features

- Responsive design that works on all devices
- Collapsible sections for better content organization
- Smooth scrolling navigation
- Mobile-friendly navigation menu
- Interactive sections for:
  - About
  - Education
  - Experience
  - Projects
  - Ventures
  - Skills
  - Contact
- Image optimization and lazy loading
- Smooth animations and transitions
- Download CV functionality
- Mobile-first approach

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts
- Vercel for deployment

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/               # CSS files
│   ├── styles.css     # Main styles and layout
│   └── animations.css # Animation and transition styles
├── js/                # JavaScript files
│   ├── main.js        # Core functionality and event handlers
│   ├── animations.js  # Animation and scroll effects
│   └── utils.js       # Utility functions and helpers
├── Assets/            # Images and other assets
│   ├── Companies/     # Company logos and brand assets
│   ├── Clean tech/    # Project and technology images
│   └── Education/     # University and education images
├── README.md          # Project documentation
├── vercel.json        # Vercel deployment configuration
└── .gitignore         # Git ignore file
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Ash-Impactco/New.git
```

2. Navigate to the project directory:
```bash
cd New
```

3. Open `index.html` in your browser to view the portfolio.

## Deployment on Vercel

This portfolio is configured for deployment on Vercel. Follow these steps to deploy:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Go to [Vercel](https://vercel.com) and:
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Select your repository "New"
   - Configure the project:
     - Framework Preset: Other
     - Build Command: (leave empty)
     - Output Directory: (leave as default)
     - Install Command: (leave empty)
   - Click "Deploy"

3. Your site will be deployed to a URL like: `https://new-ash-impactco.vercel.app`

## Vercel Configuration

The `vercel.json` file includes:
- Static file serving
- Cache control headers
- Clean URLs
- No trailing slashes

## Customization

To customize this portfolio:

1. Update the content in `index.html`
2. Replace images in the `Assets` directory
3. Modify colors and styles in the CSS files
4. Update links and social media handles
5. Add or modify sections as needed

## Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified
- Lazy loading for images
- Efficient animations
- Mobile-first responsive design

## Contact

For any questions or suggestions, please reach out:
- Email: aswinr63@gmail.com
- LinkedIn: [linkedin.com/in/aswin-sivaprakash](https://linkedin.com/in/aswin-sivaprakash)

## License

This project is open source and available under the [MIT License](LICENSE).
