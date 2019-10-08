import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = (props) => {

  const store = props.store

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification store={store} />
      <Filter store={store} />
      <h2>create new</h2>
      <AnecdoteForm store={store} />
      <AnecdoteList store={store} />
    </div>
  )
}

export default App