import React from 'react'
import {connect} from 'react-redux'

function CurrentLocationLabel(props) {
    return (
        <h1>{JSON.stringify(props.location)}</h1>
    );
}

const mapStateToProps = state => {
    const location = state.location
    return {location}
}

export default connect(mapStateToProps)(CurrentLocationLabel)
