import { create } from 'zustand'

type CartStore = {
  cart: number,
  add: () => void,
  remove: () => void,
  removeAll: () => void,
  stalls: StallsStruct
}

export type StallStruct = {
  name: string;
}

export type StallsStruct = {
  male: StallStruct[],
  female: StallStruct[],
  accessible: StallStruct[],
  baby: StallStruct[],
}

export const useCartStore = create<CartStore>((set) => ({
  cart: 0,
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
  stalls: {
    male: [
      { name: "Male 1" },
      { name: "Male 2" },
      { name: "Male 3" }
    ],
    female: [
      { name: "Female 1" },
      { name: "Female 2" },
      { name: "Female 3" },
      { name: "Female 4" },
      { name: "Female 5" },
      { name: "Female 6" },
      { name: "Female 7" },
      { name: "Female 8" },
      { name: "Female 9" }
    ],
    accessible: [
      { name: "Accessible" }
    ],
    baby: [
      { name: "Baby" }
    ],
  }
}));