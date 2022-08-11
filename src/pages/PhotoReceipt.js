import React, {useState,useEffect} from 'react'
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import './PhotoReceipt.css';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import ImageUploading from 'react-images-uploading';
// import ImgReceipt from '../images/img-receipt.svg';
// import  { CropperProps } from 'react-easy-crop';
// import ImgCrop from 'antd-img-crop';
// import { Upload } from 'antd';
// import { faPlus } from "@fortawesome/fontawesome-free-solid";
import {} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


export default function PhotoReceipt() {

    //image-uploading 
     const [images, setImages] = React.useState([]);
     const maxNumber = 69;

     const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
    

/***********************************************************************************/   

  //upload image to default 
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(null);

  const onAddImage = (file) => {
    window.URL.revokeObjectURL(preview);
    setPreview(window.URL.createObjectURL(file));
  };

    
         
    
  return (


    <Container fluid className='Container-fluid'>
            <div className='content-header'>
                <FontAwesomeIcon className="chevron-left" icon={faChevronLeft} size="2x" /*style={{paddingBottom: "700",marginRight:"0px",zIndex: "1"}}*/></FontAwesomeIcon>
                <span className="stamp-title h3">ถ่ายภาพใบเสร็จ</span>       
            </div>

            <div className='content-body' style={{paddingTop: '100px'}}>
                <p className='text-reference' style={{color: '#F9BE00',fontSize: '32px',marginLeft: '30px'}}>เพิ่มจอดฟรี 2 ชั่วโมง</p>
                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '-10px'}}>ใบเสร็จรวม 400 บาท</p>

                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',paddingTop: '20px'}}>บันทึกส่วนลดให้ลูกค้าโดย JPark</p>
                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '-10px'}}>สถานที่ : โลตัส สาขาแจ้งวัฒนะ</p>
                <p className='text-reference' style={{color: '#9CA3AF',marginLeft: '30px',marginTop: '-10px'}}>หมายเลขอ้างอิง : 131312</p>

                <br></br> <br></br>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url">
                    {({imageList,onImageUpload,onImageRemoveAll,onImageUpdate,onImageRemove,isDragging,dragProps,
                    }) => (
                    // write your building UI
                  
                    <div className="upload__image-wrapper">
                        <button className="upload-img"
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                       {/* <FontAwesomeIcon className="fa-plus" icon={faPlus} size="1x"></FontAwesomeIcon> */}
                        {/* ภาพใบเสร็จ */}
                        </button>                
                        
                        &nbsp;
                        <br></br>
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                        {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="388" hight="388" />
                            <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>Update</button>
                            <button onClick={() => onImageRemove(index)}>Remove</button>                 
                            </div>
                        </div>
                        ))}         
                    </div>     
                    )}
                    </ImageUploading>

                         
                <Form>
                    <Form.Group className="text-center">
    
                    </Form.Group>

                      <Row className="align-items-center"> 
                        <Col col={2}>

                        </Col>   

                            <Button className="btn-allow col-8 text-center" type="submit" 
                            style={{marginTop: '130px', color:'white',display:'flex',backgroundColor:'#9CA3AF'
                            ,alignItems: 'center',justifyContent: 'center'}} > 
                                ยืนยันบันทึกส่วนลด
                            </Button>
                        
                        <Col col={2}>

                        </Col>
                      </Row>                 
                </Form>

                    <br></br><br></br>        

                {/* <div id="post-upload-btn" className="upload-card">
                    <div id="preview" className="img-preview">
                    <img  
                        src={preview || require("../images/img-receipt.svg")} 
                        id="image"
                        alt="Thumbnail"
                        className="user-post"
                        width="250" 
                        style={{backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                    />
                    </div>
                </div>
                <br></br> */}
                {/* <div className="upload-container text-center">
                    <div className="post-form-container">
                    {/* <p id="upload-form-label">Hello, feel free to post an image!</p> 
                    <form
                        // onSubmit={'return Validate(this);'}
                        className="upload-form"
                     >
                        
                        <div className="panel">
                            <div className="button_outer">
                                <div className="btn_upload">
                                    <input
                                        filename={file}
                                        onChange={(e) => onAddImage(e.target.files[0])}
                                        type="file"
                                        accept="image/*"
                                        id="image-selection-btn"
                                    >
                                    </input> 
                                    <button type="submit" id="post-upload-btn">
                                            Upload Image
                                    </button>                                 
                                </div>
                            </div>
                        </div>
                       
                    </form>
                    </div>
                </div> */}
                    

            </div>
  
    </Container>



  );
}
