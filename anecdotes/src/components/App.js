import {useState} from 'react';
import {Anecdote} from './Anecdote';
//import './App.css';


const getRandom = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(5)
  const [votes, setVote] = useState({
    0 : 0 ,
    1 : 0 ,
    2 : 0 ,
    3 : 0 ,
    4 : 0 ,
    5 : 0 
  })

  const randomAnecdoteHandler = () => setSelected(getRandom(0,anecdotes.length - 1))  
  const voteAnecdoteHandler = () => {
    const copyVotes = {...votes}
    copyVotes[selected] += 1
    return setVote(copyVotes)
  }

  const getMaxVotedAnecdote = Object.values(votes).reduce((acc, cur, idx) => cur > acc.value ? {value: cur, index: idx} : acc, {value: -Infinity, index: -1});

  return ( 
    <div >
      <Anecdote header = "Anecdote of the day" anecdote = {anecdotes[selected]} />
      <button onClick = {voteAnecdoteHandler}>vote</button>
      <button onClick = {randomAnecdoteHandler}>next anecdote</button>
      <Anecdote header = "Anecdote of the day" anecdote = {anecdotes[getMaxVotedAnecdote.index]} />
    </div>
  );
}

export {App};