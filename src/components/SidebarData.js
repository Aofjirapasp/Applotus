import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'หน้าแรก',
    path: '/',
    icon: <AiIcons.AiFillHome style={{color: 'black'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'ประวัติ',
    path: '/history',
    // icon: <IoIcons.IoIosPaper style={{color: 'black'}}/>,
    icon: <FaIcons.FaHistory style={{color: 'black'}}/>,
    cName: 'nav-text'
  },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus style={{color: 'black'}}/>,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
