import React from 'react'
import {updateAllLocations} from '../redux/actions'
import {connect} from 'react-redux'

const LocationSubscriber = (props) => {
    console.log(props)
    props.socket.on('locationChange', (users) => {
        updateAllLocations(users)
        console.log(users)
    })
    return <div></div>
}

const mapStateToProps = state => {
    return {
        socket: state.socket
    }
}

export default connect(mapStateToProps)(LocationSubscriber)
