import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Style/Sikel.css'
import './Style/w3.css'
import Icon from './car1.png'

class Sikel extends Component{
  render(){
    return(
			<div className="sikel">
				<div className="sosial">
					<h2>SOCIAL PROOF</h2>
				</div>

				<div>
					<div className="sikelsos">
					<div className="row">

						<div className="col-sm-2">&nbsp;</div>

						<div className="col-sm-4 kiri">
							<div class="w3-card-4">
								<div class="w3-container w3-center">
									<img src={Icon} alt=""/>
									<h3><b>Yem</b></h3>
									<h4>@Yem1234</h4>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>

							</div>
						</div>

						<div className="col-sm-4 kanan">
							<div class="w3-card-4">
								<div class="w3-container w3-center">
									<img src={Icon} alt=""/>
									<h3><b>Ara</b></h3>
									<h4>@Ara1234</h4>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>

							</div>
						</div>

						<div className="col-sm-2">&nbsp;</div>
					</div>
					</div>
				</div>
			</div>
		)
  }
}

export default Sikel