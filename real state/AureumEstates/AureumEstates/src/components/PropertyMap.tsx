import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PROPERTIES } from "../constants";
import { motion } from "motion/react";

// Fix for default marker icons in Leaflet with React
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const customMarkerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function PropertyMap() {
  const center: [number, number] = [25.12, 55.2]; // Dubai center

  return (
    <section id="map" className="section-luxury bg-deep-blue relative z-10">
      <style>{`
        .marker-pin {
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          background: #C9A84C;
          position: absolute;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -15px 0 0 -15px;
          box-shadow: 0 0 15px rgba(201, 168, 76, 0.5);
          border: 2px solid white;
        }
        .pin-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #030508;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -7px 0 0 -7px;
        }
        .property-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(201, 168, 76, 0.3);
          color: #030508;
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
        }
        .property-popup .leaflet-popup-content {
          margin: 0;
          width: 250px !important;
        }
        .property-popup .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-sapphire/[0.08] blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold hidden sm:block" />
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold">Global Scouting</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white">
              Live <span className="gold-text italic">Portfolio</span> Map
            </h2>
            <p className="max-w-xl text-white/80 font-light text-base md:text-lg leading-[1.9] tracking-wide">
              Explore our curated assets across the world's most prestigious locations in real-time.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 glass rounded-full text-[10px] uppercase tracking-widest font-bold text-white hover:bg-gold/10 transition-colors border border-white/10">
              Focus Dubai
            </button>
            <button className="px-6 py-3 glass rounded-full text-[10px] uppercase tracking-widest font-bold text-white hover:bg-gold/10 transition-colors border border-white/10">
              Global View
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[600px] md:h-[750px] rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl relative z-10 glow-blue"
        >
          <MapContainer 
            center={center} 
            zoom={11} 
            scrollWheelZoom={false}
            className="w-full h-full grayscale-[0.2] opacity-100"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {PROPERTIES.map((property) => (
              <Marker key={property.id} position={property.coords} icon={customMarkerIcon}>
                <Popup className="property-popup">
                  <div className="flex flex-col">
                    <div className="relative h-32 overflow-hidden">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-gold text-luxury-black text-[8px] font-bold uppercase rounded">
                        {property.status}
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-serif font-bold text-base text-white">{property.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gold-dark font-bold text-sm">{property.price}</span>
                        <span className="text-white/80 text-[9px] uppercase tracking-widest">{property.type}</span>
                      </div>
                      <button className="w-full py-2 bg-white/5 hover:bg-gold hover:text-white transition-colors rounded-lg text-[9px] font-bold uppercase tracking-widest border border-white/10 text-white">
                        View Details
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          {/* Map Controls UI Overlay */}
          <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-2">
            <div className="glass-blue p-2 rounded-xl flex flex-col gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-deep-blue/5 hover:bg-gold/20 rounded-lg text-white font-bold text-xl">+</button>
              <button className="w-10 h-10 flex items-center justify-center bg-deep-blue/5 hover:bg-gold/20 rounded-lg text-white font-bold text-xl">−</button>
            </div>
          </div>

          {/* Legend Overlay */}
          <div className="absolute bottom-10 left-10 z-[1000] glass px-7 py-5 rounded-2xl hidden md:block border border-gold/20 shadow-xl">
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/80 mb-3 font-medium">Live Active Markers</div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
                <span className="text-xs text-white/80 font-light">Available Property</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-gold" />
                <span className="text-xs text-white/80 font-light">Verified Asset</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/[0.03] -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gold/[0.03] -translate-x-1/2 z-0" />
    </section>
  );
}
