import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};
