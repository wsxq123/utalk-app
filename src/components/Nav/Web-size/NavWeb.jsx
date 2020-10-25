import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

function NavWeb(props) {
    return (
        <div className='container_navWebMenu'>
            <Menu className='navWebMenu' mode="horizontal">
                <Menu.Item>
                    <a href="https://id-stg.ulsee.club/" target="_blank" rel="noopener noreferrer">
                        Try It Now
                    </a>
                </Menu.Item>

                <SubMenu key="SubMenu" title="Language">
                        <Menu.Item >EN</Menu.Item>
                        <Menu.Item >繁中</Menu.Item>
                        <Menu.Item >简中</Menu.Item>
                        <Menu.Item >日文</Menu.Item>
                 </SubMenu>

                <Menu.Item>
                    <a href="https://id-stg.ulsee.club/" target="_blank" rel="noopener noreferrer">
                        Log in
                    </a>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default NavWeb;