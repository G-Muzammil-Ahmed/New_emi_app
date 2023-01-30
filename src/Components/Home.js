import React from 'react'
import HomeIcons from './HomeIcons'
import './Home.css'
import {users} from '../Assets'
import { useDispatch } from 'react-redux'


function Home(props) {
  const dispatch = useDispatch();
  const clickHandler =()=>{
    //props.onSign()
    dispatch({type:'SIGNIN'})
  }
  return (
    <div>
    <nav className='myNav'>
        <ul className='myUl'>
            <li>Home</li>
            <li style={{color:'yellow',marginRight:'1000px'}}><span style={{marginRight:'24px'}}>Welcome!</span>  <span>{props.user}</span></li>
            <button onClick={clickHandler}>Logout</button>
        
        </ul>
    </nav>
    <HomeIcons onChangeFunc={props.onChangeFunc}/>
    

    </div>
  )
}

export default Home
