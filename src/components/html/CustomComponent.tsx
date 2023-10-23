import React from "react";
import { Greet } from "../Greet";

export const CustomComponent = ({
  name,
  isLoggin,
  messageCount,
}: React.ComponentProps<typeof Greet>) => {
  return <div>CustomComponent</div>;
};
