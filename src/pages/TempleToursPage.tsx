import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AngkorSunriseTourPopup from "@/components/AngkorSunriseTourPopup";
import BanteaySreiTourPopup from "@/components/BanteaySreiTourPopup";
import KampongPhlukTourPopup from "@/components/KampongPhlukTourPopup";
import KulenMountainTourPopup from "@/components/KulenMountainTourPopup";
import PreahVihearTourPopup from "@/components/PreahVihearTourPopup";
import KompongKhleangTourPopup from "@/components/KompongKhleangTourPopup";

import angkorWatImg from "@/assets/temples/angkor-wat.jpg";
import templeToursHero from "@/assets/temples/temple-tours-hero.jpg";
import bayonImg from "@/assets/temples/bayon.jpg";
import taProhmImg from "@/assets/temples/ta-prohm.jpg";
import banteaySreiImg from "@/assets/temples/banteay-srei.jpg";
import preahVihearImg from "@/assets/temples/preah-vihear.jpg";
import kohKerImg from "@/assets/temples/koh-ker.jpg";
import bengMealeaImg from "@/assets/temples/beng-mealea.jpg";
import banteayChhmarImg from "@/assets/temples/banteay-chhmar.jpg";
import phnomBakhengImg from "@/assets/temples/phnom-bakheng.jpg";
import samborPreiKukImg from "@/assets/temples/sambor-prei-kuk.jpg";

const temples = [
  {
    name: "Full day to visit Small Circus – Angkor",
    image: angkorWatImg,
    location: "Siem Reap    Angkor, Angkor Thom,  Ta Prohm",
    description: "The world's largest religious monument, a masterpiece of Khmer architecture built in the 12th century. Famous for its stunning sunrise views and intricate bas-reliefs.",
    price: "$150 two people",
    duration: "1 Day (8 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day to Banteay Srei and Grand Circuit Heritage Tour",
    image: bayonImg,
    location: "Angkor Thom",
    description: "Known for its massive stone faces carved into towering spires, Bayon is the centerpiece of Angkor Thom and one of Cambodia's most iconic temples.",
    price: "$150 two people",
    duration: "1 Day (8 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day to ​Kampong Phluk Fishing Village & Flooded Forest",
    image: taProhmImg,
    location: "Tonle Sap Lake",
    description: "The famous 'Tomb Raider' temple where giant tree roots intertwine with ancient stone ruins, creating one of Angkor's most atmospheric and photogenic sites.",
    price: "$150 two people",
    duration: "1 Day (8 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day to ​Kulen Mountain Waterfall and River of 1,000 Lingas",
    image: banteaySreiImg,
    location: "Siem Reap Province",
    description: "The 'Citadel of Women' is renowned for its intricate pink sandstone carvings, considered the finest example of classical Khmer art.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Preah Vihear",
    image: preahVihearImg,
    location: "Preah Vihear Province",
    description: "A UNESCO World Heritage temple perched on a 525-meter cliff in the Dângrêk Mountains, offering breathtaking panoramic views of Cambodia and Thailand.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Koh Ker",
    image: kohKerImg,
    location: "Preah Vihear Province",
    description: "A remote former capital of the Khmer Empire featuring Prasat Thom, a striking seven-tiered pyramid rising 36 meters above the surrounding jungle.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "​Kompong Khleang Stilted House & Floating Village Tour",
    image: bengMealeaImg,
    location: "Siem Reap Province",
    description: "A sprawling jungle temple largely consumed by vegetation, offering an adventurous exploration experience reminiscent of early Angkor discoveries.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Banteay Chhmar",
    image: banteayChhmarImg,
    location: "Banteay Meanchey",
    description: "One of the largest and most mysterious Angkorian temples, featuring unique multi-armed Avalokiteshvara carvings and remarkably few tourists.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "​2-Day Tours To Preah Vihear, Boeng Mealea, Koh Ker temple Adventure Tour",
    image: phnomBakhengImg,
    location: "Angkor",
    description: "A hilltop temple offering spectacular sunset views over Angkor Wat and the surrounding jungle. One of the first temples built in the Angkor area.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Sambor Prei Kuk",
    image: samborPreiKukImg,
    location: "Kampong Thom",
    description: "A UNESCO World Heritage pre-Angkorian temple complex dating to the 6th–7th century, featuring unique octagonal towers set in a peaceful forest.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
];

const TempleToursPage = () => {
  const [showAngkorPopup, setShowAngkorPopup] = useState(false);
  const [showBanteaySreiPopup, setShowBanteaySreiPopup] = useState(false);
  const [showKampongPhlukPopup, setShowKampongPhlukPopup] = useState(false);
  const [showKulenPopup, setShowKulenPopup] = useState(false);
  const [showPreahVihearPopup, setShowPreahVihearPopup] = useState(false);
  const [showKompongKhleangPopup, setShowKompongKhleangPopup] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AngkorSunriseTourPopup isOpen={showAngkorPopup} onClose={() => setShowAngkorPopup(false)} />
      <BanteaySreiTourPopup isOpen={showBanteaySreiPopup} onClose={() => setShowBanteaySreiPopup(false)} />
      <KampongPhlukTourPopup isOpen={showKampongPhlukPopup} onClose={() => setShowKampongPhlukPopup(false)} />
      <KulenMountainTourPopup isOpen={showKulenPopup} onClose={() => setShowKulenPopup(false)} />
      <PreahVihearTourPopup isOpen={showPreahVihearPopup} onClose={() => setShowPreahVihearPopup(false)} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0">
            <img src={templeToursHero} alt="Angkor Wat at sunset" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Temple Tours
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore Cambodia's magnificent temples and cultural heritage sites
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-muted-foreground text-center text-lg">
              Welcome to Siem Reap!
            </p>
            <p className="text-muted-foreground text-center text-lg mt-6">
              Siem Reap is widely known as the gateway to the majestic Angkor Wat, one of the most iconic and sought-after destinations not only in Cambodia but across Southeast Asia. Rich in history, culture, and local charm, Siem Reap offers an unforgettable experience for every traveler. Whether you're here to explore the ancient temples of Angkor or simply soak up the vibrant local atmosphere, Siem Reap has something truly special to offer.
            </p>
          </div>
        </section>

        {/* Handpicked Destinations */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Handpicked Destinations
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
              Our curated selection of Cambodia's most remarkable temple sites
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {temples.map((temple) => (
                <Card key={temple.name} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={temple.image}
                      alt={temple.name}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {temple.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{temple.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {temple.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-3 text-muted-foreground text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{temple.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{temple.groupSize}</span>
                      <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" />{temple.country}</span>
                    </div>
                    {temple.price && (
                      <p className="text-primary font-semibold mt-3 text-lg">
                        {temple.price}
                      </p>
                    )}
                    {temple.name === "Full day to visit Small Circus – Angkor" && (
                      <Button
                        variant="outline"
                        className="mt-3 w-full"
                        onClick={() => setShowAngkorPopup(true)}
                      >
                        View Itinerary Details
                      </Button>
                    )}
                    {temple.name === "Full Day to Banteay Srei and Grand Circuit Heritage Tour" && (
                      <Button
                        variant="outline"
                        className="mt-3 w-full"
                        onClick={() => setShowBanteaySreiPopup(true)}
                      >
                        View Itinerary Details
                      </Button>
                    )}
                    {temple.name === "Full Day to ​Kampong Phluk Fishing Village & Flooded Forest" && (
                      <Button
                        variant="outline"
                        className="mt-3 w-full"
                        onClick={() => setShowKampongPhlukPopup(true)}
                      >
                        View Itinerary Details
                      </Button>
                    )}
                    {temple.name === "Full Day to ​Kulen Mountain Waterfall and River of 1,000 Lingas" && (
                      <Button
                        variant="outline"
                        className="mt-3 w-full"
                        onClick={() => setShowKulenPopup(true)}
                      >
                        View Itinerary Details
                      </Button>
                    )}
                    {temple.name === "​2-Day Tours To Preah Vihear, Boeng Mealea, Koh Ker temple Adventure Tour" && (
                      <Button
                        variant="outline"
                        className="mt-3 w-full"
                        onClick={() => setShowPreahVihearPopup(true)}
                      >
                        View Itinerary Details
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Tours
            </h2>
            <p className="text-muted-foreground text-lg">
              Coming soon — explore our top temple tour experiences.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempleToursPage;
