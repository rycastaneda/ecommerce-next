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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap" rel="stylesheet" />
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
