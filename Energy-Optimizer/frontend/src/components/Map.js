import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '500px',
  position: 'relative',
  borderRadius: '25px'
};

export class MapContainer extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cords: [
        {lat: 29.65, lng:-82.35},
      ]
    }
  }

  showMarkers = () => {
    return this.state.cords.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     onClick={() => console.log("Clicked")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ 
            lat: 28, 
            lng: -81
        }}>
          {this.showMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(MapContainer);
