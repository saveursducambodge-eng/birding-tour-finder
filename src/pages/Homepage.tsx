import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Award, Compass, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TourIntroPopup from "@/components/TourIntroPopup";

import heroImage from "@/assets/hero-cambodia-jungle.jpg";
import giantIbisImage from "@/assets/tmatboey-ibis.jpg";
import homepageHeroIbis from "@/assets/homepage-hero-ibis.jpg";
import heroSlideGuides from "@/assets/hero-slide-guides.jpg";
import heroSlideBirdingGroup from "@/assets/hero-slide-birding-group.jpg";
import heroSlideScope from "@/assets/hero-slide-scope.jpg";
// Import bird images from gallery
import bird1 from "@/assets/half-day-birding-siem-reap.jpg";
import bird2 from "@/assets/prek-toal-storks.jpg";
import bird3 from "@/assets/bird-3.jpg";
import bird4 from "@/assets/sarus-cranes.jpg";
import bird5 from "@/assets/prek-toal-waterbird-sanctuary.jpg";
import bird6 from "@/assets/tmatboey-ibis-tour6.jpg";
import kohKerImage from "@/assets/koh-ker-bird-tours.jpg";

const heroSlides = [homepageHeroIbis, heroSlideGuides, heroSlideBirdingGroup, heroSlideScope];

const Homepage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const tourHighlights = [{
    title: "Giant Ibis Discovery",
    description: "Encounter Cambodia's national bird in pristine wetlands",
    icon: <Award className="w-6 h-6" />,
    image: giantIbisImage,
    duration: "Full Day",
    difficulty: "Easy"
  }, {
    title: "Tonle Sap Adventure",
    description: "Explore Southeast Asia's largest freshwater lake",
    icon: <Compass className="w-6 h-6" />,
    image: heroImage,
    duration: "2 Days",
    difficulty: "Moderate"
  }, {
    title: "Angkor Wat Birding",
    description: "Combine ancient temples with early morning birding",
    icon: <Heart className="w-6 h-6" />,
    image: heroImage,
    duration: "Half Day",
    difficulty: "Easy"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide})`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 py-8">
          <Badge className="mb-4 bg-nature-forest/80 text-white border-none text-xs sm:text-sm">
            Cambodia's Premier Birding Experience
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Explore Cambodia's
            <span className="block text-nature-sky mt-2">Wild Birds</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up text-justify lg:text-lg">
            


Pearaing Biodiversity Conservation is an organization officially registered with the Cambodian government. We provide visitors with unique access to birding and wildlife sites across Cambodia. Our mission is to sustain Cambodia’s wildlife and local communities through ecotourism.

          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up max-w-md sm:max-w-none mx-auto">
              <Link to="/tours" className="w-full sm:w-auto">
                <Button size="lg" className="bg-nature-forest hover:bg-nature-forest-light text-white w-full sm:w-auto">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Discover Our Tours
                </Button>
              </Link>
            <Button size="lg" variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary w-full sm:w-auto" onClick={() => setShowPopup(true)}>
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Learn More
            </Button>
          </div>
          <div className="flex gap-2 justify-center mt-6">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-nature-sand text-nature-forest">
              Our Tours
            </Badge>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
              Discover Cambodia's Birding Adventures
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              From half-day excursions to multi-day expeditions, explore Cambodia's incredible bird diversity with our expert guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Half-Day Tour */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={bird1} alt="Half-Day Birding Near Siem Reap" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">Half Day</Badge>
                  <Badge variant="outline" className="text-xs">$122</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                  Half-Day Birding Near Siem Reap
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  Explore Pearaing Biodiversity Conservation Center with 50+ wetland species, just 20 minutes from Siem Reap.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Full Day Prek Toal */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={bird2} alt="Prek Toal Waterbird Sanctuary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">Full Day</Badge>
                  <Badge variant="outline" className="text-xs">$255</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                  Prek Toal Waterbird Sanctuary
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  UNESCO Biosphere Reserve with Greater Adjutant and floating village experience.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Koh Ker & Beng Melea */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img alt="Koh Ker & Beng Melea" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={kohKerImage} />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">Full Day</Badge>
                  <Badge variant="outline" className="text-xs">$255</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                  Koh Ker & Beng Melea
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  Ancient temples and forest birding with White-Rumped Pygmy Falcon and 8 woodpecker species.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Show more tours on larger screens */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300 hidden lg:block">
              <div className="aspect-video overflow-hidden">
                <img alt="Angkor Wat Birding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="/lovable-uploads/a62547e2-7ac0-49da-a5b5-a5021f0c5be7.jpg" />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">Full Day</Badge>
                  <Badge variant="outline" className="text-xs">$195</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                  Angkor Wat Birding Tour
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  Combine sunrise at Angkor Wat with forest birding and temple exploration.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300 hidden lg:block">
              <div className="aspect-video overflow-hidden">
                <img alt="Tmatboey Bengal Florican" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="/lovable-uploads/4ddb0e71-757a-4f2c-81c8-51288a4ecc95.jpg" />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">3 Days</Badge>
                  <Badge variant="outline" className="text-xs">$898</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                   Giant Ibis Experience Tours 
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  Multi-day adventure to see Giant Ibis, Bengal Florican near Tonle Sap Lake and DDF.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Mobile view - Show only one more card */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300 md:hidden">
              <div className="aspect-video overflow-hidden">
                <img src={bird6} alt="Tmatboey Bengal Florican" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">3 Days</Badge>
                  <Badge variant="outline" className="text-xs">$898</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-primary">
                  Tmatboey - Giant Ibis Experience
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  Multi-day adventure to see Giant Ibis, Bengal Florican and visit Preah Vihear Temple.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* View More Tours Card */}
            <Card className="group overflow-hidden hover:shadow-float transition-all duration-300 bg-gradient-to-br from-nature-forest to-nature-forest-light text-white border-0">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-nature-sky/20 to-nature-forest/20 flex items-center justify-center">
                <div className="text-center">
                  <Compass className="w-12 h-12 mx-auto mb-2 text-white/80" />
                  <p className="text-sm text-white/80">Discover More</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">More Tours</Badge>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-3 text-white">
                  View All Our Tours
                </h3>
                <p className="text-white/80 mb-4 text-sm line-clamp-3">
                  Explore our complete collection of birdwatching tours across Cambodia.
                </p>
                <Link to="/tours">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-white hover:text-white/80 bg-transparent">
                    View All Tours
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-nature px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
            Supporting Bird Conservation
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-sm sm:text-base">
            Every tour contributes to protecting Cambodia's endangered bird species and 
            their habitats. Join us in preserving these magnificent creatures for future generations.
          </p>
          <Link to="/conservation">
            <Button size="lg" className="bg-nature-forest hover:bg-nature-forest-light">
              <Heart className="w-5 h-5 mr-2" />
              Learn About Conservation
            </Button>
          </Link>
        </div>
      </section>

      {/* Tour Introduction Popup */}
      <TourIntroPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>;
};
export default Homepage;