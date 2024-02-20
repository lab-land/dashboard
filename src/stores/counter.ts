import { create } from "zustand";

interface CounterState {
  counter: number;
  increment: () => void;
  decrement: (by: number) => void;
}

export const useCounter = create<CounterState>()((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: (by) => set((state) => ({ counter: state.counter - by })),
}));
