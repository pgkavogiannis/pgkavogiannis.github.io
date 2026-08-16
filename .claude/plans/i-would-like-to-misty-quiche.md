# Plan: Update CV — Tech Lead promotion + Published project

## Context

The user has been promoted to Tech Lead / Team Lead at Sword Services Greece S.A. in June 2026 and has published a website (https://misthotosifreelancer.gr). The portfolio needs to reflect both changes.

---

## Changes

### 1. Hero subtitle — `components/sections/HeroSection.tsx` (line 22)

Change:
```tsx
<p className="text-2xl md:text-3xl font-semibold text-secondary">Full Stack Software Engineer</p>
```
To:
```tsx
<p className="text-2xl md:text-3xl font-semibold text-secondary">Tech Lead / Team Lead</p>
```

---

### 2. Experience entries — `components/layout/MainContent.tsx`

Split the current single Sword entry (Oct 2022 – Present) into two:

**New entry (first in list):**
- `jobTitle`: `'Tech Lead / Team Lead'`
- `jobPeriod`: `'June 2026 - Present'`
- `companyTitle`: `'Sword Services Greece S.A.'`
- `jobDescription`: Leading a cross-functional engineering team delivering applications for European Commission Customs Offices. Driving technical direction, code quality standards, and team mentoring while contributing hands-on to JavaEE and Angular development.

**Existing entry (second in list, updated period):**
- `jobTitle`: `'Full Stack Software Engineer'`
- `jobPeriod`: `'October 2022 - May 2026'`
- `companyTitle`: `'Sword Services Greece S.A.'` (unchanged)
- `jobDescription`: unchanged

Also update `skillBadges` to include `'Leadership'` (replacing or adding to the existing six badges).

---

### 3. New Projects section — `components/sections/ProjectsSection.tsx` (new file)

**Caller**: `components/layout/MainContent.tsx` imports and renders it.

Add a new section between `ExperienceSection` and `SkillsSection` that displays project cards. Each card shows: title, description, tech stack badges, and a "Visit" link.

Props interface:
```ts
interface Project {
  title: string;
  description: string;
  url: string;
  tech: string[];
}
interface ProjectsSectionProps {
  projects: Project[];
}
```

Data defined in `MainContent.tsx`:
```ts
const projects = [
  {
    title: 'misthotosifreelancer.gr',
    description: 'A Greek net income calculator for freelancers. Helps independent professionals estimate their take-home pay after taxes and social contributions.',
    url: 'https://misthotosifreelancer.gr',
    tech: ['React', 'TypeScript', 'Vite', 'Netlify'],
  },
];
```

Styling follows the existing DaisyUI card pattern used in `ExperienceSection.tsx`. External link uses `target="_blank" rel="noopener noreferrer"`.

---

### 4. Wire into `MainContent.tsx`

- Add `import { ProjectsSection } from '../sections/ProjectsSection';` (after existing imports, line ~6)
- Add `projects` constant (after `skillBadges`)
- Add `'Leadership'` to `skillBadges`
- Render `<ProjectsSection projects={projects} />` between `<ExperienceSection jobs={jobs} />` and `<SkillsSection ...>`

---

## Files to modify / create

| File | Action |
|------|--------|
| `components/sections/HeroSection.tsx` | Edit line 22 (subtitle) |
| `components/layout/MainContent.tsx` | Split job entry, add projects data + Leadership badge, import + render ProjectsSection |
| `components/sections/ProjectsSection.tsx` | **Create** new section component |

---

## Verification

1. `yarn dev` — visit localhost, verify:
   - Hero shows "Tech Lead / Team Lead"
   - Experience section shows the new lead entry at top (June 2026 – Present) and the original Sword FSE entry below (Oct 2022 – May 2026)
   - Projects section appears between Experience and Skills
   - The misthotosifreelancer.gr card links correctly and opens in a new tab
   - "Leadership" badge appears in the About/Skills badges
2. `yarn build` — confirm static export succeeds with no errors
