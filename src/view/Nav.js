import React from 'react';


import '../css/style.css';


function Nav() {
  return (
    
      <div>
          <ul className='navbar'>
              <li><a href='/'>Main</a></li>
              <li><a href='/stat/1'>Stat</a></li>
              {/* <li><a href='/user'>Chart</a></li> */}
          </ul>
      </div>
    
  );
}

export default Nav;
