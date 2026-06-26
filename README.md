# LexVita — Law, Tech & Discovery

**Owner**: Victor Onyegbado, Esq.
**Hosting**: Cloudflare Pages
**Type**: Static site (HTML/CSS/JS, no framework dependencies)

## About

A hobbyist legal tech blog — sharing law discoveries, tips, and tools for modern legal practice.
Not a law firm website. Not soliciting clients. Just a lawyer's notebook, made public.

## Site Structure

```
vitowebsite/
├── index.html                  # Home page
├── about/
│   └── index.html              # About this project
├── blog/
│   ├── index.html              # Blog listing (auto-populated from posts.json)
│   ├── posts.json              # Post index (title, date, excerpt, tags, url)
│   └── posts/
│       └── *.html              # Individual blog posts
├── consultation/
│   └── index.html              # Consultation booking (GAS embed)
├── onboarding/
│   └── index.html              # Generic info form (unlisted, on-request, noindex)
├── css/
│   └── style.css               # Stylesheet
├── js/
│   └── main.js                 # Loads post index, renders blog cards
└── assets/
    ├── images/                 # Photos, blog images
    └── icons/                  # Favicon, social icons
```

## Auto-Publish Pipeline

When Sewa produces a new blog post:

1. Save the HTML to `blog/posts/{slug}.html`
2. Add an entry to `blog/posts.json`
3. Commit and push to GitHub
4. Cloudflare Pages auto-deploys

The `site-publisher` skill automates steps 1-3.

## Google Apps Script Forms

- **Consultation form**: Front-facing, embedded on `/consultation/`
- **Onboarding form**: Unlisted, shared on request only, `noindex`
- Both save submissions to a single Google Sheet

## Deployment

Push to GitHub main branch → Cloudflare Pages auto-builds and deploys.

No build command needed (pure static HTML/CSS/JS).
