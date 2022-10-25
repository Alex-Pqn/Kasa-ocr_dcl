import './DropdownMenu.scss';

import React from 'react';
import ArrowDownIcon from '../../Icon/ArrowDown/ArrowDown';

const DropdownMenu = ({ title, text, list }) => {
  const toggleDropdownMenu = () =>
    document.getElementById(title).classList.toggle('dropdown-menu--active');

  return (
    <nav id={title} className="dropdown-menu">
      <div onClick={toggleDropdownMenu} className="dropdown-menu__head">
        <span>{title}</span>
        <ArrowDownIcon />
      </div>

      <div className="dropdown-menu__slide">
        {text ? (
          <p>{text}</p>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default DropdownMenu;
