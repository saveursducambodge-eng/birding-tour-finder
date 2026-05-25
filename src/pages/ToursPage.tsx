import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Users, MapPin, Star, ArrowRight, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import TourDetailsPopup from "@/components/TourDetailsPopup";
import giantIbisImage from "@/assets/tmatboey-ibis.jpg";
import heroImage from "@/assets/hero-cambodia-jungle.jpg";
import birdTourHero from "@/assets/bird-tour-hero.png";
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
import beTreedAdventure from "@/assets/be-treed-adventure.jpg";
import beTreedAdventureBirds from "@/assets/be-treed-adventure-birds.jpg";
import beTreedSlide1 from "@/assets/be-treed-slide-1.jpg";
import beTreedSlide2 from "@/assets/be-treed-slide-2.jpg";
import beTreedSlide3 from "@/assets/be-treed-slide-3.jpg";
import beTreedSlide4 from "@/assets/be-treed-slide-4.jpg";
import beTreedSlide5 from "@/assets/be-treed-slide-5.jpg";
import beTreedSlide6 from "@/assets/be-treed-slide-6.jpg";
import beTreedSlide7 from "@/assets/be-treed-slide-7.jpg";
import beTreedSlide8 from "@/assets/be-treed-slide-8.jpg";
// Import bird images from gallery
import bird1 from "@/assets/pearaing-biodiversity.jpg";
import pearaingBio2 from "@/assets/pearaing-biodiversity-2.jpg";
import pearaingBio3 from "@/assets/pearaing-biodiversity-3.jpg";
import pearaingBio4 from "@/assets/pearaing-biodiversity-4.jpg";
import pearaingBio5 from "@/assets/pearaing-biodiversity-5.jpg";
import pearaingBio6 from "@/assets/pearaing-biodiversity-6.jpg";
import keyLocationsRareBirds from "@/assets/key-locations-rare-birds.jpg";
import bird2 from "@/assets/prek-toal-painted-storks.jpg";
import prekToalSlide1 from "@/assets/prek-toal-slide-1.jpg";
import prekToalSlide2 from "@/assets/prek-toal-slide-2.jpg";
import prekToalSlide3 from "@/assets/prek-toal-slide-3.jpg";
import prekToalSlide4 from "@/assets/prek-toal-slide-4.jpg";
import prekToalSlide5 from "@/assets/prek-toal-slide-5.jpg";
import prekToalSlide6 from "@/assets/prek-toal-slide-6.jpg";
import prekToalSlide7 from "@/assets/prek-toal-slide-7.jpg";
import prekToalSlide8 from "@/assets/prek-toal-slide-8.jpg";
import bird3 from "@/assets/koh-ker-temple.png";
import kohKerSlide1 from "@/assets/koh-ker-slide-1.jpg";
import kohKerSlide2 from "@/assets/koh-ker-slide-2.jpg";
import kohKerSlide3 from "@/assets/koh-ker-slide-3.jpg";
import kohKerSlide4 from "@/assets/koh-ker-slide-4.jpg";
import kohKerSlide5 from "@/assets/koh-ker-slide-5.jpg";
import kohKerSlide6 from "@/assets/koh-ker-slide-6.jpg";
import bird4 from "@/assets/ang-trapaeng-thmor-sarus-cranes.jpg";
import attSlide1 from "@/assets/att-slide-1.jpg";
import attSlide2 from "@/assets/att-slide-2.jpg";
import attSlide3 from "@/assets/att-slide-3.jpg";
import attSlide4 from "@/assets/att-slide-4.jpg";
import attSlide5 from "@/assets/att-slide-5.jpg";
import attSlide6 from "@/assets/att-slide-6.jpg";
import attSlide7 from "@/assets/att-slide-7.jpg";
import bird5 from "@/assets/angkor-wat-bird-tour.jpg";
import bird6 from "@/assets/tmatboey-ibis-tour6.jpg";
import giantIbis2night2days from "@/assets/giant-ibis-2night-2days.jpg";
import bird7 from "@/assets/bird-7.jpg";
import bird8 from "@/assets/bird-8.jpg";
import bird9 from "@/assets/bird-9.jpg";
import bird10 from "@/assets/bird-10.jpg";
import russeyTrepSlide1 from "@/assets/russey-trep-slide-1.jpg";
import russeyTrepSlide2 from "@/assets/russey-trep-slide-2.jpg";
import russeyTrepSlide3 from "@/assets/russey-trep-slide-3.jpg";
import russeyTrepSlide4 from "@/assets/russey-trep-slide-4.jpg";
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
    <div className="relative h-48 overflow-hidden group/slider">
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
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const tours = [{
    id: 1,
    title: "Pearaing Biodiversity Conservation Center",
    description: "An easy and affordable half-day birding tour, perfect for early risers or afternoon explorers. Just 10 km from Siem Reap town (about 20 minutes by car or tuk-tuk), explore the Pearaing Biodiversity Conservation Center, which stretches to the edge of the great Tonle Sap Lake.\n\nThis important feeding site is home to many waterbirds, including Painted Stork, Milky Stork, Lesser Adjutant, Grey-headed Fish Eagle, Spot-billed Pelican, Oriental Darter, Indian Cormorant, Great Cormorant, Little Cormorant, and more than 70+ wetland bird species.\n\nIn just a few hours of birding, you can spot over 50 wetland and grassland bird species.",
    duration: "Half Day (4 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$122 Per Person",
    image: bird1,
    images: [bird1, pearaingBio2, pearaingBio3, pearaingBio4, pearaingBio5, pearaingBio6],
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
    id: 2,
    title: "Full Bird at Prek Toal Waterbird Sanctuary and Visit Prek Toal Floating Village",
    description: "Nestled on the northwestern edge of the Tonle Sap Great Lake, the Prek Toal Bird Sanctuary is a spectacular Ramsar site and part of Cambodia's UNESCO Biosphere Reserve. This unique ecosystem, dominated by seasonally flooded freshwater swamp forest, supports thousands of rare and endangered birds during the dry season, making it one of Southeast Asia's premier birdwatching destinations. Prek Toal is home to the largest breeding colony of large waterbirds in the region, with more than 150 bird species recorded within this protected reserve.",
    duration: "Full Day (11 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$240 Per Person",
    image: bird2,
    images: [bird2, prekToalSlide1, prekToalSlide2, prekToalSlide3, prekToalSlide4, prekToalSlide5, prekToalSlide6, prekToalSlide7, prekToalSlide8],
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
    title: "Full-day Trip to Birding at Koh Ker & Beng Melea",
    description: "This tour combines Cambodia's most important birding sites with conservation-based tourism, maximizing your chances of seeing your target species. Koh Ker is a remote archaeological site in northern Cambodia, located about 120 kilometres from Siem Reap. It contains more than 180 sanctuaries within a protected area of approximately 81 square kilometres. Only around two dozen monuments are accessible to visitors, as most sanctuaries remain hidden within the forest.\n\nKoh Ker is situated in dry dipterocarp forest with areas of semi-evergreen forest, providing excellent habitat for wildlife. Notable bird species here include eight species of woodpeckers, Rufous-winged Buzzard, White-rumped Pygmy Falcon, and Collared Falconet.\n\nBeng Mealea (\"Lotus Pond\") is an Angkor-period temple located about 40 kilometres east of the main Angkor temple complex. Originally built as a Hindu temple with later Buddhist carvings, it remains largely unrestored, with trees and dense vegetation growing among its towers and courtyards. The surrounding semi-evergreen forest offers excellent birding opportunities, including the chance to see migrant species such as Hainan Blue Flycatcher and White-throated Rock Thrush.",
    duration: "Full Day (12.5 hours)",
    difficulty: "Easy",
    groupSize: "2 people",
    price: "$245 Per Person",
    image: bird3,
    images: [bird3, kohKerSlide1, kohKerSlide2, kohKerSlide3, kohKerSlide4, kohKerSlide5, kohKerSlide6],
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
    images: [bird4, attSlide1, attSlide2, attSlide3, attSlide4, attSlide5, attSlide6, attSlide7],
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
    title: "Full Birding and Angkor Wat Temple Tour",
    description: "This tour combines the most important birding experiences with the country's rich cultural heritage at the same sites. Angkor Wat is a Hindu–Buddhist temple complex covering 162 hectares within the ancient Khmer capital of Angkor. Originally constructed in the 12th century as a Hindu temple dedicated to the god Vishnu, it is located just 7 kilometers north of Siem Reap.\n\nAngkor Wat is not only Cambodia's most iconic temple but also a surprisingly rewarding birding site. The surrounding moat and forest patches provide feeding and roosting habitats for more than 50 bird species. After birdwatching and learning about the history of Angkor Wat, we continue to Bayon and Ta Prohm temples. At Ta Prohm, we search for Alexandrine Parakeet and Red-breasted Parakeet in an extraordinary setting made famous by the movie Tomb Raider, where massive tree roots entwine the ancient ruins. The day concludes with further birdwatching at Bayon Temple until sunset.",
    duration: "Full Day (12.5 hours)",
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
    id: 6,
    title: "Three-Day Tour to Birding at Russey Trep - Bengal Florican Grassland.",
    description: "Techo Sen Russey Trep is a remote community-based ecotourism site in Cambodia's Northern Plains, renowned for hosting the critically endangered Giant Ibis (Cambodia's national bird) and the elusive White-shouldered Ibis. The Russey Trep Ibis Site is a conservation initiative established by the Local NGO and Internation NGO in partnership with the Cambodian government and the local community.\n\nBefore the tour begins in Russey Trep, we enjoy a full morning of birdwatching at the Bengal Florican Grassland, one of the best locations to observe the critically endangered Bengal Florican. This grassland also supports a wide range of rare and notable species, including Manchurian Reed Warbler, Sarus Crane, Singing Bushlark, Oriental Skylark, Common Buttonquail, Asian Pied Starling, Spotted Redshank, Little Ringed Plover, Streaked Weaver, Oriental Pratincole, Pied Harrier, Eastern Marsh Harrier, Bluethroat, Red Avadavat, Lanceolated Warbler, and various other waterbirds.",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    groupSize: "2-8 people",
    price: "$675 Per Person",
    image: giantIbis2night2days,
    images: [giantIbis2night2days, russeyTrepSlide1, russeyTrepSlide2, russeyTrepSlide3, russeyTrepSlide4],
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
    price: "$",
    image: beTreedAdventureBirds,
    images: [beTreedAdventureBirds, beTreedSlide1, beTreedSlide2, beTreedSlide3, beTreedSlide4, beTreedSlide5, beTreedSlide6, beTreedSlide7, beTreedSlide8],
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
  const filteredTours = selectedFilter === "all" ? tours : tours.filter((tour) => tour.category === selectedFilter);
  return <>
      <Helmet>
        <title>Bird Watching Tours in Cambodia | PEARAING Birding Trails</title>
        <meta name="description" content="Book expert-led bird watching tours in Cambodia. From half-day trips to 19-day adventures, discover Giant Ibis, Bengal Florican, and 500+ bird species with professional guides." />
        <link rel="canonical" href="https://my-birding-canvas.lovable.app/tours" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-sage-light to-nature-earth/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nature-forest/90 to-nature-forest/60 z-10" />
        <img src={birdTourHero} alt="Bird watching tours in Cambodia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight drop-shadow-lg">
              Discover Cambodia's
              <span className="text-nature-sand block">Rare Birds</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
              Expert-guided birding tours through Cambodia's most pristine wilderness areas
            </p>
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
            Cambodia is home to over 600 bird species, including several globally threatened and endemic species. Our expertly guided tours take you to the country's most important birding sites, from the vast wetlands of Tonle Sap to the pristine forests of the Northern Plains, maximizing your chances of seeing rare and endangered species while supporting local conservation efforts.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
          <h3 className="text-xl sm:text-2xl font-serif text-nature-forest">
            Choose Your Adventure
          </h3>
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-nature-forest flex-shrink-0" />
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tours</SelectItem>
                <SelectItem value="multi-day">Multi-Day Adventures</SelectItem>
                <SelectItem value="cultural">Cultural & Birding</SelectItem>
                <SelectItem value="water">Wetland Specialists</SelectItem>
                <SelectItem value="sanctuary">Sanctuary Visits</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 border-sage-light hover:border-nature-sage overflow-hidden">
              {tour.images && tour.images.length > 1 ? (
                <TourImageSlider images={tour.images} alt={tour.title} />
              ) : (
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 border-double opacity-100 border-0" />
                </div>
              )}
              
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
            </Card>)}
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

      {/* Tour Details Popup */}
      <TourDetailsPopup tour={selectedTour} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>;
};
export default ToursPage;