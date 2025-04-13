# Imad Eddine EL MOUSS - Portfolio Hub

A personal portfolio website showcasing projects and blog posts related to AI, Machine Learning, and Data Engineering. Built with a modern, minimalist design and professional aesthetics.

## Features

* **Modern UI Design:** Clean, responsive interface with dark/light mode support
* **Project Showcase:** Detailed project cards with individual detail pages
* **Blog Integration:** Share expertise with a dedicated blog section
* **Admin Dashboard:** Content management system for projects and blog posts
* **Contact Form:** Direct messaging with form validation and email integration
* **Responsive Layout:** Optimized for all device sizes

## Tech Stack

* **Frontend:** React 18, TypeScript, Vite
* **State Management:** Zustand
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Form Handling:** React Hook Form with Zod validation
* **Icons:** Lucide React
* **Routing:** React Router DOM v6

## Project Structure

```
src/
├── components/       # UI components
│   ├── ui/           # shadcn/ui components
│   └── admin/        # Admin dashboard components
├── context/          # React context providers
├── data/             # Data management
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── pages/            # Application pages
    └── admin/        # Admin dashboard pages
```

## Getting Started

### Prerequisites
- Node.js 16+ or Bun runtime
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imaddde867/imad-eddine-portfolio-hub.git
   cd imad-eddine-portfolio-hub
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun (recommended)
   bun install

   # Using npm
   npm install
   ```

3. **Start the development server:**
   ```bash
   # Using Bun
   bun run dev

   # Using npm
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to view the application.

## Build for Production

```bash
# Using Bun
bun run build

# Using npm
npm run build
```

The built application will be available in the `dist` directory.

## Deployment

The site can be deployed on any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

Contributions are welcome! If you'd like to contribute, please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## Contact

For any questions or inquiries, please contact me at [imadeddine200507@gmail.com](mailto:imadeddine200507@gmail.com).

## License

This project is licensed under the MIT License.
