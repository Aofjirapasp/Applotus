import React from 'react';
import './History.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";

function History() {
  return (

    <div className='Container-fluid'>

      {/* <h1>History</h1> */}
      <div className='content-header'>
        <FontAwesomeIcon className="chevron-left" icon={faChevronLeft} size="2x" /*style={{paddingBottom: "700",marginRight:"0px",zIndex: "1"}}*/></FontAwesomeIcon>
        <span className="history-title h3">ประวัติการรับส่วนลด</span>       
      </div>
            
      <div className="content-title h4">วันนี้</div> 

        <div className="box-parking-history">
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 

        <div className="box-parking-history"style={{marginTop: 20}}>
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 

        <div className="box-parking-history"style={{marginTop: 20}}>
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 


      <div className="content-title2 h4 pt-5">18-05-2565</div> 

      <div className="box-parking-history">
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 

        <div className="box-parking-history"style={{marginTop: 20}}>
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 

        <div className="box-parking-history"style={{marginTop: 20}}>
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 


        <div className="content-title2 h4 pt-5">17-05-2565</div> 

      <div className="box-parking-history">
          <div className="row">
              <div className="col-9 col-md-10 pt-2 mb-3">
                <span className="text-history text-weight-bold">เพิ่มจอดฟรี 2 ชั่วโมง</span>
                  <div className="receipt-text col-12 pt-3 " style={{color: "#9CA3AF"}}>เลขอ้างอิง : 184756</div> 
              </div>
              <div className="col-3 col-md-2 mb-3" >
                    <p  style={{color: "#9CA3AF",paddingTop: 10,fontSize: 20}}>09:50</p>
              </div>                         
          </div>
        </div> 
 
      


    </div> 
    
  );
}

export default History;
