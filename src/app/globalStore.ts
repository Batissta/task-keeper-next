import { create } from "zustand";

type tUser = {
  name: string;
  github: string;
};

type Store = {
  user: tUser | null;
  setUser: (user: tUser) => void;
};

const useStore = create<Store>()((set) => ({
  user: null,
  setUser: (user: tUser) => set({ user }),
}));

export default useStore;
