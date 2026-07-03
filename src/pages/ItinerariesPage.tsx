import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import bengalFloricanHeroAsset from "@/assets/bengal-florican-hero.jpg.asset.json";
const bengalFloricanHero = bengalFloricanHeroAsset.url;

const ItinerariesPage = () => {
  const itineraries = [
    {
      days: "1 Day",
      title: "Angkor Wat Temple and Birding",
      summary: "Sunrise at Angkor Wat, forest birding around the moat, Ta Prohm and Bayon temples.",
      highlights: ["Hainan Blue Flycatcher", "Alexandrine Parakeet", "Cultural icons"],
    },
    {
      days: "2 Days",
      title: "Siem Reap and  Prek Toal",
      summary: "Day 1 Angkor temples birding. Day 2 boat trip to Prek Toal Bird Sanctuary for waterbird colonies.",
      highlights: ["Spot-billed Pelican", "Greater Adjutant", "Tonle Sap"],
    },
    {
      days: "3 Days",
      title: "Russey Treb — Bengal Florican",
      summary: "Northern Plains grasslands and dry forest for Bengal Florican, Giant Ibis and Sarus Crane.",
      highlights: ["Bengal Florican", "Giant Ibis", "Community lodge"],
    },
    {
      days: "4 Days",
      title: "Koh Ker and  Beng Mealea",
      summary: "Remote temples and dry dipterocarp forest birding with woodpeckers and raptors.",
      highlights: ["8 Woodpecker species", "White-rumped Pygmy Falcon", "Jungle temples"],
    },
    {
      days: "5 Days",
      title: "Angkor + Prek Toal + Russey Treb",
      summary: "Combines Cambodia's cultural heritage with its two flagship birding landscapes.",
      highlights: ["Temples", "Waterbird colonies", "Grassland specialities"],
    },
    {
      days: "7 Days",
      title: "Cambodia Classic Birding",
      summary: "Siem Reap, Prek Toal, Russey Treb and BeTreed — the essential first-time birding loop.",
      highlights: ["Giant Ibis", "Bengal Florican", "Spot-billed Pelican"],
    },
    {
      days: "10 Days",
      title: "Northern Plains In-Depth",
      summary: "Extended time in Russey Treb, BeTreed and Keo Seima for ibises, vultures and primates.",
      highlights: ["White-shouldered Ibis", "Vulture Restaurant", "Black-shanked Douc"],
    },
    {
      days: "14 Days",
      title: "Grand Cambodia Birding",
      summary: "Siem Reap, Tonle Sap, Northern Plains, Mondulkiri and Kratie for Mekong specialities.",
      highlights: ["Mekong Wagtail", "Irrawaddy Dolphin", "Yellow-cheeked Gibbon"],
    },
    {
      days: "18 Days",
      title: "Cambodia and Cardamoms",
      summary: "Full birding circuit plus the Cardamom Mountains for evergreen-forest specialities.",
      highlights: ["Chestnut-headed Partridge", "Cardamom endemics", "Coastal stop"],
    },
    {
      days: "21 Days",
      title: "Comprehensive Cambodia",
      summary: "Three weeks covering wetlands, grasslands, dry forest, evergreen forest and the Mekong.",
      highlights: ["500+ species possible", "All key endemics", "Conservation sites"],
    },
    {
      days: "25 Days",
      title: "Ultimate Cambodia Expedition",
      summary: "Our most complete itinerary — every major habitat, all flagship species and cultural highlights.",
      highlights: ["Maximum species list", "Remote camps", "Private guiding"],
    },
    {
      days: "Custom",
      title: "Tailor-Made Itinerary",
      summary: "Tell us your dates, target species and pace — we'll design a private itinerary just for you.",
      highlights: ["Private guide", "Flexible pace", "Any duration"],
    },
  ];

  return <>
    <Helmet>
      <title>Suggested Birding Itineraries | Cambodia | PEARAING</title>
      <meta name="description" content="Browse suggested Cambodia birding itineraries from 1 day to 25 days. Choose from Angkor, Prek Toal, Russey Treb, Keo Seima, Kratie and tailor-made options." />
      <link rel="canonical" href="https://pearaing.com/itineraries" />
    </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-sage-light to-nature-earth/20">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-nature-forest">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/95 to-nature-forest/70 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight drop-shadow-lg">
              View Itineraries
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-md">
              Suggested birding trips from a single day to a full month across Cambodia
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-forest/10 mb-6">
            <Calendar className="w-8 h-8 text-nature-forest" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-nature-forest mb-4">
            Plan Your Trip
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From a quick morning outing to a full month exploring Cambodia's wildest corners, choose a suggested itinerary that matches your time and target species. Every itinerary is fully customisable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {itineraries.map((trip) => (
            <Card key={trip.days + trip.title} className="border-sage-light hover:border-nature-sage hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-nature-forest text-white hover:bg-nature-sage">{trip.days}</Badge>
                <h3 className="font-serif text-xl text-nature-forest mb-2">{trip.title}</h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{trip.summary}</p>
                <div className="flex flex-wrap gap-1">
                  {trip.highlights.map((h, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact">
            <Button size="lg" className="bg-nature-forest hover:bg-nature-sage text-white">
              Plan My Trip
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-nature-forest text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
            Ready to Start Your Birding Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Contact us to customize your perfect Cambodia birding experience
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-nature-forest hover:bg-white hover:text-nature-forest">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  </>;
};

export default ItinerariesPage;
