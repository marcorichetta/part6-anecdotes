import React from 'react'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {

    /**
     * Helper function to dispatch the vote, 
     * dispatch the notification message and set
     * a timeout to remove it.
     * @param {Object} anecdote
     */
    const voteHandler = (anecdote) => {
        // Dispatch the vote to the anecdoteReducer
        store.dispatch(vote(anecdote))

        // Dispatch the notification message
        const notificationMessage = `Voted: ${anecdote.content.toString()}` 
        store.dispatch(createNotification(notificationMessage))

        // Dispatch the notification removal
        setTimeout(() => {
            store.dispatch(removeNotification())
        }, 5000)
    }

    // Destructure the values from the store
    const { anecdotes, filter } = store.getState()

    /**
     * Helper function to filter 
     * the anecdotes to be shown
     */
    const anecdotesToShow = () => {
        if ( filter === 'ALL') {
            return anecdotes
        }

        return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    }

    return (
        <ul>
            {anecdotesToShow().map(anecdote =>
                <Anecdote 
                    key={anecdote.id}    
                    anecdote={anecdote}
                    handleClick={() => voteHandler(anecdote)}
                />
            )}
        </ul>

    )
}

export default AnecdoteList