import React, {Component} from 'react'
import './Style/Footer.css'

export default class Footer extends Component {
  render(){
      return(
				<div className='footer'>
          <ul id="menu">
          <li><a href="http://facebook.com/">Facebook</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://www.instagram.com/">Instagram</a></li>
        </ul>  
        </div>
     )
  }
} 