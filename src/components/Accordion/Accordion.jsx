import { useState } from "react";
import AccordionSection from "./AccordionSection";
import "./Accordion.css";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="accordionStyle">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActive={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
