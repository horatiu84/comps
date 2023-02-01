import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className="flex">
      <Dropdown onChange={handleSelect} value={selection} options={options} />
    </div>
  );
};

export default DropDownPage;
