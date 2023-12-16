import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [circleClassName, setCircleClassName] = useState("circle-button");
  const [cubeActive, setCubeActive] = useState(false);
  const [animation, setAnimation] = useState('none');
  const [animationPlayState, setAnimationPlayState] = useState('none')

  useEffect(() => {
    if(cubeActive){
      setAnimationPlayState('running')
      setAnimation('cube-animation 4s ease infinite')
    } else {
      //setAnimation('none')
      setAnimationPlayState('paused')
    }
  }, [cubeActive])
  

  return (
    <div className="container">
      <div className="cube-container">
        <div className="scene">
          <div className="cube" style={{animation: animation, animationPlayState: animationPlayState}}>
            <div className="face face1"></div>
            <div className="face face2"></div>
            <div className="face face3"></div>
            <div className="face face4"></div>
            <div className="face face5"></div>
            <div className="face face6"></div>
          </div>
        </div>
      </div>

      <div className="choice-container">
        <div
          className={circleClassName}
          onMouseEnter={() => {setCircleClassName("circle-button active"); setCubeActive(true);}}
          onMouseLeave={() => {setCircleClassName("circle-button"); setCubeActive(false);}}
        ></div>
      </div>
    </div>
  );
}

export default App;
