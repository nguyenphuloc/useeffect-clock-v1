import './App.css';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const Apps = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`

const Container = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Time = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 200px;
  margin-bottom: 50px;
`

const Button = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Play = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;
    font-size: 25px;
    background-color: #99ff99;
    color: #ffffff;
    outline: none;
    &:active {
      background-color: #b3b3b3;
    }
`

const Stop = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;
    font-size: 25px;
    background-color: #99ccff;
    color: #ffffff;
    outline: none;
    &:active {
      background-color: #b3b3b3;
    }
`

const Reset = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;
    font-size: 25px;
    background-color: #ff9999;
    color: #ffffff;
    outline: none;
    &:active {
      background-color: #b3b3b3;
    }
`

function App() {
  const [state, setState] = useState(false);
  const [time, setTime] = useState(1500);

  useEffect(() => {
    let interval;
    if (state === true && time > 0) {
      interval = setInterval(() => {
        setTime(prevSecond => prevSecond - 1)
      }, 1000)
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  }, [state, time]);
  return (
    <Apps>
      <Container>
        <Time>
          <div>{(time/60).toString().split('.')[0].padStart(2, "0")}</div>
          <div>:</div>
          <div>{(time%60).toString().split('.')[0].padStart(2, "0")}</div>
        </Time>
        <Button>
          <Play disabled={state}  onClick={() => setState(true)}>Play</Play>
          <Stop disabled={!state} onClick={() => setState(false)}>Stop</Stop>
          <Reset onClick={() => setTime(1500)}>Reset</Reset>
        </Button>
      </Container>
    </Apps>
  );
}

export default App;
