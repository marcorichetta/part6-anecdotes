import React from 'react'
import { connect } from "react-redux";

import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()

        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(newAnecdote)
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote" />
                </div>
                <button>create</button>
            </form>
        </>
    )
}

export default connect(
    null,
    { createAnecdote }
)(AnecdoteForm)