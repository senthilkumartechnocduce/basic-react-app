import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderPage extends Component {
    render() {
        return(
            <header className="site_header full_row">
				<div className="container animated fadeInDown">
					<div className="site_logo">
						<Link to="/"><img src="images/logo.png" alt=""/></Link>
						<a role="button" id="mobile_nav" className="mview"><i className="fa fa-bars"></i></a>
						<a className="lang" href="#">Arb</a>
						<a href="#" className="btn_close"><i className="fa fa-close"></i></a>
					</div> 
					
					<div className="site_menu">
						<nav className="full_row">
							<ul className="reset">
								{/*<li> <Link to="/">Home</Link> </li>
								<li> <Link to="/slot-game">Game</Link> </li>*/}
								<li className="dropdown">
									<a className="acc_menu" data-toggle="dropdown">
										<span>My Account</span>
										<i className="fa fa-angle-down"></i>
									</a>
									<ul className="dropdown-menu">
										<li>
											<Link to="/profile" className="icon"><i className="edit"></i>Profile</Link>
										</li>
										<li>
											<Link to="/slot-game" className="icon"><i className="offers"></i>Game</Link>
										</li>
										<li><a className="icon logout"><i className="logout"></i> Logout</a></li>
									</ul>
								</li>
								{/*<li> <a href="#" className="lang" data-toggle="tooltip" title="Language" data-placement="bottom">Arabic</a> </li>*/}
							</ul>
						</nav>
					</div> 
				</div>
			</header>
        );
    }

}

export default HeaderPage;