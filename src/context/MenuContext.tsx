import { ReactNode, createContext, useState } from 'react';

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

type MenuProviderType = {
  children: ReactNode
}

export const MenuContext = createContext<MenuContextType|null>(null);

export const MenuProvider = ({children}: MenuProviderType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
