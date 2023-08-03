import React, { useState } from 'react'

function MainSection() {


  // let [greet, setGreet] = useState('Good Morning');

  // let isClicked = false;

  // function increment() {

  //   greet = isClicked? "Good Morning" : "Good AfterNoon"
  //   setGreet(greet)
  //   isClicked = !isClicked
  // }

  let [count, setCount] = useState(0);

  function increment(i) {
    setCount(i+1)
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className='Main'>
        <h2>
          {count}
        </h2>

        <button onClick={()=> increment(count)}>Click Here</button>
        <button onClick={()=> reset()}>Reset</button>

    </div>
  )
}

export default MainSection