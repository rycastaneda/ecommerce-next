'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'
import NavDropdown from './NavDropdown/NavDropdown'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from './Cart'
import WishlistPopup from './Wishlist/WishlistPopup'
import useWishlist from '../product/[id]/useWishlist'
export const Nav = () => {
  const pathname = usePathname()
  
  const {cartItems, cartStatus} = useCart(null);
  const {wishlistItems, onRemove} = useWishlist(null)

  return (
    <>
      <nav className="bg-light font-bold p-4 flex items-center justify-between">
        <Link
          className={`inline-block font-bold text-gray w-45 lg:text-2xl text-lg ${pathname === '/' ? styles.active : ''}`}
          href="/"
        >
          Bandage
        </Link>
        <div className='lg:inline-flex hidden text-gray justify-items-center mr-auto'>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/' ? styles.active : ''
              }`}
            href="/"
          >
            Home
          </Link>
          <NavDropdown buttonText='Shop' options={['Men', 'Women', 'Children']}/>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/about' ? styles.active : ''
              }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/blog' ? styles.active : ''
              }`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/contact' ? styles.active : ''
              }`}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/pages' ? styles.active : ''
              }`}
            href="/pages"
          >
            Pages
          </Link>
        </div>
        <div className='lg:block flex w-3/4 lg:w-auto'>
          <Link href="/login" className="hidden lg:inline-block text-primary pr-2">
            <PersonIcon/>
            Login / Register
          </Link>
          <Link href="/search" className="text-primary px-3 ml-auto lg:ml-0">
            <SearchIcon/>
          </Link>
          { cartStatus === 'loaded' && <Link href="/cart" className={`${cartItems.length ? 'text-primary' : 'text-gray'} px-4`}>
            <ShoppingCartIcon/>
            <span className="px-1">{cartItems.length}</span>
          </Link>}
          <WishlistPopup wishlistItems={wishlistItems} onRemove={onRemove}/>
        </div>
      </nav>
      <div className='flex flex-col lg:hidden text-gray justify-items-center mx-auto text-center'>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/' ? styles.active : ''
              }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/about' ? styles.active : ''
              }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/blog' ? styles.active : ''
              }`}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/contact' ? styles.active : ''
              }`}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={`${styles.link} pl-2 ${pathname === '/pages' ? styles.active : ''
              }`}
            href="/pages"
          >
            Pages
          </Link>
        </div>
    </>
  )
}
