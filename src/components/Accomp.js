import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col, Media} from 'reactstrap'
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
                
                 
            </div>
        )
    }
}



export default Accomp