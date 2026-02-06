import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin, Bird } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlights = [
  "Giant Ibis",
  "White-shoulder Ibis",
  "Bengal Florican",
  "Cambodian Tailorbird",
  "Milky Stork",
  "Greater Adjutant",
  "Lesser Adjutant",
  "Sarus Crane",
  "Asian Golden Weaver",
  "White-rumped Falcon",
  "Black-headed Woodpecker",
  "Great Slaty Woodpecker",
  "Yellow-crowned Woodpecker",
  "Brown Fish Owl",
  "Brown Wood Owl",
  "Oriental Scops Owl",
  "Mekong Wagtail",
];

const TripReportEssentialCambodia = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
            Trip Report
          </Badge>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">
            Essential Cambodia
          </h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-forest" />
              <span>25th January – 1st February 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-nature-forest" />
              <span>David Rudemeller, USA</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-nature-forest" />
            <span className="text-sm">Angkor Wat, Prek Toal, Ang Trapeang Thmor, Tmat Boey, Kompong Thom, Kratie, Phnom Penh</span>
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
              This is a great tour for me since I worked as a bird guide with Samveasna Conservation tours Company. I can say, the year 2023 will change my destiny. This is my huge experience since I work with SVC, I had a chance to lead an 8 days trip of Samveasna conservation tours to a variety places of birding sites around Cambodia.
            </p>
            <p className="text-justify">
              Sites included Angkor Wat historical park, Prek Toal bird sanctuary, Ang Trapeang Thmor landscape protected area, Bengal Florican Grassland, Tmat Boey Ibis site, Sambor Preikuk a new world heritage site at Kompong Thom, Kratie, and Cambodia Tailorbird site near Phnom Penh city.
            </p>
            <p className="text-justify">
              We started our tour in one of the famous world heritage sites in the world called Angkor Wat located in Siem Reap province with our target bird species like the White-throated Rock-Thrush, Forest Wagtail, Asian barred Owlet, Hainan Blue Flycatcher, Black-capped Kingfisher, Alexandrine Parakeet, and Red-breasted Parakeets.
            </p>
            <p className="text-justify">
              Prek Toal bird sanctuary is known as a large waterbird breeding colony located in Battambang province, and our target birds there such as Greater Adjutant, Lesser Adjutant, Milky Stork, Grey-headed Fish-eagle, Black-headed Ibis, Glossy Ibis, Oriental Darter, and Spot-billed Pelican.
            </p>
            <p className="text-justify">
              Ang Trapeang Thmor landscape protected area is the best place to see the birds such as Sarus Crane, Bronze-winged Jacana, Pheasant-tailed Jacana, Painted Stork, Greater Spotted Eagle, Garganey, Spotted Owlet, Barn Owl, and Grey-headed Swamphen.
            </p>
            <p className="text-justify">
              Tmat Boey is located in the Northern Plain of Cambodia and we are looking for Giant Ibis and White-shouldered Ibises, Brown Fish-owl, Oriental Scops Owl, Spotted Wood Owl, Black-headed Woodpecker, Rufous Bellied Woodpeckers, Yellow-crowned Woodpeckers.
            </p>
            <p className="text-justify">
              Kampong Thom is a new world heritage site that was registered with UNESCO in 2017 called Sambor Prei Kuk temple. After that, we continue our trip to Kratie for Mekong Wagtail, Asian Golden Weaver, Grey-headed Swamphen, Chestnut-capped Babbler, Golden-headed Cisticola, Oriental Reed Warbler, and Irrawaddy Dolphin. The Cambodian Tailorbird is the newly discovered described in 2013 and we will see them outskirts of Phnom Penh city.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <Bird className="w-8 h-8 text-nature-forest" />
            Bird Highlights of the Tour
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
                We went for sunrise at Angkor Wat and then had breakfast nearby the temple. After finishing breakfast, we went to see the birds in the forest around the temple. We are looking at our targets like White-throated Rock-thrush, Forest Wagtail, Hainan Blue Flycatcher, Grey-headed Canary Flycatcher, Greater Racket-tailed Drongo, and Asian Barred Owlet.
              </p>
              <p className="text-justify">
                Then we went to visit temple history after we got our targets birds, we had lunch around Srah Srong reservoir after finishing Angkor Wat temple. After lunch, we went to visit Ta Prohm temple with the history and looked for Alexandrine Parakeets and Red-breasted Parakeets. When we saw them all, we were continuing to visit our last temple called Angkor Thom city the main temple is Bayon temple or faces temple, built in the late 12th century and dedicated to Buddhism.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Angkor Wat Sunrise – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Forest Birding – Image coming soon</span>
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
                Prek Toal is one of the amazing trips that mostly we using the boat from the beginning till the end of the trip. We will start our boat trip from Mechrey-Siem Reap boat dock our schedule. We will spend around 1 hour half on a wooden boat, including breakfast along the way to Prek Toal floating village.
              </p>
              <p className="text-justify">
                We had a stop at The MOE building for the research station and then we swapped the boat from a wooden boat to a long tail boat to get our platform tower #49 to observe the birds. We spend our time there till our client feels enough with the landscape of the breeding colony birds with our target such as Greater Adjutant, Lesser Adjutant, Milky Stork, Grey-headed Fish-eagle, Peregrine Falcon, Painted Stork, Asian Openbill, Spot-billed Pelican, Black-headed Ibis, Glossy Ibis, Grey Heron, and other water species.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Prek Toal Platform – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Waterbird Colony – Image coming soon</span>
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
                On the third day of the trip, we travel on national road #6 to the northwest of Cambodia for around 2 hours to do bird watching at the largest reservoir that was built during Khmer Rouge time in the year 1975-1979. But in the year 1999, this place became a protected area after Mr Samveasna found Sarus Crane in the year 1997-1998.
              </p>
              <p className="text-justify">
                We did arrive at the WCS headquarters office at 6:45 am in the morning and met our local guide and WCS's ranger there. On the way, we had a stop at Soung corner to observe the birds at the reservoir. We have seen many birds in that area such as a big flock of Garganey, Cotton pygmy Goose, Little Grebe, Lesser Whistling Ducks, about 37 Sarus Cranes, and other species more like Herons, Harriers, Egrets, and Cormorants.
              </p>
              <p className="text-justify">
                After lunch, we tried other places around the reservoir and on the way back to Siem Reap town to find a Knob-billed duck as a lifer for a client. We did arrive in Siem Reap town at 5 pm.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Sarus Cranes at ATT – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Reservoir Birding – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 4</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Bengal Florican Conservation Area and Tmat Boey</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We were leaving from the hotel at 5:30 am to Prolay Grassland for Bengal Florican, we spend about 1 hour and a half along the way to reach our destination and met our local guide there. First of all, we try to find the main target "Bengal Florican", we spend nearly 2 hours to find it. While we explore to find Bengal Florican, we did watch some birds around us such as Oriental Skylark, Small Button Quail, Striated Grassbird, Red Avadavat, Chestnut Munia, Common Kingfisher, and Brown Shrike.
              </p>
              <p className="text-justify">
                After getting information, we were split into 2 groups to find Bengal Floricans. Finally, we found it! We were leaving from Prolay community at 10:00 am and continued to Tmat Boey community. We had lunch along the way near Beng Mealea temple then stopped at a Buddhist temple to observe more birds.
              </p>
              <p className="text-justify">
                We arrived at Tmat Boey at 3:15 pm, then picked up our guide and went straight to find White-shoulder Ibis at their roosting tree. We have seen many birds around us like Rufous-winged Buzzard, Chinese Francolin, Indochinese Roller, Blossom-headed Parakeet, Small Minivet, Chestnut-capped Babbler, Purple Sunbird, and 4 White-shouldered Ibis.
              </p>
            </div>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 5</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Tmat Boey</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We went to visit the Giant Ibis in their nesting tree, we were leaving from the ecolodge at 5:30 am to the site of the Giant Ibis nesting tree, and we spend about 20mn walked to the nesting tree to observe the Giant Ibis early in the morning from the light of sunrise. We have seen 4 Giant Ibis, 3 Giant Ibis in the nesting tree, and another one went away for feeding, and we spend about 30mn seeing the bird's activities.
              </p>
              <p className="text-justify">
                Then we moved from the Giant Ibis nesting tree back to the car park and spotted White-rumped Falcon during our breakfast time. During breakfast, we have seen 2 White-rumped Falcon coming close to our car park. We did many places to observe more birds like Brown Fish Owls, Spotted Wood Owls, and Barn Owls till late morning then we returned back to the ecolodge.
              </p>
              <p className="text-justify">
                In the late afternoon, we went to Phnom Reang birding around that area with our local guide looking for Savanna Nightjar, Rufous-bellied Woodpeckers, Yellow-crowned Woodpeckers, Black-headed Woodpeckers, and a big flock of Velvet-fronted Nuthatch. We did a small stop nearby the car and turned on the light point at the tree branches to find the bird called Oriental Scops Owl after we heard it calling nearby us. Finally, we found 1 bird perched on a tree branch with a close view, the client feels so good with a shortcut word called "BVD" which means "Best Views Division"!
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Giant Ibis Nesting Tree – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>White-rumped Falcon – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 6 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 6</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Tmat Boey to Kompong Thom via Sambor Prei Kuk</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Before we left Tmat Boey ecolodge, in the morning we went to do bird watching at Koh Khnol with our local guide till lunchtime. After lunch, we left our eco-lodge at 12:30 pm to Kongpong Thom province, we spend time about 3 hours on the road but we had a stop at Sambor Prei Kuk, a new world heritage site designated by UNESCO in the year 2017 before we reached our hotel in Kompong Thom town.
              </p>
              <p className="text-justify">
                We have seen many birds such as Asian Barred Owlet, Greater Racket-tailed Drongo, White-throated Rock-thrush, Green-billed Malkoha, Taiga Flycatcher, Hainan Blue Flycatcher, and White-rumped Shama.
              </p>
            </div>
          </div>

          {/* Day 7 */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 7</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Kompong Thom to Kratie</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                At 6:30 am, I went to pick up the client at the hotel for breakfast at a local restaurant for "Kuy Teav" and then we were leaving straight to Kratie province. We spend about 4 hours on the road because many parts of the road were under construction.
              </p>
              <p className="text-justify">
                We did arrive Kratie town and checked in at the hotel at 11:30 am for refreshments then left the hotel for lunch at 12 pm. After lunch, we had a break of about 2 hours then continued to watch the birds at the marshland and wetland around Kratie outskirts of town for Asian Golden Weaver, Pallas's Grasshopper Warbler, White-rumped Munia, Grey-headed Swamphen, Common Kingfisher, Chestnut-capped Babbler, Zitting & Golden-headed Cisticola, and some other water species.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Kratie Marshland – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Asian Golden Weaver – Image coming soon</span>
              </div>
            </div>
          </div>

          {/* Day 8 */}
          <div className="mb-8 p-6 bg-nature-sand/20 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 8</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">Kratie to Phnom Penh</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Our last activity at Kratie is looking for Mekong Wagtail around the Kampi pool. We were checked out from the hotel, had breakfast, and then left the town for our mission. We reached the boat parking dock at 7:30 am after meeting the boat driver, then we left for Mekong Wagtail. We spent time about 2 hours on the boat observing Mekong Wagtail. We moved from place to place till we found 5 Mekong Wagtail, Small Pratincole, and Grey-throated Martin.
              </p>
              <p className="text-justify">
                Besides species, we have seen more like Yellow-bellied Prinia, Dusky Warbler, and Indian Spotted-billed Duck and heard Golden-bellied Gerygone calling nearby as well. On the way back to the mainland, we did see some Irrawaddy dolphins show up nearby our boat about 5 dolphins, and we spent about 30mn chilling and relaxing with dolphin shows.
              </p>
              <p className="text-justify">
                After seeing everything, we quickly left Kratie for Phnom Penh city. Before we arrived in Phnom Penh city, we did stop at the Cambodia Tailorbird site for an hour to observe the birds there. We did see some bird species such as Cambodia Tailorbird, Ashy Tailorbird, Collared Kingfisher, Black-winged Cuckooshrike, and other warbler species.
              </p>
              <p className="font-semibold text-primary mt-4">End of Tour!</p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Mekong Wagtail – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Irrawaddy Dolphins – Image coming soon</span>
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
            Bird Checklist (196 Species)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="birds">
              <AccordionTrigger className="text-lg font-semibold">View Complete Bird Checklist</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>Lesser Whistling-Duck</div>
                  <div>Cotton Pygmy-Goose</div>
                  <div>Garganey</div>
                  <div>Indian Spot-billed Duck</div>
                  <div>Chinese Francolin</div>
                  <div>Little Grebe</div>
                  <div>Bengal Florican</div>
                  <div>Sarus Crane</div>
                  <div>Giant Ibis</div>
                  <div>White-shouldered Ibis</div>
                  <div>Glossy Ibis</div>
                  <div>Black-headed Ibis</div>
                  <div>Painted Stork</div>
                  <div>Oriental Darter</div>
                  <div>Spot-billed Pelican</div>
                  <div>Grey-headed Fish-Eagle</div>
                  <div>Greater Spotted Eagle</div>
                  <div>White-rumped Falcon</div>
                  <div>Peregrine Falcon</div>
                  <div>Barn Owl</div>
                  <div>Oriental Scops-Owl</div>
                  <div>Brown Fish-Owl</div>
                  <div>Spotted Wood-Owl</div>
                  <div>Asian Barred Owlet</div>
                  <div>Spotted Owlet</div>
                  <div>Black-headed Woodpecker</div>
                  <div>Great Slaty Woodpecker</div>
                  <div>Yellow-crowned Woodpecker</div>
                  <div>Rufous-bellied Woodpecker</div>
                  <div>Cambodian Tailorbird</div>
                  <div>Mekong Wagtail</div>
                  <div>Forest Wagtail</div>
                  <div>Asian Golden Weaver</div>
                  <div>Hainan Blue Flycatcher</div>
                  <div>White-throated Rock-Thrush</div>
                  <div>Blue Rock-Thrush</div>
                  <div>Greater Racket-tailed Drongo</div>
                  <div>Alexandrine Parakeet</div>
                  <div>Red-breasted Parakeet</div>
                  <div className="col-span-full text-center mt-4 text-nature-forest font-medium">
                    ... and 155+ more species recorded during this tour
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mammals">
              <AccordionTrigger className="text-lg font-semibold">Mammal List</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Small Flying Squirrel (Pteromyini)</div>
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

export default TripReportEssentialCambodia;
