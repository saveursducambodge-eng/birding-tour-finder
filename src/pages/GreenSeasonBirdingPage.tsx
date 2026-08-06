import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TourDetailsPopup from "@/components/TourDetailsPopup";
import { tours, TourImageSlider, getDurationGroup, durationGroupOptions } from "@/pages/ToursPage";
import paintedStorksHeroAsset from "@/assets/tours-hero-painted-storks.jpg.asset.json";
import vulturesHeroAsset from "@/assets/tours-hero-vultures.jpg.asset.json";

const GreenSeasonBirdingPage = () => {
  const [selectedDurationGroup, setSelectedDurationGroup] = useState<string>("half-day");
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [paintedStorksHeroAsset.url, vulturesHeroAsset.url];
  const toursSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setHeroSlide((s) => (s + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleTourDetails = (tour: typeof tours[0]) => {
    setSelectedTour(tour);
    setIsPopupOpen(true);
  };

  const filteredTours = tours.filter((tour) => {
    const group = getDurationGroup(tour.duration);
    return group !== "information" && group === selectedDurationGroup;
  });

  return <>
      <Helmet>
        <title>Green Season Birding Cambodia | Wet Season Bird Tours | PEARAING</title>
        <meta name="description" content="Green season birding in Cambodia, May to October. Lush landscapes, breeding waterbirds and fewer crowds, with every tour, photo, description and full itinerary." />
        <link rel="canonical" href="https://pearaing.com/green-season-birding" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-sage-light to-nature-earth/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 md:px-8 py-6">
        <div className="relative w-full max-w-7xl aspect-[1280/822] min-h-[500px] rounded-[3rem] overflow-hidden shadow-nature group">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Green season birding in Cambodia ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <button
            onClick={() => setHeroSlide((s) => (s - 1 + heroImages.length) % heroImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
            aria-label="Previous hero image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setHeroSlide((s) => (s + 1) % heroImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
            aria-label="Next hero image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === heroSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to hero image ${i + 1}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/95 via-nature-forest/40 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-primary-foreground/10 rounded-[3rem]" />

          <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-px w-8 bg-nature-sage-light" />
                <span className="text-nature-sage-light font-medium tracking-[0.3em] uppercase text-xs md:text-sm font-sans">
                  May to October
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.9] mb-4 md:mb-6 font-serif">
                Green Season <br />
                <span className="italic font-light opacity-90">Birding</span>
              </h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-light font-sans">
                Emerald landscapes, breeding waterbird colonies and quiet trails across Cambodia's wettest, wildest months.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4">
            <span className="[writing-mode:vertical-lr] text-primary-foreground/40 text-[10px] uppercase tracking-[0.3em] font-medium">
              Scroll to explore
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-nature-forest mb-4 sm:mb-6">
            Birding Cambodia in the Green Season
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            From May to October Cambodia turns emerald. Rice paddies fill, the flooded forest of the Tonle Sap comes alive, waterbirds nest in huge colonies and the dry forests of the Northern Plains burst into leaf. Every tour below runs in the green season, with the same expert local guides, full itineraries and conservation focus, but with lusher landscapes and far fewer visitors.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section ref={toursSectionRef} className="py-6 sm:py-8 lg:py-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTours.map((tour) => {
            const d = (tour.duration || "").toLowerCase();
            let durationLabel = "";
            const nightMatch = d.match(/(\d+)\s*day/);
            if (nightMatch) {
              const n = parseInt(nightMatch[1], 10);
              durationLabel = `${n} ${n === 1 ? "DAY" : "DAYS"}`;
            } else if (d.includes("half")) {
              durationLabel = "HALF DAY";
            } else if (d.includes("full")) {
              durationLabel = "1 DAY";
            }
            return (
            <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 border-sage-light hover:border-nature-sage overflow-hidden">
              <div className="relative">
                {tour.images && tour.images.length > 1 ? (
                  <TourImageSlider images={tour.images} alt={tour.title} />
                ) : tour.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ) : null}
                {durationLabel && (
                  <span className="absolute bottom-3 left-3 z-20 bg-[#d9722e] text-white text-xs font-semibold tracking-wider px-3 py-1.5 rounded shadow-md pointer-events-none">
                    {durationLabel}
                  </span>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-nature-forest mb-2 line-clamp-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tour.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Cambodia</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>)}
                    {tour.highlights.length > 3 && <Badge variant="outline" className="text-xs">
                        +{tour.highlights.length - 3} more
                      </Badge>}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-nature-forest">
                    {tour.price}
                  </div>
                  <Button onClick={() => handleTourDetails(tour)} className="bg-nature-forest hover:bg-nature-sage text-white border border-nature-forest hover:border-nature-sage shadow-md">
                    Know more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );})}
          <Link to="/itineraries" className="block group">
            <Card className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 bg-nature-sage-pale border-2 border-dashed border-nature-sage-mist hover:bg-nature-sage-pale-hover hover:border-nature-sage-mist-hover transition-all duration-300">
              <div className="w-20 h-20 mb-4 rounded-full bg-white border border-nature-sage-soft shadow-sm flex items-center justify-center text-nature-sage group-hover:scale-105 transition-transform duration-300">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-3">
                View Itineraries
              </h3>
              <p className="text-nature-sage mb-4">
                Browse suggested birding itineraries from 1 day up to 25 days across Cambodia.
              </p>
              <span className="inline-flex items-center text-nature-forest font-medium">
                Explore itineraries
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Card>
          </Link>
        </div>
      </section>

      {/* Floating duration filter */}
      <div className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 md:gap-1 p-1 md:p-1.5 lg:p-2 bg-nature-forest/95 backdrop-blur-xl border border-primary-foreground/10 rounded-full shadow-float animate-float-pill max-w-[calc(100%-2rem)] md:max-w-fit">
        {durationGroupOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setSelectedDurationGroup(option.value);
              toursSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 rounded-full text-[10px] md:text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              selectedDurationGroup === option.value
                ? "bg-primary-foreground text-nature-forest shadow-sm"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Tour Details Popup */}
      <TourDetailsPopup tour={selectedTour} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div></>;
};

export default GreenSeasonBirdingPage;
