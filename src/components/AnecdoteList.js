import React from 'react'
import { connect } from "react-redux";

import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    /**
     * Helper function to dispatch the vote, 
     * dispatch the notification message and set
     * a timeout to remove it.
     */
    const voteHandler = (anecdote) => {
        // Dispatch the vote to the anecdoteReducer
        props.vote(anecdote)

        // Dispatch the notification message
        const notificationMessage = `Voted: ${anecdote.content.toString()}`
        props.createNotification(notificationMessage)

        // Dispatch the notification removal
        setTimeout(() => {
            props.removeNotification()
        }, 5000)
    }

    return (
        <ul>
            {props.visibleAnecdotes.map(anecdote =>
                <Anecdote 
                    key={anecdote.id}    
                    anecdote={anecdote}
                    handleClick={() => voteHandler(anecdote)}
                />
            )}
        </ul>
    )
}


/**
 * Helper function to filter 
 * the anecdotes to be shown
 */
const anecdotesToShow = ({ anecdotes, filter }) => {
    if (filter === 'ALL') {
        return anecdotes
    }

    return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state),
        filter: state.filter
    }
}

const mapDispatchToProps = {
    vote,
    createNotification,
    removeNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)