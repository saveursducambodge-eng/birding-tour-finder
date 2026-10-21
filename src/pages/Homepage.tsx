import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import TourIntroPopup from "@/components/TourIntroPopup";

import heroImage from "@/assets/hero-cambodia-jungle.jpg";
import giantIbisImage from "@/assets/tmatboey-ibis.jpg";
import homepageHeroIbis from "@/assets/homepage-hero-ibis.jpg";
import heroSlideGuides from "@/assets/hero-slide-guides.jpg";
import heroSlideBirdingGroup from "@/assets/hero-slide-birding-group.jpg";
import heroSlideScope from "@/assets/hero-slide-scope.jpg";
import heroMoon2 from "@/assets/hero-moon/hero-moon-2.jpg.asset.json";
import heroMoon3 from "@/assets/hero-moon/hero-moon-3.jpg.asset.json";
import heroMoon4 from "@/assets/hero-moon/hero-moon-4.jpg.asset.json";
import heroMoon5 from "@/assets/hero-moon/hero-moon-5.jpg.asset.json";
import heroMoon6 from "@/assets/hero-moon/hero-moon-6.jpg.asset.json";
// Import bird images from gallery
import bird1Asset from "@/assets/half-day-birding-siem-reap-new.jpg.asset.json";
const bird1 = bird1Asset.url;
import angkorWatSunsetAsset from "@/assets/angkor-wat-sunset.jpg.asset.json";
const angkorWatSunset = angkorWatSunsetAsset.url;
import bird2 from "@/assets/prek-toal-storks.jpg";
import bird3 from "@/assets/bird-3.jpg";
import bird4 from "@/assets/sarus-cranes.jpg";
import bird5 from "@/assets/prek-toal-waterbird-sanctuary.jpg";
import bird6 from "@/assets/tmatboey-ibis-tour6.jpg";
import kohKerImage from "@/assets/koh-ker-bird-tours.png";

const heroSlides = [
  heroMoon2.url,
  heroMoon3.url,
  heroMoon4.url,
  heroMoon5.url,
  heroMoon6.url,
  heroSlideGuides,
  heroSlideBirdingGroup,
  heroSlideScope,
];

const homeFaqs = [
  {
    question: "What is Pearaing Biodiversity Conservation Center?",
    answer: "Pearaing Biodiversity Conservation Center is a community-managed wetland about 13 km southeast of Siem Reap, close to Tonle Sap Lake. It protects feeding habitat for Painted Stork, Spot-billed Pelican, Oriental Darter and more than 70 wetland bird species.",
  },
  {
    question: "Can I visit Pearaing on a half-day birding tour?",
    answer: "Yes. Pearaing Birding Trails runs morning and afternoon half-day tours from Siem Reap with hotel pickup, a local birding guide, site fees and boat transport included.",
  },
  {
    question: "What birds can I see near Siem Reap?",
    answer: "Depending on the season, visitors may see Painted Stork, Milky Stork, Spot-billed Pelican, Grey-headed Fish Eagle, kingfishers, herons, egrets, jacanas and grassland species.",
  },
  {
    question: "How do I book a Cambodia birding tour?",
    answer: "Use the contact form or email pearaingbirdingtrails@gmail.com. Tours are private or small-group and can be tailored to your dates, target birds and travel pace.",
  },
];

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
  const highlightedTours = [
    { title: "Half-Day Birding Near Siem Reap", description: "Explore Pearaing Biodiversity Conservation Center with 50+ wetland species, just 20 minutes from Siem Reap.", image: bird1, duration: "Half day", price: "USD 122" },
    { title: "Prek Toal Waterbird Sanctuary", description: "Huge colonies of waterbirds – one of the best places to see Greater Adjutant and Milky Stork.", image: bird2, duration: "Full day", price: "USD 255" },
    { title: "Koh Ker and Beng Mealea", description: "Ancient temples and forest birding with White-rumped Falcon and 8 woodpecker species.", image: kohKerImage, duration: "Full day", price: "USD 255" },
    { title: "Angkor Wat Birding Tour", description: "Combine sunrise at Angkor Wat with forest birding and temple exploration.", image: angkorWatSunset, duration: "Full day", price: "USD 195" },
    { title: "Giant Ibis Experience", description: "Multi-day adventure for Giant Ibis and Bengal Florican near Tonle Sap Lake and the dry forests.", image: "/lovable-uploads/698db8ba-7d33-4946-9ec8-c6df5ed8e394.jpg", duration: "3 days", price: "USD 1,350" },
    { title: "Sarus Crane & Grasslands", description: "Search the Tonle Sap floodplain grasslands for Sarus Crane, Bengal Florican and more.", image: bird4, duration: "Full day", price: "Contact us" },
  ];
  return <>
      <Helmet>
        <title>Cambodia Birding Tours | Pearaing Birding Trails</title>
        <meta name="description" content="Explore Cambodia birding tours from Siem Reap to Tonle Sap, Prek Toal, the Bengal Florican grasslands, and the Northern Plains with expert local guides." />
        <link rel="canonical" href="https://pearaing.com/" />
        <meta property="og:title" content="Cambodia Birding Tours | Pearaing Birding Trails" />
        <meta property="og:description" content="Explore Cambodia birding tours from Siem Reap to Tonle Sap, Prek Toal, the Bengal Florican grasslands, and the Northern Plains with expert local guides." />
        <meta property="og:url" content="https://pearaing.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pearaing Birding Trails",
            url: "https://pearaing.com/",
            description:
              "Community-based birding and temple tours in Cambodia led by certified local guides.",
            email: "pearaingbirdingtrails@gmail.com",
            areaServed: "Cambodia",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pearaing Birding Trails",
            url: "https://pearaing.com/",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero — left-aligned title over full-width photo */}
      <section className="relative h-[85vh] min-h-[520px] mt-16 flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide})`, opacity: currentSlide === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/80 via-nature-forest/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="font-serif font-bold leading-[1.05] mb-4 animate-fade-in">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-nature-gold">Pearaing</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-nature-gold">Birding Trails</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug mb-8">
              Cambodia birding tours with expert local guides – for over 15 years
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/tours">
                <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
                  Discover our tours
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={() => setShowPopup(true)} className="rounded-full px-8 bg-transparent border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Book your tour
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all ${currentSlide === index ? "w-10 bg-nature-gold" : "w-6 bg-primary-foreground/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Intro — media left, text right */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-card aspect-video">
            <img src={bird1} alt="Painted Storks at Pearaing Biodiversity Conservation Center" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary leading-tight mb-6">
              Pearaing runs birding and wildlife trips to the best conservation sites across Cambodia
            </h2>
            <p className="text-muted-foreground leading-loose mb-8">
              From Pearaing and Prek Toal to the Bengal Florican grasslands and the remote Northern Plains, our certified local guides give visitors close access to Cambodia's rarest birds. Every tour supports local communities and the protection of wetland and forest habitats.
            </p>
            <Link to="/about">
              <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
                Meet our guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlighted Tours */}
      <section className="py-16 lg:py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-4">Highlighted Tours</h2>
            <p className="text-muted-foreground">
              The tours below are recommended by our expert bird guides, from half-day trips to multi-day adventures. Click "Read More" for full details and availability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedTours.map((tour) => (
              <Card key={tour.title} className="group overflow-hidden flex flex-col border-0 shadow-card hover:shadow-float transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={tour.image} alt={tour.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{tour.description}</p>
                  <div className="flex items-center justify-between text-sm mb-5 border-t border-border pt-4">
                    <span className="flex items-center gap-1 text-muted-foreground"><Clock className="w-4 h-4" />{tour.duration}</span>
                    <span className="font-semibold text-primary">{tour.price}</span>
                  </div>
                  <Link to="/tours">
                    <Button className="w-full rounded-full bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">Read More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View all tours <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visitor Questions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary text-center mb-10">
            Planning a birding tour near Siem Reap?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <Card key={faq.question} className="border-border">
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation banner */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bird5})` }} />
        <div className="absolute inset-0 bg-nature-forest/75" />
        <div className="relative container mx-auto text-center text-primary-foreground max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-nature-gold mb-4">Supporting Bird Conservation</h2>
          <p className="mb-8 leading-relaxed">
            Every tour contributes to protecting Cambodia's endangered birds and their habitats. Join us in preserving these magnificent creatures for future generations.
          </p>
          <Link to="/conservation">
            <Button size="lg" className="rounded-full px-8 bg-nature-gold text-nature-forest hover:bg-nature-gold-light font-semibold">
              <Heart className="w-5 h-5 mr-2" /> Learn About Conservation
            </Button>
          </Link>
        </div>
      </section>

      <TourIntroPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div></>;
};
export default Homepage;
