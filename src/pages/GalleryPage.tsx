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
import galleryBird17 from "@/assets/gallery-bird-17.jpg";
import galleryBird18 from "@/assets/gallery-bird-18.jpg";
import galleryBird19 from "@/assets/gallery-bird-19.jpg";
import galleryBird20 from "@/assets/gallery-bird-20.jpg";
import galleryBird21 from "@/assets/gallery-bird-21.jpg";
import galleryBird22 from "@/assets/gallery-bird-22.jpg";
import galleryBird23 from "@/assets/gallery-bird-23.jpg";
import galleryBird24 from "@/assets/gallery-bird-24.jpg";
import galleryBird25 from "@/assets/gallery-bird-25.jpg";
import galleryBird26 from "@/assets/gallery-bird-26.jpg";
import galleryBird27 from "@/assets/gallery-bird-27.jpg";
import galleryBird28 from "@/assets/gallery-bird-28.jpg";
import galleryBird29 from "@/assets/gallery-bird-29.jpg";
import galleryBird30 from "@/assets/gallery-bird-30.jpg";
import galleryBird31 from "@/assets/gallery-bird-31.jpg";
import galleryBird32 from "@/assets/gallery-bird-32.jpg";
import galleryBird33 from "@/assets/gallery-bird-33.jpg";
import galleryBird34 from "@/assets/gallery-bird-34.jpg";
import galleryBird35 from "@/assets/gallery-bird-35.jpg";
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
    galleryBird17,
    galleryBird18,
    galleryBird19,
    galleryBird20,
    galleryBird21,
    galleryBird22,
    galleryBird23,
    galleryBird24,
    galleryBird25,
    galleryBird26,
    galleryBird27,
    galleryBird28,
    galleryBird29,
    galleryBird30,
    galleryBird31,
    galleryBird32,
    galleryBird33,
    galleryBird34,
    galleryBird35,
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
