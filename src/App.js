import { useState } from 'react';
import Eligibility from './Components/Eligibility';
import Home from './Components/Home';


function App() {
  const [isEligible, setIsEligible] = useState(false)

  const changeFunc = (value)=>{
          setIsEligible(value)
  }
  return (
    <div className="App">
      
      {isEligible && <Home onChangeFunc={changeFunc}/>}
      {!isEligible && <Eligibility  onChangeFunc={changeFunc}/>}
    </div>
  );
}

export default App;

