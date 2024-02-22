import { create } from "zustand";
import { persist } from "zustand/middleware";

type StateExample = {
  bears: number;
  incrementBears: () => void;
};

export const useExample = create(
  persist<StateExample>(
    (set) => ({
      bears: 0,
      incrementBears() {
        set((state) => ({ bears: state.bears + 1 }));
      },
    }),
    {
      name: "bears",
    }
  )
);
