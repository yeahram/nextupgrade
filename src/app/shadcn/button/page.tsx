"use client";
import { Button } from "../../../components/ui/button";
import { Apple } from "lucide-react";

const ButtonComponent = () => {
  return (
    <>
      <Button variant="purple">
        <Apple size={17} />
        버튼
      </Button>
    </>
  );
};
export default ButtonComponent;
