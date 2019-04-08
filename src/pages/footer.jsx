import React, { Component } from 'react';

class FooterPage extends Component {
    render() {
        return(
            <footer className="site_footer full_row">
				<div className="footer_menu full_row">
					<div className="container">
						<ul className="reset">
							<li><a href="terms-conditions.html">Terms & Conditions</a></li>
							<li><a href="privacy-policy.html">Privacy Policy</a></li>
							<li><a href="about-us.html">About us</a></li>
							<li><a href="faq.html">FAQ</a></li>
							<li><a href="contact-us.html">Contact Us</a></li>
							<li><a href="driver-registration.html">Driver Registration</a></li>
							<li><a href="truck-registration.html">Food Truck Registration</a></li>
						</ul>
					</div>
				</div>
				
				<div className="container">
					<ul className="social_links full_row">
						<li>
							<a href="#" className="facebook wow zoomIn" target="_blank"></a>
						</li>
						<li>
							<a href="#" className="twitter wow zoomIn" target="_blank"></a>
						</li>
						<li>
							<a href="#" className="linkedin wow zoomIn" target="_blank"></a>
						</li>
						<li>
							<a href="#" className="instagram wow zoomIn" target="_blank"></a>
						</li>
						<li>
							<a href="#" className="gplus wow zoomIn" target="_blank"></a>
						</li>
					</ul> 
					
					<p className="mb0">&copy; Copyright Winmein 2017 | All Rights Reserved</p>
				</div> 
			</footer>
        );
    }

}
  
export default FooterPage;  