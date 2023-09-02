import { create } from "zustand";
interface setType {
  push: string;
  setPush: (v: string) => void;
}

//create은 map과같이 ()=>()로 리턴해준다.
export const useStore = create<setType>((set) => ({
  push: "",
  //set은 map과같이 ()=>()로 리턴해준다.
  setPush: (value) =>
    set(() => {
      console.log(value);
      return { push: value };
    }),
}));
