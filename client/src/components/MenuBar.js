import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MenuBar() {

    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
    <Menu pointing secondary size="massive">
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
        <Menu.Item
        name="Animals"
        active={activeItem === 'Animals'}
        onClick={handleItemClick}
        as={Link}
        to="/Animals"
      />
    </Menu>
    )
}

export default MenuBar; 
