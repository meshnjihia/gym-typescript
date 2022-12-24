import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  name: string;
  description?: string;
  Image: string;
};

const Class = ({ name, description, Image }: Props) => {

  const overLayStyle = `p-5 absolute z-5 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className="relative mx-5 inline-block w-[450px] h-[380px]">
      <div className={overLayStyle}>
        <p className="text-xl">{name}</p>
        <p className="mt-5 text-sm">{description}</p>
      </div>
      <img src={Image} alt={`${Image}`} />
    </li>
  );
};

export default Class;
