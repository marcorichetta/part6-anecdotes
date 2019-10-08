import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const Filter = ({ store }) => {
    
    const handleChange = (event) => {
        
        // input-field value is in variable event.target.value
        const myFilter = event.target.value

        store.dispatch(setFilter(myFilter))
    }
    const style = {
        marginTop: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter