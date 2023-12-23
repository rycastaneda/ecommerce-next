import { FunctionComponent } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import styled from "@emotion/styled";
import Link from "next/link";
import {default as WishlistItem} from "./WishlistItem";
import { Product } from "@/lib/redux/slices/productSlice/type";
import { ThemeProvider, createTheme } from '@mui/material'
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      contrastText: '#fff'
    },
  },
});


interface WishlistPopupProps {
  wishlistItems: Product[],
  onRemove: (id: number) => void
}

const WishlistPopup: FunctionComponent<WishlistPopupProps> = ({
  wishlistItems, onRemove
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Dropdown>
        <MenuButton>
          <FavoriteIcon className={`${wishlistItems.length ? 'text-primary' : 'text-gray'}`}/>
          <span className="px-1">{wishlistItems.length}</span>
        </MenuButton>
        <Menu slots={{ listbox: Listbox }}>
          {wishlistItems.map(option =>
            <MenuItem key={option.id}>
              <WishlistItem {...option} onClick={onRemove} />
            </MenuItem>)
          }
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
    font-family: 'IBM Plex Sans', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
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
export default WishlistPopup;