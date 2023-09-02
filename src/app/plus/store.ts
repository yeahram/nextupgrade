import { create } from "zustand";
interface setType {
  count: number;
  setCount: () => void;
}
//create은 map과같이 ()=>()로 리턴해준다.
export const useStore = create<setType>((set) => ({
  count: 0,
  //set은 map과같이 ()=>()로 리턴해준다.
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));
