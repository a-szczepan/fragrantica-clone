import { useEffect } from "react";

type Props = {
  id: string;
  label: string;
};

export const Checkbox = ({ id, label }: Props) => {
  useEffect(() => {
    console.log(id, label);
  }, []);

  return (
    <div className="option">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
