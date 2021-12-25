import React, { useMemo, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SiderBar = () => {
  const initCurrent = useMemo(() => {
    const pathName = window.location.pathname;
    switch (pathName) {
      case '/app1':
        return '1';
      case '/app2':
        return '2';
      default:
        return '';
    }
  }, []);
  const [current, updateCurrent] = useState(initCurrent);

  const handleClick = ({ item, key, keyPath, domEvent }) => {
    updateCurrent(key);
  };

  return (
    <Menu
      onClick={handleClick}
      theme="dark"
      selectedKeys={[current]}
      mode="inline"
    >
      <Menu.Item key="1">
        <Link to="/app1">app1</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/app2">app2</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SiderBar;
