import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import type { LeafletEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Force a resize event after the map is loaded to ensure proper rendering
    const resizeEvent = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => window.clearTimeout(resizeEvent);
  }, []);

  return (
    <div className="relative">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={false}
        className="h-[600px] w-full rounded-lg shadow-lg"
        whenReady={() => {
          // Map is ready
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;