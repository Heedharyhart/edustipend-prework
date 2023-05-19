import { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Button from './components/Button/Button';

const accordionData = [
  
  {
    title: "Unavailable By Davido",
    content: `lorem ipsum dolor sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, 
    consectetue adipiscing elit. quysqe id erat amey sit amet, consectetue adipiscing elit. 
    quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameysit amet, 
    consectetue adipiscing elit. quysqe id erat ameysit amet, consectetue adipiscing elit. 
    quysqe id erat ameysit amet, consectetue adipiscing elit. quysqe id erat ameyvsit amet, consectetue adipiscing elit. 
    quysqe id erat amey`,
  },
];

const App = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  return (
    <div className="App">
        <Button type="submit" isDisable={btnDisabled} className={`btn btn-primary`}>submit</Button> 
        <Accordion sections={accordionData} />
    </div>
  );
}

export default App;
