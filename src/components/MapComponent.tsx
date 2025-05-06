
import { useEffect, useRef } from "react";

interface MapComponentProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  title: string;
}

const MapComponent = ({ coordinates, title }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (mapRef.current && coordinates) {
      // Create a Google Maps embed URL
      const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=NEED_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=10`;
      
      // For demo purposes, we'll show a placeholder map
      const placeholderUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=10&size=600x400&key=NEED_API_KEY`;
      
      if (iframeRef.current) {
        iframeRef.current.src = googleMapsUrl;
      }
    }
  }, [coordinates]);

  return (
    <div className="rounded-lg overflow-hidden border border-palejade/20 bg-white shadow-sm h-72 md:h-96" ref={mapRef}>
      <div className="h-full w-full bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <h3 className="font-medium mb-2">{title}</h3>
          <p className="text-sm text-gray-500">
            Location: {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
          </p>
          <p className="text-xs text-gray-400 mt-4">
            Google Maps would display here with a valid API key
          </p>
        </div>
        <iframe
          ref={iframeRef}
          className="hidden"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title={`Map of ${title}`}
        />
      </div>
    </div>
  );
};

export default MapComponent;
