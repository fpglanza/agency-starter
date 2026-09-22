# agency-starter

`agency-starter` is an internal Astro foundation for production marketing and
content-driven websites. It is static-first, copied or versioned per project,
and built around explicit page composition. It evolves from patterns proven in
real projects rather than from speculative abstractions.

It is not a page builder, CMS, universal design system, component marketplace,
or JSON-driven page renderer.

The working model is:

```text
reusable foundations
+ UI primitives
+ reusable section patterns
+ optional capabilities
+ project branding, content, and assets
+ explicit project composition
= production website
```

For deeper ownership and dependency rules, read
[`docs/architecture/framework-contract.md`](docs/architecture/framework-contract.md).

## Technical foundation

- Astro 6 with static output
- TypeScript with Astro's strict configuration
- Tailwind CSS 4 through the Vite integration
- Astro sitemap generation
- Local font packages, currently Exo 2 and Montserrat
- Optional Sharp-based image optimization
- Node 22, as defined by `.nvmrc`; `package.json` requires Node 22.12 or newer
- `astro check` and the production build as the required quality gate

## Architecture map

```text
src/
  components/
    layout/       Shared Header and Footer implementations
    ui/           Small UI primitives such as Icon and Breadcrumbs
  sections/       Supported reusable section patterns
  data/           Project configuration and project content data
  layouts/        Document shell and optional integration composition
  styles/         Structural CSS plus the current project brand skin
  pages/          Explicit Astro routes and project page composition
  content/        Current typed Markdown content
  scripts/        Optional client-side behavior such as tracking
  assets/         Source project assets
  assets-optimized/ Generated project image variants
public/           Static assets and Netlify-style deployment recipes
scripts/          Repository tooling
docs/             Architecture and project/reference documentation
```

### Reusable ownership

- `BaseLayout.astro` provides the document shell, metadata composition, and
  conditional integration composition.
- `Header.astro` renders project-owned branding and navigation without knowing
  the business domain.
- `Icon.astro` is a generic mask-based icon primitive.
- `Breadcrumbs.astro` is reusable structurally, but still contains current
  project route-label mappings.
- `src/sections/` contains the intentionally supported v1 section patterns.
- `global.css` owns structural defaults, containers, spacing, and utilities.
- Content access, WhatsApp URL construction, validation, builds, and image
  optimization are reusable capabilities.

### Project ownership

- `src/data/site.ts` owns site identity, branding references, project facts,
  and optional integration configuration.
- `src/data/navigation.ts` owns navigation content and the Header CTA.
- `src/pages/`, `src/content/`, and most other `src/data/` modules are the
  current project's implementation.
- `src/styles/brand.css` owns current colors, fonts, typography, buttons, and
  visual effects. It is project skin, not neutral framework CSS.
- `src/assets/`, `src/assets-optimized/`, `public/favicon/`, `public/og/`, and
  most of `public/Icons/` are project assets.
- Footer data is project-owned, while its current composition remains a
  project-oriented presentation that may be replaced.

## Supported sections

The v1 reusable section set is intentionally small:

- **PageHero** - an inner-page hero shell; the page owns its copy, CTAs,
  imagery, decorations, and semantics.
- **ProcessSteps** - renders a supplied sequence of icon-led steps while the
  page owns the section heading and follow-up content.
- **StickySplitSection** - provides a two-column sticky/content layout through
  named slots without prescribing business meaning.
- **ImageNarrativeSection** - provides a full-background narrative frame while
  the page owns overlays and foreground content.

The source is the API reference. Section extraction is frozen for v1. Add new
reusable patterns only after real project work demonstrates genuine reuse.

## New-project checklist

Follow this order when cloning for a new client. The order prevents old project
modules or assets from being deleted while configuration still imports them.

### 1. Rename the project

Update the package name in `package.json`, then regenerate matching root package
metadata with npm rather than editing `package-lock.json` independently:

```sh
npm install --package-lock-only
```

### 2. Configure site identity

Update `src/data/site.ts`:

- site and legal/project names
- language and locale
- canonical URL and metadata defaults
- logo, favicon, social image, and verification values
- contacts, locations, legal facts, and Footer copy that the project retains

Not every project needs the current location, legal, WhatsApp, or Footer fields.
Adapt the project configuration and Footer together rather than preserving an
Autoscuola-shaped schema by default.

### 3. Configure the Astro site URL

The production domain currently exists in both:

- `src/data/site.ts` as `site.url`, used for canonical and social metadata
- `astro.config.mjs` as `site`, used by Astro and sitemap generation

Update both and keep them identical. This duplication is intentional for now;
it avoids importing asset-bearing runtime project configuration into the Astro
build configuration.

### 4. Replace navigation

Replace `src/data/navigation.ts` with the new project's labels, routes,
children, and Header CTA. The Header should not need business-domain changes.

The current navigation imports `patentiData` to derive submenu children. Remove
that dependency before deleting `src/data/patenti.ts`.

### 5. Replace branding

Use `src/styles/brand.css` as the primary project-skin boundary. Replace:

- color and typography tokens
- font imports and matching dependencies
- heading and hero treatments
- button styles and project visual effects
- remaining `racing`-named selectors that the new project still uses

`global.css` contains the smaller structural foundation. Some current pages
also contain local literal colors and visual treatments; those disappear when
the project pages are replaced.

### 6. Decide optional integrations

`src/data/site.ts` uses nullable integration objects. Presence enables a
capability; `null` disables it. For an integration-free project, use:

```ts
const integrations: IntegrationsConfig = {
  analytics: null,
  consent: null,
};
```

- Analytics and consent can operate independently.
- The Google Consent Mode bridge is emitted only when both are configured.
- The analytics measurement ID belongs in project configuration.
- The LegalBlink tenant ID belongs in project configuration.
- `PUBLIC_GTM_ID` remains environment-owned and only matters when analytics is
  configured. If absent, the GTM loader is not emitted.
- A disabled capability emits no corresponding vendor runtime. Disabling
  consent also removes the Footer cookie-settings control.

This is configuration guidance, not privacy or legal advice.

### 7. Adapt shell content

- Header content comes from project branding and navigation configuration.
- Footer business facts come from project configuration.
- Replace or simplify the Footer composition when the project does not need the
  current locations, company details, WhatsApp links, or legal presentation.

Do not force a new project to imitate the reference project's shell content.

### 8. Create routes and content before deleting the reference project

Use this sequence:

1. Establish replacement site and navigation configuration.
2. Create the new routes and page composition.
3. Remove imports and dependencies on old project modules.
4. Delete unused Autoscuola pages, data, content, and assets.

Current pages import project data, Markdown entries, icons, and images directly.
`BaseLayout` does not require the current business routes or content collection
entries, but old pages will fail if their dependencies disappear first.

### 9. Replace assets

Review and replace:

- `src/assets/` source imagery and logos
- `src/assets-optimized/` generated image variants
- `public/favicon/` and root favicon files
- `public/og/` social imagery
- `public/Icons/` project icon sets

`src/data/site.ts` currently imports the project logo. Replace that import before
deleting the old logo. Run `npm run optimize:images` when generating WebP
variants from supported source images. Delete old assets only after searches
confirm that nothing references them.

### 10. Review deployment

`public/_headers` and `public/_redirects` are Netlify-style static-host recipes.
Other hosts may ignore them or require equivalent configuration elsewhere.

- `_redirects` contains only the generic `/* /404.html 404` fallback.
- Previous-client canonical-host redirects were intentionally removed.
- Add canonical-host redirects explicitly for each project when needed.
- Review HSTS, especially `includeSubDomains` and `preload`, before production.
- Review `Permissions-Policy` against project requirements.
- `/assets/*` and `/favicon/*` use immutable caching; avoid reusing a filename
  for different content when cache continuity matters.

### 11. Validate

Run the complete gate before committing or deploying:

```sh
npm run check
npm run build
git diff --check
```

Required result: zero errors, zero warnings, zero hints, and a successful
production build.

## Current reference implementation

The repository intentionally retains Autoscuola Racing as a production-tested
reference. Its routes, data, copy, images, automotive icons, brand skin, and
analytics/reporting documentation are expected to be replaced or deleted per
project. Their presence is not a requirement for the framework.

Useful caveats:

- The package name remains project-specific until clone setup.
- `Breadcrumbs.astro` contains current route-label mappings.
- `src/lib/icons.ts` primarily references automotive icons.
- `brand.css` retains some `--racing-*` tokens and Racing-named button classes.
- Analytics and Looker documentation under `docs/` describes the current
  reference project, not a mandatory starter capability.

## Extension rule

Build new patterns for the real project first. Promote them into
`agency-starter` only after they show stable reuse value across actual needs.

For example, do not add a generic gallery, film/project grid, video player, or
testimonials system merely because an upcoming wedding site may need one.

## Quality principles

- Explicit Astro composition
- Static-first delivery
- Accessibility, performance, and SEO
- Maintainable, readable ownership boundaries
- Minimal abstraction backed by evidence
- Project configuration instead of hidden business assumptions
- Optional capabilities that are genuinely optional

## Commands

```sh
npm ci                   # Install the locked dependency graph
npm run dev              # Start the Astro development server
npm run check            # Run Astro and TypeScript validation
npm run build            # Build the static production site
npm run preview          # Preview the production build
npm run optimize:images  # Generate optimized WebP project images with Sharp
```

The starter does not currently include a CMS, test framework, CI workflow,
generic gallery, video player, testimonials system, project generator, or
multi-provider deployment abstraction.
