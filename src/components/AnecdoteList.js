import React from 'react'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({ store }) => {
    return (
        <ul>
            {store.getState().map(anecdote =>
                <Anecdote 
                    key={anecdote.id}    
                    anecdote={anecdote}
                    handleClick={() => 
                        store.dispatch(vote(anecdote.id))    
                    }
                />
            )}
        </ul>

    )
}

export default AnecdoteList