import React from 'react';


import '../css/style.css';

function createLi(num){
    let text = "";
    for (let i = 0; i < 6; i++){
        while((num - i) < 3){
            text = text + num;
        }
    } 
    
    
    return text
   
        
    
}

function Page(num) {
  return (
    
      <div>
          <ul className='navbar'>

              {/* {createLi(num)}*/}
              <li><a href='/'>Main</a></li>
              <li><a href='/stat'>Stat</a></li>
              <li><a href='/chart'>Chart</a></li> 
          </ul>
      </div>
    
  );
}
//`<li key=${i}><a href='user/'${num}>${num}</a></li>`
export default Page;
