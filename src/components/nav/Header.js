import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

export default function App() {
  const [current, setCurrent] = useState("");

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="login">
        <Link to="/login">Login</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="register">
        <Link to="/register">Register</Link>
      </Item>

      <SubMenu key="Settings" icon={<SettingOutlined />} title="Settings">
        <Menu title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </Menu>
      </SubMenu>
    </Menu>
  );
}
