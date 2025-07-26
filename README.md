# 🌐 Webfolio — Personal Portfolio

A clean, modern, and responsive **personal portfolio website** built using **React**, **Typescript** and **Vite**. Ideal for developers, designers, or freelancers to showcase their work, skills, and contact information.

> **Live Demo:** [https://tahir.web.app/](https://tahir.web.app/)

## ✨ Features

- ⚛️ Built with **React** + **Vite** for blazing-fast performance
- 🎨 Clean and modern UI/UX design
- 📱 Fully **responsive** on all screen sizes
- 🧩 Modular component-based structure
- 🌓 Light/Dark mode toggle
- 🖼️ Filterable portfolio/project gallery
- 🧾 About, Services, Projects, Blogs, and Contact sections
- 💬 Functional contact form (with firebase integrated)
- 🎯 Buttery smooth performance

## 🚀 Tech Stack

| Technology                                     | Description                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| [React](https://reactjs.org/)                  | Core library for building the user interface                 |
| [Vite](https://vitejs.dev/)                    | Fast build tool and development server                       |
| [TypeScript](https://www.typescriptlang.org/)  | Typed JavaScript for better developer experience             |
| [Tailwind CSS](https://tailwindcss.com/)       | Utility-first CSS framework for rapid styling                |
| [TanStack Router](https://tanstack.com/router) | Type-safe, modern routing solution                           |
| [Shadcn UI](https://ui.shadcn.com/)            | Beautifully designed UI components using Radix UI & Tailwind |
| [Firebase](https://firebase.google.com/)       | Used firestore service for contact form submission           |

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- pnpm or npm or yarn

### Installation

```bash
git clone https://github.com/MrTee99/webfolio.git
cd webfolio
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Then open your browser at `http://localhost:5173`

## 🔧 Build for Production

```bash
pnpm build
```

To preview the build:

```bash
pnpm preview
```

## 📝 Customization

Edit components and content inside the `/src` folder:

- Personal info and social links
- Portfolio items and filters
- Blog entries, projects, etc.
- Styles and theming (via Tailwind classes or global CSS)

Assets like logos and favicons can be updated in the `/public` directory.

## 🚀 Deployment

You can deploy for free using any modern static hosting service:

- Vercel
- Netlify
- Firebase Hosting
- GitHub Pages (if using `vite-plugin-gh-pages`)

## 📁 Project Structure

```bash
webfolio/
├── public/
├── src/
│ ├── components/
│ ├── constants/
│ ├── containers/
│ ├── context/
│ ├── firebase/
│ ├── hooks/
│ ├── layout/
│ ├── lib/
│ ├── routes/
│ ├── styles/
│ ├── types/
│ ├── app.tsx
│ ├── index.tsx
│ └── routeTree.gen.ts
├── index.html
└── vite.config.ts
```

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
1. Create a new branch (git checkout -b feature-name)
1. Commit your changes
1. Push and open a Pull Request

## 📄 License

This project is licensed under the MIT License.
