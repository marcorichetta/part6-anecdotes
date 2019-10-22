const reducer = (state = [], action) => {
  console.log(action.type)
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

export const createAnecdote = (data) => {
  console.log('NEW', data)
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

/**
 * Method used to init the state in a single action
 */
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export const vote = ({ id, content}) => {
  return {
    type: 'VOTE',
    data: { 
      content,
      id
    }
  }
}

export default reducer