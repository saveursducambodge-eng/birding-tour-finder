import halfDayImageAsset from "@/assets/half-day-birding-siem-reap-new.jpg.asset.json";
const halfDayImage = halfDayImageAsset.url;
import fullDayImage from "@/assets/prek-toal-storks.jpg";
import twoDayImageAsset from "@/assets/giant-ibis-2day-blog.jpg.asset.json";
const twoDayImage = twoDayImageAsset.url;
import sevenDayImage from "@/assets/dream-birding-7day.jpg";
import templeImageAsset from "@/assets/angkor-owlet-blog.jpg.asset.json";
const templeImage = templeImageAsset.url;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
  highlights: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "half-day-birding-siem-reap",
    title: "Half-Day Birding Near Siem Reap: A Perfect Introduction",
    excerpt:
      "Just 20 minutes from Siem Reap town, the Pearaing Biodiversity Conservation Center offers a quick yet rewarding birding experience with over 50 wetland species.",
    image: halfDayImage,
    category: "Bird Tours",
    readTime: "5 min read",
    date: "May 12, 2026",
    highlights: [
      "50+ wetland bird species in a few hours",
      "Only 10 km from Siem Reap town",
      "Morning or afternoon departure options",
      "Painted Stork, Asian Openbill, Spot-billed Pelican",
    ],
    content: [
      "If you only have a few hours to spare in Siem Reap, a half-day birding tour at the Pearaing Biodiversity Conservation Center is the easiest way to experience Cambodia's incredible wetland birdlife. Located just 10 kilometres from the town centre, the site stretches all the way to the edge of the Tonle Sap Great Lake, one of Southeast Asia's most important wetland ecosystems.",
      "Early risers can join the morning departure at 5:30 AM, when the wetlands come alive with activity. Painted Storks, Asian Openbills, Spot-billed Pelicans, Oriental Darters, and several heron and egret species feed in the shallow channels. The cool morning light is perfect for photography and observation through the spotting scope.",
      "For travellers who prefer a slower start, the afternoon option begins at 2:30 PM and ends with a beautiful golden hour over the marshland. Cisticolas, weavers, jacanas, and bitterns are commonly observed alongside Cambodia's national bird highlights.",
      "This tour is ideal for first-time visitors, families, and anyone wanting a relaxed introduction to Cambodian birding before committing to longer expeditions. Transport is provided by tuk-tuk or car, with a short local boat ride included to access the best birding zones.",
    ],
  },
  {
    slug: "full-day-prek-toal",
    title: "Full-Day Birding at Prek Toal Waterbird Sanctuary",
    excerpt:
      "Discover the largest breeding colony of large waterbirds in Southeast Asia in this UNESCO Biosphere Reserve on the Tonle Sap Great Lake.",
    image: fullDayImage,
    category: "Full-Day Tours",
    readTime: "7 min read",
    date: "May 18, 2026",
    highlights: [
      "UNESCO Biosphere Reserve and Ramsar Site",
      "150+ recorded bird species",
      "Greater Adjutant, Milky Stork, Spot-billed Pelican",
      "Floating village and community lunch",
    ],
    content: [
      "Prek Toal sits on the northwestern edge of the Tonle Sap Great Lake and is widely regarded as one of Southeast Asia's premier birding destinations. The seasonally flooded freshwater swamp forest supports the largest breeding colony of large waterbirds in the region, with more than 150 species recorded.",
      "A full day at Prek Toal begins early, with a 5:30 AM pickup from your Siem Reap hotel and a packed breakfast served on the boat as you cruise across the lake. By mid-morning you arrive at the observation platform, where you climb a treetop hide to watch nesting Greater Adjutants, Milky Storks, Spot-billed Pelicans, and Oriental Darters at eye level.",
      "Lunch is served at the Saray Community Restaurant in the floating village, where every meal directly supports local families. The afternoon includes a visit to the Water Hyacinth Handicraft Workshop and a quiet paddle-boat tour through the floating homes, schools, and gardens of Prek Toal.",
      "The best time to visit is between November and April, with peak waterbird breeding from January to March. This is conservation tourism at its best — every visit contributes directly to protecting one of the world's most important wetland sanctuaries.",
    ],
  },
  {
    slug: "2-day-giant-ibis-tour",
    title: "2-Day Giant Ibis Adventure in the Northern Plains",
    excerpt:
      "A short but powerful expedition to see Cambodia's critically endangered national bird, the Giant Ibis, deep in the dry dipterocarp forests of Russey Treb.",
    image: twoDayImage,
    category: "Custom Tours",
    readTime: "8 min read",
    date: "May 24, 2026",
    highlights: [
      "Critically endangered Giant Ibis at dawn",
      "White-shouldered Ibis and Sarus Crane",
      "Community-run eco-lodge accommodation",
      "Dry dipterocarp forest birding",
    ],
    content: [
      "Two days is enough time to leave the tourist trail behind and step into the heart of Cambodia's Northern Plains. The journey from Siem Reap to Russey Treb takes you through villages, rice fields, and finally into vast tracts of dry dipterocarp forest — a landscape that supports some of the rarest birds on the planet.",
      "On day one, after the long transfer, an afternoon birding session introduces you to White-rumped Falcon, Rufous-winged Buzzard, Indochinese Roller, and several woodpecker species. Dinner is served at the community eco-lodge, where revenue supports both conservation patrols and village livelihoods.",
      "Day two begins before sunrise. By first light, your guide leads you quietly to a known Giant Ibis roost, where the encounter with this critically endangered species is a moment most birders never forget. With luck, you will also see White-shouldered Ibis and Sarus Crane on the same morning.",
      "After a late breakfast and a final birding walk, you return to Siem Reap by mid-afternoon. This is an ideal option for travellers who want to experience the magic of Cambodia's flagship birds without committing to a longer expedition.",
    ],
  },
  {
    slug: "7-day-birding-across-cambodia",
    title: "7-Day Birding Across Cambodia: The Essential Expedition",
    excerpt:
      "From Tonle Sap wetlands to the Northern Plains and ancient temples, this week-long expedition covers Cambodia's most important birding regions.",
    image: sevenDayImage,
    category: "Custom Tours",
    readTime: "10 min read",
    date: "May 30, 2026",
    highlights: [
      "200+ possible bird species across diverse habitats",
      "Giant Ibis, Bengal Florican, Sarus Crane",
      "Prek Toal, Russey Treb, Ang Trapaeng Thmor",
      "Angkor temple sunrise birding",
    ],
    content: [
      "Seven days is the sweet spot for birders who want to experience the full range of Cambodian habitats without rushing. The tour starts in Siem Reap with a gentle introduction at the Pearaing Biodiversity Conservation Center, followed by a full day at Prek Toal Waterbird Sanctuary on the Tonle Sap.",
      "Days three and four head north to Russey Treb (formerly Tmatboey) for the Giant Ibis, White-shouldered Ibis, and the dry dipterocarp specialists. Early mornings and late afternoons are the most productive, with relaxed midday breaks at the community lodge.",
      "Day five brings you to Ang Trapaeng Thmor, the most reliable site in the world for the wintering Sarus Crane, alongside Bengal Florican, Manchurian Reed Warbler, and a dazzling variety of waterbirds. The reserve's open grassland and reservoir produce constant action throughout the day.",
      "Days six and seven return you to the Siem Reap area for a sunrise birding session inside the Angkor Archaeological Park, where forest species mix with ancient temple architecture. Hainan Blue Flycatcher, Alexandrine Parakeet, and Oriental Pied Hornbill are regular highlights before a final relaxed temple visit.",
      "This itinerary balances bird density, cultural depth, and travel comfort, making it our most popular multi-day expedition for international visitors.",
    ],
  },
  {
    slug: "full-temple-tour-siem-reap",
    title: "Full Temple Tour Near Siem Reap: Angkor and Beyond",
    excerpt:
      "A full-day journey through Angkor Wat, Bayon, Ta Prohm, and the lesser-visited temples around Siem Reap, guided by certified local experts.",
    image: templeImage,
    category: "Temple Tours",
    readTime: "9 min read",
    date: "June 1, 2026",
    highlights: [
      "Sunrise at Angkor Wat",
      "Bayon, Ta Prohm, and Banteay Kdei",
      "Certified English-speaking temple guide",
      "Optional birding stops along the route",
    ],
    content: [
      "A full temple day near Siem Reap usually begins in darkness. By 5:00 AM you are already at the western causeway of Angkor Wat, finding a quiet spot to watch the sun rise behind the five iconic towers. As the light grows, the temple's bas-reliefs and galleries begin to reveal their thousand-year-old stories.",
      "After breakfast, the tour continues into Angkor Thom, the last great capital of the Khmer Empire. The smiling faces of the Bayon, the Terrace of the Elephants, and the Terrace of the Leper King are explored at a comfortable pace, with your certified guide explaining the history, religion, and daily life behind the stones.",
      "Lunch is taken at a local restaurant before visiting Ta Prohm, the famous 'jungle temple' where massive silk-cotton and strangler fig trees grow over the ancient walls. The afternoon can include Banteay Kdei, Sras Srang, or Pre Rup depending on your interests and energy.",
      "For birders, this tour can easily be combined with quiet birding stops inside the Angkor forest, where Hainan Blue Flycatcher, Alexandrine Parakeet, Oriental Pied Hornbill, and several woodpeckers are regularly seen. It is the perfect way to experience Cambodia's cultural and natural heritage in a single day.",
    ],
  },
];