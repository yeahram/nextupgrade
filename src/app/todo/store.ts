import { create } from "zustand";
interface setType {
  push: string;
  setPush: () => void;
}

//create은 map과같이 ()=>()로 리턴해준다.
export const useStore = create<setType>((set) => ({
  push: "",
  //set은 map과같이 ()=>()로 리턴해준다.
  setPush: () =>
    set((state) => {
      console.log(state.push);
      return { push: state.push };
    }),
}));
