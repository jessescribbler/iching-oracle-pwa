# Book of Changes PWA

An installable, offline-capable I Ching oracle for reflection and journaling.

## Run locally

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173`.

## Put it on an Android phone

A PWA must be hosted over HTTPS before Android will offer normal installation.

The simplest deployment options are:

1. Create a free GitHub repository and upload this folder.
2. Connect the repository to Cloudflare Pages, Netlify, or Vercel.
3. Open the resulting HTTPS address in Chrome on Android.
4. Tap Chrome's menu, then **Add to Home screen** or **Install app**.

After the first visit, the app shell works offline. Saved journal entries remain
in that phone's browser storage and are not synced to another device.

## Sources and copyright

- The traditional King Wen hexagram sequence, hexagram structure, and original
  Chinese text are public-domain material.
- James Legge's 1882 English translation is public domain in the United States.
- The short reflection text in `app.js` was written specifically for this app.
- Do not copy modern translations or a modern website's transcription,
  commentary, formatting, or illustrations without checking their license.

Public-domain references:

- https://www.gutenberg.org/ebooks/25501
- https://commons.wikimedia.org/wiki/File:The_Sacred_Books_Of_The_East_%28IA_sacredbooksofthe015784mbp%29.pdf
