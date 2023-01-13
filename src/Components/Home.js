import React from 'react'
import HomeIcons from './HomeIcons'
import './Home.css'


function Home(props) {
  return (
    <div>
    <nav className='myNav'>
        <ul className='myUl'>
            <li>Home</li>
            <button>Logout</button>
        
        </ul>
    </nav>
    <HomeIcons onChangeFunc={props.onChangeFunc}/>
    

    </div>
  )
}

export default Home
