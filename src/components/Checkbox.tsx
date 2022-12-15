import { useEffect, useContext, ChangeEvent, useState } from "react";
import { FilteringContext } from "../context/FilteringContextProvider";
import { ActionType } from "../types/shared";
type Props = {
  id: string;
  name: string;
  label: string;
};

export const Checkbox = ({ id, name, label }: Props) => {
  const context = useContext(FilteringContext);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    type ObjectKey = keyof typeof context;
    const list: string[] = context?.state[name as ObjectKey] ?? [];
    if (list.includes(label)) {
      setIsChecked(true);
    }
  }, [context?.state, label, name]);
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const action = e.target.checked
      ? `ADD_${name.toUpperCase()}`
      : `DELETE_${name.toUpperCase()}`;
    context?.dispatch({
      type: action as ActionType,
      payload: {
        [name]: label,
      },
    });
    setIsChecked(e.target.checked);
  }

  return (
    <div className="option">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
