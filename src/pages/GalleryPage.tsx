import { useState } from "react";
import Navigation from "@/components/Navigation";
import LazyImage from "@/components/LazyImage";
import bird1 from "@/assets/bird-1.jpg";
import bird2 from "@/assets/bird-2.jpg";
import bird3 from "@/assets/bird-3.jpg";
import bird4 from "@/assets/bird-4.jpg";
import bird5 from "@/assets/bird-5.jpg";
import bird6 from "@/assets/bird-6.jpg";
import bird7 from "@/assets/bird-7.jpg";
import bird8 from "@/assets/bird-8.jpg";
import bird9 from "@/assets/bird-9.jpg";
import bird10 from "@/assets/bird-10.jpg";
import bird11 from "@/assets/bird-11.jpg";
import bird12 from "@/assets/bird-12.jpg";
import bird13 from "@/assets/bird-13.jpg";
import bird14 from "@/assets/bird-14.jpg";
import bird15 from "@/assets/bird-15.jpg";
import bird16 from "@/assets/bird-16.jpg";
import bird17 from "@/assets/bird-17.jpg";
import bird18 from "@/assets/bird-18.jpg";
import woodpeckerGallery from "@/assets/woodpecker-gallery.jpg";
import birdsInTreeGallery from "@/assets/birds-in-tree-gallery.jpg";
import bird19 from "@/assets/bird-19.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const birdImages = [
    bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10, bird11, bird12, bird13, bird14, bird15, bird16, bird17, bird18, bird19, woodpeckerGallery, birdsInTreeGallery
  ];

  return (
    <div className="min-h-screen bg-background">
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
            {birdImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <LazyImage
                  src={image}
                  alt={`Bird ${index + 1}`}
                  className="group-hover:scale-110 transition-transform duration-300"
                  onClick={() => setSelectedImage(image)}
                />
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
              alt="Selected bird"
              className="w-full h-full max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;