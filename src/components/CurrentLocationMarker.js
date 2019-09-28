import { connect } from "react-redux"
import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import {updateMyLocation} from '../redux/actions'

const mapStateToProps = state => {
    const location = state.location
    return {
      location
    }
  }

class CurrentLocationMarker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateMyLocation: props.updateMyLocation,
            location: props.location
        }
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({location: positionToArray(position)})
        })
    }
  
    render() {
        return (
      <Marker position={this.state.location}>
      <Popup>
        A pretty CSS3 popup. <br/> Easily customizable.
      </Popup>
        </Marker>
    );
    }
  
    componentDidMount() {
        this.interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                this.state.updateMyLocation(positionToArray(position))
            })
        })
      }
    componentWillUnmount() {
    clearInterval(this.interval);
    }
  }

  function positionToArray(position) {
    return [position.coords.latitude, position.coords.longitude]
  }

  export default connect(mapStateToProps, {updateMyLocation})(CurrentLocationMarker)
