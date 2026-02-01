import { useState } from "react";
import Navigation from "@/components/Navigation";
import LazyImage from "@/components/LazyImage";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const birdImages: string[] = [];
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
            {birdImages.map((image, index) => <div key={index} className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <LazyImage src={image} alt={`Bird ${index + 1}`} className="group-hover:scale-110 transition-transform duration-300" onClick={() => setSelectedImage(image)} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <img src={selectedImage} alt="Selected bird" className="w-full h-full max-w-full max-h-[90vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
            
          </div>
        </div>}
    </div>;
};
export default GalleryPage;