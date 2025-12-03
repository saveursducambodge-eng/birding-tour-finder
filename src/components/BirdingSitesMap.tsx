import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const BirdingSitesMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([12.5657, 104.991], 7);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const birdingSites = [
      { name: 'Prek Toal', coords: [13.2, 103.65] as [number, number], species: 'Oriental Darter' },
      { name: 'Angkor Wat', coords: [13.4125, 103.867] as [number, number], species: 'Various waterbirds' },
      { name: 'Ang Trapaeng Thmor', coords: [13.68, 103.17] as [number, number], species: 'Sarus Crane' },
      { name: 'Chan Kran Roey', coords: [13.55, 103.85] as [number, number], species: 'Coral-billed Ground Cuckoo' },
      { name: 'Bengal Florican Grassland', coords: [12.85, 104.2] as [number, number], species: 'Bengal Florican' },
      { name: 'BeTreed Adventure', coords: [13.58, 105.0] as [number, number], species: 'Forest birds' },
      { name: 'Tmatboey', coords: [13.4, 104.8] as [number, number], species: 'Giant Ibis' },
      { name: 'Beong Toal Vulture Restaurant', coords: [13.2, 105.35] as [number, number], species: 'Red-headed Vulture' },
      { name: 'Kratie', coords: [12.49, 106.02] as [number, number], species: 'Mekong Wagtail' },
      { name: 'Dak Dam', coords: [12.35, 107.25] as [number, number], species: 'Highland birds' },
      { name: 'Keo Siema', coords: [12.15, 106.9] as [number, number], species: 'Forest species' },
      { name: 'Phnom Penh', coords: [11.5564, 104.9282] as [number, number], species: 'Cambodian Tailorbird' },
      { name: 'Pursat Grassland', coords: [12.53, 103.92] as [number, number], species: 'Chinese Grassbird' },
      { name: 'Phnom Aural', coords: [12.02, 104.08] as [number, number], species: 'Cambodian Laughingthrush' }
    ];

    birdingSites.forEach(site => {
      L.marker(site.coords).addTo(map)
        .bindPopup(`
          <div style="background: white; padding: 8px; border-radius: 8px;">
            <strong>${site.name}</strong><br/>
            Target species: ${site.species}
          </div>
        `);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-3 sm:mb-4">
            Birding Sites in Cambodia
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our carefully selected birding locations across Cambodia, each offering unique opportunities to observe rare and endemic species
          </p>
        </div>
        <div 
          ref={mapRef} 
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg shadow-lg border border-border"
          style={{ zIndex: 1 }}
        />
      </div>
    </section>
  );
};

export default BirdingSitesMap;
