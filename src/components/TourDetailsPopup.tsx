import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, Star, Calendar, Utensils, AlertCircle, Camera } from "lucide-react";
import birdTourHero from "@/assets/bird-tour-hero.png";
interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  price: string;
  image: string;
  category: string;
  highlights: string[];
  rating: number;
  schedule?: Record<string, string>;
  birdSpecies?: string[];
  included?: string[];
  notIncluded?: string[];
  bestSeason?: string;
  physicalEffort?: string;
  accommodation?: string;
  weather?: string;
  food?: string;
  thingsToBring?: string;
  isInformational?: boolean;
  additionalInfo?: {
    food?: string;
    whatToBring?: string;
  };
}
interface TourDetailsPopupProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}
const TourDetailsPopup = ({
  tour,
  isOpen,
  onClose
}: TourDetailsPopupProps) => {
  if (!tour) return null;

  // Special handling for informational content
  if (tour.isInformational && tour.title === "Bird Watching Itinerary in Cambodia: 19-Day Tours - Rare Bird Species") {
    return <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Bird Watching Itinerary in Cambodia: 19-Day Tours - Rare Bird Species
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 prose prose-sm max-w-none">
            <h3 className="text-green-600 font-semibold text-lg">Rare Bird Itinerary in Cambodia</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              This 19-day itinerary combines Cambodia's remarkable biodiversity with its cultural heritage, offering an unforgettable birdwatching adventure. Cambodia, with its diverse ecosystems, stunning landscapes, and rich avian biodiversity, is a paradise for birdwatching enthusiasts. The country is home to more than 644 bird species, including several rare and endangered ones, making it an ideal destination for an immersive 14-day birdwatching trip.
            </p>

            <p className="text-muted-foreground">
              <strong>Site:</strong> Siem Reap - Prek Toal – Ang Trapaeng Thmor- Florican Grasslands - BeTreed – Tmatboey – Vulture Restaurant - Krakie – Pursat_ Phnom Penh Cambodian Tailorbird.
            </p>

            <div className="space-y-4">
              <h3 className="text-green-600 font-semibold text-lg">Day 1: Arrival in Siem Reap and Birding Near Siem Reap</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 2: Full Day Birding At Angkor Complex</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 3: full day birding at Prek Toal Waterbird Sanctuary (overnight at Siem Reap)</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 4: full day birding at Ang Trapeang Thmor Sarus Crane (overnight at Siem Reap)</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 5: Full Birding at Chang Kran Roy, night in Changkran Roey Camp</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 6: Full day bird at Chang Kran Roey, night in Siem Reap</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 7: AM birding at Florican Grassland, PM birding and overnight at Be Treed Adventure</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 8 Full Bird at Be Treed Adventure</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 9: AM birding at Be Treed, PM Birding and overnight at Tmatboey</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 10: full day birding at Tmatboey (overnight at Tmatboey lodge)</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 11: AM birding at Tmatboey, PM birding and overnight at Vulture Restaurant</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 12: AM birding at Vulture restaurant, PM birding and overnight at Kratie</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 13: AM birding at Kratie, PM birding and overnight at Keo Seima Wildlife Sanctuary</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 14: Full day birding at Jahoo Gibbon Camp</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 15: AM birding at Jahoo Gibbon Camp, PM birding at Sean Monorom</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 16: Full birding at Dak Dam</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 17: AM birding Koe Seima, PM birding at Cambodian Tailorbird and Pursat</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 18: AM birding at Pursat Grassbird, PM birding at Cambodian Tailorbird, and overnight at Phnom Penh</h3>
              <h3 className="text-green-600 font-semibold text-lg">Day 19: Full day city tours and transfer to Phnom Penh airport</h3>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Our Cambodia bird tour focuses on finding as many of the special birds of Cambodia, including mega world birds like: Pale-capped Pigeon, Coral-billed ground cuckoo, Bar-bellied pitta, Yellow-breasted bunting, Asian golden weaver, Great slaty woodpecker, Giant Ibis, White-shouldered Ibis, Greater Adjutant, Black-headed Woodpecker, Milky Stork, Rufous-bellied Woodpecker, Mekong Wagtail, Cambodian Tailorbird, Spot-billed Pelican, Red-headed Vulture, White-rumped vulture, Slender-billed vulture, Indochinese bush lark, Manchurian reed warbler, Javan pond heron, Grey-headed fish eagle, Eastern marsh harrier, Pied harrier, Greater spotted eagle, Rufous-winged buzzard, Alexandrine parakeet, Blossom-headed parakeet, Bengal Florican, Chinese Grassbird, Sarus Crane, White-rumped Falcon, Great Slaty Woodpecker, Spotted wood owl, Brown wood owl, Brown fish owl, Asian barred owlet, Spotted owlet, Brown boobook, Oriental scops owl, Collared scops owl, Oriental bay owl, White-cheeked Laughingthrush, Orange-breasted laughingthrush, Silver-eared Mesia, Green Peafowl, and Germain's peacock-pheasant, Indochinese barbet, Red-vented Barbet.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-green-600 font-semibold text-lg">Day 1: Arrival in Siem Reap</h3>
              <p className="text-muted-foreground">
                Arrive in Cambodia's bustling capital, AM or PM, Siem Reap. Spend the day acclimatizing and visiting local attractions like the Phnom Kroam or Chrev. In the evening, prepare for your birdwatching adventure by meeting your guide for a briefing.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 2: Siem Reap and Angkor Wat</h3>
              <p className="text-muted-foreground">
                Combine culture and birding as you explore the Angkor Wat complex and its surrounding forests. Keep an eye out for species like the Forest Wagtail, White-throated Rock Thrush, Hinan blue flycatcher, Asian Barred Owlet, and Black Baza. The ancient temples offer an enchanting backdrop for birdwatching.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 3: Prek Toal Bird Sanctuary</h3>
              <p className="text-muted-foreground">
                Prek Toal, a world-renowned bird sanctuary on the Tonle Sap Lake. Explore the sanctuary by boat and spot rare species. Look for the Oriental Darter, Painted Stork, Milky Stork, Greater Adjutant, Lesser Adjutant, Egrets, Heron, Ibis, Cormorants, and Spot-billed Pelican. These floodplains are also crucial habitats for migratory birds. Stay overnight in Siem Reap.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 4: Ang Trapeang Thmor - Sarus Crane</h3>
              <p className="text-muted-foreground">
                Head to Ang Trapeang Thmor, a wetland sanctuary northwest of Siem Reap. This area is a stronghold for the endangered Sarus Crane, Spotted Wood Owl, Greater Spotted Eagle, Eastern Marsh Harrier, Pied Harrier, Black Kite, Gray-headed Swamphen, and other wetland birds like the Comb Duck. Stay overnight in Siem Reap.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 5 Siem Reap to Chong Kran Roy</h3>
              <p className="text-muted-foreground">
                By the early morning, leave from Siem Reap Town heading to Chong Kran Roy, we will start travelling towards our next birding site of Chong Kran Roy, where we will stay in a tented camp. In the late afternoon, we visit a hide set up at an area that attracts birds, with Bar-bellied Pitta, Coral-billed ground cuckoo, Siamese fireback, and Siberian blue robin being the birds we most hope to see here. Along with this prize, we also hope to see a Green-legged partridge and an Orange-breasted trogon, all species that are very hard to see under normal circumstances. Commoner birds here include Black-naped Monarch, Green-eared Barbet, Lineated Barbet, Puff-throated Babbler, and Hinan Blue Flycatcher, Gray-eyed Bulbul.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 6, Chong Kran Roy to Siem Reap</h3>
              <p className="text-muted-foreground">
                In the early morning, we revisit the hide to give us another chance to see the key species that visit, including Bar-bellied Pitta and Siberian Blue Robin. Waiting for the birds to come is a nice way to start the morning with other species we might expect, including Red Junglefowl and Emerald Dove. We plan to spend most of the day in the woodlands here with plenty of different species to look for. Spending the whole morning in the forest, birds like Thick-billed Green Pigeon, Green-eared Barbet, and Asian Fairy Bluebird can be expected on any fruiting trees. The list of possibilities is quite long, and although we only have a short time at this location, it is a good time to be here with many species vocal as the breeding season gets into full swing. With that in mind, we should have a decent chance at finding Banded Broadbill, the funny little Heart-spotted Woodpecker, or even Banded Kingfisher. Bring all your luck charms, keep your fingers crossed, and there could even be the possibility of the Coral-billed Ground Cuckoo, as this is its most vocal time of the year. By mid-afternoon, we will begin the drive back to our hotel at Siem Reap, arriving in plenty of time to have a shower and relax a bit before dinner.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 7: BeTreed Adventure and Bengal Florican Grasslands</h3>
              <p className="text-muted-foreground">
                Visit the grasslands near Kampong Thom, one of the few remaining habitats for the critically endangered Bengal Florican, Sarus Crane, and Manchurian Reed Warbler. The open grasslands also attract raptors like the Eastern Marsh Harrier and storks, egrets, and more than 60 species of birds have been found over there. In the late afternoon, we will check into the BeTreed homestay and local guide. After lunch and rest, join your guide for an introductory birding walk along forest trails. The dry forest is home to Siamese Fireback, Green Peafowl, Greater Yellownape woodpecker, Burmese Shrike, Asian Barred Owlet, Rufous Treepie, and flocks of bulbuls and Drongos. As dusk falls, listen for the haunting calls of collared scops owls and perhaps spotlight nocturnal species such as nightjars or a rare brown wood owl. Dinner is served at the eco-lodge, prepared with local ingredients. Overnight in your jungle lodge, lulled by the sounds of cicadas and distant gibbon songs.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 8: Full day Birding at BeTreed Adventure</h3>
              <p className="text-muted-foreground">
                All day bird watching at BeTreed, BeTreed Adventures is a remote ecotourism homestay situated in Preah Vihear Province, inside the Phnom Tnout Phnom Pok Wildlife Sanctuary. It's about 2-3 hours by road from Bengal Florican Grassland. This intimate off-grid site helps conserve 42,000+ hectares of dry dipterocarp forest and offers support for local community conservation efforts. Trekking to the varied habitats from Dry to Evergreen Forest, taking a challenging hike to the top of the mountain, and exploring the Angkorian era "cave-temples. Wake up before sunrise for coffee and depart on a dawn birdwatching trek. Early morning is the most active period for birds: look for White-browed Fantail, Scarlet Minivet, Asian Paradise Flycatcher, Blossom-headed Parakeet, and flocks of woodpeckers tapping on old dipterocarp trunks. Lucky observers may encounter the Crested Serpent Eagle circling overhead or hear the deep calls of the Banded Broadbill hidden in the canopy. After breakfast back at the lodge, continue with a longer hike into the core forest. The mixed habitat of bamboo groves, grassland patches, and rocky outcrops provides chances to see Indochinese Bushlark, Rufous-winged Buzzard, Common Iora, Brown Prinia, and the Blue-winged Pitta during migration months. Return to camp for lunch and siesta in a hammock. In the afternoon, take a forest edge trail leading to Prasat Preah Puol, an Angkor-era temple ruin reclaimed by trees. Along the way, keep binoculars ready for Green Peafowl displaying, Lineated Barbet, and Hainan Blue Flycatcher. As evening approaches, climb the viewpoint ridge or try the zipline crossing: both offer spectacular panoramas and good chances for raptors such as Oriental Honey Buzzard and Shikra. After sunset, join a short night walk for possible sightings of owls, nightjars, and even civets. Night at BeTreed eco-treehouse or stilt house
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 9, Be Treed adventure – Tmatboey - Giant ibis</h3>
              <p className="text-muted-foreground">
                Rise early once more for a final dawn birdwatching walk, targeting species you may have missed. Dry forests often reward patient birders: Black-headed Woodpecker, White-rumped Shama, Velvet-fronted Nuthatch, and winter visitors like Taiga Flycatcher are frequently encountered. This is also a good time to hear gibbons calling across the valley, a magical soundtrack to end your stay. Return to the lodge for breakfast, pack your belongings, and bid farewell to the conservation team. Depart late morning for Tmatboey Giant Ibis. The drive takes about 2-3 hours to reach Tmatboey, passing through rural farmland and small Khmer villages. When we arrive at Tmatboey and meet our local guide at 3:30 PM, We Head into the surrounding dry deciduous forest, one of Southeast Asia's rarest ecosystems. Local guides know the seasonal waterholes where ibises often feed. Target species include: Giant Ibis – Cambodia's national bird, Critically Endangered, and the star of Tmatboey, White-shouldered Ibis – another globally threatened species. Other sightings may include the Black-headed Woodpecker, Yellow-crowned Woodpecker, Burmese Shrike, Blossom-headed Parakeet, Rufous-winged Buzzard, and Lesser Adjutant. At 6 PM, return to the lodge and enjoy dinner back at the lodge. Optional night spotlighting may reveal Collared Scops Owl, Spotted Owlet, Large-tailed Nightjar, or even Barn Owl around the clearing. Overnight at Tmatboey Eco-Lodge.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 10: Full Birding Day: Giant Ibis, White-shouldered Ibis & Forest Specialists</h3>
              <p className="text-muted-foreground">
                Wake before sunrise with coffee/tea. Your destination: seasonal wetlands and forest clearings where the Giant Ibis feeds at dawn. With luck, you may watch Cambodia's national bird foraging in a shallow pond—an unforgettable experience. After breakfast in the field, continue birding along dry forest trails. This habitat is excellent for species of woodpeckers, Brown Wood Owl, Spotted Wood Owl, Brown Fish Owl, Blossom-headed Parakeet, White-browed Fantail, Common Flameback, Large Cuckooshrike, and Velvet-fronted Nuthatch. Return to the lodge for lunch and a midday rest. In the afternoon, visit another site where White-shouldered Ibis often gather, as well as areas supporting Greater Racket-tailed Drongo, Green Bee-eater, Blue-winged Pitta (in migration months), and Siamese Fireback. Evening birding walks near the village, with a chance of spotting Collared Scops Owl, Barn Owl, or even a Large-tailed Nightjar at dusk. Dinner and overnight at Tmatboey Eco-lodge. Accommodation: Tmatboey Eco-lodge
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 11 – Morning Birding Tmatboey & Departure</h3>
              <p className="text-muted-foreground">
                If there are still any key species that we are searching for, we can use a final few hours on our last morning at Tmat Boey. If local guides have discovered a roosting tree, we might be lucky enough to experience the sight and sound of the Giant Ibis as it wakes at its roost tree, if we have not already been amazed by this prehistoric scene. After our final morning at Tmat Boey, we will move to the small town (Dung Plet Village) of Boeng Toal Vultures Restaurant. By mid-morning, we will transfer to the Vulture restaurant at Boeg Toal, where food for the vultures will have been pre-organized to be provided at the right time for our visit. After doing some birding around the camp, which is a great location for Yellow-crowned Woodpecker and White-browed Fantail, we will visit the large hide constructed for vulture-viewing, where we hope to see several species loafing in the trees nearby if not already feeding on a carcass. Overnight camping in the forest.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 12, Boeng Toal (Vulture Restaurant) to Kratei Mekong Wagtail</h3>
              <p className="text-muted-foreground">
                Birdwatching at the Vulture Restaurant in northern Cambodia is one of the most unusual and rewarding wildlife experiences in Southeast Asia. Unlike many birding sites where the focus is on forest songbirds or waterbirds, here the highlight is the chance to see three species of critically endangered vultures—the White-rumped Vulture, Slender-billed Vulture, and Red-headed Vulture all in one place. The "restaurant" is not for people but for birds. It is a conservation project run by the local community in Dongphlet village (Preah Vihear Province) with support from NGOs such as WCS. Since natural carrion has become scarce due to habitat loss, hunting, and declining wild ungulates, villagers organize controlled feedings by placing carcasses in a forest clearing. This attracts large numbers of vultures that can feed safely, while visitors watch from a discreet hide. The entrance fees and visitor support provide vital income for the community and a direct incentive to protect these globally threatened species. Visiting birders pay for a cow with which to feed the birds, which will hopefully result in close-up sightings of Red-headed, Slender-billed, and White-rumped Vultures viewed from within a hide. Watching these endangered birds should be a very memorable experience and one that presents some great photo opportunities. Some other raptors or mammals may come to join the feeding frenzy, but seeing some of Asia's most endangered raptors will make for some exciting birding. After our final morning at Vulture restaurant, we will continue to Kratie, nestled alongside the Mekong River. The journey takes around 4 hours, and we will stop in Stung Treng for lunch. The hotel we stay in here is very pleasant with good facilities, and it is in front of the Mekong River, which will be nice after some of the more rustic accommodations over the last few days. On the same day, late afternoon, After we check in the hotel and then We will procced to marsh near Kratie in the late afternoon, where we should see large numbers of weavers, including Grey-headed Swamphen, Pheasant-tailed Jacanas, Brown-winged Jacanas Oriental Reed Warbler, Asian Golden and Baya Weaver, Golden-headed Cisticola, Yellow-bellied prinia, Dusky Warbler, and other wetland birds, and sometimes you will have a chance to see Small Pratincole flying over the rice fields. We spent just one night in our hotel in Kratei.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 13 Kratie – Jahoo Gibbon Camp</h3>
              <p className="text-muted-foreground">
                Kratie is a province located in the northeast of Cambodia, with the Mekong River running across the province for approximately 140km. This river is the home of Irrawaddy dolphins, fish, and birds. It will take about 30 minutes from Kratie town to Kapi, where we will spot the Mekong Wagtail and the Irrawaddy Dolphins. We spent about 2 or 3 hours on the boat observing that the Mekong Wagtail usually feeds on small islands in the Mekong River. The main target birds on the Mekong River are: Mekong Wagtail, Small Pratincole, Grey-throated Martin, Golden-bellied Gerygone, Indian spot-billed duck, Yellow-bellied Prinia, and Dusky Warbler. On the way back to the mainland, we will sometimes see Irrawaddy dolphins show up near our boat. After spending a full morning at Krate, we will continue moving to Koe Seima Wildlife Sanctuary, a highland town surrounded by rolling forests, where we will travel to Jahoo Gibbon Camp for an overnight. Jahoo Gibbon is a community-based eco-project inside Keo Seima Wildlife Sanctuary. We will arrive over there around 3:30 PM and then check into the accommodation and leave the forest for bird watching with a local guide and your bird guide. We will be looking for special species such as: Greater Hornbills, Blue-eared Barbets, Blue-winged leafbirds, Gray-faced bulbuls, Yellow-billed Warbler, Bar-bellied Pitta, Siamese fireback, Green Peafowl, and Germain's peacock-pheasant. moving quietly at the forest edge. another forest trek through bamboo thickets and streamside trails, searching for woodpeckers, kingfishers, and smaller passerines. As evening falls, you enjoy a Bunong dinner and, if conditions allow, a short night walk to listen for Collared Scops-Owl and Large-tailed Nightjar.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 14 Full day birding at Jahoo Gibbon Camp</h3>
              <p className="text-muted-foreground">
                A four-day, three-night birdwatching adventure through Jahoo in Keo Seima Wildlife Sanctuary and the Dak Dam Highlands of Mondulkiri offers travelers one of the most immersive experiences in Cambodia's eastern forests, combining rare bird sightings, wildlife encounters, and deep connections with the indigenous Bunong community. The journey usually begins in Sen Monorom, a tranquil town nestled amid rolling hills, from where visitors transfer to Jahoo Gibbon Camp, a rustic yet comfortable bamboo eco-camp set at the forest edge. Jahoo is not only a conservation hub but also a model of community-based ecotourism, where the Bunong guides lead treks into evergreen and mixed deciduous forest to search for elusive species that are difficult to see elsewhere. At dawn, the forest awakens with the echoing calls of the southern yellow-cheeked crested gibbon, and birdwatchers rise early to catch the magical chorus alongside the wing beats of Greater Hornbills overhead. Jahoo is also known for sightings of Green Peafowl, a species that once roamed widely in Southeast Asia but now survives in protected areas like Keo Seima.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 15 Jahoo Gibbon Camp to Sean Monrom City</h3>
              <p className="text-muted-foreground">
                Before sunrise to experience Jahoo's dawn chorus. The haunting calls of the Yellow-cheeked gibbon and Black-shanked douc echo across the forest, and are joined by birdlife such as Orange-breasted Trogon, Red-headed Trogon, Banded Kingfisher, Flycatchers, Warblers, Barbets, and feeding flocks of broadbills. After breakfast, a final exploration of the riverine forest may reveal sunbirds, flowerpeckers, and kingfishers. Returning to camp late afternoon to have lunch. At 2:30 PM, we will move from Jahoo for birding near Jahoo Camp to look at the Green Peafowl. After lunch, we move to Sean Monorom to check into our Accommodation and leave for Dak Dam for birding. Dak Dam is a highland plateau close to the Vietnamese border, where the climate is cooler, the forests denser, and the avian community distinct. Dak Dam is one of Cambodia's premier birding hotspots, harboring species adapted to montane and hill evergreen habitats. Arriving in the late afternoon, we will explore trails looking for White-cheeked Laughingthrush, Orange-breasted laughingthrush, Silver-eared Mesia, which are moving noisily in flocks, Indochinese Barbet perched on fruiting trees, or woodpeckers drumming high above the canopy. we will be birding until dark and then head to the city dinner and the night.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 16 Full Day to Sean Monrom City – Dak Dam</h3>
              <p className="text-muted-foreground">
                Today is dedicated entirely to exploring the diverse habitats of Dak Dam. After a pre-dawn wake-up call, we will trek into the misty highland forest, where birding can be superb. The early hours often bring encounters with mixed flocks of minivets, Bulbul, shrikes, yuhinas, and Mesia, Maroon Oriole. White-cheeked Laughingthrush, Orange-breasted laughingthrush, which move in feeding waves through the canopy. Keen birders hope for rarities such as Pale-capped Pigeon or the elusive Blue Pitta, while the undergrowth hides species like Germain's peacock-pheasant. As you ascend gentle slopes, you may encounter open clearings where raptors such as the Crested Serpent-Eagle or Black Eagle soar. By late morning, you pause for breakfast near the spot for bird watching, where smaller species like Sunbirds and Flowerpeckers are often active. In the afternoon, after we have lunch in the hotel, you will explore the Dak Dam for new trails leading deeper into the forest. We will birding until dark, heading back to the City for dinner and the night.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 17: Sean Monorom to the Cambodian Tailorbird and the Pursat Grassland</h3>
              <p className="text-muted-foreground">
                After spending a full morning at Sean Monorom, we will continue moving to Pursat and stopping near Phnom City for the Cambodian Tailorbird along the way to Phnom Penh City. The Cambodian Tailorbird, which is a new endemic species that was found in Cambodia in the year 2009, in the outskirts of Phnom Penh city, during avian influenza checks. And then continue to Pursat Grassland for the Chinese Grassbird and other wetland birds. It will be night in Pursat city.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 18: Pursat to Phnom Penh</h3>
              <p className="text-muted-foreground">
                On our final morning of birding in Cambodia, we will wake up very early to bring breakfast in the field in the Pursat grasslands. Locals in this area are part of a new conservation project to protect the grasslands and their key species, which are the Chinese Grassbird and Yellow-breasted Bunting. This poorly-known and cryptic species has a very patchy and thinly-spread distribution throughout Asia, having been wiped out because of habitat loss in many places. A population was discovered near Pursat a few years ago, and by being out in the right habitat in the early morning, we have an excellent chance of observing at least one Chinese Grassbird. In addition, we have a chance of finding small groups of critically endangered species, the Yellow-breasted Bunting. These grasslands provide an important wintering habitat and, as such, they add another dimension to the importance of conservation here. We also have another chance to see as well as other key species such as Manchurian Reed Warbler, Asian Golden Weavers, which should be performing a pre-migration song by now. Striated Grassbird, Oriental Pratincole, Red Avadavat, and the stunning Pied Harrier are also likely here. After lunch, we will begin to drive back towards the capital city, Phnom Penh, with one final star species to look for along the way again. The Cambodian Tailorbird is not uncommon in the right habitat, and there will be several places for us to stop to see it before we get to our hotel in Phnom Penh city. For overnight in Phnom Penh.
              </p>

              <h3 className="text-green-600 font-semibold text-lg">Day 19: Phnom Penh City Tours and Transfer to Phnom Penh Airport</h3>
              <p className="text-muted-foreground">
                The next day, we will transfer to Phnom Penh Airport or a hotel for departure, where we will bid each other goodbye.
              </p>
            </div>

            <div className="mt-6 p-6 bg-muted/50 rounded-lg space-y-4">
              <h3 className="text-green-600 font-semibold text-lg">Tour Details</h3>
              
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  <strong>Tour Cost:</strong> 7250$ per person
                </p>
                <p className="text-muted-foreground">
                  <strong>Single Supplement:</strong> 450$ (Note: single accommodation is available at Siem Reap, Kratei, and Phnom Penh. However, it will probably not be available at Be Treed Adventure, Tmat Boey, and Jahoo Gibbon Camp.)
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Included in the tour cost:</h4>
                <p className="text-muted-foreground">
                  All transport including airport transfers, road tolls, national park and all reserve entry fees, all accommodation in Cambodia, including on the final night of the tour, all meals from dinner on the first night to breakfast on the day of departure, bottled drinking water, boat trips, services of English-speaking birding guide and Temple Tours guide.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Not included in the tour cost:</h4>
                <p className="text-muted-foreground">
                  International flights, travel insurance, entry visa, alcoholic and soft drinks, tips, laundry, hotel mini bar, phone calls, and any other items of a personal nature.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Accommodation:</h4>
                <p className="text-muted-foreground">
                  In Siem Reap, we stay in a very comfortable hotel with air-conditioning, private bathroom/shower, and wifi. At several sites, our stay at Thmat Boey and BeTreed Adventure, Jahoo Gibbon Camp will be in a local eco lodge that has simple private shower/toilet facilities with fans in the rooms. At Kratei, we stay in comfortable, air-conditioned local hotels where wifi is available. Finally, we stay in a hotel in the city of Phnom Penh, where all facilities are available.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Physical effort:</h4>
                <p className="text-muted-foreground">
                  This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 2-5 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Weather:</h4>
                <p className="text-muted-foreground">
                  Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Food:</h4>
                <p className="text-muted-foreground">
                  Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence is evident in the fact that good bread is readily available in many areas, and for those who prefer beer, there is a surprisingly wide range of local brews to try.
                </p>
                
                <h4 className="text-green-600 font-semibold mt-4">Note:</h4>
                <p className="text-muted-foreground">
                  Other things to bring: hat, sunglasses, sunscreen, insect repellent, and binoculars.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>;
  }

  // Special handling for Ang Trapaeng Thmor tour (ID 4)
  if (tour.id === 4) {
    return <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              {tour.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Tour Image */}
            <div className="aspect-video overflow-hidden rounded-lg relative">
              <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
            </div>

            {/* Introduction */}
            <div className="space-y-4">
              
              
              

              <p className="text-muted-foreground leading-relaxed">
                This wetland was created as a reservoir during the Angkorian period, but Ang Trapaeng Thmor was rebuilt during the terrible Khmer Rouge regime in 1976. The Wildlife Conservation Society now manages this area as a reserve to protect, in particular, Sarus Cranes. Over three hundred of these fantastic cranes flock to this area, but there is much more to see here besides.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Visiting this site gives us another chance to see many of the key birds from the previous day, as well as providing excellent views of good numbers of Sarus Cranes. Birdwatchers visiting this site make a significant contribution to conservation in Cambodia and the persistence of Sarus Cranes in the area. There are many Raptors, Greater Spotted Eagle, Roofed-winged Buzzard, Black-winged Kite flying and feeding over here too, but it is very shy, and we have a better chance to see these birds on the following day.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Other birds we can see in the dry grassland here include Small and Blue-breasted Quail, Oriental Skylark, Indochinese Bushlark, and Singing Bushlark, Amor Stonechat, Pied Bush Chat, Richard's Pipit, Paddyfield Pipit, and numerous Red-throated Pipits are easy to see here, with Plain Prinia, Yellow-bellied Prinia, Oriental Reed Warbler, and Red Avadavat all likely to perform for us. The variety of habitats that include everything from wetlands to scattered woodland gives us a chance to see a handful of species in a single day.
              </p>

              <p className="text-muted-foreground leading-relaxed">Visiting Ang Trapaeng Thmor, as well as Prek Toal, means that we can enjoy our first few days birding at a relaxed pace and see a large proportion of the species that inhabit these habitats, rather than rushing around. This location is also one of the few places remaining where truly wild Eld's Deer still exist, a critically endangered species which is important in maintaining this landscape. The high season for birdwatching in Cambodia starts from November to April (Peak: Jan-Feb-Mar), when water levels are low, Sarus Cranes return to Ang Trapeang Thmor. That's the best time slot for birding and bird photography in Cambodia. We recommend tours starting from January to the end of April. This plan combines Cambodia's most important birding sites with conservation-based tourism, maximizing your chances of seeing all your target species. </p>

              <p className="text-muted-foreground leading-relaxed">​



































































            </p>
            </div>

            {/* Tour Overview */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-primary">
                <Star className="w-5 h-5 text-nature-forest" />
                Tour Overview
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Begin your day with a 5:30 AM pickup from your hotel in Siem Reap. Head to Ang Trapaeng Thmor, a wetland created as a reservoir during the Angkorian period and rebuilt during the Khmer Rouge regime in 1976. Today, it's managed by the Wildlife Conservation Society as a reserve to protect Sarus Cranes and other wildlife.
              </p>
            </div>

            {/* Daily Schedule */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5 text-nature-forest" />
                Full Day Bird Watching at Ang Trapaeng Thmor
              </h3>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <p className="text-sm text-muted-foreground"><strong>5:30 AM</strong> – Pick up from the hotel & transfer to Ang Trapaeng Thmor (breakfast packed from Siem Reap).</p>
                <p className="text-sm text-muted-foreground"><strong>8:30 AM</strong> – Arrive at Reservoir & meet ranger (we will make a few birding stops on the way to the Feeding site of Sarus Crane and have breakfast).</p>
                <p className="text-sm text-muted-foreground"><strong>8:45 AM</strong> – Start birding around Ang Trapaeng Thmor till 11:30 AM. Observe Sarus Cranes, various water birds, and raptors including Greater Spotted Eagle, Roofed-winged Buzzard, and Black-winged Kite.</p>
                <p className="text-sm text-muted-foreground"><strong>12:00 PM</strong> – Have lunch in a restaurant.</p>
                <p className="text-sm text-muted-foreground"><strong>2:00 PM</strong> – Continue bird watching near the reservoir. Look for grassland species like Small and Blue-breasted Quail, Oriental Skylark, Indochinese Bushlark, Singing Bushlark, Amor Stonechat, Pied Bush Chat, Richard's Pipit, Paddyfield Pipit, Red-throated Pipits, Plain Prinia, Yellow-bellied Prinia, Oriental Reed Warbler, and Red Avadavat.</p>
                <p className="text-sm text-muted-foreground"><strong>4:00 PM</strong> – Arrive back at Siem Reap hotel.</p>
              </div>
            </div>

            {/* Bird Species Highlights */}
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-primary">
                <Camera className="w-5 h-5 text-nature-forest" />
                Bird Species You May Encounter
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Sarus Crane</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Black-crowned Night Heron</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Spotted Wood Owl</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Barn Owl</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Spotted Owlet</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Yellow Bittern</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Scarlet-backed Flowerpecker</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Asian Koel</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Cinnamon Bittern</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Black Bittern</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Watercock</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Cotton Pygmy-goose</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Knob-billed (Comb) Duck</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Bronze-winged Jacana</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Pheasant-tailed Jacana</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Black Kite</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Eastern Marsh Harrier</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Pied Harrier</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Dark-necked Tailorbird</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Yellow-vented Bulbul</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Plain-backed Sparrow</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Black-collared Starling</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Lanceolated Warbler</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Black-headed Ibis</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Painted Stork</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Spot-billed Pelican</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Oriental Darter</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                  <span>Asian Openbill</span>
                </div>
              </div>
            </div>

            {/* Tour Details */}
            <div className="p-6 bg-muted/50 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg text-primary">Tour Details</h3>
              
              <div className="space-y-3">
                <p className="text-sm">
                  <strong className="text-nature-forest">Tour Cost:</strong> <span className="text-lg font-semibold text-primary">$350 for two people</span>
                </p>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-green-600" />
                    Included in the tour cost:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    All transport including airport transfers, road tolls, national park and all reserve entry fees, all meals from Lunch and Breakfast on the first night to breakfast on the day of departure, bottled drinking water, boat trips, services of English-speaking birding guide and Temple Tours guide.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    Not included in the tour cost:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    International flights, travel insurance, entry visa, alcoholic and soft drinks, tips, laundry, hotel mini bar, phone calls, and any other items of a personal nature.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Physical effort:</h4>
                  <p className="text-sm text-muted-foreground">
                    This trip does not require any great physical effort in terms of long uphill hikes, but does require that participants are fit enough to walk, sometimes for 2 kilometres in hot conditions. The walking is mostly on a flat landscape, but some walking on even ground is needed to search for some key species. The physical effort required is well within the capabilities of most healthy people with the ability to deal with tropical climates.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Weather:</h4>
                  <p className="text-sm text-muted-foreground">
                    Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Food:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Note:</h4>
                  <p className="text-sm text-muted-foreground">
                    Other things to bring: hat, sunglasses, sunscreen, insect repellent, and binoculars.
                  </p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-4 border-t">
              <Button size="lg" className="w-full" variant="nature" onClick={() => {
              const message = `Bonjour, je suis intéressé par le tour: ${tour.title} - $350 for two people`;
              const whatsappUrl = `https://wa.me/855969586510?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}>
                Book Now via WhatsApp - $350 for two people
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>;
  }
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">
            {tour.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Tour Image */}
          <div className="aspect-video overflow-hidden rounded-lg relative">
            <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
          </div>

          {/* Tour Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-nature-forest" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-semibold">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-nature-forest" />
              <div>
                <p className="text-xs text-muted-foreground">Group Size</p>
                <p className="text-sm font-semibold">{tour.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-nature-forest" />
              <div>
                <p className="text-xs text-muted-foreground">Difficulty</p>
                <p className="text-sm font-semibold">{tour.difficulty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-nature-forest fill-nature-forest" />
              <div>
                <p className="text-xs text-muted-foreground">Rating</p>
                <p className="text-sm font-semibold">{tour.rating}/5</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Best Season */}
          {tour.bestSeason && <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-green-600" />
                Best Season
              </h4>
              <p className="text-sm text-muted-foreground">{tour.bestSeason}</p>
            </div>}

          {/* Schedule */}
          {tour.schedule && <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5 text-nature-forest" />
                Itinerary
              </h3>
              <div className="space-y-3">
                {Object.entries(tour.schedule).map(([time, activity]) => <div key={time} className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-semibold text-primary mb-1">{time}</p>
                    <p className="text-sm text-muted-foreground">{activity}</p>
                  </div>)}
              </div>
            </div>}

          {/* Bird Species */}
          {tour.birdSpecies && tour.birdSpecies.length > 0 && <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Bird Species You May Encounter</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                {tour.birdSpecies.map((species, index) => <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-nature-forest rounded-full mt-2" />
                    <span>{species}</span>
                  </div>)}
              </div>
            </div>}

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tour.highlights.map((highlight, index) => <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-nature-forest rounded-full" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>)}
              </div>
            </div>}

          {/* Tour Details */}
          <div className="p-6 bg-muted/50 rounded-lg space-y-4">
            <h3 className="font-semibold text-lg text-primary">Tour Details</h3>
            
            <div className="space-y-3">
              <p className="text-sm">
                <strong className="text-nature-forest">Tour Cost:</strong> <span className="text-lg font-semibold text-primary">{tour.price}</span>
              </p>
              
              {tour.included && <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-green-600" />
                    Included in the tour cost:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tour.included.map((item, index) => <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>}
              
              {tour.notIncluded && <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    Not included in the tour cost:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tour.notIncluded.map((item, index) => <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>}

              {tour.accommodation && <div>
                  <h4 className="font-semibold text-sm mb-2">Accommodation:</h4>
                  <p className="text-sm text-muted-foreground">{tour.accommodation}</p>
                </div>}
              
              {tour.physicalEffort && <div>
                  <h4 className="font-semibold text-sm mb-2">Physical effort:</h4>
                  <p className="text-sm text-muted-foreground">{tour.physicalEffort}</p>
                </div>}
              
              {tour.weather && <div>
                  <h4 className="font-semibold text-sm mb-2">Weather:</h4>
                  <p className="text-sm text-muted-foreground">{tour.weather}</p>
                </div>}
              
              {tour.food && <div>
                  <h4 className="font-semibold text-sm mb-2">Food:</h4>
                  <p className="text-sm text-muted-foreground">{tour.food}</p>
                </div>}
              
              {tour.thingsToBring && <div>
                  <h4 className="font-semibold text-sm mb-2">Note:</h4>
                  <p className="text-sm text-muted-foreground">{tour.thingsToBring}</p>
                </div>}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="pt-4 border-t">
            <Button size="lg" className="w-full" variant="nature" onClick={() => {
            const message = `Bonjour, je suis intéressé par le tour: ${tour.title} - ${tour.price}`;
            const whatsappUrl = `https://wa.me/855969586510?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}>
              Book Now via WhatsApp - {tour.price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default TourDetailsPopup;