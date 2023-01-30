import React from 'react'
import './Home.css'
import Icon from '../money.png'
import Icon2 from '../quote-request.png'
import Icon3 from '../checked.png'
import navIcon from '../hamburger.png'
import { useDispatch } from 'react-redux'


function HomeIcons(props) {
    const photo = 'https://foundationcreditunion.com/wp-content/uploads/2021/07/loan-money-bag-next-to-gold.jpg'

   const dispatch = useDispatch()
    const clickHandler =()=>{
          //props.onChangeFunc(false)
          dispatch({type:'ELIGIBLE'})

    }

  return (
    <div id='iconMain'>
      <div onClick={clickHandler} className='innerLeftB'>
        <img src={Icon} id='firstImg' alt='Money icon'/>
      <h3 > Check your Eligibility</h3>
      <p> Click here to know the Maximum amount you can Withdraw</p>
      </div>

      <div className='innerLeftB'> 
        <img src={Icon3} id='secondImg'/>
        <h3 >Check your EMI</h3>
        <p>Click here to configure your EMI tunure and intrest rate</p>
      </div>

    
   
   

    
      <div  className='innerRightB'>
        <img src={Icon2} id='thirdImg'/>

      <h3 > Request</h3>
      <p> Click here to request for change in EMI due to circumstances</p>
      </div>

      <div  className='innerRightB'>
      <img src={navIcon} id='firstNav'/>

        <h3 >Edit</h3>
        <p>Click here to edit your account</p>
      

    </div>
    
    </div>
  )
}

export default HomeIcons
