import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Richie\'s Blog',
      social: {
        github: 'https://github.com/Keobkeig',
        linkedin: 'https://www.linkedin.com/in/richie-xue-48967a280/'
      },
      logo: {
        src: '/src/assets/logo.svg',
      },
      sidebar: [
        {
          label: 'Blog Posts',
          autogenerate: { directory: 'Posts' },
        },
        {
          label: 'XCave Internship Weekly Logs',
          autogenerate: { directory: 'XCaveLogs' },
        },
        {
          label: 'Projects',
          autogenerate: { directory: 'Projects' },
        }
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
