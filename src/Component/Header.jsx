import React, {Component} from 'react'
import './Style/Header.css'

class Header extends Component{
  render(){
      return(

          <div className='header'>
						<h1>The Only way to do something desireable</h1>
            <h3>supporting statement to estabilish creditibility</h3>
            <div className='delimiter'/>
            <button className='button'>CTA Button</button>
          </div>
			)    
		}
}

export default Header