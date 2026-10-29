# Labhanshu Gupta — Portfolio

Personal site built with React 19, Vite, Tailwind CSS and Framer Motion.

```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
npm run lint
```

## Editing content

All copy lives in `src/data/` — components never need to change for content updates.

| File | Contains |
|---|---|
| `profile.js` | Name, tagline, summary, hero stats, socials, education |
| `experience.js` | Roles; wrap a phrase in `**double asterisks**` to highlight it as a metric |
| `projects.js` | Featured case studies (incl. architecture diagram layers), smaller projects, open source |
| `skills.js` | Grouped skill chips |
| `achievements.js` | Achievements list |

To add a project screenshot, put it in `public/projects/` and set `image: { src, alt, width, height }` on the project.

The résumé served by the site is `public/Labhanshu_Gupta_Resume.pdf` — replace that file to update it.
