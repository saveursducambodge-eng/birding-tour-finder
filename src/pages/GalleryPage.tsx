import { useState } from "react";
import Navigation from "@/components/Navigation";
import LazyImage from "@/components/LazyImage";
import galleryBird1 from "@/assets/gallery-bird-1.jpg";
import galleryBird2 from "@/assets/gallery-bird-2.jpg";
import galleryBird3 from "@/assets/gallery-bird-3.jpg";
import galleryBird4 from "@/assets/gallery-bird-4.jpg";
import galleryBird5 from "@/assets/gallery-bird-5.jpg";
import galleryBird6 from "@/assets/gallery-bird-6.jpg";
import galleryBird7 from "@/assets/gallery-bird-7.jpg";
import galleryBird8 from "@/assets/gallery-bird-8.jpg";
import galleryBird9 from "@/assets/gallery-bird-9.jpg";

interface BirdImage {
  src: string;
  species: string;
  location?: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<BirdImage | null>(null);
  
  const birdImages: BirdImage[] = [
    { src: galleryBird1, species: "Giant Ibis", location: "Tmatboey" },
    { src: galleryBird2, species: "White-shouldered Ibis", location: "Preah Vihear" },
    { src: galleryBird3, species: "Sarus Crane", location: "Ang Trapaeng Thmor" },
    { src: galleryBird4, species: "Green Peafowl", location: "Mondulkiri" },
    { src: galleryBird5, species: "Painted Stork", location: "Prek Toal" },
    { src: galleryBird6, species: "Greater Adjutant", location: "Tonle Sap" },
    { src: galleryBird7, species: "Red-headed Vulture", location: "Northern Plains" },
    { src: galleryBird8, species: "Community Workshop", location: "Tonle Sap Ecotourism" },
    { src: galleryBird9, species: "Birding at Angkor", location: "Angkor Thom" },
  ];

  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Bird Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover the incredible diversity of Cambodia's birdlife through our collection of stunning photographs
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {birdImages.map((bird, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <LazyImage 
                    src={bird.src} 
                    alt={bird.species} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                    onClick={() => setSelectedImage(bird)} 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{bird.species}</h3>
                    {bird.location && (
                      <p className="text-white/80 text-xs sm:text-sm">{bird.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.species} 
              className="w-full h-full max-w-full max-h-[85vh] object-contain rounded-lg" 
              onClick={e => e.stopPropagation()} 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-lg text-center">
              <h3 className="text-white font-bold text-lg sm:text-xl">{selectedImage.species}</h3>
              {selectedImage.location && (
                <p className="text-white/80 text-sm sm:text-base">{selectedImage.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>;
};
export default GalleryPage;