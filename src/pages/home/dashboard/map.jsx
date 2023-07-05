import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import { STRINGS } from '../../../constants/CommonString';

// YOUR_MAPBOX_ACCESS_TOKEN : due mapbox developer requires card so implemented it
const drivers = [
    { id: 1, name: 'Driver 1', latitude: 37.7749, longitude: -122.4194 },
    { id: 2, name: 'Driver 2', latitude: 34.0522, longitude: -118.2437 },
    { id: 3, name: 'Driver 3', latitude: 40.7128, longitude: -74.0060 },
    { id: 4, name: 'Driver 4', latitude: 51.5074, longitude: -0.1278 },
    { id: 5, name: 'Driver 5', latitude: 48.8566, longitude: 2.3522 }
  ];

export default function Map() {
    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: 400,
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10
      });
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">{STRINGS?.MAP_VIEW}</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
        onViewportChange={newViewport => setViewport(newViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {drivers.map(driver => (
          <Marker
            key={driver.id}
            latitude={driver.latitude}
            longitude={driver.longitude}
          >
            <div className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>  )
}
