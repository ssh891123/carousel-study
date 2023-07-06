import React from 'react';
import Antd from './components/Antd';
import Responsive from './components/Responsive';
import Slick from './components/Slick';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel loop autoLoop autoTime={500}>
        <h1>
          hello
        </h1>
        <h1>
          world
        </h1>
        <h1>
          javascript
        </h1>
        <h1>
          study
        </h1>
      </Carousel>
    </div>
    
    // <div className="App">
    //   <div>
    //     Antd
    //   </div>
    //   <Antd />
    //   <div>
    //     Responsive
    //   </div>
    //   <Responsive />
    //   <div>
    //     Slick
    //   </div>
    //   <Slick />
    // </div>
  );
}

export default App;
