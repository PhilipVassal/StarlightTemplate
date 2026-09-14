// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: 'Philip Vassal',
      defaultLocale: 'root',
      locales: {
        root: { label: '🇳🇴 Norsk', lang: 'nb' },
        en: { label: '🇬🇧 English', lang: 'en' },
      },
      customCss: ['./src/styles/portfolio.css'],
      sidebar: [
        { label: 'Forside', link: '/', translations: { en: 'Home' } },
        { label: 'Prosjekter', translations: { en: 'Projects' }, items: [
          { label: 'Helix NMBU', link: '/prosjekter/prosjekt-02/' },
          { label: 'Kroppssporing', link: '/prosjekter/kroppssporing/', translations: { en: 'Body tracking' } },
          { label: 'Patronus', link: '/prosjekter/prosjekt-01/' },
        ] },
        { label: 'Om meg og CV', link: '/om-meg/', translations: { en: 'About me & CV' } },
      ],
    }),
  ],
});


