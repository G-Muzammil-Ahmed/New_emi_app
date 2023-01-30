import { createStore } from 'redux';
import { users,loanDetails } from '../Assets'

  const initialState = {
    signedIn: false,
    isEligible:true,
    value: 0,
    duration: 0,
    loan: loanDetails[0].amount,
    eligibleLoan: loanDetails[0].amount,
    value: 0,
    duration:0,
    detail:"",
    loan:[],
  }
    
  
  let reducer = (state=initialState, action)=>{
      if(action.type === 'SIGNIN'){
        return{
          ...state,
          signedIn: !state.signedIn
          // value: state.value,
          // duration: state.duration,
          // loan: state.loan,
          // eligible: state.isEligible
        
        }
      }
        if(action.type === 'ELIGIBLE'){

           return{ //signedIn: !state.signedIn,
          //   value: state.value,
          //   duration: state.duration,
          //   loan: state.loan,
            ...state,
            isEligible: !state.isEligible
          
          }

        } if(action.type === 'CHANGEVALUE'){
          return{
            ...state, value: action.payload.val}
          }if(action.type === 'CHANGEDURATION'){
            return{
              ...state, duration: action.payload.val}
            }if(action.type === 'CHANGECALC'){
              return{
                ...state, detail: action.payload.val}
              }
        
        return state;
      }
      
      
    
  

    let myStore = createStore(reducer)
 


export default myStore;
