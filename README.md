# Documentation Guide Repository

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A Starlight-based documentation site for writing guides. Clone this repo, open it in your editor with opencode, and start writing — opencode handles the build system, component styling, and Astro configuration for you.

## Getting Started

```bash
pnpm install
pnpm dev
```

The site runs at `localhost:4321`. Open your editor, launch opencode, and describe the guide you want to write. opencode will create pages, configure the sidebar, and style everything using Starlight's built-in components.

## How to Create Pages

All documentation lives in `src/content/docs/`. Create a new `.md` or `.mdx` file and it becomes a page:

```
src/content/docs/
├── index.mdx              # Homepage
├── guides/
│   ├── getting-started.md
│   ├── configuration.md
│   └── example.md
└── reference/
    └── example.md
```

Each file needs a minimal frontmatter:

```yaml
---
title: Your Page Title
description: A short description of this page.
---
```

Tell opencode what pages you need and what content goes on each. It will create the files, write the Markdown/MDX content, and add Starlight components where appropriate.

## How to Order Pages

Page order is controlled in `astro.config.mjs` through the sidebar configuration. There are two approaches:

**Manual ordering** — list pages explicitly in the order you want:

```js
sidebar: [
    {
        label: 'Guides',
        items: [
            { label: 'Getting Started', slug: 'guides/getting-started' },
            { label: 'Configuration', slug: 'guides/configuration' },
            { label: 'Example Guide', slug: 'guides/example' },
        ],
    },
],
```

**Auto-generated ordering** — Starlight discovers all pages in a directory and sorts them by the `order` frontmatter field (or alphabetically):

```js
sidebar: [
    {
        label: 'Reference',
        items: [{ autogenerate: { directory: 'reference' } }],
    },
],
```

When using auto-generate, you can control order with `order` in frontmatter:

```yaml
---
title: First Page
description: This appears first.
order: 1
---
```

Tell opencode how you want your pages ordered. It will update `astro.config.mjs` with the sidebar structure.

## How opencode Styles Your Pages

Starlight provides a rich set of built-in components that opencode uses by default. You do not need to write HTML or CSS — just describe what you need and opencode will pick the right components.

### Available Components

| Component | Use case |
|-----------|----------|
| `<Aside>` | Tip, note, or warning callouts (`type="tip"`, `"note"`, `"caution"`, `"danger"`) |
| `<Steps>` | Numbered step-by-step instructions |
| `<Tabs>` / `<Tabs.TabItem>` | Tabbed content for alternative approaches |
| `<FileTree>` | Visual directory structure |
| `<Card>` / `<CardGrid>` | Highlighted cards with icons |
| `<LinkCard>` | Links with descriptions |
| `<Banner>` | Page-wide banner announcements |

### Example

If you tell opencode: "Add a warning before the configuration section and show two approaches in tabs," it will produce:

```mdx
import { Aside, Tabs } from '@astrojs/starlight/components';

<Aside type="caution" title="Backup your config">
Always back up your configuration before making changes.
</Aside>

<Tabs>
    <Tabs.TabItem label="Automatic">
        Run the setup command and it will configure everything.
    </Tabs.TabItem>
    <Tabs.TabItem label="Manual">
        Edit your `config.yaml` file directly.
    </Tabs.TabItem>
</Tabs>
```

## When Starlight Isn't Enough

If you need custom layout, interactive elements, or visuals that Starlight's components do not cover, opencode can create custom Astro components for you.

### How it works

1. **Describe the component** — e.g., "Create a comparison table with alternating row colors" or "Add an interactive code playground."
2. **opencode creates it** in `src/components/` as a single-file Astro component.
3. **Use it in any page** — import it in your `.mdx` file and place it where needed.

### Example

```astro
---
/** A two-column comparison layout. */
interface Props {
    left: string;
    right: string;
}
const { left, right } = Astro.props;
---

<div class="grid grid-cols-2 gap-4 my-6 p-4 rounded-lg border">
    <div set:html={left} />
    <div set:html={right} />
</div>
```

```mdx
import Comparison from '../../../components/Comparison.astro';

<Comparison
    left="**Before:** Manual deployment steps"
    right="**After:** One-click deploy"
/>
```

Components in `src/components/` use Astro's `defineProps` for type safety and Tailwind for styling. They stay simple, single-purpose, and reusable.

## Verification

After making changes, always run:

```bash
astro check && astro build
```

This catches type errors and ensures the site builds successfully before deploying.

## Project Structure

```
.
├── astro.config.mjs          # Starlight + sidebar configuration
├── public/                    # Static assets (favicons, etc.)
├── src/
│   ├── assets/                # Images referenced in pages
│   ├── components/            # Custom Astro components (create as needed)
│   └── content/
│       ├── docs/              # All documentation pages
│       └── content.config.ts  # Content collection schema
├── AGENTS.md                  # Coding guidelines for AI assistants
└── README.md
```

