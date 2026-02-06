import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin, Bird } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlights = [
  "Giant Ibis",
  "White-shoulder Ibis",
  "Cambodian Tailorbird",
  "Red-headed Vulture",
  "White-rumped Vulture",
  "Slender-billed Vulture",
  "Milky Stork",
  "Greater Adjutant",
  "Lesser Adjutant",
  "Sarus Crane",
  "Asian Golden Weaver",
  "White-rumped Falcon",
  "Black-headed Woodpecker",
  "Yellow-bellied Woodpecker",
  "Yellow-crowned Woodpecker",
  "Brown Boobook",
  "Spotted Wood-Owl",
  "Brown Wood-Owl",
  "Brown Fish-Owl",
  "Oriental Scops Owl",
  "Mekong Wagtail",
  "Forest Wagtail",
  "Rufous Rumped Grass-Babbler",
];

const TripReportWildCambodia = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
            Trip Report
          </Badge>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">
            Wild Cambodia and Pursat
          </h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-forest" />
              <span>12th Feb – 22nd Feb 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-nature-forest" />
              <span>Lance Edward Allin, Canada</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-nature-forest" />
            <span className="text-sm">Angkor Wat, Prek Toal, Ang Trapeang Thmor, Prey Veng, Tmatboey, Boeung Toal, Kratie, Pursat</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-justify">
              Wild Cambodia and Pursat 11-day trip include a number of birding sites around Cambodia. The sites were including Angkor Wat, Prek Toal Bird Sanctuary, Ang Trapeang Thmor Landscape Protected Area, Bengal Florican Grassland, Prey Veng White Winged Duck rooting Tree, Tmat Boey Ibis Site, Boeng Toal Vulture Restaurant, Kratie, Cambodia Tailorbird site, and Pursat Grassland.
            </p>
            <p className="text-justify">
              We started our tour from Siem Reap at one of the most beautiful places in Cambodia called Angkor Wat temple, a world heritage site with our target's bird species like White-throated Rock-thrush, Blue Rock-thrush, Hainan Blue Flycatcher, Forest Wagtail, Alexandrine Parakeet, Red-breasted Parakeet, and Asian barred Owlet.
            </p>
            <p className="text-justify">
              Prek Toal is a large waterbird breeding colony known as the Ramsar site since 2015 called the "Wetland Protected Area" in Battambang province. It is a popular area for ecotourism and birdwatching with the rarest birds in our target's species such as Milky Stork, Greater Adjutant, Lesser Adjutant, Painted Stork, Black-headed Ibis, Asian Openbill, Grey-headed Fish-eagle, Oriental Darter, Cormorants, and Spot-billed Pelican.
            </p>
            <p className="text-justify">
              Ang Trapeang Thmor is a protected area established in 1999 after Mr. Samveasna found the tallest bird in the world can fly called the "Sarus Crane" between 1997 and 1998. A unique wetland ecosystem gives home to over 200 species of birds living and feeding there with target birds such as Grey-headed Swamphen, Bronze-winged Jacana, Pheasant-tailed Jacana, Cotton Pygmy Goose, Garganey, Greater spotted Eagle, Barn Owl, Spotted Wooded Owl, and Sarus Crane.
            </p>
            <p className="text-justify">
              Bengal Florican Grassland is seasonally inundated outer-floodplain grassland with some small areas of scrub with our targets such as Bengal Florican, Eastern Marsh-Harrier, Yellow-breasted Bunting, Indochinese Bushlark, Oriental Skylark, Bluethroat, Oriental Pratincole, Pied Harrier, Painted Stork, and Sarus Crane.
            </p>
            <p className="text-justify">
              Prey Veng ecolodge is a small remote village in a deep forest of Kulen Promteb Wildlife Sanctuary. A small community eco-lodge on the bank of the Angkorian Baray reservoir that can support a human and birds who live there during the rainy season. Prey Veng is home to endangered and critically endangered bird species such as the Giant Ibis and Sarus Crane, Black-headed Woodpecker, Rufous-bellied Woodpecker, Great Slaty Woodpecker, Rufous-winged Buzzard, and Burmese Nuthatch, and Osprey.
            </p>
            <p className="text-justify">
              Tmat Boey is the home of two critically endangered species that was located in the Northern Plain of Cambodia, so, the priority bird is Giant Ibis and White-shouldered Ibis. Other species such as Yellow-crowned Woodpeckers, Rufous-bellied Woodpeckers, Black-headed Woodpeckers, Oriental Scops Owl, Brown Boobook, and Brown Fish-owl.
            </p>
            <p className="text-justify">
              Boeng Toal Vulture Restaurant is a feeding program set up by the Cambodian government and conservation NGOs, to help sustain 3 critically endangered species of Vulture located in Preah Vihear Wildlife Sanctuary. The main target birds are Red-headed Vultures, Slender-billed Vultures, White-rumped Vultures, White-rumped Falcon, Brown wooded owls, and woodpeckers' family.
            </p>
            <p className="text-justify">
              Kratie is a province located in the northeast of Cambodia that has the Mekong River running across the province about 140km. This river is the home of Irrawaddy dolphins, fish, and birds. The marshland and wetland outskirts of the Kratie province which a good place for a bird watcher with many species of birds like the Asian Golden Weaver, Grey-headed Swamphen, Golden-headed Cisticola, Golden-bellied Gerygone, and Oriental Reed Warbler.
            </p>
            <p className="text-justify">
              Pursat is the 4th largest province located in the west of Cambodia staying on national road #5. A part of this province called "Bakan district" near the Tonle sap lake has a huge grassland area that is home to Rufous rumped Grass-babbler, Yellow-breasted Bunting, Striated Grassbirds, and Rubythroat.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <Bird className="w-8 h-8 text-nature-forest" />
            Birds Highlight of the Tour
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {highlights.map((bird, index) => (
              <Card key={index} className="bg-white/80">
                <CardContent className="p-3 sm:p-4">
                  <span className="text-nature-forest font-semibold mr-2">{index + 1}.</span>
                  <span className="text-sm sm:text-base text-foreground">{bird}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Itinerary */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
            Daily Itinerary
          </h2>
          
          {/* Day 1 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 1</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Angkor Wat Temple</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                On the first day of the tour, we started at 5:30 am for sunrise in front of Angkor Wat temple to hunt the beauty of Angkor Wat sunrise, then we had breakfast at a local table in front of the temple. When we finished breakfast, we walked directly to the forest to observe the birds for about an hour. We have seen a lot of birds such as the Asian barred Owlet, Hainan Blue Flycatcher, Taiga Flycatcher, Black napped Monarch, Grey-headed Canary Flycatcher, Oriental pied Hornbill, and Greater Racket-tailed Drongo.
              </p>
              <p className="text-justify">
                Then we skipped our birding tour for a little while and went to see the main Angkor Wat temple. We spent around two hours seeing a briefing detailed in the Angkor wat temple. After we finished the temple tour, we went back to the forest to find our target birds that we did not see it. Finally, we have seen our last two target birds called White-throated Rock-thrush and Forest Wagtail on the way out of the temple.
              </p>
              <p className="text-justify">
                After finishing Angkor Wat temple, we had a break for lunch at Srah Srong for an hour. Ta Prohm temple is the next place that was built in the late 12th century for Buddhism religious during that time and also the only place for us looking for the Alexandrine Parakeet, and Red-breasted Parakeet. Our last place was known as Angkor Thom city, we went there for the main temple called Bayon temple or faces temple.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Ta Prohm Temple – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Red-breasted Parakeet – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 2</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Prek Toal Bird Sanctuary</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Prek Toal is a unique place for all the bird watchers who feel so excited to see the birds over there. Besides birds, is the daily life of local people who live on the water around Tonle Sap Lake. So, our tour started from Siem Reap hotel at 5:30 am with a 4-wheel drive to the boat ferry dot at Mechrey Village.
              </p>
              <p className="text-justify">
                Along the way, we passed through Mechrey's floating village and saw the floating house of the people who lived there. Our boat was stopped at the MOE (Ministry of Environment) building and then we were swapped from a wooden boat to a long-tail boat then continue our trip till we reached the platform that was built on the tree top.
              </p>
              <p className="text-justify">
                We did see many birds along the river like Grey-headed Fish-eagle, Painted Storks, Common Kingfishers, White-throated Kingfishers, Egrets family, Plaintive Cuckoos, Spot-billed Pelicans, Lesser Adjutant, Greater Adjutant, Milky Storks, Asian Openbill, and another diving birds like Oriental Darters, and cormorants.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Boat trip to Prek Toal – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Spot-billed Pelicans – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 3</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Ang Trapeang Thmor (ATT)</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                On the 3rd day of the tour, we went to visit Ang Trapeang Thmor, located in Banteay Meanchrey province. We left our hotel at 5:30 am and traveled on national road #6 to the northwest of Cambodia for around 2 hours. Ang Trapeang Thmor is a good place for bird watchers and also the largest reservoir that was built in the year 1975 – 1979 during Khmer Rough time.
              </p>
              <p className="text-justify">
                We had seen many birds like Garganeys, Cotton-pygmy Goose, Tufted Duck, Ferruginous Duck, Lesser Whistling Ducks, and Cormorants. Then we continue our trip going to another place to explore more birds such as Sarus Crane (We walked about 2 km to see these birds around 40 Sarus Crane we seen), and accidentally saw Common Crane, Spotted Wood Owl, Barn Own, Black-crowned Night-heron, Greater Spotted Eagles, and harriers.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Walking in the field – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Looking, Sarus Crane – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 4</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Bengal Florican Grassland and Prey Veng Ecolodge</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We left our hotel in Siem Reap at 5:30 am to Bengal Florican Grassland on national road #6 to the east of Cambodia. It seems so lucky at that time because just parked our car then we saw 2 Bengal Floricans flying around our parking area. We did move around to see more birds like the Asian green Bee-eater, Oriental Skylark, Indochinese Bushlark, Oriental Pratincole, Siamese Pied Starling, Indian Pied Starling, Painted Storks, and a bunch of Yellow-breasted Bunting.
              </p>
              <p className="text-justify">
                After finishing our bird-watching there, we continued our trip to Prey Veng ecolodge. We arrived at the ecolodge at 2:30 pm and met a community of people there like a local guide, cooker, and security guide to make us feel like 5-star accommodation in the deep forest.
              </p>
            </div>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 5</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Prey Veng Ecolodge</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                In the morning after breakfast, we did a big tour walking around the reservoir to observe the birds. We had seen many birds like the Sarus Crane, Osprey, Golden-fronted Leafbird, Oriental Honey Buzzard, Large Cuckooshrike, and woodpecker species like the Common and Greater Flameback, Great Slaty Woodpecker, and Burmese Nuthatch.
              </p>
              <p className="text-justify">
                In the afternoon around 3:30 pm, we went out from the ecolodge for a White-winged Duck rooting tree. We had seen many birds like a Crested Serpent Eagle, Eurasian Kestrel, Rufescent Prinia, Brown Prinia. We stayed in the hide to observe White-winged Duck till a quarter past seven, and on the way back, we have seen Large-tailed Nightjar.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Sarus Crane – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>White-winged Duck hide – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 6</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Prey Veng and Tmatboey Ecolodge</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                In the morning at 5:30 am, we left the ecolodge at Prey Veng and try to find Giant Ibis at the feeding area but we did not see it. Then we try to find other species such as a White-rumped Falcon and Collard Falconet.
              </p>
              <p className="text-justify">
                We did arrive at Tmatboey ecolodge at 2:15 pm, met a local guide Mr. Ry and then get a small rest. At 3:00 pm, we went to the White-shouldered Ibis rooting tree. We stayed there for more than 3 hours and saw some birds like the Olive-backed Pipit, Doves, Drongos, and Common Iora. White-shouldered Ibis did not show till 6:45 pm before the darkness come a little bit. But anyways, we did see 2 White-shouldered Ibis at the end of the day.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Waiting at rooting tree – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 7</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Tmat Boey Ecolodge</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Early in the morning at 5:15 am, we packed our breakfast for the Giant Ibis nesting tree. But we did not see them at the nesting tree means their adult chick can fly, so, they move their rooting tree at that time. Luckily, we heard Giant Ibis calling nearby then we move quickly to see the birds follow its sound call. It was about 500 m away from the Giant Ibis nesting tree. Yes! We saw it, two Giant Ibis on the rooting tree about 5 mn then it moved again.
              </p>
              <p className="text-justify">
                We started our tour again at 3:30 pm and went to the Phnom Raeng area looking for target birds such as Rufous-bellied Woodpeckers, Black-headed Woodpeckers, Yellow-crowned Woodpeckers, Great Slaty Woodpeckers, and Savanna Nightjar. We saw it clearly when it flew near us. Then we walked back to the car park around 6:30 pm, on the way we looked for Oriental Scops Owl. We saw it near the car park as well.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Savanna Nightjar – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 8 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 8</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Tmatboey Ecolodge and Boeng Toal Vulture Restaurant</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We had breakfast at Ecolodge at 6:00 am, and then we went to the main-mad pound looking for White-rumped Falcon. We arrived at our birding site at 7:00 am and found a female bird of White-rumped Falcon. We went back to the ecolodge and walked around the lodge to find Brown Boobook, finally we saw the bird perched on the tree branch that stayed behind the lodge.
              </p>
              <p className="text-justify">
                We left the Tmatboey ecolodge at 11:00 am, going to Boeng Toal Vulture Restaurant. We did arrive at our base camp in the forest at 3:00 pm. At 3:30 pm, we walked to see Brown Wood Owl on the rooting tree. We stayed in the hide till 6:30 pm, we did not see the vulture landing and feeding the carcass, we just saw their perch on the tree. But we had seen 4 species of vultures, 2 Red-headed Vultures, 9 Slender-billed Vultures, 11 White-rumped Vultures, and a Himalayan Griffon.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Tent at Dong Phlet – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Vultures – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 9 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 9</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Vulture Restaurant and Kratie Province</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Early in the morning at 5:00 am, we walked to the hide before sunrise and stayed there quiet till 9:00 am, because we wanted to see the vultures feeding at the carcass. We left from Boeng Toal at 10:00 am to Kratie via Stoeng Treng Province.
              </p>
              <p className="text-justify">
                We reached the town at 3:00 pm, check-in at the hotel then left for the marshland area that stayed outside of the town. We did bird watch there till 6:00 pm looking for Asian Golden Weaver, Red-throated Pipit, Golden-headed Cisticola, and Grey-headed Swamphen.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Dong Phlet Community – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Kratie Marshland – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 10 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 10</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Kratie to Pursat Province</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We started our trip at 7:15 am, after breakfast for a boat ride at the Mekong River near Prek Kampi Looking for a Mekong Wagtail, Grey-throated Marten, Small Pratincole, and other species available over there. Such a great day, just left the bank about 5 mn then we saw 2 Mekong Wagtail, were feeding on the rock in front of us. We spent 50 mn more for the freshwater Irrawaddy Dolphin before we returned back to the river bank.
              </p>
              <p className="text-justify">
                After lunch, we are trying to find the Cambodian Tailorbird, a new endemic species that was found in Cambodia in the year 2009 outskirts of Phnom Penh city. Successfully we saw 2 endemic Cambodian Tailorbirds in a close view hopping around the bush about 2 meters from us. Then we continued our trip to Pursat province and arrived at our hotel at 4:45 pm.
              </p>
            </div>
          </div>

          {/* Day 11 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 11</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Pursat and Phnom Penh City</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Early in the morning at 5:15 am, we left the hotel to go to the Rufous-rumped Grass-babbler site. We stayed there for about 3 hours to observe the birds. We saw 2 Rufous-rumped Grass-babbler and other species. But we tried to explore the site, we saw a mist net (Birds Trap) that was set up by a villager to catch birds. On the mist net, we saw a dead Rubythroat, Striated Grassbird, Bee-eater, and also a Rufous-rumped Grass-babbler stuck in the net. Our client and I destroyed the net and burned it before we returned back to the hotel.
              </p>
              <p className="text-justify">
                We had a bit late breakfast, then back to the room to collect our stuff and check out from the hotel and go to Phnom Penh city. We did arrive in Phnom Penh city and checked in at the hotel at 1:30 pm.
              </p>
              <p className="font-semibold text-primary mt-4">Tour End!</p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Bayon Temple – Image coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bird Checklist */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <Bird className="w-8 h-8 text-nature-forest" />
            Bird Checklist (230 Species)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="birds">
              <AccordionTrigger className="text-lg font-semibold">View Complete Bird Checklist</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>Lesser Whistling-Duck</div>
                  <div>Knob-billed Duck</div>
                  <div>Cotton Pygmy-Goose</div>
                  <div>Garganey</div>
                  <div>Indian Spot-billed Duck</div>
                  <div>Ferruginous Duck</div>
                  <div>Tufted Duck</div>
                  <div>Green Peafowl</div>
                  <div>Little Grebe</div>
                  <div>Bengal Florican</div>
                  <div>Sarus Crane</div>
                  <div>Common Crane</div>
                  <div>Giant Ibis</div>
                  <div>White-shouldered Ibis</div>
                  <div>Milky Stork</div>
                  <div>Greater Adjutant</div>
                  <div>Lesser Adjutant</div>
                  <div>Painted Stork</div>
                  <div>Oriental Darter</div>
                  <div>Spot-billed Pelican</div>
                  <div>Red-headed Vulture</div>
                  <div>White-rumped Vulture</div>
                  <div>Slender-billed Vulture</div>
                  <div>Grey-headed Fish-Eagle</div>
                  <div>White-rumped Falcon</div>
                  <div>Oriental Scops-Owl</div>
                  <div>Brown Fish-Owl</div>
                  <div>Spotted Wood-Owl</div>
                  <div>Brown Wood-Owl</div>
                  <div>Brown Boobook</div>
                  <div>Black-headed Woodpecker</div>
                  <div>Yellow-crowned Woodpecker</div>
                  <div>Great Slaty Woodpecker</div>
                  <div>Cambodian Tailorbird</div>
                  <div>Mekong Wagtail</div>
                  <div>Forest Wagtail</div>
                  <div>Rufous-rumped Grass-Babbler</div>
                  <div>Asian Golden Weaver</div>
                  <div>Yellow-breasted Bunting</div>
                  <div className="col-span-full text-center mt-4 text-nature-forest font-medium">
                    ... and 190+ more species recorded during this tour
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mammals">
              <AccordionTrigger className="text-lg font-semibold">Mammal List</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Long-tailed Macaque (Macaca fascicularis)</div>
                  <div>Cambodian Striped Squirrel (Tamiops rodolphii)</div>
                  <div>Variable Squirrel (Callosciurus finlaysonii)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default TripReportWildCambodia;
