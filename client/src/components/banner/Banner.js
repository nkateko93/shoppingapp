import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Banner extends Component{
    render(){
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Link to="/login"><Button color="primary">Learn More</Button></Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Banner;