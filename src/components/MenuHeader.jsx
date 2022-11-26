import { Menu } from 'semantic-ui-react'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuHeader() {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu color='blue' pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='Exercícios'
            active={activeItem === 'Exercícios'}
            onClick={handleItemClick}
          />
        </Link>
        <Link to='/costs'>
          <Menu.Item
            name='Peso'
            active={activeItem === 'Peso'}
            onClick={handleItemClick}
            a
          />
        </Link>
      </Menu>
    </div>
  )
}
