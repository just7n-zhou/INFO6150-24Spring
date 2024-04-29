import { useState } from 'react';
import Button from './Button';

function AccordionItem({ id, className, title, children }) {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionClass = isExpanded ? '' : 'accordion_section_hidden';

  return (
    <div className={className}>
      <Button 
          className='accordion_button' 
          id={`${id}-header`} 
          text={title} 
          onClick={() => setIsExpanded(!isExpanded)} 
          ariaExpanded={isExpanded} 
          ariaControls={`${id}-panel`} 
      />
      <section
        className = {`accordion_section ${sectionClass}`}
        id={`${id}-panel`}
        aria-labelledby={`${id}-header`}
        hidden={!isExpanded}
      >
        {children}
      </section>

    </div>
  )
}

export default AccordionItem;