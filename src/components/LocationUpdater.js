import React, {Component} from 'react'
import {connect} from 'react-redux'

class LocationUpdater extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: [51.504425, 7.526183],
            socket: props.socket
        }

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({location: positionToArray(position)})
        }, null, null)
    }

    render() {
        return <div />
    }

    componentDidMount() {
        const that = this
        this.interval = setInterval(function() {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position)
                const data = {
                    location: {'long': position.coords.longitude, 'lang': position.coords.latitude},
                    userid: 'MYUSER'
                }
                that.state.socket.emit('newLocation', data)
            })
        }, 5000)
      }
    componentWillUnmount() {
    clearInterval(this.interval);
    }
}

function positionToArray(position) {
    return [position.coords.latitude, position.coords.longitude]
}

const mapStateToProps = state => {
    const socket = state.socket
    return {socket}
}

export default connect(mapStateToProps)(LocationUpdater);
