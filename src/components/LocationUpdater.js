import React, {Component} from 'react'

class LocationUpdater extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: [51.504425, 7.526183]
        }

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({location: positionToArray(position)})
        })
    }

    render() {
        console.log(this.state)
        return <div />
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({location: positionToArray(position)})
            }, 1000)
        })
      }
    componentWillUnmount() {
    clearInterval(this.interval);
    }
}

function positionToArray(position) {
    return [position.coords.latitude, position.coords.longitude]
}

export default LocationUpdater;
