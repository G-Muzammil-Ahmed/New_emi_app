import React from 'react'
import  './Eligibility.css'

function Eligibility(props) {


    const clickHandler= ()=>{
            props.onChangeFunc(true)
    }
  return (
    <div id='mainEligibility'>
        <div id='boxMain'>
            <h2>Your Loan Eligibility is </h2>
            <h2 id='firstP' > Rs-/ 684000 </h2>
        </div>

        <div>
            <input type='range' max='0' min='684000' id='firstInput'/>
        </div>

        <div>
            <h3></h3>
        </div>

        <button id='firstClose' onClick={clickHandler}> Close </button>
       


      
    </div>
  )
}

export default Eligibility
