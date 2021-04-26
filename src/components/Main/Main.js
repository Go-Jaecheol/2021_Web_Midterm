import React, { Component, Fragment } from 'react';
import "./Main.scss";
import { BiSearchAlt } from 'react-icons/bi';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="mainHead">
                    <button className="inputBar"><BiSearchAlt /></button>
                </div>
                <div className="mainBody">
                    
                </div>
            </Fragment>
        );
    }
}

export default Main