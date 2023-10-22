import { Person } from "./Person";

type PersonListProps = {
  names: { first: string; last: string }[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
        return <Person key={name.first} name={name} />;
      })}
    </div>
  );
};
