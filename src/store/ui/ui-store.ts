import { create } from "zustand";

interface State {
  sidebarFilter: {
    isSidebarFilterOpen: boolean;
    openSidebarFilter: () => void;
    closeSidebarFilter: () => void;
  };
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
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
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
