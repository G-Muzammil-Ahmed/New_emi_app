import { useState } from 'react';
import Eligibility from './Components/Eligibility';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import { useSelector, useDispatch } from 'react-redux';

import './App.css'



function App() {
  const [signInAttempted, setSignInAttempted] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState('')

  const newSignedIn = useSelector((state) => state.signedIn);
  const isEligible = useSelector((state)=> state.isEligible)


  console.log(newSignedIn)
 const dispatch = useDispatch();

  const changeFunc = ()=>{
          //setIsEligible((prev)=>!prev)
          dispatch({type:'ELIGIBLE'})
  }
  const signedInFunc = (value)=>{
    setLoggedUser(value)
    setSignedIn((prev)=>!prev)
   
  }
  console.log(signInAttempted)
  return (
    <>
    {!newSignedIn? (<SignIn onSign={signedInFunc} signInAttempt={setSignInAttempted} />): ( <div className="App">
      
      {isEligible && <Home user={loggedUser} onSign={signedInFunc} onChangeFunc={changeFunc}/>}
      {!isEligible && <Eligibility  onChangeFunc={changeFunc}/>}
    </div>)}
   
    </>
  );
}

export default App;

