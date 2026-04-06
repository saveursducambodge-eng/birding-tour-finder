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
import KohKerBengMealeaTourPopup from "@/components/KohKerBengMealeaTourPopup";
import BengMealeaTourPopup from "@/components/BengMealeaTourPopup";
import BanteayChhmarTourPopup from "@/components/BanteayChhmarTourPopup";
import PreahKhanKampongSvayTourPopup from "@/components/PreahKhanKampongSvayTourPopup";
import PreahVihearFullDayTourPopup from "@/components/PreahVihearFullDayTourPopup";
import EssentialCambodia5DayTourPopup from "@/components/EssentialCambodia5DayTourPopup";
import BattambangTourPopup from "@/components/BattambangTourPopup";
import PhnomPenhTourPopup from "@/components/PhnomPenhTourPopup";
import TenDayGrandTourPopup from "@/components/TenDayGrandTourPopup";
import FifteenDayGrandTourPopup from "@/components/FifteenDayGrandTourPopup";
import SamborPreiKukTourPopup from "@/components/SamborPreiKukTourPopup";

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
    name: "Full Day to \u200BKampong Phluk Fishing Village & Flooded Forest",
    image: taProhmImg,
    location: "Tonle Sap Lake",
    description: "The famous 'Tomb Raider' temple where giant tree roots intertwine with ancient stone ruins, creating one of Angkor's most atmospheric and photogenic sites.",
    price: "$150 two people",
    duration: "1 Day (8 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day to \u200BKulen Mountain Waterfall and River of 1,000 Lingas",
    image: banteaySreiImg,
    location: "Siem Reap Province",
    description: "The 'Citadel of Women' is renowned for its intricate pink sandstone carvings, considered the finest example of classical Khmer art.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "\u200BHalf-Day  Tour To Beng Mealea Temple ",
    image: preahVihearImg,
    location: "Preah Vihear Province",
    description: "A UNESCO World Heritage temple perched on a 525-meter cliff in the Dângrêk Mountains, offering breathtaking panoramic views of Cambodia and Thailand.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full-Day Tour \u200BKoh Ker  and Beng Mealea Temple Adventure ",
    image: kohKerImg,
    location: "Preah Vihear Province",
    description: "A remote former capital of the Khmer Empire featuring Prasat Thom, a striking seven-tiered pyramid rising 36 meters above the surrounding jungle.",
    price: "$130–$160 USD (1–2 people)",
    duration: "Full Day (10–12 hours)",
    groupSize: "1–8 people",
    country: "Cambodia",
  },
  {
    name: "\u200BKompong Khleang Stilted House & Floating Village Tour",
    image: bengMealeaImg,
    location: "Siem Reap Province",
    description: "A sprawling jungle temple largely consumed by vegetation, offering an adventurous exploration experience reminiscent of early Angkor discoveries.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day Adventure to\u200B Spean Toap Bridge, Banteay Chhmar & Banteay Toap Temple ",
    image: banteayChhmarImg,
    location: "Banteay Meanchey",
    description: "One of the largest and most mysterious Angkorian temples, featuring unique multi-armed Avalokiteshvara carvings and remarkably few tourists.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "\u200B2-Day Tours To Preah Vihear, Boeng Mealea, Koh Ker temple Adventure Tour",
    image: phnomBakhengImg,
    location: "Angkor",
    description: "A hilltop temple offering spectacular sunset views over Angkor Wat and the surrounding jungle. One of the first temples built in the Angkor area.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "\u200BFull-Day Heritage Tour to Sambor Prei Kuk",
    image: samborPreiKukImg,
    location: "Kampong Thom",
    description: "A UNESCO World Heritage pre-Angkorian temple complex dating to the 6th–7th century, featuring unique octagonal towers set in a peaceful forest.",
    price: "$150 two people",
    duration: "Half Day (4 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  // New tours
  {
    name: "Full Day to Preah Khan Kampong Svay",
    image: bengMealeaImg,
    location: "Preah Vihear Province",
    description: "One of Cambodia's most remote and impressive temple complexes, spanning over 5 square kilometers. This vast jungle-engulfed site was once a major city of the Khmer Empire.",
    price: "$150 two people",
    duration: "Full Day (10–12 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Full Day to Preah Vihear Temple",
    image: preahVihearImg,
    location: "Preah Vihear Province",
    description: "Journey to the breathtaking UNESCO World Heritage temple perched atop a 525-meter cliff, offering unparalleled panoramic views and exceptional Khmer architectural masterpieces.",
    price: "$150 two people",
    duration: "Full Day (10–12 hours)",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "Essential Cambodia 5-Day Tour in Siem Reap",
    image: angkorWatImg,
    location: "Siem Reap",
    description: "Experience the very best of Siem Reap in 5 unforgettable days — from Angkor Wat sunrise to jungle temples, floating villages, Kulen Mountain, and vibrant night markets.",
    price: "$150 two people",
    duration: "5 Days / 4 Nights",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "2 Nights 3 Days in Battambang",
    image: banteaySreiImg,
    location: "Battambang",
    description: "Explore Cambodia's charming second city — French colonial architecture, the iconic Bamboo Train, bat caves, hilltop temples, and authentic village workshops.",
    price: "$150 two people",
    duration: "3 Days / 2 Nights",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "2-Day Tours in Phnom Penh",
    image: phnomBakhengImg,
    location: "Phnom Penh",
    description: "Discover Cambodia's vibrant capital — the Royal Palace, Silver Pagoda, National Museum, Tuol Sleng, Killing Fields, and bustling markets across two action-packed days.",
    price: "$150 two people",
    duration: "2 Days / 1 Night",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "10-Day Grand Cambodia Tour",
    image: kohKerImg,
    location: "Siem Reap, Battambang, Phnom Penh, Kratie, Stung Treng, Preah Vihear",
    description: "An epic journey through Cambodia's most spectacular destinations — from Angkor temples to Mekong dolphins, remote wilderness, and cliff-top temples.",
    price: "$150 two people",
    duration: "10 Days / 9 Nights",
    groupSize: "2 people",
    country: "Cambodia",
  },
  {
    name: "15 Days Grand Cambodia Tour",
    image: banteayChhmarImg,
    location: "All Cambodia",
    description: "The ultimate Cambodia experience — 15 days covering temples, colonial cities, Mekong dolphins, remote northeast, cliff-top temples, and pre-Angkorian heritage sites.",
    price: "$150 two people",
    duration: "15 Days / 14 Nights",
    groupSize: "2 people",
    country: "Cambodia",
  },
];

// Map tour names to popup keys
const tourPopupMap: Record<string, string> = {
  "Full day to visit Small Circus – Angkor": "angkor",
  "Full Day to Banteay Srei and Grand Circuit Heritage Tour": "banteaySrei",
  "Full Day to \u200BKampong Phluk Fishing Village & Flooded Forest": "kampongPhluk",
  "Full Day to \u200BKulen Mountain Waterfall and River of 1,000 Lingas": "kulen",
  "\u200BHalf-Day  Tour To Beng Mealea Temple ": "bengMealea",
  "Full-Day Tour \u200BKoh Ker  and Beng Mealea Temple Adventure ": "kohKer",
  "\u200BKompong Khleang Stilted House & Floating Village Tour": "kompongKhleang",
  "Full Day Adventure to\u200B Spean Toap Bridge, Banteay Chhmar & Banteay Toap Temple ": "banteayChhmar",
  "\u200B2-Day Tours To Preah Vihear, Boeng Mealea, Koh Ker temple Adventure Tour": "preahVihear2Day",
  "\u200BFull-Day Heritage Tour to Sambor Prei Kuk": "samborPreiKuk",
  "Full Day to Preah Khan Kampong Svay": "preahKhan",
  "Full Day to Preah Vihear Temple": "preahVihearFullDay",
  "Essential Cambodia 5-Day Tour in Siem Reap": "essential5Day",
  "2 Nights 3 Days in Battambang": "battambang",
  "2-Day Tours in Phnom Penh": "phnomPenh",
  "10-Day Grand Cambodia Tour": "tenDay",
  "15 Days Grand Cambodia Tour": "fifteenDay",
};

const TempleToursPage = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Existing popups */}
      <AngkorSunriseTourPopup isOpen={activePopup === "angkor"} onClose={() => setActivePopup(null)} />
      <BanteaySreiTourPopup isOpen={activePopup === "banteaySrei"} onClose={() => setActivePopup(null)} />
      <KampongPhlukTourPopup isOpen={activePopup === "kampongPhluk"} onClose={() => setActivePopup(null)} />
      <KulenMountainTourPopup isOpen={activePopup === "kulen"} onClose={() => setActivePopup(null)} />
      <PreahVihearTourPopup isOpen={activePopup === "preahVihear2Day"} onClose={() => setActivePopup(null)} />
      <KompongKhleangTourPopup isOpen={activePopup === "kompongKhleang"} onClose={() => setActivePopup(null)} />
      <KohKerBengMealeaTourPopup isOpen={activePopup === "kohKer"} onClose={() => setActivePopup(null)} />
      <BengMealeaTourPopup isOpen={activePopup === "bengMealea"} onClose={() => setActivePopup(null)} />
      <BanteayChhmarTourPopup isOpen={activePopup === "banteayChhmar"} onClose={() => setActivePopup(null)} />

      <SamborPreiKukTourPopup isOpen={activePopup === "samborPreiKuk"} onClose={() => setActivePopup(null)} />
      {/* New popups */}
      <PreahKhanKampongSvayTourPopup isOpen={activePopup === "preahKhan"} onClose={() => setActivePopup(null)} />
      <PreahVihearFullDayTourPopup isOpen={activePopup === "preahVihearFullDay"} onClose={() => setActivePopup(null)} />
      <EssentialCambodia5DayTourPopup isOpen={activePopup === "essential5Day"} onClose={() => setActivePopup(null)} />
      <BattambangTourPopup isOpen={activePopup === "battambang"} onClose={() => setActivePopup(null)} />
      <PhnomPenhTourPopup isOpen={activePopup === "phnomPenh"} onClose={() => setActivePopup(null)} />
      <TenDayGrandTourPopup isOpen={activePopup === "tenDay"} onClose={() => setActivePopup(null)} />
      <FifteenDayGrandTourPopup isOpen={activePopup === "fifteenDay"} onClose={() => setActivePopup(null)} />

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
              {temples.map((temple) => {
                const popupKey = tourPopupMap[temple.name];
                return (
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
                      {popupKey && (
                        <Button
                          variant="outline"
                          className="mt-3 w-full"
                          onClick={() => setActivePopup(popupKey)}
                        >
                          View Itinerary Details
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
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
