# Agency Starter Framework Contract

## 1. Purpose

agency-starter is an internal foundation for building production marketing and content-driven websites. It is intended to support many unrelated client websites over time while keeping implementation work clear, maintainable, and easy to evolve.

The framework prioritizes:

- Maintainability
- Readability
- Explicit architecture
- Accessibility
- Performance
- SEO
- Developer experience
- Upgrade resilience
- Low technical debt

agency-starter is a framework in the architectural sense: it defines conventions, reusable foundations, boundaries, and quality expectations. It is not currently consumed as a published runtime package. For now, new sites consume it by copying or templating the repository, then owning their project-specific code independently.

## 2. Current State

The repository currently contains several kinds of material at once:

- Reusable Astro and TypeScript foundations.
- Reusable design and SEO concepts.
- Optional analytics, consent, deployment, and image tooling.
- Autoscuola Racing project configuration.
- Autoscuola Racing pages, content, assets, and business rules.

The current repository is a migration source and reference implementation, not yet a clean reusable framework. It was created from a production-tested website, so it contains useful real behavior, but reusable framework boundaries are still being identified and extracted.

Representative current paths include:

| Path | Current role |
|---|---|
| `src/layouts/BaseLayout.astro` | Basic document shell plus current metadata, analytics, consent, and layout composition. |
| `src/components/layout/Header.astro` | Shared header implementation with current project navigation behavior. |
| `src/components/layout/Footer.astro` | Footer implementation with current legal, contact, and location content. |
| `src/data/site.ts` | Current site identity and contact configuration. |
| `src/data/navigation.ts` | Current navigation configuration. |
| `src/pages` | Current Autoscuola Racing routes and page implementation. |
| `src/assets` | Current project source assets. |
| `src/scripts/tracking.ts` | Current analytics event handling. |
| `public/_headers` | Current static-host header policy. |
| `public/_redirects` | Current static-host redirect policy. |

This document defines how future changes should classify those responsibilities. It does not require immediate file movement.

## 3. Consumption Model

The current consumption model is:

- agency-starter is a versioned repository used as the starting point for a new site.
- A new website is copied or instantiated from this repository.
- Each resulting website owns its project-specific code, content, configuration, and deployment.
- Improvements to the framework are intentionally evaluated and manually propagated until a stronger distribution model is justified.

This model is preferred for now because it preserves simplicity, avoids premature package management, allows the framework to evolve from real project evidence, keeps each website independently deployable, and avoids coupling all websites to a shared runtime package.

This is a current decision, not a permanent constraint. Other distribution models may be reconsidered only after multiple real projects justify the coordination cost.

## 4. Architectural Layers

### 4.1 Framework Core

Framework core is the minimal reusable foundation needed by nearly every project.

| Attribute | Definition |
|---|---|
| Responsibility | Provide the common technical foundation and conventions that a typical project should inherit. |
| Belongs inside | Astro and TypeScript foundations, basic document shell, general metadata composition, accessibility foundations, generic UI primitives, core styling conventions, content access helpers, quality-control scripts, and CI. |
| Must remain outside | Client names, client domains, business routes, client contact information, analytics IDs, consent vendor identifiers, client logos and assets, and business-specific copy. |
| Current examples | `tsconfig.json`, parts of `src/layouts/BaseLayout.astro`, `src/components/ui/Icon.astro`, `src/lib/content.ts`. |
| Status | Mandatory. |

Framework core must remain small. It should contain behavior that almost every production site needs.

### 4.2 Design Foundation

The design foundation is reusable styling structure, not a finished universal design system.

| Attribute | Definition |
|---|---|
| Responsibility | Provide stable styling conventions that make projects consistent and accessible without forcing a fixed brand. |
| Belongs inside | Resets, container conventions, spacing principles, focus-visible behavior, basic typography structure, neutral semantic tokens, and a small number of proven UI primitives. |
| Must remain outside | Brand fonts, brand colors, decorative effects, Racing-specific class names, client-specific visual language, and one-off page section styling. |
| Current examples | Parts of `src/styles/global.css`, container and section conventions, small primitives under `src/components/ui`. |
| Status | Mandatory, but intentionally limited. |

Brand fonts, brand colors, decorative effects, and Racing-specific classes are project configuration or project implementation.

### 4.3 Project Configuration

Project configuration is the explicit set of values expected to vary between websites.

| Attribute | Definition |
|---|---|
| Responsibility | Describe the site being built without embedding large page bodies or vendor implementation logic. |
| Belongs inside | Site name, legal or business name, canonical domain, locale, default title and description, navigation, contact details, social image defaults, favicon references, verification metadata, integration enablement, brand tokens, and font choices. |
| Must remain outside | Full editorial page bodies, analytics implementation code, consent vendor scripts, and business logic that belongs to page implementation. |
| Current examples | `src/data/site.ts`, `src/data/navigation.ts`, parts of `astro.config.mjs`, favicon and social defaults. |
| Status | Mandatory per project. |

Configuration should be explicit and typed where practical.

### 4.4 Content Layer

The content layer is typed or validated project content.

The repository currently uses both Markdown content collections and TypeScript data modules. This mixed approach remains under review and should not be treated as a final universal content policy.

| Attribute | Definition |
|---|---|
| Responsibility | Own project content in a way that is understandable, validated where useful, and not silently duplicated. |
| Belongs inside | Editorial metadata, structured editorial content, strongly structured local data when code-level typing is valuable. |
| Must remain outside | Integration URL generation, analytics vendor logic, consent implementation, and reusable framework code. |
| Current examples | `src/content.config.ts`, `src/content/pages`, `src/data/*.ts`. |
| Status | Mandatory, but the final policy is undecided. |

Provisional rules:

- Markdown/content collections may own editorial metadata or structured editorial content.
- TypeScript modules may own strongly structured local data when code-level typing is valuable.
- Page templates should not silently duplicate canonical content.
- Integration URL generation and analytics logic do not belong in content data.

The final content policy remains an explicit architectural decision.

### 4.5 Optional Capabilities

Optional capabilities are reusable features that should not be loaded or required by every project.

| Attribute | Definition |
|---|---|
| Responsibility | Provide reusable features that a project may opt into when needed. |
| Belongs inside | Analytics, consent management, WhatsApp helpers, image optimization tooling, sitemap generation where appropriate, host-specific headers and redirects, dashboard and reporting documentation. |
| Must remain outside | Hard-coded client identifiers, mandatory third-party scripts, client content, and assumptions that every website needs the capability. |
| Current examples | `src/scripts/tracking.ts`, `src/lib/whatsapp.ts`, `scripts/optimize-images.mjs`, `@astrojs/sitemap`, `public/_headers`, `public/_redirects`, reporting docs under `docs`. |
| Status | Optional. |

Optional capabilities must be explicitly enabled, fail safely when not configured, avoid hard-coded client identifiers, avoid forcing unnecessary dependencies or scripts on projects, and be removable without breaking framework core.

### 4.6 Project Implementation

Project implementation is everything belonging to the actual business and website being built.

| Attribute | Definition |
|---|---|
| Responsibility | Deliver the specific website experience for a specific business. |
| Belongs inside | Pages, business-specific routes, page sections, client copy, client assets, service taxonomies, locations, team members, business-specific CTAs, business-specific analytics events, and legal/footer content. |
| Must remain outside | Framework core, generic primitives, and optional capabilities that should be reusable elsewhere. |
| Current examples | `src/pages`, much of `src/data/*.ts`, `src/assets`, current footer content, current Autoscuola Racing service pages. |
| Status | Mandatory per project. |

Project implementation is expected to vary significantly. It should not be forced into generic framework abstractions before repeated evidence shows that an abstraction is stable.

### 4.7 Deployment Recipes

Deployment behavior is an explicit, potentially host-specific layer.

| Attribute | Definition |
|---|---|
| Responsibility | Describe how the static site is hosted, secured, redirected, cached, and deployed. |
| Belongs inside | Security headers, redirects, cache policies, hosting configuration, and deployment documentation. |
| Must remain outside | Client domains in reusable core, application logic, and assumptions that all hosts support the same files. |
| Current examples | `public/_headers`, `public/_redirects`. |
| Status | Optional per host, required per deployed project. |

The framework should remain compatible with static hosting generally. Individual recipes may target Netlify-style conventions or other host-specific conventions when explicitly documented.

### 4.8 Quality And Governance

Quality and governance define minimum safeguards for framework work.

| Attribute | Definition |
|---|---|
| Responsibility | Keep architectural changes safe, reviewable, and compatible with future upgrades. |
| Belongs inside | Validation scripts, CI validation, build verification, clean working tree expectations, review policy, and small commit discipline. |
| Must remain outside | Heavy tooling that is not yet justified by project evidence. |
| Current examples | Existing `npm run build` capability, current clean baseline, future check and CI scripts. |
| Status | Mandatory before substantial refactoring. |

The target minimum gate before architectural refactoring becomes substantial is:

- Clean dependency installation.
- Astro/type validation.
- Production build.
- CI execution of validation and build.
- Clean Git working tree.
- Small, independently reviewable commits.

Future, but not immediate, capabilities include linting, formatting, accessibility automation, end-to-end smoke tests, dependency review policy, and upgrade policy. Specific tools should be chosen only when justified by current needs.

## 5. Dependency Rules

Conceptual dependency direction:

```text
Project implementation
    -> Project configuration
    -> Framework core

Project implementation
    -> Optional capabilities

Optional capabilities
    -> Framework core

Framework core
    -/-> Project implementation
```

Rules:

- Framework core must not import business-specific project modules.
- Generic layout components must not import driving-school service data.
- Optional integrations may read explicit configuration but must not own project content.
- Project pages may use core primitives and optional capabilities.
- Deployment recipes should not leak client domains into reusable core.
- Content modules should not depend directly on analytics vendor implementations.

Current known violations are examples to classify and resolve later, not changes to make in this task:

| Current violation | Boundary issue |
|---|---|
| `Header.astro` importing `patentiData` | Generic layout imports driving-school service data. |
| `BaseLayout.astro` owning client analytics and consent identifiers | Framework shell owns project/vendor integration details. |
| `Footer.astro` embedding company and location details | Shared layout contains project implementation. |
| Racing-specific classes inside the global design foundation | Design foundation contains project branding. |

## 6. Configuration Principles

- Every project-varying value should have one clear owner.
- Required configuration should fail clearly when absent.
- Optional configuration should result in the feature being disabled.
- Environment variables should be used for deployment-specific or sensitive configuration where appropriate.
- Public identifiers are not necessarily secrets, but they must still be project-specific.
- Configuration must remain explicit and readable.
- Typed objects are preferred when they are clearer than generic key-value configuration systems.
- Placeholder strings should not be scattered throughout source files.
- Contact details, domains, locale, and brand identity should not be duplicated across multiple modules.

Configuration should make the expected shape of a project obvious without becoming an untyped dumping ground.

## 7. Abstraction Policy

Abstractions must be earned through repeated evidence.

Extraction is justified when:

- The same responsibility appears in multiple places.
- The abstraction has a stable name and responsibility.
- It reduces duplication or coupling.
- It improves testing or accessibility.
- Its API remains understandable without client context.

Extraction is not justified when:

- Only one page uses the pattern.
- The pattern is visually similar but semantically different.
- The abstraction requires many boolean props.
- It hides important business meaning.
- It exists only to shorten files.
- It anticipates unknown future requirements.

Large page files are not automatically architectural failures. A long page can be acceptable when it keeps project-specific content and layout explicit.

## 8. Current Non-Goals

The current non-goals are:

- Publishing framework packages.
- Creating a monorepo.
- Building a plugin marketplace or plugin runtime.
- Building a site generator.
- Abstracting Astro file-based routing.
- Supporting every hosting provider through one adapter.
- Creating a universal CMS layer.
- Creating a universal form system.
- Creating a large design system.
- Generalizing all Autoscuola Racing page sections.
- Removing Autoscuola Racing project code before replacement boundaries are ready.
- Rewriting working functionality for stylistic reasons.

These are current non-goals, not permanent prohibitions.

## 9. Autoscuola Racing During Migration

Autoscuola Racing currently serves as:

- The production-tested source implementation.
- A behavioral reference.
- A source of real requirements.
- A temporary project implementation inside the repository.

Migration rules:

- Preserve working behavior unless a task explicitly changes it.
- Do not delete client-specific code merely because it is not reusable.
- First classify client-specific code, then move or isolate it.
- Keep project behavior testable throughout extraction.
- Do not let Autoscuola-specific assumptions remain in framework core.
- Use the existing site to validate that generalization has not removed necessary behavior.

The goal is to prevent source-project assumptions from being mistaken for reusable framework rules.

## 10. Change Policy

Framework work must be:

- Small.
- Atomic.
- Independently testable.
- Easy to review.
- Easy to revert.
- Focused on one primary concern.

Every implementation task should identify:

- Why the change matters.
- Scope.
- Non-goals.
- Risks.
- Verification method.
- Expected runtime impact.

Unrelated cleanup must not be bundled into architectural changes. If a task changes configuration boundaries, it should not also redesign visual components, rename directories, alter content strategy, or change analytics behavior unless that is explicitly in scope.

## 11. Decision Status

| Decision | Current status |
|---|---|
| Consumption model | Copyable/versioned repository for now |
| Rendering model | Static-first Astro |
| Routing | Astro file-based routing |
| Framework packaging | Not planned yet |
| Analytics and consent | Optional capabilities |
| Locale | Explicit per-project configuration |
| Hosting | Static-host compatible; recipes may be host-specific |
| Content source | Mixed approach remains under review |
| Design policy | Neutral reusable foundation plus project branding |
| Autoscuola example | Retained temporarily during migration |
| Minimum future quality gate | Validation and production build in CI |

Decisions labeled as under review should not be treated as settled architecture. They should be revisited after implementation experience across more than one project.

## 12. Review Checklist

Use this checklist during future architectural reviews:

- Does framework core import project-specific code?
- Is this feature required by nearly every project?
- Could this capability be disabled cleanly?
- Does this value have one clear owner?
- Is the abstraction supported by repeated evidence?
- Does the change preserve existing behavior?
- Is the task independently testable and reversible?
- Does the documentation still match the implementation?
