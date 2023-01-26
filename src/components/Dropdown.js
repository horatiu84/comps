import { useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

 

  return (
    <div>
      <div onClick={handleClick}>{value?.label || 'Select ...'}</div>
      <div>{isOpen && <div>{renderOptions}</div>}</div>
    </div>
  );
};

export default Dropdown;
