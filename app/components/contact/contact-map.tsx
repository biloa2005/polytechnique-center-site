"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Center = {
  name: string;
  address: string;
  position: [number, number];
};

const markerIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function ContactMap({ centers }: { centers: Center[] }) {
  return (
    <MapContainer
      center={[4.08, 9.8]}
      zoom={12}
      scrollWheelZoom={false}
      className="z-0 h-full min-h-[400px] w-full sm:min-h-[500px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {centers.map((center) => (
        <Marker
          key={center.name}
          position={center.position}
          icon={markerIcon}
        >
          <Popup>
            <div className="min-w-[180px]">
              <strong className="text-blue-900">{center.name}</strong>
              <p className="mt-1 text-sm">{center.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-bold text-blue-700"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
