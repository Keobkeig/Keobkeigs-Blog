import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Richie\'s Blog',
      social: {
        github: 'https://github.com/Keobkeig',
      },
      logo: {
        src: '/assets/logo.svg',
      },
      sidebar: [
        {
          label: 'Blog Posts',
          autogenerate: { directory: 'posts' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
