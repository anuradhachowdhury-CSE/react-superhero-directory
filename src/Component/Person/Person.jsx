import React from 'react'
import './Person.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faSackDollar,faAngry,faf } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const{Name,Role,Age,Salary,Country,img} = props.product;
  return (
    <div>
      <div className='griding animate__animated animate__backInLeft'>
        <div >
        <h3 className='name'>Name:{Name}</h3>
        <h4>Job:{Role}</h4>
        <h4>Age:{Age}</h4>
        <h4><FontAwesomeIcon icon={faSackDollar} />Salary:{Salary}</h4>
        <h4>Country:{Country}</h4>
        <img src={img} alt="" />
        <br/>
        <button onClick={() =>props.handleAddToCart(props.prod)} className='btn'>  Add To Cart</button>
        <br />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faAngry} />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>
       </div>
    </div>
  )
}

export default Person