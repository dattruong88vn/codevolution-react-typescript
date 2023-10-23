import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of Item</h2>
      {items.map((item, index) => {
        return <div key={item.id} onClick={() => onClick(item)}></div>;
      })}
    </div>
  );
};