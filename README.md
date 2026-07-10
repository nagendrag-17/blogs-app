# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Blogs App

A simple blog website built with React and Vite, using React Router for page navigation.

Features


Multi-page navigation with React Router (v6)
Component-based architecture (Navbar, pages, etc.)
Fast development with Vite's hot module reload


Tech Stack


React
Vite
React Router DOM v6


Getting Started

Prerequisites


Node.js installed on your machine


Installation


Clone the repository


   git clone https://github.com/nagendrag-17/blogs-app.git


Navigate into the project folder


   cd blogs-app


Install dependencies


   npm install


Start the development server


   npm run dev


Open the local URL shown in the terminal (usually http://localhost:5173) in your browser


Project Structure

src/
  components/   # Reusable components like Navbar
  pages/        # Individual page components
  App.jsx       # Main app component with routing
  main.jsx      # Entry point

Author

Nagendra G