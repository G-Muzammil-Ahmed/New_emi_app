import React from 'react'
import './SignIn.css'
import {users} from '../Assets'
import {useState,useRef} from 'react'
import { useDispatch } from 'react-redux'

function SignIn({onSign, signInAttempt}) {
  const [notFound, setNotFound] =  useState(false)
  
  const userInput = useRef();
  const passInput = useRef();
  const dispatch = useDispatch();
  
    const clickHandler =()=>{
      // for(let i=0; i<users.length; i++){
      //   if(users[i].name === userInput.current.value && users[i].password === passInput.current.value){
      //        onSign(users[i].name)
      //   }

        const isUser = users.find(user => (user.name === userInput.current.value && user.password === passInput.current.value))
        if(!isUser){
          alert('either user name or password is incorrect')
        } else {
         // onSign(isUser.name)
         dispatch({type:'SIGNIN'})
        }
      }
      // signInAttempt(true);
    // }
  return (
    <>
   
    <div id='body'>
    <img src='https://i0.wp.com/quikkloan.com/wp-content/uploads/2020/10/Group-12273-1.png?fit=471%2C381&ssl=1' alt='pic'/>
    <div id='main'>

    <h2> Please Login</h2>
       <span id='sSpan'>Username <input type='text' ref={userInput}/></span> 
       <span id='sSpan'> Password <input type='password' ref={passInput}/></span> 
       <button onClick={clickHandler}> Login </button>
      
    </div>
    </div></>
  )
}

export default SignIn
