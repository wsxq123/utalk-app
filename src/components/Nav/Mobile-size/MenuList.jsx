//這是mobile size 右側drawer的內容component
import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';

function MenuList(props) {
  return (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://id-stg.ulsee.club/">
          Try It Now
        </a>
      </Menu.Item>
      <Menu.ItemGroup title="Language">
        <Menu.Item >EN</Menu.Item>
        <Menu.Item >繁中</Menu.Item>
        <Menu.Item >简中</Menu.Item>
        <Menu.Item >日文</Menu.Item>
      </Menu.ItemGroup>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://id-stg.ulsee.club/">
          Contact us
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://id-stg.ulsee.club/">
          Term
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://id-stg.ulsee.club/">
          FAQ
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://id-stg.ulsee.club/">
          Log in
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default MenuList;