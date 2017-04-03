import React, { Component } from 'react';


class Cities extends Component {
    render() {
        return (
          <div className="row">
        <div className="col-md-6">
            <a href="#"></a>
                <img className="img-responsive img-hover" src="http://placehold.it/700x400" alt="">
            </img>
            <h3>
                <a href="#">New York</a>
            </h3>
        </div>
        <div className="col-md-6">
            <a href="portfolio-item.html"></a>
                <img className="img-responsive img-hover" src="http://placehold.it/700x400" alt="">
            </img>
            <h3>
                <a href="#">San Francisco</a>
            </h3>
        </div>
        <div className="col-md-6">
            <a href="portfolio-item.html"></a>
                <img className="img-responsive img-hover" src="http://placehold.it/700x400" alt="">
            </img>
            <h3>
                <a href="#">Austin</a>
            </h3>
        </div>
    </div>
        )
    }
}

export default Cities;
