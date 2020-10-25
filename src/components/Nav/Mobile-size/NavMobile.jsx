import React, { useState } from 'react';
import MenuList from './MenuList';

import 'antd/dist/antd.css';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function NavMobile(props) {
      //drawer 可視＆不可視(default)
  const [visible, setVisible] = useState(false);

  //點擊menu按鈕會觸發此function,state變更為true,拉出drawer
  function showDrawer(event){
    console.log('click menu')
    setVisible(true)
  }

  function onClose(event){
    setVisible(false)
  }
    return (
        <div className='navMobileMenu'>
        <MenuOutlined style={{fontSize: '30px'}} onClick={showDrawer} />
        <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        >
            <MenuList />
      </Drawer>
      </div> 
    );
}

export default NavMobile;