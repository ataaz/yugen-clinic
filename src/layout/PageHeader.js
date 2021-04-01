import React , { Component } from "react";
import { Link } from 'react-router-dom';

class PageHeader extends React.Component {
    render() {
        return(
            <div className="PageHeader text-center">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-xl-12">
                            <h1>{this.props.pagename}</h1>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="#">Home</Link></li>
                                <li className="list-inline-item"><span>{this.props.pagename}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;