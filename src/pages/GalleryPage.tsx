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
import galleryBird10 from "@/assets/gallery-bird-10.jpg";
import galleryBird11 from "@/assets/gallery-bird-11.jpg";
import galleryBird12 from "@/assets/gallery-bird-12.jpg";
import galleryBird13 from "@/assets/gallery-bird-13.jpg";
import galleryBird14 from "@/assets/gallery-bird-14.jpg";
import galleryBird15 from "@/assets/gallery-bird-15.jpg";
import galleryBird16 from "@/assets/gallery-bird-16.jpg";
import galleryBird28 from "@/assets/gallery-bird-28.jpg";
import galleryBird29 from "@/assets/gallery-bird-29.jpg";
import galleryBird30 from "@/assets/gallery-bird-30.jpg";
import galleryBird36 from "@/assets/gallery-bird-36.jpg";
import galleryBird37 from "@/assets/gallery-bird-37.jpg";
import galleryBird38 from "@/assets/gallery-bird-38.jpg";
import galleryBird39 from "@/assets/gallery-bird-39.jpg";
import galleryBird40 from "@/assets/gallery-bird-40.jpg";
import galleryBird41 from "@/assets/gallery-bird-41.jpg";
import galleryBird42 from "@/assets/gallery-bird-42.jpg";
import galleryBird43 from "@/assets/gallery-bird-43.jpg";
import galleryBird44 from "@/assets/gallery-bird-44.jpg";
import galleryBird45 from "@/assets/gallery-bird-45.jpg";
import galleryBird46 from "@/assets/gallery-bird-46.jpg";
import galleryBird47 from "@/assets/gallery-bird-47.jpg";
import galleryBird49 from "@/assets/gallery-bird-49.jpg";
import galleryBird50 from "@/assets/gallery-bird-50.jpg";
import galleryBird51 from "@/assets/gallery-bird-51.jpg";
import galleryBird52 from "@/assets/gallery-bird-52.jpg";
import galleryBird53 from "@/assets/gallery-bird-53.jpg";
import galleryBird54 from "@/assets/gallery-bird-54.jpg";
import galleryTour1 from "@/assets/gallery-tour-1.jpg";
import galleryTour2 from "@/assets/gallery-tour-2.jpg";
import galleryTour3 from "@/assets/gallery-tour-3.jpg";
import galleryTour4 from "@/assets/gallery-tour-4.jpg";
import galleryTour5 from "@/assets/gallery-tour-5.jpg";
import galleryTour6 from "@/assets/gallery-tour-6.jpg";
import galleryTour7 from "@/assets/gallery-tour-7.jpg";
import galleryTour8 from "@/assets/gallery-tour-8.jpg";
import galleryTour9 from "@/assets/gallery-tour-9.jpg";
import galleryTour10 from "@/assets/gallery-tour-10.jpg";
import galleryTour11 from "@/assets/gallery-tour-11.jpg";
import galleryTour12 from "@/assets/gallery-tour-12.jpg";
import galleryTour13 from "@/assets/gallery-tour-13.jpg";
import galleryTour14 from "@/assets/gallery-tour-14.jpg";
import galleryTour15 from "@/assets/gallery-tour-15.jpg";
import galleryBird55 from "@/assets/gallery-bird-55.jpg";
import galleryBird56 from "@/assets/gallery-bird-56.jpg";
import galleryBird57 from "@/assets/gallery-bird-57.jpg";
import galleryBird58 from "@/assets/gallery-bird-58.jpg";
import galleryBird59 from "@/assets/gallery-bird-59.jpg";
import galleryBird60 from "@/assets/gallery-bird-60.jpg";
import galleryBird61 from "@/assets/gallery-bird-61.jpg";
import galleryWildlife1 from "@/assets/gallery-wildlife-1.jpg";
import galleryWildlife2 from "@/assets/gallery-wildlife-2.jpg";
import galleryTour16 from "@/assets/gallery-tour-16.jpg";
import galleryTour17 from "@/assets/gallery-tour-17.jpg";
import galleryTour18 from "@/assets/gallery-tour-18.jpg";
import galleryTour19 from "@/assets/gallery-tour-19.jpg";
import galleryTour20 from "@/assets/gallery-tour-20.jpg";
import galleryTour21 from "@/assets/gallery-tour-21.jpg";
import galleryTour22 from "@/assets/gallery-tour-22.jpg";
import galleryTour23 from "@/assets/gallery-tour-23.jpg";
import galleryTour24 from "@/assets/gallery-tour-24.jpg";
import galleryBird62 from "@/assets/gallery-bird-62.jpg";
import galleryBird63 from "@/assets/gallery-bird-63.jpg";
import galleryBird64 from "@/assets/gallery-bird-64.jpg";
import galleryBird65 from "@/assets/gallery-bird-65.jpg";
import galleryBird66 from "@/assets/gallery-bird-66.jpg";
import galleryBird67 from "@/assets/gallery-bird-67.jpg";
import galleryBird68 from "@/assets/gallery-bird-68.jpg";
import galleryBird69 from "@/assets/gallery-bird-69.jpg";
import galleryBird70 from "@/assets/gallery-bird-70.jpg";
import galleryBird71 from "@/assets/gallery-bird-71.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const birdImages: string[] = [
    galleryBird1,
    galleryBird2,
    galleryBird3,
    galleryBird4,
    galleryBird5,
    galleryBird6,
    galleryBird7,
    galleryBird8,
    galleryBird9,
    galleryBird10,
    galleryBird11,
    galleryBird12,
    galleryBird13,
    galleryBird14,
    galleryBird15,
    galleryBird16,
    galleryBird28,
    galleryBird29,
    galleryBird30,
    galleryBird36,
    galleryBird37,
    galleryBird38,
    galleryBird39,
    galleryBird40,
    galleryBird41,
    galleryBird42,
    galleryBird43,
    galleryBird44,
    galleryBird45,
    galleryBird46,
    galleryBird47,
    galleryBird49,
    galleryBird50,
    galleryBird51,
    galleryBird52,
    galleryBird53,
    galleryBird54,
    galleryTour1,
    galleryTour2,
    galleryTour3,
    galleryTour4,
    galleryTour5,
    galleryTour6,
    galleryTour7,
    galleryTour8,
    galleryTour9,
    galleryTour10,
    galleryTour11,
    galleryTour12,
    galleryTour13,
    galleryTour14,
    galleryTour15,
    galleryBird55,
    galleryBird56,
    galleryBird57,
    galleryBird58,
    galleryBird59,
    galleryBird60,
    galleryBird61,
    galleryWildlife1,
    galleryWildlife2,
    galleryTour16,
    galleryTour17,
    galleryTour18,
    galleryTour19,
    galleryTour20,
    galleryTour21,
    galleryTour22,
    galleryTour23,
    galleryTour24,
    galleryBird62,
    galleryBird63,
    galleryBird64,
    galleryBird65,
    galleryBird66,
    galleryBird67,
    galleryBird68,
    galleryBird69,
    galleryBird70,
    galleryBird71,
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
            {birdImages.map((src, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <LazyImage 
                    src={src} 
                    alt={`Bird photo ${index + 1}`} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                    onClick={() => setSelectedImage(src)} 
                  />
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
              src={selectedImage} 
              alt="Bird photo" 
              className="w-full h-full max-w-full max-h-[85vh] object-contain rounded-lg" 
              onClick={e => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>;
};
export default GalleryPage;
