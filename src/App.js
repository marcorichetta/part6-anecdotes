import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';

const App = (props) => {

  const store = props.store

  return (
    <div>
      <Notification store={store} />
      <h2>create new</h2>
      <AnecdoteForm store={store} />
      <h2>Anecdotes</h2>
      <AnecdoteList store={store} />
    </div>
  )
}

export default App