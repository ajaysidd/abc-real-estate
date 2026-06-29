# 🏡 HAYANAN Real Estate Website

A modern, full-stack Real Estate Management System built using 
**Next.js 16**,
**TypeScript**, 
**Tailwind CSS**, and 
**Supabase**. 
The application enables visitors to explore properties and projects while providing an administrative dashboard for managing listings, projects, and customer inquiries.

---

## 🌐 Live Demo

**Website:** https://your-vercel-url.vercel.app

---

## 📸 Preview

> Add screenshots of the following pages:

* Home Page
* Properties Page
* Projects Page
* Property Details
* Admin Dashboard
* Contact Page

---

# ✨ Features

### Visitor Features

* Responsive modern UI
* Browse available properties
* View ongoing projects
* Property detail pages
* Project detail pages
* Contact form
* Inquiry submission
* SEO optimized pages

---

### Admin Features

* Secure authentication
* Dashboard
* Property Management (CRUD)
* Project Management (CRUD)
* Inquiry Management
* Update Inquiry Status
* Mark Inquiry as Read
* Image Upload
* Responsive Admin Panel

---

### Technical Features

* Full TypeScript Support
* Server Components
* Client Components
* Supabase Database
* Supabase Storage
* Image Optimization
* Dynamic Routing
* Metadata & SEO
* Sitemap
* Robots.txt
* Open Graph Support
* Centralized Configuration System

---

# 🛠 Tech Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

## Backend

* Supabase
* PostgreSQL
* Supabase Authentication
* Supabase Storage

## Deployment

* Git
* GitHub
* Vercel

---

# 📂 Project Structure

```text
src/
│
├── app/
│   ├── admin/
│   ├── auth/
│   ├── contact/
│   ├── projects/
│   ├── properties/
│   └── ...
│
├── components/
│   ├── forms/
│   ├── home/
│   ├── layout/
│   ├── projects/
│   ├── properties/
│   └── ui/
│
├── core/
│   ├── config/
│   ├── lib/
│   ├── services/
│   └── utils/
│
└── middleware.ts
```

---

# ⚙ Configuration

The project uses centralized configuration for easier maintenance.

```
src/core/config/
```

Contains:

* site.ts
* contact.ts
* navigation.ts
* socials.ts

Updating these files changes branding and business information throughout the project.

---

# 🗄 Database

Supabase PostgreSQL

Main Tables

* users
* properties
* projects
* inquiries

---

# 📷 Storage

Supabase Storage

Used for:

* Property Images
* Project Images

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/ajaysidd/hayanan-real-estate.git
```

Navigate into the project

```bash
cd hayanan-real-estate
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🔐 Environment Variables

Create

```
.env.local
```

Add

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

# 📦 Build

```bash
npm run build
```

---

# 🚀 Deployment

The project is deployed using

* GitHub
* Vercel

Deployment Workflow

```
Developer
↓

Git

↓

GitHub

↓

Vercel

↓

Production
```

---

# SEO

Implemented

* Metadata API
* Dynamic Title
* Dynamic Description
* Sitemap
* Robots.txt
* Open Graph
* Favicon

---

# 📱 Responsive Design

Optimized for

* Desktop
* Laptop
* Tablet
* Mobile

---

# 🔒 Security

* Authentication
* Protected Admin Routes
* Environment Variables
* Server-side Database Access
* Secure Image Storage

---

# 📈 Future Improvements

* Google Maps Integration
* Property Search Filters
* Payment Gateway
* Property Booking
* Email Notifications
* WhatsApp Integration
* Analytics Dashboard
* Multi-Agent Support
* Dark Mode

---

# 👨‍💻 Developer

**Ajay**

Master of Computer Applications (MCA)

Interested in

* Full Stack Development
* Cloud Computing
* DevOps
* AWS

GitHub

https://github.com/ajaysidd

---

# 📄 License

This project is developed for educational and portfolio purposes.
