import { FunctionComponent, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from '@mui/material'
import { CartItem } from "@/lib/redux";
import CartItemPopup from "./CartItemPopup";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      contrastText: '#fff'
    },
  },
});


interface CartPopupProps {
  cartItems: CartItem[],
  total: number,
  onRemove: (id: number) => void
}

const CartPopup: FunctionComponent<CartPopupProps> = ({
  cartItems, total, onRemove
}) => {
  const router = useRouter()

  const createHandleMenuClick = (menuItem: number) => {
    return () => {
      router.push(`/product/${menuItem}`)
    };
  };

  const createHandleViewAllClick = () => {
    return () => {
      router.push(`/cart`)
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <MenuButton>
          <ShoppingCartIcon className={`${cartItems.length ? 'text-primary' : 'text-gray'}`} />
          <span className={`${cartItems.length ? 'text-primary' : 'text-gray'} "px-1 mx-2`}>{cartItems.length}</span>
        </MenuButton>
        <Menu slots={{ listbox: Listbox }}>
          {cartItems.map(option =>
            <MenuItem key={option.id} onClick={createHandleMenuClick(option.id)}>
              {option.id && <CartItemPopup {...option} onRemove={onRemove} />}
            </MenuItem>)
          }
          <MenuItem  onClick={createHandleViewAllClick()} className="flex items-center justify-between my-6 b-1">
            <h2 className="font-bold lg:text-xl">Total: <span className="text-secondary">${total.toFixed(2)}</span></h2>

            <Button variant="outlined">
              <Link href="/cart">View All</Link>
            </Button>
          </MenuItem>
        </Menu>
      </Dropdown>
    </ThemeProvider>
  )
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: #fff;
    border: 1px solid ${grey[200]};
    color: #737373;
    box-shadow: 0px 4px 30px ${grey[200]};
    z-index: 1;
    `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;
  
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background: ${grey[100]};
      border-color: ${grey[300]};
    }
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${blue[200]};
      color: ${grey[900]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${grey[400]};
    }
  
    &:hover:not(.${menuItemClasses.disabled}) {
      color: ${blue[900]};
    }
    `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
    border-radius: 8px;
    font-weight: 700;
    transition: all 150ms ease;
    cursor: pointer;
    color: #737373;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
    &:hover {
      background: ${grey[50]};
      border-color: ${grey[300]};
    }
  
    &:active {
      background: ${grey[100]};
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${blue[200]};
      outline: none;
    }
    `,
);
export default CartPopup;