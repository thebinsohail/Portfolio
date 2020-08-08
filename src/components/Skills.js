import { Progress } from 'reactstrap';
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
function Skills() {
    return (
        <div className="bars">

                <Row>
                <Col lg="4">
            
             <Progress color="aqua" value="25"><h3>Web Development</h3></Progress>
             < Progress color="info" value={50} />
             <Progress color="warning" value={75} />
              <Progress color="danger" value="100" />        
              </Col>
              </Row>
        </div>
    )
}

export default  Skills