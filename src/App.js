import React, { Component } from 'react';
import './App.css';

// IMAGE IMPORT 
import logo from './image/logo_color.png';
import map from './image/map.png';
import fav from './image/favIcon.svg';

// EXTERNAL LINK
import { Row, Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class App extends Component {


  render() {
    return (
      <div className="App">

            <div className='brand'>                  
                <img src={logo} alt=''/>                  
            </div>

            <Row className='buildingRow'>
                  <Col md={4} className='buildingBlock'>
                  
                        <label>Estamos em contrução</label>
                  
                  </Col>
                  <Col md={8} className='contactInformation'>

                        <MaterialIcon id='arrow' icon='arrow_right' color='#ea9220' />                  
                        <label>Mas você pode entrar em contato:</label>

                        <ul>
                              <li>
                                  <span><MaterialIcon icon="call" color='#a9a6a6' /></span>
                                  <span>(21) 9 8868 - 1862</span>
                              </li>
                              <li>
                                  <span><MaterialIcon icon="business" color='#a9a6a6' /></span>
                                  <span> (21) 3796-8428</span>
                              </li>
                              <li className='mb-30'>
                                  <span><MaterialIcon icon="email" color='#a9a6a6'/></span>
                                  <span> marcellostasi@sunrise.com.br</span>
                              </li>
                              <li>
                                  <span><MaterialIcon icon="location_on" color='#a9a6a6'/></span>
                                  <span> Rua Odilon Duarte Braga - n192 - sala 305. Recreio dos Bandeirantes</span>
                              </li>
                        </ul>
                  
                  </Col>

            </Row>

            <footer>       
                      <img src={fav} className='fav' alt=''/> 
            </footer>

      </div>
    );
  }
}

export default (App)
