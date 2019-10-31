import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Style/Galery.css'

class Galery extends Component{
  render(){
     return(
      <div className="galery">

				{/* <h3>GALERY</h3> */}
				<div class="row">

					<div class="col-sm">
						<div className="cilik"></div>
					</div>
					<div class="col-sm">
						<div className="cilik"></div>
					</div>

					<div class="col-sm">
						<div className="gedi"></div>
					</div>

					<div class="col-sm">
						<div className="cilik"></div>
					</div>

					<div class="col-sm">
						<div className="cilik"></div>
					</div>
					
				</div>
				{/* <h3>w</h3> */}
      </div>
    )
  }
}

export default Galery