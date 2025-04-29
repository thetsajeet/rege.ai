import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type User = {
  userId: string;
  username: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  logIn: (data: User) => void;
  logOut: () => void;
};

export const useAuthStore = create<AuthStore>()(
  immer((set) => ({
    user: null,
    logIn: (data: User) =>
      set((state) => {
        state.user = data;
      }),
    logOut: () =>
      set((state) => {
        state.user = null;
      }),
  })),
);
