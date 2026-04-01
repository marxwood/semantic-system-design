# Schema.org Markup

Every page on semanticdesign.systems includes JSON-LD structured data.
This document lists all markup types used and where they appear.

## Homepage (`/`)

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": "https://semanticdesign.systems/#book",
  "name": "Semantic System Design",
  "url": "https://semanticdesign.systems",
  "description": "...",
  "inLanguage": "en",
  "author": { "@type": "Person", "name": "Marko Marinković" },
  "copyrightYear": 2026,
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "genre": ["Technology", "Design", "Artificial Intelligence", "Interaction Design"],
  "about": [
    { "@type": "Thing", "name": "Semantic Web" },
    { "@type": "Thing", "name": "Knowledge Graphs" },
    ...
  ],
  "potentialAction": {
    "@type": "ReadAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://semanticdesign.systems/read/{nodeId}"
    }
  }
}
```

## Chapter pages (`/read/:nodeId`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "Article"],
      "@id": "https://semanticdesign.systems/read/urn%3Assd%3Atoc%3Av2%3Afoundations%3A01",
      "name": "Foundations 01 — Why Semantic System Design Exists",
      "headline": "Foundations 01 — Why Semantic System Design Exists",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "Book",
        "@id": "https://semanticdesign.systems/#book",
        "name": "Semantic System Design"
      },
      "author": { "@type": "Person", "name": "Marko Marinković" },
      "keywords": "semantic system design, ui/ux, interaction surfaces",
      "articleSection": "foundations",
      "creativeWorkStatus": "Draft",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://semanticdesign.systems" },
          { "@type": "ListItem", "position": 2, "name": "foundations", "item": "https://semanticdesign.systems/clusters" },
          { "@type": "ListItem", "position": 3, "name": "Foundations 01 — ...", "item": "https://semanticdesign.systems/read/..." }
        ]
      }
    }
  ]
}
```

## Reading paths (`/paths/:role`)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://semanticdesign.systems/paths/designer",
  "name": "Reading Path — Designer",
  "description": "Curated reading path for designers through Semantic System Design",
  "isPartOf": { "@type": "Book", "@id": "https://semanticdesign.systems/#book" },
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "WebPage",
        "@id": "https://semanticdesign.systems/read/urn%3Assd%3Atoc%3Av2%3Afoundations%3A01",
        "name": "Foundations 01 — Why Semantic System Design Exists"
      }
    }
  ]
}
```

## Site navigation

```json
{
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": "https://semanticdesign.systems/#navigation",
  "name": "Book Navigation",
  "hasPart": [
    { "@type": "SiteNavigationElement", "name": "Foundations", "url": "https://semanticdesign.systems/clusters#foundations" },
    { "@type": "SiteNavigationElement", "name": "Semantics", "url": "https://semanticdesign.systems/clusters#semantics" },
    ...
  ]
}
```

## Open Graph meta tags

All pages include:
- `og:title` — page/chapter title
- `og:description` — book description
- `og:type` — `book` on homepage, `article` on chapters
- `og:url` — canonical URL
