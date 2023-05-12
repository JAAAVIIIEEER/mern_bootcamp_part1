import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Statistics from './components/Statistics'
import Header from './components/Header'
import Button from './components/Button'
//import "./index.css";

const App = () => {
  const [statistics, setStatistics] = useState({
    good : 0,
    neutral: 0,
    bad : 0
  })
  
  const setGoodWithProp = a => {
    return(() => setStatistics({
      good : statistics.good + a , 
      neutral : statistics.neutral,
      bad : statistics.bad
    }))
  }

  const setNeutral= () => setStatistics({
    good : statistics.good ,
    neutral : statistics.neutral + 1 ,
    bad : statistics.bad
  })

  const setBad = () => setStatistics({
    ...statistics,
    bad : statistics.bad + 1
  })

  let all = statistics.good + statistics.neutral + statistics.bad

  return (
    <div>
      <Header content = "give feeback" />     
      <Button good = {setGoodWithProp(1)}  neutral = {setNeutral} bad = {setBad} />
      <Header content = "statistics" /> 
      {all === 0 ? (
      <p>No feedback given </p>
      ) : (
      <Statistics good = {statistics.good} neutral = {statistics.neutral} bad = {statistics.bad} all = {all}/>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
