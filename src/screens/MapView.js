import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import LocationUpdater from '../components/LocationUpdater'

class MapView extends React.Component {
  render() {
      console.log(this.state)
      return (
      <Map center={[51.504425, 7.526183]} zoom={13}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
    <CurrentLocationMarker />
  </Map>
  );
  }
}

function positionToArray(position) {
  return [position.coords.latitude, position.coords.longitude]
}

export default MapView

class CurrentLocationMarker extends React.Component {
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
              this.setState({location: positionToArray(position)})
          })
      })
    }
  componentWillUnmount() {
  clearInterval(this.interval);
  }
}
