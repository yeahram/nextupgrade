"use client";
import { yeramStyle } from "./plus/style";
import Image from "next/image";
import { useStore } from "./plus/store";
import Plus from "./plus/plus";
import Todo from "./todo/todo";

export default function Home() {
  //plus 컴포넌트
  // const { count, setCount } = useStore();

  //todo

  return (
    <div>
      {/* plus 컴포넌트 */}
      {/* <Plus></Plus> */}
      {/* todo */}
      <Todo></Todo>
    </div>
  );
}
