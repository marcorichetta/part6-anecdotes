import React from 'react'
import { connect } from "react-redux";

import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    
    const handleChange = (event) => {
        
        // input-field value is in variable event.target.value
        const myFilter = event.target.value

        props.setFilter(myFilter)
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


export default connect(
    null,
    { setFilter }
)(Filter)