import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import { ContactUsBanner } from './components/ContactUsBanner'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link href="/fonts.css" rel="stylesheet" />
        </head>
        <body>
          <section className={styles.container}>
            <ContactUsBanner />
            <Nav />
          </section>
          <main className={styles.main}>
            <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>
          </main>
        </body>
      </html>
    </Providers>
  )
}
