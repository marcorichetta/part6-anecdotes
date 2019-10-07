import React from 'react';
import { createAnecdote } from './reducers/anecdoteReducer';
import Anecdotes from './components/Anecdotes';

const App = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    props.store.dispatch(
      createAnecdote(content)
    )
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes store={props.store} />
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App