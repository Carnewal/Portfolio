import React, { Component } from 'react';
import Head from '../Head'
import Navigation from '../Navigation'
import {Button, ListGroup, ListGroupItem, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <section className='head'>
            <div className='container'>
                <h2>Hi, Hello, Welcome!</h2> 
                <h1>I'm Brecht Carnewal.</h1>
                <p>I'm a very passionate software developer. Check out my <Link to='/portfolio'>Portfolio</Link> if you want to see who and what I've worked with so far.</p>
                <br/>
                <p>                   
                    Ever since I wrote my first few lines of code I knew this was something I'd be doing for the rest of my life, be it as a hobby or a job. <br/>
                    Check out my <Link to='/timeline'>Timeline</Link> to see how I've progressed from there!
                </p>
                <br/>
                <p>
                    If you'd like to contact me, I'll be happy to talk to you through any of these channels:
                </p>
                <Row class>
                    <Col md={{size: 8, offset: 2}} sm={{size:6, offset: 3}}>
                        <ListGroup>
                            <ListGroupItem>
                                <a href='https://www.linkedin.com/in/brechtcarnewal/' target='_blank'>LinkedIn</a> 
                            </ListGroupItem>
                            <ListGroupItem>
                                0483 51 91 15
                            </ListGroupItem>
                            <ListGroupItem>
                                brechtcarnewal@outlook.com
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <br/>
            </div>
        </section>    
    );
  }
}

export default Home;
