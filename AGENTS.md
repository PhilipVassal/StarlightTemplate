## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Starlight Configuration

This is a Starlight project (Astro's documentation framework). Keep `astro.config.mts` clean; prefer configuration via `src/content/config.ts` and `starlight` settings.

## Coding Guidelines

### Static site only

This project is statically hosted on Cloudflare. No server-side rendering, no API routes, no endpoints, no server adapters. Astro's `output` configuration must remain `'static'`.

### Styling with Starlight

Use Starlight's built-in components and their `attributes`/`style` / `class` props for all styling:

- **Starlight is designed to look good with minimal effort.** Use components like `<Tabs />`, `<Tabs.TabItem />`, `<Aside />` (with `type`, `title`, `variant`), `<Steps />`, `<FileTree />`, `<LinkCard />`, `<CardGrid />`, `<Card />`, and `<Banner />` as your primary toolkit. These are your bread and butter.
- Use Tailwind when Starlight components alone are insufficient:
  - template `<style>` blocks (scoped by default)
  - Tailwind utility classes in component templates — e.g., `class="flex flex-col gap-2 p-4 my-6 rounded-lg border"`.

### Creating Astro components

You are free to create static (no server-rendered content, no fetch from server) Astro components:

- Place them in `src/components/`.
- Use modern Astro syntax: `defineProps`, `defineSlots`.
- Prefer Starlight/Stardust UI base classes for theming when possible.
- Keep components focused, single-purpose, and reusable.
- Use rich type definitions with `interface` or `type`.
- scoped `<style>` blocks are fine; use Tailwind utilities (`class=`) for most styling.
- Document the component's purpose with a concise JSDoc comment.

### Best general practices

- Never add comments unless the code needs explanation beyond the code itself.
- Mimic code style of neighboring files.
- No page-generation loops: Astro `getCollection` and `.map()` are fine for static pages (e.g., blog, documentation index pages).
- Always run `astro check && astro build` to verify builds before completing a task.
- If the existing codebase shares a certain convention or library, stick to it.
- Beautiful, accessible, responsive.
- Do not modify `astro.config.mts` unless absolutely necessary, and never remove existing plugins.