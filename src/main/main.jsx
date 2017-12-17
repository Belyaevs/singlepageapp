import React from "react";
import ReactDom from "react-dom";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../home/home";
import Stuff from "../stuff/stuff";
import Contact from "../contact/contact";

export default class Main extends React.Component {
    render() {
        return (
            <HashRouter>
               <div>
                    <h1>Secret Santa</h1>
                  <ul className="header">
                      <li><NavLink exact to="/">Host</NavLink></li>
                        <li><NavLink to="/stuff">Participants</NavLink></li>
                      <li><NavLink to="/contact">FAQ</NavLink></li>
                  </ul>
                 <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                 </div>
                </div>
            </HashRouter>    
        );
    }
}

    
