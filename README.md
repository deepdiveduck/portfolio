# Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Showcases projects, skills, and experience with a modern, responsive design.

**Live Site:** [https://deepdiveduck.github.io/portfolio/](https://deepdiveduck.github.io/portfolio/)

## Features

-   **Responsive Design** – Mobile-first layout using Tailwind CSS
-   **Fast Performance** – Built with Vite for rapid development and optimized production builds
-   **Type-Safe** – Full TypeScript support for better code quality
-   **Modern Stack** – React 18 with React Router for smooth page navigation
-   **Automated Deployment** – GitHub Actions workflow for continuous deployment to GitHub Pages

## Tech Stack

-   **Frontend Framework:** React 18
-   **Language:** TypeScript
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS
-   **Routing:** React Router v7
-   **Linting:** ESLint
-   **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page/layout components
├── constants/       # Static data and configuration
├── assets/          # Images and other static assets
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Deployment

The project is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions. See `.github/workflows/deploy.yml` for the deployment configuration.
