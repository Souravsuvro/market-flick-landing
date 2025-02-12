import React, { useState, useEffect } from 'react';

// Conditional import to handle potential loading issues
const MapComponent = React.lazy(() => 
  import('./LeafletMap').catch(() => ({
    default: () => <div>Map could not be loaded</div>
  }))
);

const MarketPotentialMap: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      try {
        await import('react-leaflet');
        await import('leaflet');
        setIsMapLoaded(true);
      } catch (error) {
        console.error('Failed to load map dependencies', error);
      }
    };

    loadMap();
  }, []);

  return (
    <section className="market-potential-map container mx-auto px-4 py-16">
      {isMapLoaded ? (
        <React.Suspense fallback={<div>Loading map...</div>}>
          <MapComponent />
        </React.Suspense>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">Loading market potential map...</p>
        </div>
      )}
    </section>
  );
};

export default MarketPotentialMap;