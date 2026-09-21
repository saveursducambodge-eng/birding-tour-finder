import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Users, MapPin, ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TourDetailsPopup from "@/components/TourDetailsPopup";
import giantIbisImage from "@/assets/tmatboey-ibis.jpg";
import heroImage from "@/assets/hero-cambodia-jungle.jpg";
import birdTourHeroAsset from "@/assets/tours-hero-vultures.jpg.asset.json";
import paintedStorksHeroAsset from "@/assets/tours-hero-painted-storks.jpg.asset.json";
import kampongPhlukBirdingAsset from "@/assets/kampong-phluk-birding.jpg.asset.json";
import phnomKroamMarshLandAsset from "@/assets/phnom-kroam-marsh-land-birding.jpg.asset.json";
import pearaingPaintedStorksAsset from "@/assets/pearaing-painted-storks-flock.jpg.asset.json";

import bengalFloricanGrasslandTourAsset from "@/assets/bengal-florican-grassland-tour.jpg.asset.json";
const birdTourHero = birdTourHeroAsset.url;
const paintedStorksHero = paintedStorksHeroAsset.url;
import tmatboeyIbis from "@/assets/tmatboey-ibis.jpg";
import northernPlainsIbisFlight from "@/assets/northern-plains-ibis-flight.jpg";
import customTourIbisGroup from "@/assets/custom-tour-ibis-group.jpg";
import vultureFeeding14Day from "@/assets/small-pratincole.jpg";
import day14Slide1 from "@/assets/14day-slide-1.jpg";
import day14Slide2 from "@/assets/14day-slide-2.jpg";
import day14Slide3 from "@/assets/14day-slide-3.jpg";
import day14Slide4 from "@/assets/14day-slide-4.jpg";
import day14Slide5 from "@/assets/14day-slide-5.jpg";
import day14Slide6 from "@/assets/14day-slide-6.jpg";
import day14Slide7 from "@/assets/14day-slide-7.jpg";
import tailorbird15Day from "@/assets/tailorbird-15day.jpg";
import rareEndemicWoodpecker from "@/assets/rare-birding-15day-raptor.jpg";
import essentialCambodiaOwl from "@/assets/essential-cambodia-owl.jpg";
import dreamBirding16Day from "@/assets/dream-birding-16day.jpg";
import wagtail19Day from "@/assets/wagtail-19day.jpg";
import day19Slide1 from "@/assets/19day-slide-1.jpg";
import day19Slide2 from "@/assets/19day-slide-2.jpg";
import day19Slide3 from "@/assets/19day-slide-3.jpg";
import day19Slide4 from "@/assets/19day-slide-4.jpg";
import day19Slide5 from "@/assets/19day-slide-5.jpg";
import day19Slide6 from "@/assets/19day-slide-6.jpg";
import day19Slide7 from "@/assets/19day-slide-7.jpg";
import day19Slide8 from "@/assets/19day-slide-8.jpg";
import day19Slide9 from "@/assets/19day-slide-9.jpg";
import dreamBirding7Day from "@/assets/dream-birding-7day.jpg";
import day7Slide1 from "@/assets/7day-slide-1.jpg";
import day7Slide2 from "@/assets/7day-slide-2.jpg";
import day7Slide3 from "@/assets/7day-slide-3.jpg";
// Import bird images from gallery
import bird1 from "@/assets/pearaing-biodiversity.jpg";
import keyLocationsRareBirds from "@/assets/key-locations-rare-birds.jpg";
import prekToalWaterbirdSanctuaryAsset from "@/assets/prek-toal-waterbird-sanctuary.jpg.asset.json";
const prekToalWaterbirdSanctuary = prekToalWaterbirdSanctuaryAsset.url;
import kohKerWoodpeckersAsset from "@/assets/koh-ker-woodpeckers.png.asset.json";
const kohKerWoodpeckers = kohKerWoodpeckersAsset.url;
import bird4Asset from "@/assets/ang-trapaeng-thmor-sarus-cranes.jpg.asset.json";
const bird4 = bird4Asset.url;
import sarusCraneHalfDayAsset from "@/assets/sarus-crane-half-day-tour.jpg.asset.json";
const sarusCraneHalfDay = sarusCraneHalfDayAsset.url;
import attSlide1 from "@/assets/att-slide-1.jpg";
import attSlide2 from "@/assets/att-slide-2.jpg";
import attSlide3 from "@/assets/att-slide-3.jpg";
import attSlide4 from "@/assets/att-slide-4.jpg";
import attSlide5 from "@/assets/att-slide-5.jpg";
import attSlide6 from "@/assets/att-slide-6.jpg";
import attSlide7 from "@/assets/att-slide-7.jpg";
import bird5Asset from "@/assets/angkor-wat-asian-barred-owlet.jpg.asset.json";
const bird5 = bird5Asset.url;
import bird6 from "@/assets/tmatboey-ibis-tour6.jpg";
import bird7 from "@/assets/bird-7.jpg";
import bird8 from "@/assets/bird-8.jpg";
import bird9 from "@/assets/bird-9.jpg";
import bird10 from "@/assets/bird-10.jpg";
const TourImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden group/slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <button onClick={prev} aria-label="Previous photo" className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={next} aria-label="Next photo" className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10">
        <ChevronRight className="w-4 h-4" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button key={i} aria-label={`Show photo ${i + 1}`} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

export const tours = [{
    id: 1,
    title: "Half Day Birding at Pearaing Biodiversity Conservation Center",
    description: "The Pearaing Biodiversity Conservation Center (PBCC) is a community-based bird conservation area located about 13 km southeast of Siem Reap and around 2 km north of Tonle Sap Lake. It is one of the closest and most rewarding birdwatching sites near Siem Reap, making it ideal for visitors who want to experience Cambodia's rich wetland wildlife without traveling far from the city. The site was officially recognized as an eco-tourism destination in 2016 and is managed by local villagers with support from community leaders, Buddhist monks, and government authorities.\n\n\nAn easy and affordable half-day birding tour, perfect for early risers or afternoon explorers. Just 10 km from Siem Reap town (about 20 minutes by car or tuk-tuk), explore the Pearaing Biodiversity Conservation Center, which stretches to the edge of the great Tonle Sap Lake.\n\nThis important feeding site is home to many waterbirds, including Painted Stork, Milky Stork, Lesser Adjutant, Grey-headed Fish Eagle, Spot-billed Pelican, Oriental Darter, Indian Cormorant, Great Cormorant, Little Cormorant, and more than 70+ wetland bird species.\n\nIn just a few hours of birding, you can spot over 50 wetland and grassland bird species.",
    image: pearaingPaintedStorksAsset.url,
    images: [pearaingPaintedStorksAsset.url],
    duration: "Half Day (4 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$144 Per Person",
    category: "cultural",
    highlights: ["50+ bird species", "Pearaing Biodiversity Conservation Center", "Tonle Sap wetlands", "Morning or afternoon options", "Easy access from Siem Reap"],
    rating: 4.5,
    schedule: {
      "Option 1 - Morning": "5:30 AM pickup, 5:50 AM arrive at Pearaing Biodiversity Conservation Center, birding until 9:00 AM, 9:30 AM return to hotel",
      "Option 2 - Afternoon": "2:30 PM pickup, 2:50 PM arrive at marshland, birding until 5:00 PM, 5:30 PM return to hotel"
    },
    birdSpecies: ["Cinnamon Bittern", "Yellow Bittern", "Lesser Coucal", "Black Bittern", "Baya Weaver", "Asian Golden Weaver", "Black-browed Reed Warbler", "Oriental Reed Warbler", "Bright-headed Cisticola", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "Greater Adjutant", "Little Egret", "Intermediate Egret", "Great Egret", "Grey Heron", "Purple Heron", "Black-crowned Night Heron", "Cattle Egret", "Indian Pond Heron", "Painted Stork", "Asian Openbill", "Spot-billed Pelican", "Little Cormorant", "Indian Cormorant", "Oriental Darter", "White-throated Kingfisher", "Common Kingfisher", "Pied Kingfisher", "White-breasted Waterhen", "Common Moorhen", "Purple Swamphen"],
    included: ["Transport by tuk-tuk or car and boat at Pearaing Birding site", "English-speaking birding guide", "Bottled drinking water", "All site entry fees"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "Year-round availability with best birding conditions in early morning or late afternoon",
    physicalEffort: "Easy. Walking 3-4km on mostly flat wetland terrain. Suitable for all fitness levels comfortable with tropical conditions.",
    weather: "Hot and humid conditions expected near wetlands. Morning tours cooler, afternoon tours offer beautiful sunset photography opportunities.",
    food: "No meals included - short tour duration",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 1.5,
    title: "Half Day Birding at Kampong Phluk and\u00a0Traditional Stilt Houses village.",
    description: "Kampong Phluk Floating Village. Kampong\u00A0Phluk is one of Cambodia's most fascinating lakeside communities, located about 35\u00A0km southeast of Siem Reap on the edge of Tonle Sap Lake, the largest freshwater lake in Southeast Asia. It offers visitors a chance to experience a traditional way of life that has depended on fishing and the seasonal rhythm of the lake for generations\n\nA Village Built Above the Water\nAlthough often called a \"floating village,\" Kampong Phluk is actually a stilt village. Nearly all the houses, schools, and pagodas are built on wooden stilts 6–9 metres high to cope with the dramatic rise and fall of Tonle Sap Lake each year. During the rainy season (May–October), the water rises to the doorsteps of the houses, making the village appear to float. In the dry season (November–April), the stilts are fully visible, and visitors can walk beneath the towering homes.\n\nLife on Tonle Sap Lake\n\nFishing is the main source of income for most families in Kampong Phluk. As the seasons change, so does daily life. During the wet season, people travel almost everywhere by boat. In the dry season, roads become accessible, and many families also grow vegetables or farm the exposed land around the village. Tourism has become an important additional source of income for residents.\n\nFlooded Mangrove Forest\n\n\n\nOne of Kampong Phluk's biggest attractions is its beautiful seasonally flooded mangrove forest. During the high-water season, visitors can take a small paddle boat through peaceful waterways beneath the trees. The forest is home to fish, birds, and other wildlife, creating a quiet and relaxing experience away from the busy temples of Angkor\n\nExperience a rewarding half-day birding excursion to Kampong Phluk, one of the most authentic Traditional Stilt House villages on the Tonle Sap Great Lake. The tour combines birding along the flooded forest edges, village waterways, and open lake with a glimpse of daily life in a stilt-house community. In the early morning, the wetland edges will be birding for herons, egrets, cormorants, kingfishers, swallows, and waterbirds, while the flooded forest provides close views of woodpeckers, bulbuls, and raptors. After birding, enjoy a relaxed boat ride through the village to see local life before returning to Siem Reap by midday.",
    duration: "Half Day (6 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$165 Per Person",
    image: kampongPhlukBirdingAsset.url,
    images: [],
    category: "cultural",
    highlights: ["Flooded forest birding", "Floating village visit", "Tonle Sap wetlands", "Morning birding", "Stilt-house community"],
    rating: 4.7,
    schedule: {
      "5:30 AM": "Pick up from your hotel in Siem Reap and transfer to the boat pier at Kampong Phluk",
      "6:00 AM": "Board a traditional wooden boat and begin birding along the flooded forest edge and waterways",
      "7:30 AM": "Continue birding near the ricefield and pond, watching for kingfishers, herons, egrets, swallows, and raptors",
      "9:00 AM": "Take a break with a simple packed breakfast on the boat or at a local stilt-house",
      "9:30 AM": "Cruise through Kampong Phluk floating village to observe daily life, fishing activities and stilted homes",
      "10:30 AM": "Return to the boat pier and transfer back to Siem Reap",
      "11:30 AM": "Arrive back at your hotel"
    },
    birdSpecies: ["Spot-billed Pelican", "Painted Stork", "Asian Openbill", "Oriental Darter", "Little Cormorant", "Indian Cormorant", "Great Cormorant", "Grey Heron", "Purple Heron", "Great Egret", "Little Egret", "Cattle Egret", "Black-crowned Night Heron", "White-breasted Waterhen", "Purple Swamphen", "Common Moorhen", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "White-throated Kingfisher", "Common Kingfisher", "Pied Kingfisher", "Black-capped Kingfisher", "Brown Shrike", "Barn Swallow", "Red-rumped Swallow", "Asian Palm Swift", "Oriental Reed Warbler", "Plain-backed Sparrow", "Asian Golden Weaver", "Baya Weaver", "Yellow-vented Bulbul", "Black-collared Starling", "Greater Racket-tailed Drongo"],
    included: ["All transport from Siem Reap and return", "English-speaking birding guide", "Boat ride through Kampong Phluk village and flooded forest", "Bottled drinking water", "Packed breakfast"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "November to April (Peak: December-March) when water levels are favourable and morning bird activity is highest. Tours available year-round.",
    physicalEffort: "Easy. Mostly birding from a boat with short walks on wooden walkways and village paths. Suitable for all fitness levels.",
    weather: "Hot and humid conditions expected near the lake. The morning is usually cooler, and afternoon heat can be intense. A hat, sunscreen and water are recommended.",
    food: "Packed breakfast is included. No other meals are provided on this short tour.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, and a camera"
  }, {
    id: 1.6,
    title: "Half Day Birding at Phnom Kroam Marsh Land",
    description: "Enjoy a rewarding half-day birding excursion to Phnom Kroam Marsh Land, a seasonally flooded wetland and grassland mosaic just outside Siem Reap. The area mixes open marsh, low scrub, rice paddies and small woodland patches, creating a productive hotspot for wetland birds, raptors and grassland species within easy reach of town.\n\nIn the early morning, more birds will be active in the morning: herons, egrets, cormorants, kingfishers, and waterbirds, while the surrounding grassland attracts harriers, kites, swallows, and kingfishers, stonechat, warbler, bulbul, bee eater, and more than 50 species. The afternoon session offers warm light for photography and a second chance to find species missed in the morning. This relaxed, flexible tour is ideal for birders with limited time or those who want a gentle introduction to Cambodian birding.",
    duration: "Half Day (4–6 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$75 Per Person",
    image: phnomKroamMarshLandAsset.url,
    images: [],
    category: "cultural",
    highlights: ["Wetland and grassland birding", "Morning and afternoon options", "Easy access from Siem Reap", "Great for photography", "Diverse waterbirds and raptors"],
    rating: 4.6,
    schedule: {
      "Option 1 - Morning": "5:30 AM pickup from your hotel in Siem Reap, 5:45 AM arrive at Phnom Kroam Marsh Land and begin birding along ricefield and lotus farm and grassland near the great lake, 9:00 AM continue through rice paddies and scrub for raptors, swallows and open-country birds, 11:00 AM return to vehicle, 11:30 AM arrive back at your hotel",
      "Option 2 - Afternoon": "2:30 PM pickup from your hotel in Siem Reap, 2:45 PM arrive at Phnom Kroam Marsh Land, 3:00 PM birding in the marsh and grassland in warm afternoon light, 5:00 PM final scans for raptors and harriers, 5:30 PM return to your hotel"
    },
    birdSpecies: ["Cinnamon Bittern", "Yellow Bittern", "Black Bittern", "Lesser Coucal", "Greater Coucal", "Grey Heron", "Purple Heron", "Great Egret", "Intermediate Egret", "Little Egret", "Cattle Egret", "Chinese Pond Heron", "Javan Pond Heron", "Black-crowned Night Heron", "Asian Openbill", "Painted Stork", "Spot-billed Pelican", "Oriental Darter", "Little Cormorant", "Indian Cormorant", "Great Cormorant", "White-breasted Waterhen", "Purple Swamphen", "Common Moorhen", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "White-throated Kingfisher", "Common Kingfisher", "Pied Kingfisher", "Brown Shrike", "Barn Swallow", "Red-rumped Swallow", "Asian Golden Weaver", "Baya Weaver", "Streaked Weaver", "Black-browed Reed Warbler", "Oriental Reed Warbler", "Plain-backed Sparrow", "Indochinese Bushlark", "Oriental Skylark", "Pied Harrier", "Eastern Marsh Harrier", "Black Kite", "Shikra", "Eurasian Kestrel"],
    included: ["Transport from Siem Reap and return", "English-speaking birding guide", "Bottled drinking water", "All site access fees"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "Year-round, with best conditions November to April. Morning departures are recommended during the hot season.",
    physicalEffort: "Easy. Walking 2–4 km on flat, open terrain and short marsh-edge tracks. Suitable for all fitness levels.",
    weather: "Hot and humid conditions expected. Mornings are cooler and usually most productive; afternoons can be warm but offer good light for photography.",
    food: "No meals included on this short tour. Bottled water is provided.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, and a camera"
  }, {
    id: 2.5,
    title: "Half-day Birding at Bengal Florican Grassland",
    description: "The Bengal Florican is one of the world's rarest birds and is found mainly in the grasslands around Tonle Sap Lake in Cambodia. It is listed as Critically Endangered, and Cambodia is home to most of the remaining population in Southeast Asia.\n\nTo help protect this rare bird, the Cambodian government has established six Bengal Florican Conservation Areas across the Tonle Sap grasslands. These protected areas are cared for by local communities, conservation groups, and government agencies working together to protect the Bengal Florican and its natural habitat.\n\nJoin a half-day birding trip to the Bengal Florican Grassland on the Tonle Sap floodplain, one of the most reliable places to see the critically endangered Bengal Florican. Open grasslands and seasonally flooded fields also support a variety of species, including wetland and grassland specialists such as Sarus Crane, Pied Harrier, Manchurian Reed Warbler, Oriental Skylark, Oriental Pratincole, Stork, Pelican, and more than 60 other species.\u00a0Choosing a morning session is the best time to see the display activity in the morning, or an afternoon session for softer light.",
    duration: "Half Day (3–6 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$255 Per Person",
    image: bengalFloricanGrasslandTourAsset.url,
    images: [],
    category: "cultural",
    highlights: ["Bengal Florican", "Sarus Crane", "Grassland specialists", "Morning & afternoon options", "Tonle Sap floodplain"],
    rating: 4.8,
    schedule: {
      "Option 1 - Morning (5:30 AM – 11:30 AM)": "5:30 AM pickup from your hotel in Siem Reap with packed breakfast, 6:30 AM arrive at Bengal Florican Grassland and begin scanning for displaying males and grassland species, 9:00 AM continue birding across the floodplain for Sarus Crane, harriers, larks and warblers, 11:00 AM final checks and return to vehicle, 11:30 AM arrive back at your hotel",
      "Option 2 - Afternoon (2:30 PM – 5:30 PM)": "2:30 PM pickup from your hotel in Siem Reap, 3:30 PM arrive at Bengal Florican Grassland for afternoon birding in warm light, 4:30 PM scan for displaying males, harriers and open-country species, 5:30 PM return to your hotel"
    },
    birdSpecies: ["Bengal Florican", "Sarus Crane", "Manchurian Reed Warbler", "Oriental Skylark", "Singing Bushlark", "Indochinese Bushlark", "Oriental Pratincole", "Common Buttonquail", "Blue-breasted Quail", "Small Buttonquail", "Asian Pied Starling", "Pied Harrier", "Eastern Marsh Harrier", "Black Kite", "Shikra", "Eurasian Kestrel", "Red Avadavat", "Streaked Weaver", "Asian Golden Weaver", "Baya Weaver", "Barn Swallow", "Red-rumped Swallow", "Plain-backed Sparrow", "Cinnamon Bittern", "Yellow Bittern", "Black Bittern", "Lesser Coucal", "Greater Coucal", "Chinese Pond Heron", "Javan Pond Heron", "Black-crowned Night Heron", "Grey Heron", "Purple Heron", "Great Egret", "Intermediate Egret", "Little Egret", "Cattle Egret", "Painted Stork", "Asian Openbill", "Spot-billed Pelican", "White-breasted Waterhen", "Bronze-winged Jacana", "Pheasant-tailed Jacana"],
    included: ["Transport from Siem Reap and return", "English-speaking birding guide", "Packed breakfast (morning option)", "Bottled drinking water", "All site access fees"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "Mid-February to early May for Bengal Florican display season; November to April also good for general grassland birding",
    physicalEffort: "Easy. Walking 2–4 km on flat grassland and floodplain tracks. Suitable for all fitness levels.",
    weather: "Hot and dry conditions expected. Mornings are cooler and most productive; afternoons offer warm light for photography.",
    food: "Packed breakfast included on the morning option. No meals on the afternoon option.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, and a camera"
  }, {
    id: 2.6,
    title: "Half-Day Morning Birding at Sarus Crane Conservation Area",
    description: "The Ang Trapaeng Thmor Sarus Crane Conservation Area is one of the best places in Cambodia to see the magnificent Sarus Crane, the world's tallest flying bird. Located about 120 km northwest of Siem Reap in Banteay Meanchey Province, this large reservoir and wetland is an important refuge for birds and wildlife.\n\nOriginally built during the Khmer Empire in the 12th century as a huge water reservoir, Ang Trapaeng Thmor is now a protected conservation area covering more than 12,000 hectares of wetlands, rice fields, and flooded grasslands. It provides food and shelter for many resident and migratory birds.\n\nEnjoy a half-day morning birding trip to the Sarus Crane Conservation Area, one of the best places in Cambodia to see the world's tallest flying bird. The area is made up of rice fields and shallow wetlands on the Tonle Sap floodplain, creating ideal habitat for Sarus Cranes and many other wetland birds.\n\nWe leave early in the morning to arrive as the cranes leave their overnight roosts and fly out to feed. The cool morning air and soft sunrise light provide excellent conditions for birdwatching and photography.\n\nIn addition to the Target Sarus Crane, we hope to see Pied Harrier, Eastern Marsh Harrier, Black Kite, Brown Wood Owl, Spotted Owlet, Black-winged Kite, herons, egrets, and a variety of other grassland and wetland birds before returning to Siem Reap.",
    duration: "Half Day (6 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$255 Per Person",
    image: sarusCraneHalfDay,
    images: [sarusCraneHalfDay],
    category: "water",
    highlights: ["Sarus Crane", "Pied Harrier", "Grassland specialists", "Sunrise photography", "Easy access from Siem Reap"],
    rating: 4.8,
    schedule: {
      "5:00 AM": "Pickup from your hotel in Siem Reap with packed breakfast",
      "6:15 AM": "Arrive at Sarus Crane Conservation Area and begin birding as cranes leave the roost",
      "7:30 AM": "Scan the wetlands and grassland for harriers, herons, waterbirds and larks",
      "9:00 AM": "Short break for packed breakfast in the field",
      "9:30 AM": "Continue birding through rice paddies and reservoir edges for open-country species",
      "10:30 AM": "Final scans and return to the vehicle",
      "11:00 AM": "Arrive back at your hotel in Siem Reap"
    },
    birdSpecies: ["Sarus Crane", "Pied Harrier", "Eastern Marsh Harrier", "Greater Spotted Eagle", "Black-winged Kite", "Black Kite", "Shikra", "Eurasian Kestrel", "Watercock", "Cotton Pygmy-goose", "Knob-billed Duck", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "Black-headed Ibis", "Painted Stork", "Asian Openbill", "Spot-billed Pelican", "Oriental Darter", "Grey Heron", "Purple Heron", "Great Egret", "Intermediate Egret", "Little Egret", "Cattle Egret", "Chinese Pond Heron", "Javan Pond Heron", "Black-crowned Night Heron", "Cinnamon Bittern", "Yellow Bittern", "Black Bittern", "White-breasted Waterhen", "Purple Swamphen", "Common Moorhen", "Oriental Skylark", "Indochinese Bushlark", "Singing Bushlark", "Barn Swallow", "Red-rumped Swallow", "Amur Stonechat", "Pied Bush Chat", "Plain-backed Sparrow", "Asian Golden Weaver", "Baya Weaver", "Red Avadavat"],
    included: ["Transport from Siem Reap and return", "English-speaking birding guide", "Packed breakfast", "Bottled drinking water", "All site access fees"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "November to April (Peak: January-March) when Sarus Cranes return to the conservation area.",
    physicalEffort: "Easy. Walking 2–4 km on flat grassland and reservoir-edge tracks. Suitable for all fitness levels.",
    weather: "Hot and dry conditions expected. Mornings are cooler and most productive for birding and photography.",
    food: "Packed breakfast is included. No other meals are provided on this short tour.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, and a camera"
  }, {
    id: 2.7,
    title: "Full-Day Birding Tour: Bengal Florican Grassland and Angkor Wat Tours",
    description: "Enjoy a full day exploring two of Cambodia's most famous attractions—its amazing birdlife and the world-famous Angkor temples.\n\nTo protect this remarkable bird, the Cambodian government has established six Bengal Florican Conservation Areas covering more than 310 km² of Tonle Sap grasslands. These protected areas are managed through partnerships between local communities, conservation organizations, and government agencies to safeguard both the bird and its habitat.\n\nWe start early in the morning with a visit to the Bengal Florican Conservation Area, one of the best places to see the critically endangered Bengal Florican. Cambodia is home to most of the world's remaining population, making this a very special birding destination. We hope to see the males performing their spectacular display flights over the grasslands, along with other birds such as Pied Harrier, Eastern Marsh Harrier, Manchurian Reed Warbler, Singing Bushlark, Sarus Crane, and more than 65 species.\n\nAfter lunch, we return to Siem Reap and spend the afternoon birding around the beautiful Angkor Wat temple complex. The ancient temples, forest, and moats provide excellent habitat for many bird species, offering a perfect mix of wildlife, history, and culture in a single day.",
    duration: "Full Day (12 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$280 Per Person",
    image: bengalFloricanGrasslandTourAsset.url,
    images: [bengalFloricanGrasslandTourAsset.url],
    category: "cultural",
    highlights: ["Bengal Florican", "Angkor Wat birding", "Critically endangered species", "World heritage temple", "Dawn display", "Grassland & forest birds"],
    rating: 5.0,
    schedule: {
      "5:00 AM": "Pickup from your hotel in Siem Reap with packed breakfast",
      "6:00 AM": "Arrive at Bengal Florican Grassland and begin scanning for displaying males and grassland species until mid-morning",
      "9:00 AM": "Continue birding across the floodplain for Sarus Crane, harriers, larks, warblers and open-country specialists",
      "10:30 AM": "Return to vehicle and transfer back to Siem Reap",
      "11:30 AM": "Lunch break at a local restaurant in Siem Reap (not included)",
      "1:00 PM": "Transfer to the Angkor Wat area for afternoon birding along ancient moats, forest corridors and grassland clearings",
      "2:00 PM": "Birding around Angkor Wat temple complex — search for Asian Barred Owlet, Hainan Blue Flycatcher, woodpeckers and forest species",
      "4:00 PM": "Continue to Angkor Thom and Bayon area for late-afternoon birding and temple exploration",
      "5:00 PM": "Return to your hotel in Siem Reap"
    },
    birdSpecies: ["Bengal Florican", "Sarus Crane", "Manchurian Reed Warbler", "Oriental Skylark", "Singing Bushlark", "Indochinese Bushlark", "Oriental Pratincole", "Common Buttonquail", "Blue-breasted Quail", "Small Buttonquail", "Asian Pied Starling", "Pied Harrier", "Eastern Marsh Harrier", "Black Kite", "Shikra", "l", "Red Avadavat", "Streaked Weaver", "Asian Golden Weaver", "Baya Weaver", "Barn Swallow", "Red-rumped Swallow", "Plain-backed Sparrow", "Cinnamon Bittern", "Yellow Bittern", "Black Bittern", "Lesser Coucal", "Greater Coucal", "Chinese Pond Heron", "\n", "Black-crowned Night Heron", "Grey Heron", "Purple Heron", "Great Egret", "Intermediate Egret", "Little Egret", "Cattle Egret", "Painted Stork", "Asian Openbill", "Spot-billed Pelican", "White-breasted Waterhen", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "Asian Barred Owlet", "Hainan Blue Flycatcher", "White-throated Rock Thrush", "\n", "\n", "Greater Flameback", "\n", "Green-billed Malkoha", "Rufous Treepie", "Indochinese Roller", "Oriental Pied Hornbill"],
    included: ["All transport from Siem Reap and return", "English-speaking birding guide", "Packed breakfast", "Bottled drinking water", "All site access fees", "Temple area entrance permit guidance"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Temple entrance fee (USD 37)", "Lunch and other meals", "Alcoholic and soft drinks", "Tips and gratuities", "Personal expenses"],
    bestSeason: "Mid-February to early May for Bengal Florican display season; November to April also excellent for general birding and temple photography. Tours available year-round.",
    physicalEffort: "Easy. Walking 4–6 km in total on flat grassland and temple grounds. Suitable for all fitness levels comfortable with tropical conditions and early starts.",
    weather: "Hot and dry conditions expected. Morning grassland birding is cooler; afternoon temple sites can be warm. Sun protection essential.",
    food: "Packed breakfast is included. Lunch is not included — there will be a midday break in Siem Reap with restaurant options. Khmer cuisine is available at local restaurants near the temple complex.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, camera, and modest clothing for temple visits (shoulders and knees covered)"
  }, {
    id: 2,
    title: "Full Day Tours to Birding at Prek Toal Waterbird Sanctuary and Visit Floating village",
    description: "Tonle Sap Great Lake is the largest freshwater lake in Southeast Asia and one of Cambodia's most important natural treasures. The lake changes dramatically with the seasons. During the rainy season, it expands to several times its dry-season size, creating vast flooded forests, wetlands, and grasslands that support an incredible variety of wildlife.\n\nThe lake is famous for its rich biodiversity and is home to hundreds of bird species, many of them rare or globally threatened. It also provides important habitat for fish, reptiles, and mammals, making it one of the most productive freshwater ecosystems in the world. Around the lake, traditional floating villages have existed for generations, with local communities relying on fishing and the lake's natural resources for their livelihoods.\n\nFor birdwatchers, Tonle Sap is one of Southeast Asia's top destinations. Its flooded forests and wetlands attract thousands of breeding waterbirds, including Spot-billed Pelican, Milky Stork, Painted Stork, Greater and Lesser Adjutants, Asian Openbill, and many other wetland species. A visit to Tonle Sap offers a unique combination of outstanding birdwatching, beautiful scenery, and a fascinating glimpse into Cambodia's traditional way of life.\n\nPrek Toal Bird Sanctuary is located on the northwestern side of Tonle Sap Lake and is one of Cambodia's best birdwatching sites. The sanctuary is part of the Tonle Sap Biosphere Reserve and is famous for its seasonally flooded freshwater forest.",
    duration: "Full Day (11 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$240 Per Person",
    image: prekToalWaterbirdSanctuary,
    images: [prekToalWaterbirdSanctuary],
    category: "water",
    highlights: ["Greater Adjutant", "Milky Stork", "Floating village", "Ramsar wetlands", "Community restaurant", "150+ bird species"],
    rating: 4.9,
    schedule: {
      "Option 1 - Full Day": "5:30 AM pickup from hotel, 7:30 AM packed breakfast on boat, 8:30 AM arrive at Prek Toal floating village, 8:45 AM transfer to smaller community boats, 9:30 AM arrive at observation platform and climb treetop for bird colony views, 10:30 AM return to village for lunch at Saray Community Restaurant, 12:45 PM visit Water Hyacinth Handicraft Workshop, 1:00 PM paddle boat tour around floating village, 3:15 PM travel back to Siem Reap, 4:00 PM arrive back at hotel",
      "Option 2 - Afternoon": "9:30 AM pickup from hotel, 12:30 PM lunch at local restaurant at Prek Toal Floating Village, 2:50 PM arrive and begin birding at Prek Toal Waterbird Sanctuary platform, 5:00 PM return to vehicle, 5:30 PM drop-off at hotel"
    },
    birdSpecies: ["Greater Adjutant", "Lesser Adjutant", "Painted Stork", "Milky Stork", "Great Cormorant", "Purple Heron", "Black Bittern", "Cinnamon Bittern", "Spot-billed Pelican", "Yellow Bittern", "Asian Openbill", "Medium Egret", "Oriental Darter", "Indian Cormorant", "Gray-headed Fish Eagle", "Oriental Reed Warbler", "Dusky Warbler", "Black-browed Reed Warbler", "Plain-backed Sparrow", "Amur Stonechat", "Pied Bush Chat", "Black-collared Starling", "Brown Shrike", "Oriental Pratincole", "Rufous Woodpecker", "White-breasted Waterhen", "Black-headed Ibis"],
    included: ["All transport including transfers", "All reserve entry fees", "Meals, breakfast and lunch on the day of departure", "Bottled drinking water", "Boat trips", "English-speaking birding guide", "Community restaurant meal", "Handicraft workshop visit"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips", "Laundry", "Hotel mini bar", "Phone calls", "Any other items of a personal nature"],
    bestSeason: "November to April (Peak: January-March) when water levels are low and all waterbirds come to breed at Prek Toal Waterbird Sanctuary",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 1 kilometre in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 3,
    title: "Full-day Trip to Birding at Koh Ker and  Beng Mealea",
    description: "This tour combines Cambodia's most important birding sites with conservation-based tourism, maximizing your chances of seeing your target species. Koh Ker is a remote archaeological site in northern Cambodia, located about 120 kilometres from Siem Reap. It contains more than 180 sanctuaries within a protected area of approximately 81 square kilometres. Only around two dozen monuments are accessible to visitors, as most sanctuaries remain hidden within the forest.\n\nKoh Ker is situated in dry dipterocarp forest with areas of semi-evergreen forest, providing excellent habitat for wildlife. Notable bird species here include eight species of woodpeckers, Rufous-winged Buzzard, White-rumped Pygmy Falcon, and Collared Falconet.\n\nBeng Mealea (\"Lotus Pond\") is an Angkor-period temple located about 40 kilometres east of the main Angkor temple complex. Originally built as a Hindu temple with later Buddhist carvings, it remains largely unrestored, with trees and dense vegetation growing among its towers and courtyards. The surrounding semi-evergreen forest offers excellent birding opportunities, including the chance to see migrant species such as Hainan Blue Flycatcher and White-throated Rock Thrush.",
    duration: "​Full Day (12.5 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$245 Per Person",
    image: kohKerWoodpeckers,
    images: [kohKerWoodpeckers],
    category: "cultural",
    highlights: ["White-Rumped Pygmy Falcon", "8 Woodpecker species", "Remote temples", "Forest birding", "Temple exploration", "Beng Mealea ruins"],
    rating: 5.0,
    schedule: {
      "5:00 AM": "Pick up from hotel, transfer to Koh Ker with packed breakfast from Siem Reap",
      "8:00 AM": "Arrive near Koh Ker for birding and have breakfast",
      "12:00 AM": "Lunch at Koh Ker",
      "1:00 PM": "Visit Koh Ker temple",
      "2:30 PM": "Visit Beng Melea temple, birding",
      "5:00 PM": "Arrive back at Siem Reap hotel"
    },
    birdSpecies: ["White-Rumped Pygmy Falcon", "Rufous-winged Buzzard", "Crested Serpent Eagle", "Red-breasted Parakeet", "Blossom-headed Parakeet", "Velvet-fronted Nuthatch", "Brown Prinia", "Rufescent Prinia", "Small Minivet", "Scarlet Minivet", "Indochinese Cuckooshrike", "Ashy Drongo", "Black-hooded Oriole", "Sooty-headed Bulbul", "Purple Sunbird", "Asian Green Bee-eater", "Indochinese Roller", "Hainan Blue Flycatcher", "White-throated Rock Thrush", "Collared Falconet"],
    included: ["All transport", "National park and all reserve entry fees", "All meals - lunch and breakfast", "Bottled drinking water throughout the tour", "Boat trips as specified in itinerary", "Services of English-speaking birding guide"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    bestSeason: "November to April (Peak: January-March) - best time slot for birding and bird photography. Tours available year-round.",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 3-4 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 4,
    title: "Full Day Tour to Birding at Ang Trapaeng Thmor Sarus Crane Reserve",
    description: "This reserve offers excellent birdwatching, with another chance to see many species from the previous day alongside large numbers of Sarus Cranes.",
    duration: "Full Day (10.5 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$240 Per Person",
    image: bird4,
    images: [bird4],
    category: "water",
    highlights: ["Sarus Crane", "Greater Spotted Eagle", "Eastern Marsh Harrier", "Wetland birding", "Conservation reserve", "Eld's Deer habitat"],
    rating: 4.8,
    schedule: {
      "5:30 AM": "Pick up from hotel & transfer to Ang Trapaeng Thmor (breakfast packed from Siem Reap)",
      "8:30 AM": "Arrive at Reservoir & meet ranger (make a few birding stops on the way to the Feeding site of Sarus Crane and have breakfast)",
      "8:45 AM": "Start birding around Ang Trapaeng Thmor till 11:30 AM",
      "12:00 PM": "Have lunch in a restaurant",
      "2:00 PM": "Bird watching near the reservoir",
      "4:00 PM": "Arrive back at Siem Reap hotel"
    },
    birdSpecies: ["Sarus Crane", "Black-crowned Night Heron", "Spotted Wood Owl", "Barn Owl", "Spotted Owlet", "Yellow Bittern", "Scarlet-backed Flowerpecker", "Asian Koel", "Cinnamon Bittern", "Black Bittern", "Watercock", "Cotton Pygmy-goose", "Knob-billed (Comb) Duck", "Bronze-winged Jacana", "Pheasant-tailed Jacana", "Black Kite", "Eastern Marsh Harrier", "Pied Harrier", "Dark-necked Tailorbird", "Yellow-vented Bulbul", "Plain-backed Sparrow", "Black-collared Starling", "Lanceolated Warbler", "Black-headed Ibis", "Painted Stork", "Spot-billed Pelican", "Oriental Darter", "Asian Openbill", "Greater Spotted Eagle", "Roofed-winged Buzzard", "Black-winged Kite", "Small Quail", "Blue-breasted Quail", "Oriental Skylark", "Indochinese Bushlark", "Singing Bushlark", "Amur Stonechat", "Pied Bush Chat", "Richard's Pipit", "Paddyfield Pipit", "Red-throated Pipit", "Plain Prinia", "Yellow-bellied Prinia", "Oriental Reed Warbler", "Red Avadavat"],
    included: ["All transport", "National park and all reserve entry fees", "All meals - lunch and breakfast", "Bottled drinking water throughout the tour", "Boat trips as specified in itinerary", "Services of English-speaking birding guide"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    bestSeason: "November to April (Peak: January-March) when water levels are low and Sarus Cranes return to Ang Trapaeng Thmor. Recommend tours starting from January to end of April.",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 2 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 5,
    title: "Full Day Tours To Full-DayBirding and Angkor Wat Temple Tour",
    description: "This tour combines the most important birding experiences with the country's rich cultural heritage at the same sites. Angkor Wat is a Hindu–Buddhist temple complex covering 162 hectares within the ancient Khmer capital of Angkor. Originally constructed in the 12th century as a Hindu temple dedicated to the god Vishnu, it is located just 7 kilometers north of Siem Reap.\n\nAngkor Wat is not only Cambodia's most iconic temple but also a surprisingly rewarding birding site. The surrounding moat and forest patches provide feeding and roosting habitats for more than 50 bird species. After birdwatching and learning about the history of Angkor Wat, we continue to Bayon and Ta Prohm temples. At Ta Prohm, we search for Alexandrine Parakeet and Red-breasted Parakeet in an extraordinary setting made famous by the movie Tomb Raider, where massive tree roots entwine the ancient ruins. The day concludes with further birdwatching at Bayon Temple until sunset.",
    duration: "​Full Day (12.5 hours)",
    difficulty: "Easy",
    groupSize: "2-8 people",
    price: "$195 Per Person",
    image: bird5,
    category: "cultural",
    highlights: ["Angkor Wat sunrise", "Forest Wagtail", "White-throated Rock Thrush", "Hainan Blue Flycatcher", "Ta Prohm Temple", "50+ bird species", "Bayon Temple"],
    rating: 4.7,
    schedule: {
      "5:00 AM": "Pick up from hotel to Angkor Wat (15 minutes or more on the road)",
      "5:30 AM": "Visit sunrise at Angkor Wat temple and birding",
      "9:00 AM": "Visit the temple and learn about Khmer history",
      "11:30 AM": "Lunch time in the temple area",
      "1:30 PM": "Birds seen in the forest around the temple, visit Ta Prohm and Bayon",
      "5:30 PM": "Driver will bring you back to the hotel"
    },
    birdSpecies: ["Hainan Blue Flycatcher", "Taiga Flycatcher", "Asian Brown Flycatcher", "Forest Wagtail", "White-throated Rock Thrush", "Black-capped Kingfisher", "Asian Barred Owlet", "Black Baza", "Alexandrine Parakeet", "Red-breasted Parakeet", "Ashy Minivet", "Greater Racket-tailed Drongo", "Yellow-browed Warbler", "Pale-legged Leaf Warbler"],
    included: ["Services of English-speaking birding guide", "All reserve entry fees", "Meals, breakfast and lunch on the day of departure", "Bottled drinking water", "Boat trips", "All transport"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips", "Laundry", "Hotel mini bar", "Phone calls", "Any other items of a personal nature"],
    bestSeason: "November to April (Peak: January-February-April) for optimal birding and temple photography conditions",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 1.3 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 14,
    title: "Key Locations for Rare Birds",
    description: "A typical Cambodia rare bird itinerary includes Siem Reap for the temples and birding areas like Prek Toal Bird Sanctuary for storks and pelicans, the Florican Grasslands and Tmatboey in the Northern Plains for the critically endangered Bengal Florican and Giant Ibis, the Vulture Restaurant at Boeng Toal for vultures, and Kratie for the Mekong Wagtail and Irrawaddy Dolphins. The best time to visit for a wide range of species, particularly waterbirds, is typically from January to April.",
    duration: "Information Guide",
    difficulty: "Information Only",
    groupSize: "N/A",
    price: "Free Information",
    image: keyLocationsRareBirds,
    category: "information",
    highlights: ["Birding hotspots", "Species guide", "Travel tips", "Best timing", "Key locations"],
    rating: 5.0,
    isInformational: true,
    thingsToBring: "This is an informational guide only"
  }];
  const getDurationGroup = (duration: string) => {
    const d = (duration || "").toLowerCase();
    if (d.includes("information")) return "information";
    if (d.includes("half")) return "half-day";
    const dayMatch = d.match(/(\d+)\s*day/);
    if (dayMatch) {
      const n = parseInt(dayMatch[1], 10);
      if (n === 1) return "1-day";
      if (n === 2) return "2-days";
      return "multi-day"; // Maps to "Custom Tours" label
    }
    if (d.includes("full")) return "1-day";
    return "multi-day";
  };
  const durationGroupOptions = [
    { value: "half-day", label: "Half Day" },
    { value: "1-day", label: "1 Day" },
    { value: "2-days", label: "2 Days" },
    { value: "multi-day", label: "Custom Tours" }
];

const ToursPage = () => {
  const [selectedDurationGroup, setSelectedDurationGroup] = useState<string>("half-day");
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [birdTourHero, paintedStorksHero];
  const toursSectionRef = useRef<HTMLElement>(null);
  const handleTourDetails = (tour: typeof tours[0]) => {
    setSelectedTour(tour);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    const timer = setInterval(() => setHeroSlide((s) => (s + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  const filteredTours = tours.filter((tour) => {
    const group = getDurationGroup(tour.duration);
    return group !== "information" && group === selectedDurationGroup;
  });
  return <>
      <Helmet>
        <title>Cambodia Birding Tours | Bird Watching in Siem Reap | PEARAING</title>
        <meta name="description" content="Cambodia birding tours led by expert local guides. Bird watching in Siem Reap, Prek Toal, Russey Treb & Bengal Florican grasslands — see Giant Ibis, Sarus Crane & 500+ species." />
        <link rel="canonical" href="https://pearaing.com/tours" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-sage-light to-nature-earth/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 md:px-8 py-6">
        <div className="relative w-full max-w-7xl aspect-[1280/822] min-h-[500px] rounded-[3rem] overflow-hidden shadow-nature group">
          {/* Background image slider */}
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Bird watching tours in Cambodia ${i + 1}`}
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
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/95 via-nature-forest/40 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-primary-foreground/10 rounded-[3rem]" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-px w-8 bg-nature-sage-light" />
                <span className="text-nature-sage-light font-medium tracking-[0.3em] uppercase text-xs md:text-sm font-sans">
                  Discover the Unseen
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.9] mb-4 md:mb-6 font-serif">
                PEARAING <br />
                <span className="italic font-light opacity-90">Birding Trails</span>
              </h1>
              <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-light font-sans">
                Expertly curated expeditions to Cambodia's most vibrant avian sanctuaries and pristine wilderness.
              </p>
            </div>

          </div>

          {/* Decorative scroll indicator */}
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
            Cambodia Birding Adventures
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Cambodia is home to over 600 bird species, including several globally threatened and endemic species. Our expertly guided local tours take you to the country's most important birding sites, from the vast wetlands of Tonle Sap to the Northern Plains of Cambodia. Join us to see rare and endangered species while supporting local conservation efforts.
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
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 border-double opacity-100 border-0" />
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
              <span className="inline-flex items-center gap-2 text-nature-sage font-semibold group-hover:gap-3 transition-all">
                View itineraries <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-nature-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
            Ready to Start Your Birding Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Contact us to customize your perfect Cambodia birding experience
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-nature-sage">
              Get in Touch
            </Button>
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
export default ToursPage;