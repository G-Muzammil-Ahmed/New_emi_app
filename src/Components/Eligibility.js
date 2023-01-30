import React from 'react'
import  './Eligibility.css'
import { loanDetails } from '../Assets'
import { useState, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Eligibility(props) {

    const dispatch = useDispatch();
// const [eligibleLoan, setEligibleLoan] = useState(loanDetails[0].amount)    
// const [value, setValue]= useState(0)
// const [duration, setDuration]= useState(0)
// const [detail, setDetail] = useState('')
// const [loan, setLoan] =  useState([])
const durationInput = useRef('')
const loanInput = useRef('')

  const eligibleLoan = useSelector((state)=>  state.eligibleLoan)
  const value =   useSelector((state)=> state.value)
  const duration =   useSelector((state)=> state.duration)
  const detail=  useSelector((state)=> state.detail)
  const loan =  useSelector((state)=> state.loan)






const changeHandler = ()=>{
   
    let duration = durationInput.current.value;
    let amount = loanInput.current.value;
    let interest = (value/100 * 10)/ (duration * 12) ;
    let calc = amount/(duration * 12) + interest
    calc = calc.toFixed(0)
    // setValue(amount)
    dispatch({type:'CHANGEVALUE', payload:{val:amount}})
    // setDuration(duration)
    dispatch({type:'CHANGEDURATION', payload:{val:duration}})
     if(duration > 0 && amount > 0 ){
    //     setDetail(`Your Per Month EMI will be ${calc}`)
    dispatch({type:'CHANGECALC', payload:{val:`Your Per Month EMI will be ${calc}`}})

     }

   
  


}

const applyHandler = ()=>{
    // setLoan([...loan, {id:(Math.random()*100).toFixed(0), amount: value}])
    // setEligibleLoan((prev)=> prev - value)

    // setValue(0)
    // setDuration(0)
    // console.log(loan)
}
    const clickHandler= ()=>{
            props.onChangeFunc(true)
    }
  return (
    <div id='mainEligibility'>
        <div id='boxMain'>
            <h1 id='loanh1'>Your Loan Eligibility is </h1>
            <h1 id='firstP' > {eligibleLoan} </h1>
        </div>

        <div id='firstDiv'>
        <h3>{value}</h3>  
        <input ref={loanInput} onChange={changeHandler }  type='range' min='0' max={eligibleLoan} id='loaninput'/>
                 
        
        
            <h3>{duration} <span>{detail}</span></h3>
            
            <input id='loaninput' ref={durationInput} onChange={changeHandler} type='range' min='0' max='5'/>
        </div>
        <button id='apply' onClick={applyHandler}>
            Apply
        </button>
      
        


        <button id='firstClose' onClick={clickHandler}> Close </button>
       


      
    </div>
  )
}

export default Eligibility
