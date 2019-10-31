import React, {Component} from 'react'
import './Style/Body2.css'
import car2 from './car1.png'


export default class Body2 extends Component {
  render(){
      return(
				<div className='container body2'>
          <div className='par2'>
            <h3>Explore the benefit</h3>
            <div className='delimiter'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eaque voluptas quod maiores, sed magnam amet dolorem, voluptatum a expedita unde officiis dicta doloremque eveniet, debitis delectus beatae laboriosam fugiat?</p>
          </div>

          <div className='img2'>
            <img src={car2} alt=""/>
          </div>
        </div>
     )
  }
}