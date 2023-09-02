"use client";
import { yeramStyle } from "./plus/style";
import Image from "next/image";
import { useStore } from "./plus/store";

import Plus from "./plus/plus"; // plus 컴포넌트
import Todo from "./todo/todo"; // typescript 사용한 todo
import TodoZode from "./todoZod/todo"; // zod 사용한 todoZod

export default function Home() {
  //plus 컴포넌트
  // const { count, setCount } = useStore();

  //todo

  return (
    <div>
      {/* plus 컴포넌트 */}
      {/* <Plus></Plus> */}

      {/* typescript 사용한 todo */}
      {/* <Todo></Todo> */}

      {/* typescript 사용한 todo */}
      <TodoZode></TodoZode>
    </div>
  );
}
