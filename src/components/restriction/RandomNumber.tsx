import React from "react";
type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegateveNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegateveNumber | ZeroNumber;

function RandomNumber({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "isNegative"}{" "}
      {isZero && "isZero"}{" "}
    </div>
  );
}

export default RandomNumber;
