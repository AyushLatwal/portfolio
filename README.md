# Ayush Latwal - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing cloud computing expertise, full-stack development skills, and professional achievements.

## Features

- Modern, responsive design with dark theme
- Smooth animations using Framer Motion
- Skills showcase with progress indicators
- Detailed project portfolio
- Certifications and achievements display
- Contact section with email integration
- Mobile-optimized navigation

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 6
- **Animations**: Framer Motion 11
- **Icons**: Lucide React

## Prerequisites

- Node.js 16+ 
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushLatwal/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file with your environment variables:
   ```bash
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
vercel deploy dist
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

MIT
