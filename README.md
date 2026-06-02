# 🌿 Paradise Nursery

**Paradise Nursery** is a React-based e-commerce web application for purchasing houseplants online. Built as part of the IBM Full Stack Software Developer Professional Certificate capstone project.

## Project Overview

Paradise Nursery allows customers to browse a curated selection of houseplants organized by category, add items to a shopping cart, and manage their cart — all within a seamless single-page experience.

## Features

- 🛍️ Browse 18+ unique houseplants across 3 categories
- 🛒 Add to cart with live cart count in the navbar
- ➕➖ Increase / decrease item quantities in the cart
- 🗑️ Remove individual items from the cart
- 💰 Live total cost calculation per item and overall
- 🔗 Seamless navigation between landing page, product listing, and cart

## Tech Stack

- **React** (with Vite)
- **Redux Toolkit** — for global cart state management
- **React Router DOM** — for client-side routing
- **CSS3** — custom styling with background imagery and responsive layout

## Project Structure

```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   └── ProductList.jsx
│   ├── store/
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── README.md
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

## Author

Developed by **Eyabi** as part of the IBM Full Stack Developer Capstone Project.
