import { create } from "zustand";

interface State {
  sidebarFilter: {
    isSidebarFilterOpen: boolean;
    toggleSideFilterMenu: () => void;
  };
  sideMenuDesktop: {
    isSideMenuOpen: boolean;
    toggleSideMenu: () => void;
  };
  sideMenuMobile: {
    isSideMenuOpen: boolean;
    toggleSideMenu: () => void;
  };
}

export const useUIStore = create<State>()((set, get) => ({
  sidebarFilter: {
    isSidebarFilterOpen: false,
    toggleSideFilterMenu: () => {
      const { sidebarFilter } = get();

      set({
        sidebarFilter: {
          ...sidebarFilter,
          isSidebarFilterOpen: !sidebarFilter.isSidebarFilterOpen,
        },
      });
    },
  },
  sideMenuDesktop: {
    isSideMenuOpen: true,
    toggleSideMenu: () => {
      const { sideMenuDesktop } = get();

      set({
        sideMenuDesktop: {
          ...sideMenuDesktop,
          isSideMenuOpen: !sideMenuDesktop.isSideMenuOpen,
        },
      });
    },
  },
  sideMenuMobile: {
    isSideMenuOpen: false,
    toggleSideMenu: () => {
      const { sideMenuMobile } = get();

      set({
        sideMenuMobile: {
          ...sideMenuMobile,
          isSideMenuOpen: !sideMenuMobile.isSideMenuOpen,
        },
      });
    },
  },
}));
