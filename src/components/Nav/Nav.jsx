// 這是最上方Nav bar component
import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import NavMobile from './Mobile-size/NavMobile';
import NavWeb from './Web-size/NavWeb';

import 'antd/dist/antd.css';



function Nav(props) {

  //使用 useMediaQuery 來判斷window大小
  const screenSize = useMediaQuery({ query: "(min-width: 575px)" });
  return (
    <div className='navBar'>
      <img className='logo' width={60} src="https://girlsmood.com/web/wp-content/uploads/2020/01/d350b2692d3fac14dc12eb2a1b32b2ee.jpg" alt="UTalk Logo"/>

      {/* 以下為RWD判斷區 ( mobile or web )  */}
      {screenSize ? <NavWeb /> : <NavMobile />}
    </div>
  );
}

export default Nav;