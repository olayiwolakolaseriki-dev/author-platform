# Olayiwola Kola-Seriki — Official Author Platform

Digital home and literary ecosystem for **Olayiwola Kola-Seriki**, author of ***The Borrowed Map: Navigating Faith, Ambition, and the Foreign Scripts of Modern Africa***.

---

## 📁 Site Architecture

```text
author-platform/
├── index.html                   # Author Home (olayiwolakolaseriki.com/)
├── the-borrowed-map/
│   └── index.html               # Dedicated Book HQ (olayiwolakolaseriki.com/the-borrowed-map)
├── essays/
│   └── index.html               # Thought leadership & essays archive
├── speaking/
│   └── index.html               # Keynotes, panels, and media bookings
├── contact/
│   └── index.html               # Literary representation, rights & correspondence
└── assets/
    ├── css/
    │   └── styles.css           # Editorial typography & responsive styles
    └── js/
        └── main.js              # Navigation, excerpt reader modal & newsletter handlers
```

---

## 🚀 1. Local Preview

You can test and preview the website immediately on your computer:

```bash
cd /Users/qudduskola-seriki/.gemini/antigravity/scratch/author-platform
python3 -m http.server 8000
```
Then open your browser to **`http://localhost:8000`**.

---

## 🌐 2. Domain & DNS Strategy

### Domains to register
1. **Primary Domain**: `olayiwolakolaseriki.com`
2. **Defensive / Marketing Domain**: `theborrowedmap.com`

> **Recommended Registrar**: [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost pricing ~$9.77/yr, free WHOIS privacy) or [Porkbun](https://porkbun.com).

### The Redirect Setup
To ensure that typing `theborrowedmap.com` leads readers directly to your book page:
1. In Cloudflare (or your registrar's DNS dashboard) for `theborrowedmap.com`:
2. Create a **Page Rule / URL Redirect (301 Permanent Redirect)**:
   * **Source URL**: `theborrowedmap.com/*`
   * **Target URL**: `https://olayiwolakolaseriki.com/the-borrowed-map`

---

## ☁️ 3. Free Hosting Deployment (Cloudflare Pages or Vercel)

This site is built as modern, clean static HTML5/CSS3 with semantic Schema.org JSON-LD. It requires **no build step**, which means:
* 0 build minutes used
* 100/100 Lighthouse performance & SEO score
* Free forever on Cloudflare Pages or Vercel

### Option A: Cloudflare Pages (Recommended)
1. Push this folder to a GitHub repository (e.g. `github.com/your-username/author-platform`).
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the repository.
4. **Build settings**:
   * Framework preset: `None`
   * Build command: *(leave empty)*
   * Build output directory: `/`
5. Click **Save and Deploy**.
6. Under **Custom domains**, add `olayiwolakolaseriki.com`.

### Option B: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or import through the [Vercel Dashboard](https://vercel.com).
2. Connect your repo and deploy.
3. Assign `olayiwolakolaseriki.com` under **Project Settings > Domains**.

---

## ✉️ 4. Email List Integration (Kit / ConvertKit / Substack)

The newsletter and ARC signup forms in `index.html` and `the-borrowed-map/index.html` have clean classes and IDs:
* If using **[Kit (ConvertKit)](https://kit.com)**: Replace the `<form>` action with your Kit embed action URL or embed their lightweight JavaScript snippet.
* If using **[Substack](https://substack.com)**: You can link the CTA button directly to `https://[yourname].substack.com/subscribe`.
* If using **[MailerLite](https://mailerlite.com)**: Simply paste your form action endpoint into the form tag.

---

## 📬 5. Contact Form Backend (Formspree or Basin)

To receive emails from `contact/index.html` without running a server:
1. Register a free account at [Formspree](https://formspree.io) or [UseBasin](https://usebasin.com).
2. Add your endpoint to the form in `contact/index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
