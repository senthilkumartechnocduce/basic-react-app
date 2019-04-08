import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/*components*/
import NotFound from './not-found.jsx';
import RouteRedirect from "../components/route-redirect.jsx";

/**
 * Static
 * Page Components
 */
import Header from './header.jsx';
import Footer from './footer.jsx';

/**
 * Dynamic
 * Page Components
 */
import Home from './home/index.jsx';
import Restaurants from './restaurants/index.jsx';
import Profile from './profile/index.jsx';
import SlotMachine from './slot-machine/index.jsx';

const AppUniversal = function () {
    return (
        <div>
            <Route component={Header} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/slot-game" exact component={SlotMachine} />
                <Route path="/restaurants" exact component={Restaurants} />
                <Route path="/profile" exact component={Profile} />

                <RouteRedirect from="/moved" to="/" code={301} />
                <Redirect to="/" />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    );
};



export default AppUniversal;