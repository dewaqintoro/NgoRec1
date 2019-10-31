import React, {Component} from 'react'
import './Style/Body1.css'
import car1 from './car1.png'

export default class Body1 extends Component {
  render(){
      return(
        <div className='container body1'>

          <div className='img1'>
            <img src={car1} alt=""/>
          </div>

          <div className='par'>
            <h3>Explore the benefit</h3>
            <div className='delimiter'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eaque voluptas quod maiores, sed magnam amet dolorem, voluptatum a expedita unde officiis dicta doloremque eveniet, debitis delectus beatae laboriosam fugiat?</p>
          </div>
        </div>
				
     )
  }
}