import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggin: boolean;
};

export const Greet = ({ name, messageCount = 0, isLoggin }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggin
          ? `Welcome ${name}. You have ${messageCount} unreads messages.`
          : "Welcome guest"}
      </h2>
    </div>
  );
};
