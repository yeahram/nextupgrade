"use client";
import { yeramStyle } from "./style";
import Image from "next/image";
import { useStore } from "./store";
import { useForm } from "react-hook-form";
interface DataType {
  input: string;
}
export default function Todo() {
  const { push, setPush } = useStore();

  //react hook form 타입지정 꼭해주기!
  const { handleSubmit, register } = useForm<DataType>();
  const onSubmit = (data: DataType) => {
    console.log(data);
  };
  return (
    <div className={`${yeramStyle} text-blue-500`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("input")}
          placeholder="입력해주세요!!"
          className="w-50 border"
        ></input>
        <button type="submit" className="w-20 border">
          +
        </button>
      </form>
    </div>
  );
}
