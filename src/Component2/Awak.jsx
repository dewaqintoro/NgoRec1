import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Style/Awak.css'
import Maps from '../Asset/map.png'

class Awak extends Component{
  render(){
      return(
      <div className='awak'>

				<div className="awak1">
					<div className="row">
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
					</div>
				</div>

				<div className="awak2">
					<div className="row">
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
						<div className="col">
							<img className="map" src={Maps} alt=""/>
							<h2>Ini Maps</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat distinctio corporis voluptate repellendus officia rerum. Commodi odit debitis fugiat.</p>
						</div>
					</div>
				</div>

       </div>
			)    
		}
}

export default Awak