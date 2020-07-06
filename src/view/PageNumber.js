import React from 'react';
import '../css/style.css';
// eslint-disable-next-line


function createPageArr(max, minel) {
    let arr =[0];
    let arr2= [1,2,3];
    console.log (max, minel)
    let i=0;
    while(minel<max+1){
        arr[i]=minel
        minel++; i++
    }
    // for (let i = minel; i < max+1; i++){
    //     arr2 = arr.push(i)
    //     console.log(arr2)
    // };
    return(arr)
}

function createLi(num){
    //let pgArr=[];
    let maxnum; let minnum;

    if (num > 3) {
        maxnum = Number(num) + 2;
        minnum = Number(num) - 2;
    }
    else {
        maxnum = 5;
        minnum = 1;
    }
    let pgArr = createPageArr(maxnum, minnum);
    //console.log(pgArr);

    let map = pgArr.map(page => {
        if (num == page){
            return <li className='activpage' key={page}><a href={'/stat/'+page}>{page}</a></li>
        }
        else {
            return <li key={page}><a href={'/stat/'+page}>{page}</a></li>
        }

    })
   
    return map

}

function Page(num) {
  return (
    
      <div className='pageNumber'>
          <ul>

              {createLi(num)}

                {/* <li><a href={'/stat/'+num}>{num}</a></li> */}
          </ul>
      </div>
    
  );
}
//`<li key=${i}><a href='user/'${num}>${num}</a></li>`
export default Page;
