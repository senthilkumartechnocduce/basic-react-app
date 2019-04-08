import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    var : 0
		}
		this.incrementFunction = this.incrementFunction.bind(this);
	}
	incrementFunction(event) {
		this.setState({
		  var : this.state.var + 1
		})
	}
	render() {
		return [
			<div>
				<div key="a" className="home_banner full_row">
					<div className="container">
						<h1 className="wow fadeInDown">Indulge your tastebuds with <b>MinWein</b></h1>
						<h2 className="wow fadeInDown" onClick={(event) => {this.incrementFunction(event)} }>{this.state.var === 0 ? 'Touch me!' : `Oh God! You touched me ${this.state.var} time${this.state.var === 1 ? '' : 's' }.` }</h2>
						
						<form className="banner_form wow fadeInUp" action="listing.html">
							<div className="form-group map">
								<input type="text" className="form-control" placeholder="Enter your location" />
							</div>
							<div className="form-group cuisine">
								<input type="text" className="form-control" placeholder="Search for cuisine or food" />
							</div>
							<Link id="search_btn" className="btn" to="/restaurants"></Link>
						</form> 
					</div> 
				</div>

				<div key="b" className="steps full_row">
					<div className="container">
						<div className="col-xs-3 wow fadeInUp">
							<img src="images/step_1.jpg" />
							<span>1</span>
							<h3>Choose Location</h3>
						</div>
						<div className="col-xs-3 wow fadeInUp">
							<img src="images/step_2.jpg" />
							<span>2</span>
							<h3>Choose Restaurant</h3>
						</div>
						<div className="col-xs-3 wow fadeInUp">
							<img src="images/step_3.jpg" />
							<span>3</span>
							<h3>Choose Menu</h3>
						</div>
						<div className="col-xs-3 wow fadeInUp">
							<img src="images/step_4.jpg" />
							<span>4</span>
							<h3>Order & Get Delivered</h3>
						</div>
					</div>
				</div>

				<div key="c" className="mobile_app full_row">
					<div className="container">
						<ul className="options reset">
							<li className="wow fadeInLeft">
								<i className="icon icon_1"></i>
								<h3>Register / Login</h3>
							</li>
							<li className="wow fadeInLeft">
								<i className="icon icon_2"></i>
								<h3>Restaurant Listing</h3>
							</li>
							<li className="wow fadeInLeft">
								<i className="icon icon_3"></i>
								<h3>Menu Listing</h3>
							</li>
						</ul>
						
						<div className="app_img">
							<p>
								<img src="images/mobile_app.png" className="wow fadeInUp"/>
							</p>
							<p className="download">
								<a href="" target="_blank"><img src="images/appstore.png" className="wow fadeInUp" /></a>
								<a href="" target="_blank"><img src="images/playstore.png" className="wow fadeInUp"/></a>
							</p>
						</div>
						
						<ul className="options right reset">
							<li className="wow fadeInRight">
								<i className="icon icon_4"></i>
								<h3>My Cart</h3>
							</li>
							<li className="wow fadeInRight">
								<i className="icon icon_5"></i>
								<h3>Checkout</h3>
							</li>
							<li className="wow fadeInRight">
								<i className="icon icon_6"></i>
								<h3>Order Status</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
		];
	}
}

export default HomePage;
