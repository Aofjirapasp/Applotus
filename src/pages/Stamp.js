import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './Stamp.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import scan from '../images/scan.svg';
// import { QrReader } from 'react-qr-reader';


// function Stamp() {

 class Stamp extends React.Component {
        state = {
          disabled: true
      }
      
       handleChange = (e) =>{
          if(e.target.value.length >=6){
              this.setState({
                  disabled: false
              });
          }
          else {
              this.setState({
                  disabled: true
              });
          }
      }

    render() {
    return (
      
        <Container className='Container-fluid Stamp'>
            <div className='content-header'>
                
                <FontAwesomeIcon className="chevron-left" icon={faChevronLeft} size="2x" style={{paddingBottom: "10",zIndex: "1"}}></FontAwesomeIcon>
                <span className="stamp-title h3">เพิ่มจอดฟรี 2 ชั่วโมง</span>       
            </div>

            <div className='content-body' style={{paddingTop: '100px'}}>
                <p className='text-reference' style={{color: '#F9BE00',fontSize: '32px',marginLeft: '30px'}}>เพิ่มจอดฟรี 2 ชั่วโมง</p>
                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '-10px'}}>ใบเสร็จรวม 400 บาท</p>

                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',paddingTop: '20px'}}>บันทึกส่วนลดให้ลูกค้าโดย JPark</p>
                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '-10px'}}>สถานที่ : โลตัส สาขาแจ้งวัฒนะ</p>


                <Form >
                    <Form.Group className="mb-3" controlId="formBasicReference" 
                    style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '50px',width: '80%'}}>
                        <Form.Label style={{width: '50%'}} >กรอกเลขที่อ้างอิง หรือสแกน QR Code</Form.Label>
                        <Form.Control className="btn-allow" type="text" placeholder="เลขที่อ้างอิง"

                        onChange={this.handleChange}/>  
                        
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Row className="align-items-center"> 
                        <Col col={2}>

                        </Col>
                            <Button className="btn-scan col-8 text-center" type="submit"          
                            style={{marginTop: '200px',backgroundColor: '#00BCB4',color:'white',
                            display:'flex',alignItems: 'center',justifyContent: 'center'}}>
                                <img src={scan} alt="Scan" />  
                                <span>สแกน QR Code</span> 
                            </Button>
                        <Col col={2}>

                        </Col>  
                     </Row> 

                     <Row className="align-items-center"> 
                        <Col col={2}>

                        </Col>
                            
                            <Button className="btn-allow col-8 text-center" type="submit" 
                            style={{marginTop: '10px', color:'white',display:'flex',
                            alignItems: 'center',justifyContent: 'center'}} 

                            disabled={this.state.disabled}>         
                                ยืนยัน
                            </Button>
                           
                          <Col col={2}>

                          </Col>
                     </Row>         
                </Form>   

                        {/* <form>
                        <input type="text" placeholder="เลขที่อ้างอิง" 
                        onChange={this.handleChange}
                          />
                        <button type="submit" disabled={this.state.disabled}>
                            Submit
                        </button>
                        </form> */}
                   

            </div>
          
        </Container>

    );
  }
}        

//     );
// }

export default Stamp;
