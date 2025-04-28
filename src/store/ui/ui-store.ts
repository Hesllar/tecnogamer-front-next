import { create } from "zustand";

interface State {
  sidebarFilter: {
    isSidebarFilterOpen: boolean;
    openSidebarFilter: () => void;
    closeSidebarFilter: () => void;
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
    openSidebarFilter: () => {
      const { sidebarFilter } = get();

      set({ sidebarFilter: { ...sidebarFilter, isSidebarFilterOpen: true } });
    },
    closeSidebarFilter: () => {
      const { sidebarFilter } = get();

      set({ sidebarFilter: { ...sidebarFilter, isSidebarFilterOpen: false } });
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
