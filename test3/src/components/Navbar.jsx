import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu mode="horizontal" theme="dark">
    <Menu.Item key="home">
      <Link to="/">Главная</Link>
    </Menu.Item>
    <Menu.Item key="add-event">
      <Link to="/add-event">Добавить событие</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;