import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log(action.type)
  console.log(action.data)
  switch (action.type) {
    case 'NEW_ANECDOTE':
      /* Return a new array with the data from
      the state plus the action data */
      return state.concat(action.data)

    case 'INIT_ANECDOTES':
      return action.data

    case 'VOTE':
      // Extract anecdote id
      const id = action.data.id

      // Find anecdote to change
      const anecdoteToVote = state.find(a => a.id === id)

      /* Create a copy of anecdoteToVote and add 1 vote */
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      /* Replace the state with all the 
        anecdotes not changed and the created one */
      const anecdotesToSort = state.map(anecdote => 
        anecdote.id !== id ? anecdote : votedAnecdote
      )

      // Return the anecdotes sorted by most votes
      return anecdotesToSort.sort((a, b) => b.votes - a.votes)

    default:
      return state
  }
}

/* ACTION CREATORS */
// Functions that create actions are called action creators.

/**
 * Method used to init the state in a single action
 */
export const initializeAnecdotes = () => {
  return async dispatch => {
    
    // The operation first fetches all the anecdotes from the server
    const anecdotes = await anecdoteService.getAll()

    // Then dispatches the anecdotes to the action, which adds them to the store.
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({  
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export default reducer