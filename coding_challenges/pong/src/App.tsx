import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [, updateState] = useState({});
  const ballX = useRef(500);
  const ballY = useRef(500);

  const paddleVelocity = useRef(8);

  const velocityX = useRef(2);
  const velocityY = useRef(2);

  const leftPaddleX = useRef(50);
  const rightPaddleX = useRef(850);

  const leftPaddleY = useRef(200);
  const rightPaddleY = useRef(200);

  const render = (timestamp: any) =>
  {
    ballX.current += velocityX.current;
    ballY.current += velocityY.current;

    if(ballY.current + 50 >= window.innerHeight || ballY.current <= 0)
    {
      velocityY.current *= -1;
    }

    if(ballX.current + 50 >= rightPaddleX.current)
    {
      if(ballY.current > rightPaddleY.current && ballY.current+50 < rightPaddleY.current+400)
      {
        velocityX.current = -3;
      }
    }

    if(ballX.current <= leftPaddleX.current + 50)
    {
      if(ballY.current > leftPaddleY.current && ballY.current+50 < leftPaddleY.current+400)
      {
        velocityX.current = 3;
      }
    }

    updateState({});

    window.requestAnimationFrame(render);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
  {
    if(event.key == "w")
    {
      leftPaddleY.current -= paddleVelocity.current;
    }
    if(event.key == 's')
    {
      leftPaddleY.current += paddleVelocity.current;
    }

    if(event.key == "ArrowUp")
    {
      rightPaddleY.current -= paddleVelocity.current;
    }
    if(event.key == "ArrowDown")
    {
      rightPaddleY.current += paddleVelocity.current;
    }
  }

  useEffect(() => {
    document.getElementById("App")?.focus();

    window.requestAnimationFrame(render);
  }, [])

  return (
    <div tabIndex={1} onKeyDown={handleKeyDown} id="App">
      <div style={{
        top: leftPaddleY.current,
        left: leftPaddleX.current
      }} className="Paddle"></div>
      <div style={{
        top: ballY.current,
        left: ballX.current
      }} className="Ball"></div>
      <div style={{
        top: rightPaddleY.current,
        left: rightPaddleX.current
      }} className="Paddle"></div>
    </div>
  );
}

export default App;
