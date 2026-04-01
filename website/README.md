# Semantic System Design — Website

The live reader for this book is deployed at **[semanticdesign.systems](https://semanticdesign.systems)**.

## Architecture

The website is a full-stack TypeScript application (React + Express + tRPC) that dynamically fetches and renders all book content directly from this GitHub repository.

### How content sync works

1. **On every page request**, the server fetches the relevant markdown file from the GitHub raw content API (`raw.githubusercontent.com`) and caches it in memory for 5 minutes.
2. **The graph-index** (`book/graph-index.jsonld`) is fetched and cached similarly — it drives all navigation and role-weighted link ranking.
3. **On push events**, GitHub sends a webhook to `/api/webhook/github` which clears all caches, so the next request picks up fresh content immediately.

This means: **any change you push to this repo will be reflected on the website within 5 minutes**, or instantly if you trigger the webhook.

### Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Tailwind CSS 4, shadcn/ui |
| Backend | Express 4, tRPC 11 |
| Markdown | `marked` with custom URN link renderer |
| Schema.org | JSON-LD injected per-page |
| Routing | Wouter (client-side) |
| Fonts | Inter (UI), Lora (body text), JetBrains Mono (code) |

## Routes

| Route | Description |
|---|---|
| `/` | Homepage — renders README.md + entry hub grid |
| `/read/:nodeId` | Chapter reader — any URN node ID from the graph |
| `/clusters` | All chapters grouped by cluster |
| `/paths` | All reading paths |
| `/paths/:role` | Reading path for a specific role |

## Role-weighted navigation

The site reads `book/graph-index.jsonld` and uses the `roleWeights` on each link to rank navigation suggestions. Readers can switch their role (Designer / Engineer / Product / Executive / AI Agent) in the header, and the sidebar navigation updates accordingly.

## Schema.org markup

Every page injects JSON-LD structured data:

- **Homepage**: `Book` schema with author, license, genre, and `potentialAction: ReadAction`
- **Chapter pages**: `WebPage + Article` with `BreadcrumbList`, `articleSection`, `keywords`
- **Reading paths**: `ItemList` with ordered `ListItem` entries
- **Navigation**: `SiteNavigationElement` for cluster-level nav

## GitHub webhook setup

To enable instant cache invalidation on push:

1. Go to **Settings → Webhooks → Add webhook** in this repository
2. Set **Payload URL** to: `https://semanticdesign.systems/api/webhook/github`
3. Set **Content type** to: `application/json`
4. Select **Just the push event**
5. Optionally set a **Secret** and add it as `GITHUB_WEBHOOK_SECRET` in the deployment environment

## Adding new chapters

1. Create a new markdown file in the appropriate `book/<cluster>/` directory
2. Add YAML frontmatter with `id`, `title`, `cluster`, `type`, `status`, `keywords`, `related`
3. Run `npm run graph:index` to regenerate `book/graph-index.jsonld`
4. Push to `main` — the website will pick up the new content within 5 minutes

### Frontmatter schema

```yaml
---
id: urn:ssd:toc:v2:<cluster>:<number>
title: "Cluster NN — Chapter Title"
cluster: foundations  # foundations | semantics | graphnav | dso | dual | ops
type: WebPage
status: draft  # draft | published
keywords:
  - keyword one
  - keyword two
related:
  - urn:ssd:toc:v2:foundations:01
  - urn:ssd:toc:v2:entry:foundations
---
```

## Environment variables

| Variable | Purpose |
|---|---|
| `GITHUB_TOKEN` | Optional — increases GitHub API rate limit from 60 to 5000 req/hour |
| `GITHUB_WEBHOOK_SECRET` | Optional — validates webhook signatures from GitHub |

## Local development

The website is hosted on [semanticdesign.systems](https://semanticdesign.systems) via the Manus platform. The source code lives in the Manus project `semantic-system-design-website`.

To run locally, you would need the full project scaffold. Contact the maintainer for access.
