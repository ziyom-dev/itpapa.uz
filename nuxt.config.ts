// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    // esbuild: {
    //   drop: ['debugger'],
    //   pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
    // }
    build: {
      rollupOptions: {
        output: {
          // target ~250KB per chunk in an ideal world
          experimentalMinChunkSize: 250 * 1024,
          manualChunks: (id, _) => {
            // need to avoid touching non-entrypoint files, otherwise it breaks bundling
            // because imports aren't idempotent
            if (
              !id.includes("node_modules") &&
              !id.startsWith("virtual:") &&
              !id.includes("src") &&
              !id.includes("assets")
            ) {
              // merge pages/foo/* as chunk-pg-foo, pages/bar/* as chunk-pg-bar, etc.
              // then merge pages/* (ie no subfolder) into chunk-pg-misc
              if (id.includes("pages")) {
                const parts = id.split("/");
                const folderIndex = parts.indexOf("pages");
                if (folderIndex + 2 < parts.length) {
                  const pageGroup = parts[folderIndex + 1];
                  return `chunk-pg-${pageGroup}`;
                }
                return "chunk-pg-misc";
              }
            }
          },
        },
      },

    },
  },

  app: {
    head: {
      title: 'Весь рынок "Малика" в одном месте | OnMalika',
      htmlAttrs: {
        lang: 'RU'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Добро пожаловать в OnMalika.uz! Весь мир &quot;Малика&quot; здесь: лучшие цены, быстрая доставка, уверенность в покупке. Покупайте с удовольствием!' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [

        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest', },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },

      ],

      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose', type: "text/javascript" }

      ],

    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    '~/assets/css/main.min.css',
  ],

  plugins: [
    './plugins/check.ts',
    './plugins/route-guard.ts'
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-api-party',
  ],

  apiParty: {
    endpoints: {
      jsonPlaceholder: {
        url: 'https://admin.itpapa.uz/api',
      }
    }
  },
  devServer: {
    host: '192.168.0.103',
    port: 3000,
  },


})
