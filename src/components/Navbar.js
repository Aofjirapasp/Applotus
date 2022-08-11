import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
// import profile from '../images/avatar.png';


const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  //function ออกจากระบบ
  const [state,setState]=useState(true);
  let url="https://google.com";
  let element=<a href={url}><p>ออกจากระบบ</p></a>;         
  if(state) element=<a href={url}>ออกจากระบบ</a>;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>  
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{ color:'#6B7280' }}/>
              </Link>
            </li>

            <div className="nav-profile">
                {/* <img src={require('../images/logolotus.svg')} /> */}
                {/* <img src={profile} alt="Profile" /> */}
            </div>  
            <div className="text-name-profile text-center pt-3" style={{ color:'#00BCB4'}}><h4>สาสินี มากมี</h4></div>

            <div className="row">
              <div className="col-7">
                <p style={{ color:'#9CA3AF'}}>สถานที่ :</p>
              </div>
              <div className="col-5">
                <p style={{ color:'#9CA3AF'}}>โลตัส</p>
              </div>
            </div>

            <div className="row">
              <div className="col-7">
                <p style={{ color:'#9CA3AF'}}>สาขา :</p>
              </div>
              <div className="col-5">
                <p style={{ color:'#9CA3AF'}}>แจ้งวัฒนะ</p>
              </div>
            </div>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span style={{ color:'black'}}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
           
              <div className="log-out Navbar">
                {element} {/*ออกจากระบบ*/}
                 {/* <a href="https://google.com">ออกจากระบบ</a> */}
              </div>
           
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
