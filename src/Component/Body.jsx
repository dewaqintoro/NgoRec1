import React, {Component} from 'react'
import './Style/Body.css'
import car1 from './car1.png'

export default class Body extends Component {
  render(){
      return(
      <div className="body">

          <div class="row body1">
            <div class="col-4">
              <div className='img1'>
                <img src={car1} alt=""/>
              </div>
            </div>

            <div class="col">
              <div className='par'>
                <h3>Explore the benefit</h3>
                <div className='delimiter'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eaque voluptas quod maiores, sed magnam amet dolorem, voluptatum a expedita unde officiis dicta doloremque eveniet, debitis delectus beatae laboriosam fugiat?</p>
              </div>
            </div>
            <div className="col-1"></div>
          </div>

          <div class="row body2">
            <div className="col-1"></div>
            <div class="col">
              <div className='par'>
                <h3>Explore the benefit</h3>
                <div className='delimiter'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eaque voluptas quod maiores, sed magnam amet dolorem, voluptatum a expedita unde officiis dicta doloremque eveniet, debitis delectus beatae laboriosam fugiat?</p>
              </div>
            </div>

            <div class="col-4">
              <div className='img1'>
                <img src={car1} alt=""/>
              </div>
            </div>
          </div>

      </div>
     )
  }
}