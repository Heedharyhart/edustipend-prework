import "./Accordion.css";

const AccordionSection = ({ section, isActive, setActiveIndex, sectionIndex }) => {
  const toggleSection = () => {
    const nextIndex = isActive ? null : sectionIndex 
    setActiveIndex(nextIndex);
  }

  return (
    <div>
      <div className="accordionTittle" onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordionContent">{section.content}</div>}
    </div>
  );
};

export default AccordionSection;
