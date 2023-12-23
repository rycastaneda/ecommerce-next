'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
/* Instruments */
import styles from '../styles/layout.module.css'
import PhoneIconOutlined from '@mui/icons-material/PhoneOutlined';
import EmailIconOutlined from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const ContactUsBanner = () => {
  const pathname = usePathname()

  return (
    <div className="bg-secondary p-4 lg:flex hidden font-bold">
      <aside className="mr-auto">
        <Link
          className={`${styles.link} no-underline text-light ml-4`}
          href="tel: (225) 555-0118"
        >
          <PhoneIconOutlined />
          <span className="pl-1">(225) 555-0118</span>
        </Link>
        <Link
          className={`${styles.link} ${pathname === '/verify' ? styles.active : ''
            } no-underline text-light pl-2`}
          href="mailto:michelle.rivera@example.com"
        >
          <EmailIconOutlined />
          <span className="pl-1">michelle.rivera@example.com</span>
        </Link>
      </aside>
      <aside className="mx-auto text-light">
        Follow Us  and get a chance to win 80% off
      </aside>
      <aside className="text-light flex items-center justify-items-center">
        Follow Us  :
        <Link className="px-2" href="https://www.instagram.com">
          <InstagramIcon/>
        </Link>
        <Link className="px-2" href="https://www.facebook.com">
          <FacebookIcon/>
        </Link>
        <Link className="px-2" href="https://www.youtube.com">
          <YouTubeIcon/>
        </Link>
        <Link className="" href="https://www.twitter.com">
          <TwitterIcon/>
        </Link>
      </aside>
    </div>
  )
}
