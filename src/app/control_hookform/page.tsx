"use client";
import { yeramStyle } from "./style";
import Image from "next/image";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useStore } from "./store";
import { Schema } from "./schema";

export default function TodoZode() {
  const { push, setPush } = useStore(); //react hook form 을 이용함으로 써 주석 처리

  type SchemaType = z.infer<typeof Schema>; //onSubmit이나 map, filedArray쓸때 사용

  //type을 typeof+변수 로 넣어줘야한다.
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: SchemaType) => {
    setPush(data.inputTodo);
    console.log("input 입력 값 : ", data.inputTodo);
  };
  // const watch = useWatch({ control });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${yeramStyle} text-blue-500`}>
          <Controller
            control={control}
            name="inputTodo"
            render={({ field, formState }) => (
              <>
                <input
                  onChange={field.onChange}
                  className="border"
                  placeholder="입력해주세용~"
                ></input>

                {/* <p>{formState.errors.inputTodo?.message}</p> */}
                {/* 일반적으로 controll을 써서 가져오지 않는 경우에는 react hook form에서 formError를 넣어서 가져오면 된다. */}
              </>
            )}
          />

          <button type="submit" className="w-20 border">
            +
          </button>
        </div>
        <div className="text-red-600">{errors.inputTodo?.message}</div>
      </form>
    </div>
  );
}
