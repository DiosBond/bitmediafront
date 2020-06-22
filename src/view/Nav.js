import React from 'react';


import '../css/style.css';


function Nav() {
  return (
    
      <div>
          <ul className='navbar'>
              <li><a href='/'>Main</a></li>
              <li><a href='/stat'>Stat</a></li>
              <li><a href='/chart'>Chart</a></li>
          </ul>
      </div>
    
  );
}

export default Nav;
