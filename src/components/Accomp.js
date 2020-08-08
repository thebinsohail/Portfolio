import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col} from 'reactstrap'
import 'tachyons'
class Accomp extends Component {

    //states
    constructor(props) {

            super()
            
            this.state = {
            accomplishment1:'Java Golden Badge',
            accomplishment2:'IEEE SAC AGM Award 2019',
           accomplishment3:'Github Arctic Code Vault Contributor',
            accomplishment4:'Founder at Cauldron Technologies'
        }
    }



    render() {
        return (
            <div className="accomplishments">
                <h1 style={{PaddingTop:'50px'}}>My Accomplishments</h1>
                  <Row >
      <Col lg="4" md="4" sm="8" style={{marginLeft: '100px',marginTop: '100px'}}>
        <Card body id="rows" className="dib br3 pa3 ma2">
        <CardTitle><h3>{this.state.accomplishment1}</h3><br/>Hackerank</CardTitle>
          <CardText>What is HackerRank? HackerRank is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains such as algorithms, machine learning, or artificial intelligence, as well as to practice different programming paradigms like functional programming</CardText>
          <Button>Check it out</Button>
        </Card>
      </Col>
      <Col lg="4" md="4" sm="8" style={{marginLeft: '100px',marginTop: '100px'}}>
        <Card body id="rows"  className="dib br3 pa3 ma2" >
        <CardTitle><h3>{this.state.accomplishment2}</h3><br/>Karachi Section</CardTitle>
          <CardText>The Institute of Electrical and Electronics Engineers is a professional association for electronic engineering and electrical engineering with its corporate office in New York City and its operations center in Piscataway, New Jersey.</CardText>
          <Button>Check it out</Button>
        </Card>
        
      </Col>
      <Col lg="4" md="4" sm="8" style={{marginLeft: '100px',marginTop: '100px'}}>
        <Card body id="rows"  className="dib br3 pa3 ma2">
          <CardTitle><h3>{this.state.accomplishment3}</h3></CardTitle>
          <CardText>GitHub, Inc. is an American company that provides hosting for software development and version control using Git. It has been a subsidiary of Microsoft since 2018. It offers the distributed version control and source code management functionality of Git, plus its own features.</CardText>
          <Button>Check it out</Button>
        </Card>
        
      </Col>
      <Col lg="4" md="4" sm="8" style={{marginLeft: '100px',marginTop: '100px'}}>
        <Card body id="rows"  className="dib br3 pa3 ma2">
          <CardTitle><h3>{this.state.accomplishment4}</h3></CardTitle>
          <CardText>We're an IT startup, intending to convey our aptitudes as software and management systems, both locally and industrially. Offering our best work within the ideal cost, our team is profoundly skilled and roused. Comprising of Mern Stack, Mean Stack, Mobile App, and Full Stack Developers, expertly helping you in growing your business through a web application or any adaptable application, is our main goal. In the same manner, we likewise deliver programming/testing administrations to our significant clients the entirety of our clients.</CardText>
          <Button>Check it out</Button>
        </Card>
        
      </Col>
      
    </Row>
                 
            </div>
        )
    }
}



export default Accomp