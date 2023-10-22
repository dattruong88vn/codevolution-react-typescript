import { Person } from "./Person";
import { Name } from "./Person.type";

type PersonListProps = {
  names: Name[];
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
