# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [0.4.1] - 2026-06-15

### Changed

- About section bio no longer duplicates the hero text; replaced with a distinct location/environment-focused paragraph
- TravelJox.com project card now shows an "Archived" badge instead of a broken "Visit Site" link

### Fixed

- Made `url` optional in the Project interface so archived projects render correctly without a link

## [0.4.0] - 2026-06-15

### Added

- TravelJox.com side project to the Projects section (React, AngularJS, JavaEE, EclipseLink, Maven, Apache TomEE)

### Changed

- Hero and About bio text updated to match CV profile summary (EU public sector focus, JavaEE / Angular, technical mentoring)
- Experience section job descriptions rewritten to match CV wording across all five roles; Hellenic Army company name corrected to "KEPYES"
- Technologies list expanded from 14 to 27 items: added Angular, Azure Cloud, JMS, Oracle WebLogic, WildFly, Apache TomEE, Hibernate, EclipseLink, MariaDB, Drools, jBPM, Confluence; removed PHP and Symfony
- misthotosifreelancer.gr tech stack updated to include Tailwind CSS

## [0.3.1] - 2026-06-15

### Fixed

- Unify typography across all sections: project card titles now use `text-primary` (was `text-neutral`) to match Experience section job title styling
- Standardize Skills section h2 underline to `border-primary` (was `border-secondary`) consistent with all other section headings
- Align Languages and Certifications sub-card titles and borders to `primary` (was `secondary`) for uniform look within the Skills section

## [0.3.0] - 2026-06-15

### Fixed

- Switch GitHub Actions deployment from `peaceiris/actions-gh-pages` (branch-push) to official `actions/upload-pages-artifact` + `actions/deploy-pages`, aligning with the repo's `build_type: workflow` Pages configuration
- Add Projects nav link to header
- Fix Visit Site button contrast in light mode on project cards

## [0.2.0] - 2026-06-15

### Added

- `.gitattributes` — git line-ending normalization (LF) and binary file markers
- `renovate.json` — automated dependency updates (devDep patch/minor auto-merged every Monday before 6am)
- AWS Certified Solutions Architect – Associate certification to the Skills section with AWS brand icon

## [0.1.0] - 2025-11-05

### Added

- Initial portfolio site with Next.js static export
- Hero, About, Experience, Skills, and Contact sections
- Light/dark theme toggle (DaisyUI)
- GitHub Actions deploy to gh-pages
