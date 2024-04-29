import '../css/Explore.css';
import exploreCars from './exploreCar';
import AccordionItem from "./AccordionItem";


// This is a card components page that satisfies the following partially required features:
// - Accordions or Tabs
//   - These require that content is conditionally shown based on changing the Accordion from open to closed or on selecting a "Tab"
//   - These must be usable and identified to accessibility tech, relying on semantic HTML where possible and using aria-properties when needed. 
function Explore() {

  const bmwSet = exploreCars.map( item => {
    return (
      <div key={item.model} className="explore_card">
        <AccordionItem 
          id={item.model}
          className="explore_accordion"
          title={item.model}
          imagePath={item.imagePath}
          imageAlt={item.model}
        >
          <ul className='explore_description'>
            <li className='explore_description_item'>Engine: {item.Engine}</li>
            <li className='explore_description_item'>Acceleration: {item.Acceleration}</li>
            <li className='explore_description_item'>HP: {item.HP}</li>
          </ul>
        </AccordionItem>
        <img className="accordion_image" src={item.imagePath} alt={item.model} />
      </div>
    )
  })

  return (
    <main className="main_explore" id="main">
      {bmwSet}
    </main>
  );
}

export default Explore;