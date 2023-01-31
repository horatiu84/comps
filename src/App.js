import AcordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const App = () => {
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
    <div>
      <AcordionPage />
      <div className="flex">
        <Dropdown onChange={handleSelect} value={selection} options={options} />
        <Dropdown
          onChange={handleSelect}
          value={selection}
          options={options}
        />
      </div>
    </div>
  );
};

export default App;
