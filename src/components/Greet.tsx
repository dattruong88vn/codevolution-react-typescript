import React from "react";

type GreetProps = {
  name: string;
};

export const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h2>Welcome {name}</h2>
    </div>
  );
};
