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
import changkranRoyAsset from "@/assets/changkran-roy-coral-billed-ground-cuckoo.png.asset.json";
import kampongPhlukBirdingAsset from "@/assets/kampong-phluk-birding.jpg.asset.json";
import phnomKroamMarshLandAsset from "@/assets/phnom-kroam-marsh-land-birding.jpg.asset.json";
import pearaingBiodiversityCenterAsset from "@/assets/pearaing-biodiversity-center.jpg.asset.json";
import bengalFloricanGrasslandTourAsset from "@/assets/bengal-florican-grassland-tour.jpg.asset.json";
import dakDamKeoSeimaForestAsset from "@/assets/dak-dam-keo-seima-forest.png.asset.json";
import kratieMekongDolphinsAsset from "@/assets/kratie-mekong-irrawaddy-dolphins.png.asset.json";
import customTourAsset from "@/assets/custom-tour-cambodian-laughingthrush.jpg.asset.json";
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
import giantIbis2night2days from "@/assets/giant-ibis-2night-2days.jpg";
import russeyTrepBengalFloricanAsset from "@/assets/russey-trep-bengal-florican.png.asset.json";
import giantIbisTourAsset from "@/assets/giant-ibis-card.png.asset.json";
import redHeadedVultureFlockAsset from "@/assets/red-headed-vulture-flock-v2.jpg.asset.json";
import beTreedWoodpeckerAsset from "@/assets/be-treed-woodpecker.jpg.asset.json";
const russeyTrepBengalFlorican = russeyTrepBengalFloricanAsset.url;
import bird7 from "@/assets/bird-7.jpg";
import bird8 from "@/assets/bird-8.jpg";
import bird9 from "@/assets/bird-9.jpg";
import bird10 from "@/assets/bird-10.jpg";
import russeyTrepSlide1 from "@/assets/russey-trep-slide-1.jpg";
import russeyTrepSlide2 from "@/assets/russey-trep-slide-2.jpg";
import russeyTrepSlide3 from "@/assets/russey-trep-slide-3.jpg";
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
      <button onClick={prev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={next} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover/slider:opacity-100 transition-opacity z-10">
        <ChevronRight className="w-4 h-4" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};

const ToursPage = () => {
  const [selectedDurationGroup, setSelectedDurationGroup] = useState<string>("half-day");
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [birdTourHero, paintedStorksHero];
  const toursSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setHeroSlide((s) => (s + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  const tours = [{
    id: 1,
    title: "Half Day Birding at Pearaing Biodiversity Conservation Center",
    description: "The Pearaing Biodiversity Conservation Center (PBCC) is a community-based bird conservation area located about 13 km southeast of Siem Reap and around 2 km north of Tonle Sap Lake. It is one of the closest and most rewarding birdwatching sites near Siem Reap, making it ideal for visitors who want to experience Cambodia's rich wetland wildlife without traveling far from the city. The site was officially recognized as an eco-tourism destination in 2016 and is managed by local villagers with support from community leaders, Buddhist monks, and government authorities.\n\n\nAn easy and affordable half-day birding tour, perfect for early risers or afternoon explorers. Just 10 km from Siem Reap town (about 20 minutes by car or tuk-tuk), explore the Pearaing Biodiversity Conservation Center, which stretches to the edge of the great Tonle Sap Lake.\n\nThis important feeding site is home to many waterbirds, including Painted Stork, Milky Stork, Lesser Adjutant, Grey-headed Fish Eagle, Spot-billed Pelican, Oriental Darter, Indian Cormorant, Great Cormorant, Little Cormorant, and more than 70+ wetland bird species.\n\nIn just a few hours of birding, you can spot over 50 wetland and grassland bird species.",
    duration: "Half Day (4 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$144 Per Person",
    image: pearaingBiodiversityCenterAsset.url,
    images: [pearaingBiodiversityCenterAsset.url],
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
    price: "$210 Per Person",
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
    price: "$180 Per Person",
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
    id: 51,
    title: "Changkran Roy Birding Tour – 2 Days, 1 Night | Cambodia",
    description: "Explore the beautiful forests of Changkran Roy on this two-day, one-night birding adventure. This remote forest is one of the best places in Cambodia to look for rare and special birds, including woodpeckers, Coral-billed Ground Cuckoo, Bar-bellied pittas, Oriental Barred Owls, raptors, and many other forest species.\n\nWith the help of an experienced local birding guide, you'll walk quiet forest trails during the early morning and late afternoon, when birds are most active. You'll spend the night at a simple community lodge, giving you the chance to enjoy an evening owling session and experience local village life.\n\nThis tour is perfect for birdwatchers, wildlife photographers, and nature lovers looking to explore one of Cambodia's hidden birding destinations while supporting local communities and conservation.",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: changkranRoyAsset.url,
    images: [changkranRoyAsset.url],
    category: "multi-day",
    highlights: ["Multiple woodpecker species", "Forest raptors & owls", "Night walk for nightjars & owls", "Community eco-camp stay", "Off-the-beaten-path trails", "Conservation-based tourism"],
    rating: 4.8,
    schedule: {
      "Day 1": "Siem Reap → Changkran Roy Forest — 5:00 AM pickup from your hotel in Siem Reap with a packed breakfast, then drive north toward Changkran Roy with birding stops en route. At 9:00 AM, arrive at the forest edge, enjoy breakfast, and begin morning birding along forest tracks for woodpeckers, raptors, and forest specialties. 12:00 PM lunch at the community camp followed by a short rest. 3:00 PM afternoon birding session focusing on understory species, bulbuls, babblers and flycatchers. 6:30 PM dinner at the camp, followed by a night walk in search of owls, frogmouths, and nightjars. Overnight at the community eco-camp.",
      "Day 2": "Changkran Roy → Siem Reap — 5:00 AM early tea and coffee, head out for a full dawn birding session at the most productive forest sites. 9:00 AM return to camp for a hot breakfast. 10:00 AM continue birding along a different forest trail, watching for raptors and any missed targets. 12:30 PM farewell lunch at the community camp. 1:30 PM begins the return drive to Siem Reap with birding stops along the way. 5:30 PM arrive back at your hotel in Siem Reap."
    },
    birdSpecies: ["Great Slaty Woodpecker", "\n", "\n", "Greater Flameback", "Rufous Woodpecker", "White-rumped Falcon", "\n", "Rufous-winged Buzzard", "Crested Serpent Eagle", "\n", "Oriental Bay Owl", "Spotted Wood Owl", "l", "Brown Boobook", "Large-tailed Nightjar", "indochines Roller", "Indochinese Roller", "Banded Bay Cuckoo", "Green-billed Malkoha", "Burmese Shrike", "Black-hooded Oriole", "Greater Racket-tailed Drongo", "Velvet-fronted Nuthatch", "Burmese Nuthatch", "Hainan Blue Flycatcher", "Tickell's Blue Flycatcher", "Asian Paradise Flycatcher", "Puff-throated Babbler", "Abbott's Babbler"],
    included: ["Round-trip transport from Siem Reap", "All reserve and community access fees", "One night accommodation at community eco-camp", "All meals: breakfast, lunch and dinner as per itinerary", "Bottled drinking water throughout the tour", "Services of an English-speaking Pearaing birding guide", "Night walk activity with local ranger"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Personal expenses"],
    accommodation: "Simple community-based eco-camp with shared facilities, mosquito nets and fans. Single supplement: $40. Note: comfort level is basic — this is an authentic forest experience.",
    bestSeason: "November to April (Peak: December–March) when forest conditions are dry, trails are accessible and bird activity is at its highest.",
    physicalEffort: "Moderate. Walking 4–6 km per day on mostly flat forest tracks with some uneven ground. Suitable for travellers in reasonable health who are comfortable with hot, tropical conditions and early starts.",
    weather: "Hot and dry weather is expected throughout this tour. Mornings can be cool and pleasant, while midday temperatures may rise sharply. The forest provides good shade during the hottest part of the day. Occasional light showers are possible.",
    food: "Traditional Khmer meals are prepared by the community camp using fresh local ingredients. Vegetarian options are available on request. Bottled water is provided throughout the tour.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, headlamp or torch, light long-sleeved clothing for the night walk, binoculars and camera."
  }, {
    id: 6,
    title: "Three-Day Tour to Birding at Russey Trep - Bengal Florican Grassland.",
    description: "Techo Sen Russey Trep is a remote community-based ecotourism site in Cambodia's Northern Plains, renowned for hosting the critically endangered Giant Ibis (Cambodia's national bird) and the elusive White-shouldered Ibis. The Russey Trep Ibis Site is a conservation initiative established by the Local NGO and Internation NGO in partnership with the Cambodian government and the local community.\n\nBefore the tour begins in Russey Trep, we enjoy a full morning of birdwatching at the Bengal Florican Grassland, one of the best locations to observe the critically endangered Bengal Florican. This grassland also supports a wide range of rare and notable species, including Manchurian Reed Warbler, Sarus Crane, Singing Bushlark, Oriental Skylark, Common Buttonquail, Asian Pied Starling, Spotted Redshank, Little Ringed Plover, Streaked Weaver, Oriental Pratincole, Pied Harrier, Eastern Marsh Harrier, Bluethroat, Red Avadavat, Lanceolated Warbler, and various other waterbirds.",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: russeyTrepBengalFlorican,
    images: [russeyTrepBengalFlorican],
    category: "multi-day",
    highlights: ["Giant Ibis", "Bengal Florican", "White-shouldered Ibis", "Preah Vihear Temple", "Sarus Crane", "Community eco-lodge"],
    rating: 4.8,
    schedule: {
      "Day 1": "Bengal Florican Grassland & Russey Trep - 5:00 AM pickup from hotel by English-speaking bird guide with packed breakfast from Siem Reap, 6:30 AM arrive Florican grassland and have breakfast while bird watching, 10:00 AM lunch at restaurant in Presh Vihear Town, 1:00 PM travel to Techo Sen Russey Trep, 4:00 PM arrive Russey Trep, relax and look at Giant Ibis and White-shouldered Ibis at roosting tree, 6:30 PM night walk for owls and dinner",
      "Day 2": "Full Day Bird Watching at Russey Trep - 4:30 AM packed tea, coffee, and breakfast, moving to Giant Ibis roosting tree, 6:00 AM bird watching till 11:00 AM, 11:30 AM lunch at community restaurant, 1:00 PM continue birding in another area till 4:30 PM, 6:30 PM dinner and overnight",
      "Day 3": "Techo Sen Russey Trep - 6:30 AM tea and coffee, heading to Birding, 12:00 PM lunch at local restaurant, 1:00 PM turn back to Siem Reap hotel with birding stops, 5:00 PM arrive Siem Reap hotel and drop off"
    },
    birdSpecies: ["Giant Ibis", "Bengal Florican", "White-shouldered Ibis", "Greater Adjutant", "Milky Stork", "Rufous-bellied Woodpecker", "Spot-billed Pelican", "Sarus Crane", "White-rumped Falcon", "Black-headed Woodpecker", "Yellow-crowned Woodpecker", "Oriental Scops Owl", "Spotted Wood Owl", "Brown Wood Owl", "Brown Fish Owl", "Singing Bush Lark", "Oriental Skylark", "Oriental Pratincole", "Common Buttonquail", "Pied Harrier", "Eastern Marsh Harrier", "Bluethroat", "Red Avadavat", "Burmese Nuthatch", "Burmese Shrike", "Woolly-necked Stork", "White-browed Fantail", "Rufous Treepie", "Small Minivet", "Common Woodshrike", "Indochinese Cuckooshrike", "Great Slaty Woodpecker", "Pale-capped Pigeon", "Black-hooded Oriole", "Black-naped Oriole", "Golden-fronted Leafbird", "Manchurian Reed Warbler", "Asian Pied Starling", "Spotted Redshank", "Little Ringed Plover", "Streaked Weaver", "Lanceolated Warbler", "Collared Scops Owl", "Brown Boobook", "Spotted Owlet"],
    included: ["All transport", "National park and all reserve entry fees", "Accommodation in Tmatboey", "All meals - lunch, dinner, and breakfast on departure day", "Bottled drinking water throughout the tour", "Boat trips as specified", "Services of English-speaking birding guide"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    accommodation: "Local eco-lodge at Russey Trep with simple private shower/toilet facilities and fans in the rooms. Single supplement: $80 (Note: single accommodation will probably not be available at Tmat Boey).",
    bestSeason: "December to end of April (Peak: January-February-March) when water levels are low, Sarus Cranes return, and Bengal Florican displays are visible",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 3-4 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 7,
    title: "Three-Day Tour to Birding at Be Treed Adventure",
    description: "Welcome to BeTreed Adventures, an ecotourism ecolodge in Preah Vihear Province, Cambodia. Located about three hours from Siem Reap and between the temples of Koh Ker and Preah Khan of Kompong Svay, BeTreed offers an authentic off-the-beaten-path experience in wild Cambodia.\n\nWorking closely with local communities, BeTreed supports conservation of the 42,000-hectare Phnom Tnout–Phnom Pok Wildlife Sanctuary, a unique dry dipterocarp forest landscape. Your visit directly contributes to protecting wildlife and forests while supporting local livelihoods.\n\nActivities are tailored to your interests and may include birdwatching, wildlife tracking, jungle hiking, night walks, and visits to Angkorian temple ruins. Guests may encounter birds, deer, macaques, langurs, gibbons, squirrels, and even banteng.",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: beTreedWoodpeckerAsset.url,
    images: [beTreedWoodpeckerAsset.url],
    category: "multi-day",
    highlights: ["Bengal Florican", "White-rumped Pygmy-Falcon", "Tree House accommodation", "Conservation tourism", "Angkorian cave temples", "Forest zipline", "Community-based ecotourism"],
    rating: 4.9,
    schedule: {
      "Day 1": "Bengal Florican Grasslands & BeTreed Adventure:\nThe grasslands also support many other rare species, including, Bangle Florican, Painted Stork, Singing Bushlark, Oriental Skylark, Oriental Pratincole, Pied/Eastern Marsh Harrier and +50 Species. \n\nOvernight at BeTreed Adventure.",
      "Day 2": "Wildlife & Forest Exploration at BeTreed - Full day dedicated to exploring BeTreed's diverse habitats from dry deciduous to evergreen forest.\n\n Overnight again at BeTreed Adventure",
      "Day 3": "Birding Trails & Siem Reap + Koh Ker Temple - Morning bird and wildlife walk around BeTreed. Afternoon continue to Koh Ker Complex for bird watching learn about temple history. Return to Siem Reap"
    },
    birdSpecies: ["Painted Stork", "Egrets", "Blue-breasted Quail", "Small Buttonquail", "Bengal Florican", "Pied Harrier", "Red Avadavat", "Singing Bushlark", "Black-browed Reed-warbler", "Manchurian Reed-warbler", "Lanceolated Warbler", "Striated Grassbird", "Scarlet Minivet", "Small Minivet", "Indochinese Roller", "Indochinese Bushlark", "White-rumped Pygmy-Falcon", "Rufous-winged Buzzard", "Pale-capped Pigeon", "Collared Scops Owl", "Savanna Nightjar", "Rufous-bellied Woodpecker", "Black-headed Woodpecker", "Great Slaty Woodpecker", "Sarus Crane", "Oriental Skylark", "Common Buttonquail", "Asian Pied Starling", "Spotted Redshank", "Little Ringed Plover", "Streaked Weaver", "Oriental Pratincole", "Eastern Marsh Harrier", "Bluethroat"],
    included: ["All transport", "National park and all reserve entry fees", "All accommodation in Cambodia", "All meals - breakfast, lunch and dinner, and breakfast on departure day", "Bottled drinking water throughout the tour", "Services of English-speaking birding guide and local guides"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    accommodation: "Tree House at BeTreed with comfortable room, private bathroom/shower, simple private shower/toilet facilities with fans (no air-conditioning). Note: Food at BeTreed is only Vegetarian.",
    bestSeason: "November to April when dry season provides best birding conditions and access to forest trails",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 3-4 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Vegetarian meals only at BeTreed. Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 7.05,
    title: "Three-Day Tours to Tmatboey- Giant Ibis and White-shouldered\u00a0",
    description: "Tmatboey is a small community in the Northern Plains of Cambodia and one of the best places in the world to see the Giant Ibis, Cambodia's national bird and one of the world's rarest ibis species. Surrounded by dry dipterocarp forest, seasonal wetlands, and natural pools, this remote area provides an important refuge for many endangered birds and wildlife.\n\n\n\nThe Giant Ibis is listed as Critically Endangered, with only a few hundred individuals remaining in the wild. Tmatboey has become one of its last strongholds, where visitors have an excellent chance of seeing this remarkable bird feeding around forest pools and open wetlands, especially during the dry season.\n\nBesides the Giant Ibis, Tmatboey is also one of the best places to find the White-shouldered Ibis, along with other special birds such as White-rumped Pygmy Falcon, Pale-capped Pigeon, Asian Woollyneck, Black-headed Woodpecker, Great Slaty Woodpecker, Rufous-bellied Woodpecker, Chinese Francolin, Indochinese Bushlark, Rufous-bellied Eagle, and several species of owls and nightjars.\n\n\n\nTmatboey is a great example of community-based conservation. Local people work together with conservation organizations to protect the forest and its wildlife. Tourism provides income for the community and encourages the protection of the Giant Ibis and its habitat for future generations.\n\nThis 3-day birding holiday takes you from the seasonally flooded grasslands of Kampong Thom to the remote dry forests of the Northern Plains, one of Cambodia's greatest conservation success stories. Search for the critically endangered Bengal Florican, then spend two full days tracking the world's rarest ibises, Giant Ibis and White-shouldered Ibis, alongside an exceptional cast of dry forest specialties, raptors, woodpeckers, nightjars, and owls. The tour ends with a visit to the Vulture Restaurant before returning to Siem Reap.",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: giantIbisTourAsset.url,
    images: [giantIbisTourAsset.url],
    category: "multi-day",
    highlights: ["Giant Ibis", "White-shouldered Ibis", "Bengal Florican", "Northern Plains", "Vulture Restaurant", "Dry forest specialties"],
    rating: 4.8,
    schedule: {
      "Day 1": "Florican Grassland & Northern Plains — We leave Siem Reap early this morning and travel to the seasonally flooded grasslands of Kampong Thom, one of the last remaining strongholds for the critically endangered Bengal Florican. During our visit, we'll search for this iconic species, along with the wintering Manchurian (White-browed) Reed Warbler. The open grasslands are also excellent for raptors, and we have good chances of seeing Eastern Marsh Harrier, Pied Harrier, and Greater Spotted Eagle soaring overhead. After lunch, we continue north to Russey Treb in the Northern Plains, one of Cambodia's most important conservation areas and one of the last refuges for the world's rarest ibis species — the Giant Ibis and White-shouldered Ibis. Dinner will be served at the community restaurant before an overnight stay at the community lodge or a nearby guesthouse.",
      "Day 2": "Full Day Birding at Northern Plains — Today is dedicated to exploring the Northern Plains, one of Southeast Asia's most important strongholds for the critically endangered Giant Ibis and White-shouldered Ibis. We'll explore the region's dry dipterocarp forests, seasonal wetlands, and open woodlands, offering excellent opportunities to find these two iconic species in their natural habitats. The Northern Plains are one of Cambodia's greatest conservation success stories, protecting not only these globally threatened ibises but also an exceptional diversity of wildlife. In addition to our primary targets, we'll search for a superb selection of dry forest specialties, including White-rumped Pygmy Falcon, Pale-capped Pigeon, Asian Woollyneck, Black-headed Woodpecker, Great Slaty Woodpecker, Rufous-bellied Woodpecker, Chinese Francolin, White-browed Fantail, Indochinese Bushlark, Rufous-bellied Eagle, Violet Cuckoo, and Indian Spotted Eagle. As dusk falls, we'll keep an eye out for some of the area's nocturnal birds, with possibilities including Savanna Nightjar, Large-tailed Nightjar, Oriental Scops Owl, Barn Owl, Brown Fish Owl, Spotted Wood Owl, and Brown Wood Owl—dinner and overnight at the community lodge or a nearby guesthouse.",
      "Day 3": "Northern Plains & Vulture Restaurant — We will spend our final morning birding the northern plains looking for any species that we might be missing before returning to the community lodge for lunch. We then drive for around 3 hours to Siem Reap."
    },
    birdSpecies: ["Bengal Florican", "Manchurian Reed Warbler", "Eastern Marsh Harrier", "Pied Harrier", "Greater Spotted Eagle", "Giant Ibis", "White-shouldered Ibis", "White-rumped Pygmy Falcon", "Pale-capped Pigeon", "Asian Woollyneck", "Black-headed Woodpecker", "Great Slaty Woodpecker", "Rufous-bellied Woodpecker", "Chinese Francolin", "White-browed Fantail", "Indochinese Bushlark", "Rufous-bellied Eagle", "Violet Cuckoo", "Indian Spotted Eagle", "Savanna Nightjar", "Large-tailed Nightjar", "Oriental Scops Owl", "Barn Owl", "Brown Fish Owl", "Spotted Wood Owl", "Brown Wood Owl"],
    included: ["All transport", "National park and all reserve entry fees", "Two nights accommodation at Russey Trep community lodge or nearby guesthouse", "All meals — lunch, dinner and breakfast on departure day", "Bottled drinking water throughout the tour", "Boat trips as specified", "Services of English-speaking birding guide"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    accommodation: "Local eco-lodge at Russey Trep with simple private shower/toilet facilities and fans in the rooms. Single supplement may apply.",
    bestSeason: "December to end of April (Peak: January-February-March) when water levels are low, Bengal Florican displays are visible, and Giant Ibis are most reliably found.",
    physicalEffort: "This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 3-4 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, and binoculars"
  }, {
    id: 7.06,
    title: "Custom Tours 8 Days: Giant Ibis, Bengal Florican, Red-headed Vulture & Mekong Wagtail",
    description: `Cambodia is a fantastic destination for anyone who loves nature and wildlife. While the country is famous for the ancient temples of Angkor Wat, it is also one of the best birdwatching destinations in Southeast Asia. It is home to many rare and endangered birds, including the Giant Ibis, Cambodia's national bird, as well as a wide variety of other unique wildlife.

On this tour, we'll explore a wide range of habitats, including evergreen forests, dry woodlands, wetlands, grasslands and the mighty Mekong River. Along the way, we'll search for some of Cambodia's most sought-after birds and other fascinating wildlife.

This tour is more than just a birdwatching holiday. By travelling with us, you also help support local communities and conservation projects that protect Cambodia's wildlife and natural habitats. It's a great opportunity to enjoy outstanding birding while making a positive contribution to the conservation of these remarkable places for future generations.

We hope to see around 235 bird species during this tour.`,
    duration: "8 Days / 7 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: redHeadedVultureFlockAsset.url,
    images: [redHeadedVultureFlockAsset.url],
    category: "multi-day",
    highlights: ["Giant Ibis", "Bengal Florican", "Red-headed Vulture", "White-shouldered Ibis", "Mekong Wagtail", "Irrawaddy Dolphin", "Cambodian Tailorbird", "Angkor temples"],
    rating: 4.9,
    schedule: {
      "Day 1": "Arrive in Siem Reap — If time allows, enjoy local birding near Siem Reap at Phnom Krom Marshland or Chrav. Dinner at a local restaurant. Overnight in Siem Reap.",
      "Day 2": "Full Day Angkor Complex (birding & temples) — Our first birding hotspot is the Angkor Temple complex, where we combine birdwatching with a tour of the temples. We will also visit the fabulous Ta Prohm Temple, embraced by the roots of enormous fig trees and gigantic creepers. Along the way we look for White-throated Rock-thrush, Black-capped Kingfisher, Black Baza, Alexandrine and Red-breasted Parakeet, Hainan Blue and Taiga Flycatchers, among many others. Overnight in Siem Reap.",
      "Day 3": "Florican Grassland & Northern Plains — Depart Siem Reap early and head to the grasslands of Kampong Thom in search of the rare and endangered Bengal Florican and the wintering Manchurian/White-browed Reed-warbler. Raptors including Eastern Marsh Harrier, Pied Harrier and Greater Spotted Eagle are often seen cruising overhead. Continue to Russey Treb (Tmatboey), one of the last strongholds of the Giant Ibis and White-shouldered Ibis. Dinner at the community restaurant. Overnight at the community lodge or nearby guesthouse.",
      "Day 4": "Full Day Northern Plains — A full day dedicated to the Giant Ibis and rare birds of the dry dipterocarp forest. The Northern Plains are home to the iconic critically endangered Giant Ibis and White-shouldered Ibis, alongside White-rumped Pygmy-falcon, Pale-capped Pigeon, Asian Woolly-necked Stork, Black-headed, Great Slaty and Rufous-bellied Woodpeckers, Chinese Francolin, White-browed Fantail, Indochinese Bushlark, Rufous-bellied Eagle, Violet Cuckoo and Indian Spotted Eagle. Owls and nightjars possible after dark. Overnight at the community lodge or nearby guesthouse.",
      "Day 5": "Full Day Northern Plains — A second full day exploring the dry forests, seasonal pond, and open woodland of the Northern Plains, targeting any missed species and adding to our list of raptors, woodpeckers, and dry-forest specialties, including Savannah Nightjar, Large-tailed Nightjar, Oriental Scops-Owl, Barn Owl, Brown Fish-Owl, Spotted Wood-Owl and Brown Wood-Owl. Overnight at the community lodge or nearby guesthouse.",
      "Day 6": "Northern Plains & Vulture Restaurant — A final morning birding the Northern Plains for any missed targets before returning to the community lodge for lunch. Then a three-hour drive to Boeng Toal, arriving in the late afternoon. A short walk through the surrounding forest offers more birding before the tour highlight — an evening at the Vulture Restaurant, a chance to observe all three of Cambodia's critically endangered vultures: Red-headed, White-rumped, and Slender-billed Vulture. Dhole is also possible. We stay in comfortable safari tents deep in Chhep Wildlife Sanctuary. By visiting you directly, you support this important conservation program and the surrounding community. Overnight basic homestay or camping at the Vulture Restaurant (tented camp, no A/C).",
      "Day 7": "Vulture Restaurant & Kratie Mekong River — A return morning visit to the vulture hide and birding the nearby trails. After an early lunch, we continue to Kratie. Evening birding at rice paddies and wetlands on the other side of the Mekong River. Overnight in Kratie.",
      "Day 8": "Kratie Mekong River & Phnom Penh — Morning boat trip on the Mekong River (around two hours) for Mekong Wagtail, Irrawaddy Dolphin, and other river specialities. Around 11 AM, we set off for Phnom Penh, stopping en route at the Cambodian Tailorbird Marshland to look for this recently discovered endemic. The tour concludes in Phnom Penh in the late afternoon. Transfers to Phnom Penh International Airport.\u00a0\n\n\n\nPlease note this is a flexible itinerary which may need to be adjusted slightly, depending on arrival/departure times, weather conditions, and the most recent information from our local guides"
    },
    birdSpecies: ["Giant Ibis", "White-shouldered Ibis", "Bengal Florican", "Red-headed Vulture", "White-rumped Vulture", "Slender-billed Vulture", "Mekong Wagtail", "Irrawaddy Dolphin", "Cambodian Tailorbird", "Manchurian Reed-warbler", "Eastern Marsh Harrier", "Pied Harrier", "Greater Spotted Eagle", "Indian Spotted Eagle", "Rufous-bellied Eagle", "White-rumped Pygmy-falcon", "Pale-capped Pigeon", "Asian Woolly-necked Stork", "Black-headed Woodpecker", "Great Slaty Woodpecker", "Rufous-bellied Woodpecker", "Chinese Francolin", "White-browed Fantail", "Indochinese Bushlark", "Violet Cuckoo", "White-throated Rock-thrush", "Black-capped Kingfisher", "Black Baza", "Alexandrine Parakeet", "Red-breasted Parakeet", "Hainan Blue Flycatcher", "Taiga Flycatcher", "Savannah Nightjar", "Large-tailed Nightjar", "Oriental Scops-Owl", "Barn Owl", "Brown Fish-Owl", "Spotted Wood-Owl", "Brown Wood-Owl", "Small Pratincole", "Pied Kingfisher", "Dhole"],
    included: ["All transport", "All accommodation as per itinerary", "All meals — full board from dinner on Day 1 to lunch on Day 7 (breakfast on Day 8)", "Services of local guides at each birding site", "Carcass for the Vulture Restaurant", "Boat trip on the Mekong River", "All drinking water", "All entrance and reserve fees"],
    notIncluded: ["International airfare", "Travel insurance", "Tips", "Drinks", "Laundry", "Flight/airport tax", "Any items of a personal nature"],
    accommodation: "1 night in Siem Reap (Day 1), 1 night in Siem Reap (Day 2), 2 nights at Russey Treb community lodge, 1 night at the Vulture Restaurant (safari tent, no A/C), 1 night in Kratie, 1 night in Phnom Penh. Single supplement is not available for the Northern Plains and Boeng Toal.",
    bestSeason: "November to April (Peak: January-March) when the dry season concentrates ibises and vultures at waterholes and river levels are low for Mekong Wagtail.",
    physicalEffort: "Walking 3-5 km per day on flat grassland, temple grounds and forest trails. Suitable for birders in reasonable health who are comfortable with tropical conditions and early starts.",
    weather: "Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.",
    food: "Full board from dinner on Day 1 through to lunch on Day 7, with breakfast on Day 8. A mix of Khmer cuisine at local restaurants, community lodges and safari camp. Vegetarian options available on request.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, headlamp or torch, light long-sleeved clothing, binoculars and camera"
  }, {
    id: 7.1,
    
    title: "2-Day 1-Night Birding at Kratie — Mekong Wagtail & Irrawaddy Dolphins",
    description: `Explore the mighty Mekong River at Kratie, one of Cambodia's most rewarding lowland birding destinations. This relaxed two-day tour focuses on the riverbanks, sandbars and small islands around Kratie town, where the endemic Mekong Wagtail is reliably found alongside a suite of specialist waterbirds.

The tour also includes a boat trip to search for the rare Irrawaddy Dolphins, and time on Koh Trong island for open-country and riverside species. With easy walking, good roads and comfortable local accommodation, this is an ideal extension for birders who want to add Mekong specialities to their Cambodia list while experiencing rural river life.`,
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: kratieMekongDolphinsAsset.url,
    images: [kratieMekongDolphinsAsset.url],
    category: "multi-day",
    highlights: ["Mekong Wagtail", "Irrawaddy Dolphins", "Koh Trong island", "Mekong River birding", "Community homestay"],
    rating: 4.7,
    schedule: {
      "Day 1": "Siem Reap → Kratie — 5:30 AM pickup from your hotel in Siem Reap with packed breakfast, drive east toward Kratie with birding stops at scenic rice paddies and riverside wetlands. 12:00 PM lunch in Kratie town. 2:00 PM board a local boat for dolphin watching and river birding along the Mekong sandbars. 4:30 PM check in at a simple guesthouse or community homestay on Koh Trong island. 6:00 PM dinner and optional evening walk for owls and nightjars.",
      "Day 2": "Kratie → Siem Reap — 5:30 AM early morning walk along Koh Trong's gardens and riverbank for Mekong Wagtail, swallows, kingfishers and pratincoles. 8:00 AM breakfast at the homestay. 9:00 AM continue birding on the island, looking for grassland and open-country species. 12:00 PM lunch in Kratie. 1:00 PM begin the return drive to Siem Reap with birding stops en route. 6:30 PM arrive back at your hotel in Siem Reap."
    },
    birdSpecies: ["Mekong Wagtail", "Irrawaddy Dolphin", "Small Pratincole", "River Lapwing", "Red-wattled Lapwing", "Grey-headed Lapwing", "Oriental Pratincole", "Little Ringed Plover", "Common Sandpiper", "Green Sandpiper", "Common Kingfisher", "White-throated Kingfisher", "Pied Kingfisher", "Stork-billed Kingfisher", "Barn Swallow", "Red-rumped Swallow", "Asian Palm Swift", "House Swift", "Brown Shrike", "Long-tailed Shrike", "Plain-backed Sparrow", "Baya Weaver", "Asian Golden Weaver", "Black-collared Starling", "Asian Pied Starling", "Great Myna", "Javan Myna", "Yellow-vented Bulbul", "Zebra Dove", "Spotted Dove", "Greater Coucal", "Lesser Coucal", "Collared Scops Owl", "Large-tailed Nightjar"],
    included: ["Round-trip transport from Siem Reap", "One night accommodation on Koh Trong island or in Kratie town", "All meals: breakfast, lunch and dinner as per itinerary", "Bottled drinking water throughout the tour", "Mekong dolphin-watching boat trip", "Services of an English-speaking birding guide"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Personal expenses"],
    accommodation: "Simple community homestay or local guesthouse on Koh Trong island with basic private rooms and fan. Single supplement: $30.",
    bestSeason: "November to April (Peak: January-March) when the Mekong water level is low, sandbars are exposed and dolphin sightings are most reliable. Tours available year-round.",
    physicalEffort: "Easy. Walking 2-4 km per day on flat village paths, riverbanks and garden edges. Suitable for all fitness levels.",
    weather: "Hot and dry weather is expected. The Mekong breeze can make conditions feel pleasant, but sun protection is essential. Occasional showers are possible.",
    food: "Traditional Khmer meals are served at local restaurants and the homestay, featuring fresh river fish, rice and seasonal vegetables. Vegetarian options are available on request.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, binoculars, and a camera"
  }, {
    id: 7.2,
    title: "2-Day 1-Night Birding at Dak Dam — Keo Seima Evergreen Forest",
    description: `Journey into the lush evergreen forests of Dak Dam, inside the Keo Seima Wildlife Sanctuary in Cambodia's eastern Mondulkiri Province. This remote forest edge is famous for its rich wildlife, including several species of hornbills, primates and forest birds that are difficult to find elsewhere in the country.

Over two days, you will explore forest trails, fruiting trees, and nearby streams at dawn and dusk, giving excellent chances for Yellow-cheeked Gibbon, Black-shanked Douc, Great Hornbill, and Wreathed Hornbill. The area is also excellent for woodpeckers, broadbills, trogons, pittas, and over 80 other species. This is a true wilderness experience for birders who want to explore Cambodia's eastern forests.`,
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "2-6 people",
    price: "$ Per Person",
    image: dakDamKeoSeimaForestAsset.url,
    images: [dakDamKeoSeimaForestAsset.url],
    category: "multi-day",
    highlights: ["Yellow-cheeked Gibbon", "Black-shanked Douc", "Great Hornbill", "Wreathed Hornbill", "Evergreen forest trails", "Night walk for owls"],
    rating: 4.8,
    schedule: {
      "Day 1": "Siem Reap → Dak Dam — 5:00 AM pickup from your hotel in Siem Reap with packed breakfast, long drive east through Kratie toward Mondulkiri with birding stops at productive wetlands and forest edges. 12:00 PM lunch in Sen Monorom or a local village. 2:00 PM arrive at Dak Dam, check in at a simple community lodge or camp. 3:00 PM afternoon birding along forest trails for hornbills, broadbills and primates. 6:00 PM dinner at the lodge, followed by a night walk for owls, frogmouths and nocturnal mammals. Overnight at Dak Dam.",
      "Day 2": "Dak Dam → Siem Reap — 5:00 AM early breakfast, then dawn birding at the most productive forest edge for gibbons, hornbills, woodpeckers and trogons. 9:00 AM return to the lodge for a short rest. 10:00 AM continue birding along a different trail, focusing on understorey species such as pittas, broadbills and babblers. 12:30 PM lunch. 1:30 PM begin the return drive to Siem Reap with birding stops en route. 7:00 PM arrive back at your hotel in Siem Reap."
    },
    birdSpecies: ["Great Hornbill", "Wreathed Hornbill", "Oriental Pied Hornbill", "Yellow-cheeked Gibbon", "Black-shanked Douc", "Pig-tailed Macaque", "Long-tailed Macaque", "Red-breasted Parakeet", "Alexandrine Parakeet", "Vernal Hanging Parrot", "Blue-eared Barbet", "Coppersmith Barbet", "Greater Yellownape", "Lesser Yellownape", "Pale-headed Woodpecker", "Black-headed Woodpecker", "Great Slaty Woodpecker", "White-bellied Woodpecker", "Eurasian Jay", "Green Magpie", "Racket-tailed Treepie", "Bronzed Drongo", "Greater Racket-tailed Drongo", "Scarlet Minivet", "Grey-chinned Minivet", "Bar-winged Flycatcher-shrike", "Black-winged Cuckooshrike", "Indochinese Cuckooshrike", "Banded Broadbill", "Long-tailed Broadbill", "Blue-winged Leafbird", "Greater Green Leafbird", "Asian Fairy-bluebird", "Pale-blue Flycatcher", "Hill Blue Flycatcher", "Blue-throated Bee-eater", "Chestnut-headed Bee-eater", "Oriental Dollarbird", "Large-tailed Nightjar", "Grey Nightjar", "Collared Scops Owl", "Brown Wood Owl", "Brown Boobook"],
    included: ["Round-trip transport from Siem Reap", "All reserve and community access fees", "One night accommodation at Dak Dam community lodge or camp", "All meals: breakfast, lunch and dinner as per itinerary", "Bottled drinking water throughout the tour", "Services of an English-speaking birding guide", "Night walk activity with local ranger"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Personal expenses"],
    accommodation: "Basic community lodge or camp at Dak Dam with simple rooms, shared or private facilities and mosquito nets. Single supplement: $40.",
    bestSeason: "November to April (Peak: December-March) when forest trails are drier, fruiting trees attract hornbills and primates, and morning bird activity is highest.",
    physicalEffort: "Moderate. Walking 4-6 km per day on forest trails with some uneven ground, slopes and stream crossings. Suitable for birders in reasonable health who are comfortable with tropical conditions and early starts.",
    weather: "Warm and humid conditions in evergreen forest. Mornings are often cool and misty, while midday can be warm. Rain is possible at any time, so waterproof clothing is recommended.",
    food: "Traditional Khmer meals are prepared by the community lodge using fresh local ingredients. Vegetarian options are available on request. Bottled water is provided throughout the tour.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, headlamp or torch, light long-sleeved clothing, waterproof jacket, binoculars and camera"
  }, {
    id: 15,
    title: "Custom 14-Day Cambodia Birding Tour | Tailor-Made Birdwatching Holiday",
    description: "A fully customizable 15-day Cambodia birding adventure combining ancient temples, endangered grassland species, Northern Plains ibises, Mekong River specialities, and the endemic Cambodian Laughingthrush on Mount Aural.\n\nDay 1 begins with arrival in Siem Reap and birding among the iconic Angkor temples, where Hainan Blue Flycatcher, Asian Barred Owlet, Black Baza and wintering minivets are possible. Day 2 searches for Bengal Florican before travelling north to Russey Treb in the Northern Plains. Days 3–4 are dedicated to finding Giant Ibis and White-shouldered Ibis and the region's exceptional dry-forest species. Day 5 boats the Mekong River near Kratie for Mekong Wagtail and Irrawaddy Dolphins, then Day 6 targets Chinese Grassbird near Pursat. Day 7 transfers to Phnom Penh for international departures, while the optional Mount Aural post-tour extension (Days 8–12) searches for the endemic Cambodian Laughingthrush and Chestnut-headed Partridge. Day 15 ends with departures from Phnom Penh International Airport.",
    duration: "15 Days / 14 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$ Per Person",
    image: customTourAsset.url,
    images: [customTourAsset.url],
    category: "multi-day",
    highlights: ["Giant Ibis", "Bengal Florican", "Mekong Wagtail", "Chinese Grassbird", "Cambodian Laughingthrush", "Mount Aural extension", "Angkor temples"],
    rating: 4.9,
    schedule: {
      "Day 1": "Arrival in Siem Reap & Angkor Temple Birding — Upon arrival at Siem Reap International Airport, our bird guide will warmly welcome you and transfer your team to begin your adventure in Cambodia. Depending on your arrival time, we will spend the morning or afternoon exploring the magnificent temples of Angkor, focusing on Angkor Wat, Bayon and Ta Prohm. Possible bird sightings include Hainan Blue Flycatcher, White-throated Rock Thrush, Black Baza, Pale-legged Leaf Warbler, Two-barred Warbler, Forest Wagtail, Alexandrine Parakeet, Red-breasted Parakeet, Brown Boobook, Asian Barred Owlet, and during winter Swinhoe's Minivet and Ashy Minivet. Overnight stay in Siem Reap. Note: If you would like to spend more time exploring the temples of Angkor, we recommend extending your stay after the birding tour. We'd be happy to arrange a professional temple guide — please contact us for customized arrangements.",
      "Day 2": "Bengal Florican & Journey to Russey Treb — We begin the day searching for the Bengal Florican, one of Cambodia's most iconic and critically endangered birds. The grasslands also offer excellent opportunities to see Manchurian Reed Warbler, Sarus Crane and a variety of other grassland specialists. By mid-morning we travel north to the remote Preah Vihear Province, renowned for outstanding birdlife and rare species. After arriving in Russey Treb for lunch, we settle into one of Cambodia's finest community-based ecotourism destinations. In the afternoon we begin our search for two of Cambodia's most sought-after birds — the Critically Endangered Giant Ibis and White-shouldered Ibis — along with many other dry forest species. Overnight in Russey Treb.",
      "Days 3–4": "Russey Treb Ibis — We spend two full days birding around Russey Treb, walking through the open dry dipterocarp forest in search of small seasonal ponds (trapeangs) near the feeding sites of Giant Ibis and White-shouldered Ibis. Between visits to these ponds we encounter a wide variety of other birds, including large mixed feeding flocks of wintering passerines. This forest supports up to sixteen species of woodpeckers, including Black-headed Woodpecker, Great Slaty Woodpecker and Rufous-bellied Woodpecker. Other specialties include Burmese Shrike, Yellow-footed Green Pigeon, Rufous-winged Buzzard, Brown Prinia, Blossom-headed, Red-breasted and Alexandrine Parakeets, Indochinese Cuckooshrike, Indochinese Bushlark, Golden-fronted Leafbird, Black-hooded Oriole and White-rumped Falcon. Night birding can be rewarding for Spotted Wood Owl, Brown Wood Owl, Collared Scops Owl, Oriental Scops Owl, Brown Fish Owl, Spotted Owlet, Savannah Nightjar and Large-tailed Nightjar. Overnight at Russey Treb.",
      "Day 5": "Mekong River to Kratie — The morning will be spent aboard small boats along the Mekong River to the north of Kratie, searching small vegetated islands for the recently described Mekong Wagtail. An added attraction is the small population of critically endangered Irrawaddy Dolphins resident here. Other species may include Grey-throated Martin, Small Pratincole and Pied Kingfisher. After an enjoyable early morning, we drive south then west to Pursat, with a stop en route for the recently discovered Cambodian Tailorbird. Night in Pursat.",
      "Day 6": "Chinese Grassbird & Transfer — Another recent discovery in Cambodia is the Chinese Grassbird, previously known only from Hong Kong and Myanmar. We search for them singing in the vast grasslands, along with another chance of Bengal Florican and wintering passerines including Manchurian Reed Warbler and Yellow-breasted Bunting. We also have another chance of Asian Golden Weaver and Small Buttonquail. Following lunch, those joining the post-tour extension head to our hotel near the base of Mount Aural, while those not doing so transfer to Phnom Penh.",
      "Day 7": "International departures from Phnom Penh International Airport.",
      "Mount Aural post-tour extension (Days 8–12)": "Mount Aural is the most easily accessible mountain for the endemic Cambodian Laughingthrush. On day 12 we hike up into the montane forest, where our perfectly situated camp at 1,200m is frequented by the Cambodian Laughingthrush. Our other target is the near-endemic Chestnut-headed Partridge. Other possible species include Blue Pitta, Indochinese Green Magpie, Yellow-vented Green Pigeon, Green Cochoa and a whole host of wintering birds — even Silver Oriole has been recorded here!",
      "Day 15": "International departures from Phnom Penh International Airport."
    },
    birdSpecies: ["Hainan Blue Flycatcher", "White-throated Rock Thrush", "Black Baza", "Pale-legged Leaf Warbler", "Two-barred Warbler", "Forest Wagtail", "Alexandrine Parakeet", "Red-breasted Parakeet", "Brown Boobook", "Asian Barred Owlet", "Swinhoe's Minivet", "Ashy Minivet", "Bengal Florican", "Manchurian Reed Warbler", "Sarus Crane", "Giant Ibis", "White-shouldered Ibis", "Black-headed Woodpecker", "Great Slaty Woodpecker", "Rufous-bellied Woodpecker", "Burmese Shrike", "Yellow-footed Green Pigeon", "Rufous-winged Buzzard", "Brown Prinia", "Blossom-headed Parakeet", "Indochinese Cuckooshrike", "Indochinese Bushlark", "Golden-fronted Leafbird", "Black-hooded Oriole", "White-rumped Falcon", "Spotted Wood Owl", "Brown Wood Owl", "Collared Scops Owl", "Oriental Scops Owl", "Brown Fish Owl", "Spotted Owlet", "Savannah Nightjar", "Large-tailed Nightjar", "Mekong Wagtail", "Irrawaddy Dolphin", "Grey-throated Martin", "Small Pratincole", "Pied Kingfisher", "Cambodian Tailorbird", "Chinese Grassbird", "Yellow-breasted Bunting", "Asian Golden Weaver", "Small Buttonquail", "Cambodian Laughingthrush", "Chestnut-headed Partridge", "Blue Pitta", "Indochinese Green Magpie", "Yellow-vented Green Pigeon", "Green Cochoa", "Silver Oriole"],
    included: ["Round-trip transport from Siem Reap", "All reserve and community access fees", "Accommodation as per itinerary", "All meals: breakfast, lunch and dinner as per itinerary", "Bottled drinking water throughout the tour", "Services of an English-speaking birding guide", "Mekong dolphin-watching boat trip"],
    notIncluded: ["International flights", "Travel insurance", "Entry visa", "Temple entrance fees (if applicable)", "Alcoholic and soft drinks", "Tips and gratuities", "Laundry services", "Hotel mini bar and phone calls", "Any other items of a personal nature"],
    accommodation: "Comfortable hotels and community lodges in Siem Reap, Russey Treb, Kratie, Pursat and Mount Aural. Single supplement may apply depending on lodge availability.",
    bestSeason: "December to end of April (Peak: January–March) when dry-forest birds are most reliable, Bengal Florican displays are visible and Mount Aural trails are accessible.",
    physicalEffort: "Moderate. Walking 3–5 km per day on flat grassland, temple grounds and forest trails, with a steeper hike up to Mount Aural camp during the extension. Suitable for birders in reasonable health who are comfortable with tropical conditions and early starts.",
    weather: "Hot and dry weather is expected throughout the main tour. Mornings are cooler and more productive; midday temperatures can be very high. The Mount Aural extension is cooler at higher elevations and rain is possible at any time.",
    food: "Traditional Khmer meals are prepared by the lodges and local restaurants using fresh local ingredients. Vegetarian options are available on request. Bottled water is provided throughout the tour.",
    thingsToBring: "Hat, sunglasses, sunscreen, insect repellent, headlamp or torch, light long-sleeved clothing, waterproof jacket for Mount Aural, binoculars and camera"
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
  const handleTourDetails = (tour: typeof tours[0]) => {
    setSelectedTour(tour);
    setIsPopupOpen(true);
  };
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