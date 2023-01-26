import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const items = [ 
    {
      id: '1f',
      label : 'Can I use react on a project?',
      content: "You can use React on any project you want!"
    },
    {
      id: '2a',
      label : 'Can I use javaScript on a project?',
      content: "You can use javaScript on any project you want!"
    },
    {
      id: '4a',
      label : 'Can I use CSS on a project?',
      content: "You can use CSS on any project you want!"
    }
  ]

const AcordionPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex( currentExpandedIndex => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex;
      }
    } )
  };

  const renderItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>

        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItems}</div>;
};

export default AcordionPage;
