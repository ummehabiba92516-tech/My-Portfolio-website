# Portfolio Website

A professional full-stack portfolio website built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

## Features

- Modern responsive landing page
- Project showcase with live preview pages
- Contact form with backend storage in MongoDB
- Node.js/Express API for contact submissions

## Setup

1. Copy `.env.example` to `.env` and update the `MONGODB_URI` value.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.
5. Visit `http://localhost:3000/admin` to view submitted contact messages.

## Backend

- `server.js` serves static frontend files and exposes `/api/contact` and `/api/contacts`.
- `models/Contact.js` defines the contact message schema.
- `admin.html` is a backend admin page for viewing submitted messages.

## Frontend

- `index.html` is the main portfolio page.
- `style/style.css` is the site stylesheet.
- `javascript/main.js` handles the contact form and animations.
- `project-1.html`, `project-2.html`, and `project-3.html` demonstrate live previews.
