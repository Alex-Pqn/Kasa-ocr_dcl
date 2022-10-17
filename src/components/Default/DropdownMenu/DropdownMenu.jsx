import React, { useEffect } from 'react';
import ArrowUpIcon from '../../Icon/ArrowUp/ArrowUp';
import ArrowDownIcon from '../../Icon/ArrowDown/ArrowDown';

import './DropdownMenu.scss';

const DropdownMenu = ({ title, text, list }) => {
  useEffect(() => {
    console.log(list);
  });

  return (
    <div className="dropdown-menu">
      <nav>
        <label htmlFor={title}>
          <span>
            {title} <ArrowDownIcon />
          </span>
        </label>
        <input type="checkbox" id={title} />

        {text ? (
          <div className="slide">
            <p>{text}</p>
          </div>
        ) : (
          <ul className="slide">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default DropdownMenu;
