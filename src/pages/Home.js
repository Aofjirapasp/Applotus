import React, { useState } from 'react';
import './Home.css';  
// import Navbar2 from './components/Navbar2';
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import DiscountIcon from '../images/distcount-icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";




function Home() {

//   const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 3,
//             marginTop: 0,
//         }}
//     />
// );


  const [state,setState]=useState(true);
  let url="./History";
  let element=<a href={url}><p>ดูประวัติ</p></a>;         
  if(state) element=<a href={url}>ดูประวัติ</a>;


  return (
    <div>
      {/* <Navbar2 /> */}
      <Container fluid className="Container-fluid">
          <p className="text-top">ผู้ให้ส่วนลด</p>
          <div className="row">
            
          </div>
          <p className="text-name h4 text-weight-bold" style={{zIndex: 0}}>สาสินี มากมี</p>
          
          <div className='Home box-header'>
          {/* <ColoredLine color="gray" /> */} 
            <div className="row" >
              <div className="tag-icon col-7 col-xs-4 mt-4">
                  <img className="img-responsive distcount-icon" src={DiscountIcon} alt="Tag" /><span className="text-distcount">ให้ส่วนลดไปแล้ว</span> 
                  
              </div>
              <div className="col-5 col-xs-8 mt-4 text-right">
                  <span className="number-discount "> 14 </span><span className="text-distcount">ครั้ง</span>         
              </div>
              <span className="history-text text-center">{element}</span>
            </div>         
          </div>
          <hr className="line-color"></hr>
          <div className=" header-content pt-5">
                <p className="text-parking text-weight-bold h5">จอดฟรี</p> 

                <a href="./Stamp">
                <div className="box-parking">
                  <div className="row">
                    <div className="col-9 col-md-11 col-sm-11 mb-3">
                      <span className="text-park">เพิ่มจอดฟรี </span><span className="text-free-parking">2 ชั่วโมง</span>
                      <div className="receipt-text col-12 pt-3 " style={{color: "gray"}}>ใบเสร็จรวม 400 บาท</div> 
                    </div>
                    <div className="col-3 col-md-1 col-sm-1 mb-3">
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>  
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> 
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2x" style={{paddingTop: "20"}}></FontAwesomeIcon>  */}

                  </div>
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>   */}                  
                  </div>
                </div>    
                </a>

                <div className="box-parking">
                  <div className="row">
                    <div className="col-9 col-md-11 col-sm-11 mb-3">
                      <span className="text-park">เพิ่มจอดฟรี </span><span className="text-free-parking">2 ชั่วโมง</span>
                      <div className="receipt-text col-12 pt-3 " style={{color: "gray"}}>ใบเสร็จรวม 400 บาท</div> 
                    </div>
                    <div className="col-3 col-md-1 col-sm-1 mb-3">
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>  
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> 
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2x" style={{paddingTop: "20"}}></FontAwesomeIcon>  */}

                  </div>
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>   */}                  
                  </div>
                </div>    
                <div className="box-parking">
                  <div className="row">
                    <div className="col-9 col-md-11 col-sm-11 mb-3">
                      <span className="text-park">เพิ่มจอดฟรี </span><span className="text-free-parking">2 ชั่วโมง</span>
                      <div className="receipt-text col-12 pt-3 " style={{color: "gray"}}>ใบเสร็จรวม 400 บาท</div> 
                    </div>
                    <div className="col-3 col-md-1 col-sm-1 mb-3">
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>  
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> 
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2x" style={{paddingTop: "20"}}></FontAwesomeIcon>  */}

                  </div>
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <i class="fa-solid fa-chevron-right"></i> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
                    {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>   */}                  
                  </div>
                </div>    
                  

                <div className="box-parking2 pt-2">
                  <div className="row">
                    <div className="col-9 col-md-11 mb-3">
                      <span className="text-park2">เพิ่มจอดฟรี </span><span className="text-free-parking2">4 ชั่วโมง</span>
                      <div className="receipt-text col-12 pt-3" style={{color: "gray"}}>ใบเสร็จรวม 800 บาท</div>  
                    </div>
                    <div className="col-3 col-md-1 mb-3">
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    </div>
                                
                  </div>
                </div>  

                <div className="box-parking2 pt-2">
                  <div className="row">
                    <div className="col-9 col-md-11 mb-3">
                      <span className="text-park2">เพิ่มจอดฟรี </span><span className="text-free-parking2">4 ชั่วโมง</span>
                      <div className="receipt-text col-12 pt-3" style={{color: "gray"}}>ใบเสร็จรวม 1000 บาท</div>  
                    </div>
                    <div className="col-3 col-md-1 mb-3">
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    </div>
                                
                  </div>
                </div>      


                <p className="text-parking text-weight-bold h5">ส่วนลด</p> 

                <div className="box-parking">
                  <div className="row">
                    <div className="col-9 col-md-11 mb-3">
                      <span className="text-park3">ส่วนลด </span><span className="text-free-parking3">20 บาท</span>
                      <div className="receipt-text col-12 pt-3 " style={{color: "gray"}}>ใบเสร็จรวม 400 บาท</div> 
                    </div>
                    <div className="col-3 col-md-1  mb-3">
                      <FontAwesomeIcon className="chevron-right"  icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    </div>                         
                  </div>
                </div>    

                <div className="box-parking2 pt-2">
                  <div className="row">
                    <div className="col-9 col-md-11 mb-3">
                      <span className="text-park3">ส่วนลด </span><span className="text-free-parking3">40 บาท</span>
                      <div className="receipt-text col-12 pt-3" style={{color: "gray"}}>ใบเสร็จรวม 800 บาท</div>  
                    </div>
                    <div className="col-3 col-md-1 mb-3">
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    </div>
                                
                  </div>
                </div>  

                <div className="box-parking2 pt-2">
                  <div className="row">
                    <div className="col-9 col-md-11 mb-3">
                      <span className="text-park3">ส่วนลด </span><span className="text-free-parking3">จอดฟรี</span>
                      <div className="receipt-text col-12 pt-3" style={{color: "gray"}}>ใบเสร็จรวม 1000 บาท</div>  
                    </div>
                    <div className="col-3 col-md-1 mb-3">
                    <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                    </div>
                                
                  </div>
                </div>      
                

          

                <p className="text-parking text-weight-bold h5">คิดเงินพิเศษ</p>

                <div className="box-parking">
                  <div className="row">
                      <div className="col-9 col-md-11 mb-3">
                        <span className="text-park4">เพิ่มจอดฟรี </span><span className="text-free-parking4">4 ชั่วโมง</span>
                        <div className="receipt-text col-12 pt-3" style={{color: "gray"}}>ใบเสร็จรวม 1000 บาท</div>   
                      </div>
                      <div className="col-3 col-md-1 mb-3">
                      <FontAwesomeIcon className="chevron-right" icon={faChevronRight} size="2x" style={{paddingTop: "30"}}></FontAwesomeIcon>
                      </div>      
                  </div>                
                </div> 
            </div>  

      </Container>
    </div>

   
   
    
  );
}

export default Home;
