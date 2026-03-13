import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Bird } from "lucide-react";
import tmatboeyDay1 from "@/assets/tmatboey-day1-journey.jpg";
import tmatboeyDay1b from "@/assets/tmatboey-day1-journey2.jpg";
import tmatboeyDay2 from "@/assets/tmatboey-day2-giantibis.png";
import tmatboeyDay2b from "@/assets/tmatboey-day2-bird.jpg";
import tmatboeyDay3 from "@/assets/tmatboey-day3-forest.jpg";
import tmatboeyDay3b from "@/assets/tmatboey-day3-woodpecker.jpg";
import tmatboeyDay4 from "@/assets/tmatboey-day4-bird.jpg";
import tmatboeyDay4b from "@/assets/tmatboey-day4-dryforest.jpg";
const highlights = ["White-rumped falcon", "Great slaty woodpecker", "Burmese nuthatch", "Rufous-winged buzzard", "Oriental scops owl", "Giant Ibis", "Black-headed Woodpecker", "Blossom-headed Parakeet", "Asian Woolly-necked Stork", "Lesser Adjutant", "Scarlet Minivet", "White-shouldered Ibis", "Spotted Wood-owl", "Greater Flameback"];
const TripReportPrekToal = () => {
  return <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
            Trip Report
          </Badge>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">Trip Report 3day2nights at  Tmat Beoy  </h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-forest" />
              <span>23rd to 25th March 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-nature-forest" />
              <span>2 Clients ,  Guide Mr. Sam</span>
            </div>
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
              ​Located in the remote Northern Plains of Cambodia, Tmatboey Village is one of the most important birdwatching destinations in Southeast Asia. The area forms part of the vast Northern Plains Landscape, a unique ecosystem dominated by dry dipterocarp forest, seasonal wetlands, and open grasslands.
            </p>
            <p className="text-justify">
              ​Tmatboey is globally renowned as a stronghold for some of the world’s rarest birds, including the critically endangered Giant Ibis and White-shouldered Ibis. Community-based conservation efforts in the village have helped protect these species while providing sustainable livelihoods through birdwatching tourism.
            </p>
            <p className="text-justify">
              ​This 3-day birding tour offers excellent opportunities to explore the Northern Plains, observe rare species, and experience the rich biodiversity of Cambodia’s dry forests.


            </p>
            <p className="text-justify">
              ​
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <Bird className="w-8 h-8 text-nature-forest" />
            Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {highlights.map((bird, index) => <Card key={index} className="bg-white/80">
                <CardContent className="p-3 sm:p-4">
                  <span className="text-nature-forest font-semibold mr-2">{index + 1}.</span>
                  <span className="text-sm sm:text-base text-foreground">{bird}</span>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Day 1 */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <Badge className="bg-nature-forest text-white shrink-0">Day 1</Badge>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
              23rd  March 2022 – Journey to Tmatboey Village
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-justify">
              ​Early morning departure from Siem Reap for the journey to Tmatboey Village, located approximately 4–5 hours north of the city. The drive passes through rural countryside, rice fields, and forest landscapes.

            
          </p>
            <p className="text-justify">
              ​After arriving at the Tmatboey community ecolodge, we enjoy lunch and a short rest before beginning our afternoon birding session in the surrounding dry forest and seasonal wetlands.
            </p>
            <p className="text-justify">
              ​During the afternoon birding walk, we search for species such as Collared Falconet, Indochinese Roller, Black-headed Woodpecker, and various bee-eaters and drongos.
            </p>
            <p className="text-justify">
              ​As the evening approaches, we visit nearby wetlands and forest pools in search of the highlight species, the Giant Ibis, which often comes to drink at forest pools before sunset.

Dinner and overnight at the Tmatboey community lodge.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay1} alt="Journey to Tmatboey Village" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay1b} alt="Tmatboey Village birding" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Day 2 */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <Badge className="bg-nature-forest text-white shrink-0">​Day2    </Badge>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
              ​24th March 2022 – Full day Bird Watching at Tmatboey
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            

          
            <p className="text-justify">
              ​
            </p>
            <p className="text-justify">
              ​An early morning start allows us to explore the dry dipterocarp forest when bird activity is at its peak. We travel by vehicle and short walking trails through the forest to search for rare and specialized Northern Plains species.

Morning highlights may include sightings of White-shouldered Ibis, White-rumped Falcon, and Black-headed Woodpecker. Raptors are often active during the morning hours, and the open forest structure allows excellent views.

After returning to the lodge for lunch and a short rest, we head out again in the afternoon to explore additional wetlands and forest clearings. These habitats attract a variety of birds including bee-eaters, rollers, and parakeets.

In the late afternoon, we again visit known feeding areas or waterholes to increase our chances of observing the Giant Ibis and other rare species.

Dinner and overnight at Tmatboey.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay2} alt="Giant Ibis at Tmatboey" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay2b} alt="Bird watching at Tmatboey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Day 3 */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            <Badge className="bg-nature-forest text-white shrink-0">Day 3</Badge>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
              25th November 2025 – Tmat Beoy to Siem Reap  
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-justify">
              We left Tmat Beoy Lodge at 6 am and together with our local guide ventured to the forest for Giant Ibis as she sat on her nest. We also encountered Blossom-headed Parakeet, Lesser Adjutant, Crested Serpent-eagle, Asian Woolly-necked Stork, and Black-headed Woodpecker. We arrived at the lodge at 9:30 am and continued birding around the lodge where we witnessed Scarlet Minivet, Small Minivet, Greater Racket-tailed Drongo, Common Hoopoe, Hainan Blue Flycatcher, Puff-throated Babbler, and Thick-billed Flowerpecker.
            </p>
            <p className="text-justify">
              In the afternoon, we departed at 3 pm for afternoon birding. We witnessed Spotted Wood-Owl, White-shouldered Ibis, Burmese Shrike, Bronze Drongo, Golden-fronted Leafbird, Plain Prinia, and Brown Prinia.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay3} alt="Forest at Tmatboey" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay3b} alt="Woodpecker at Tmatboey" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Day 4 */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4 mb-6">
            
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
              ​
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-justify">
              We set out at 6:00 am with our local guide for a morning of birding and were rewarded with sightings of some incredible species, including the Crested Treeswift, Golden-crowned Leafbird, Greater Flameback, and Bronze Drongo.
            </p>
            <p className="text-justify">
              By 10:00 am, we left the forest and returned to the lodge, where we enjoyed lunch at 11:45 am. Afterward, we began our journey back to Siem Reap, bringing our birding adventure to a close with lasting memories of Cambodia's remarkable wildlife.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay4} alt="Bird in forest at Tmat Beoy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img src={tmatboeyDay4b} alt="Grassland at Tmat Beoy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>;};export default TripReportPrekToal;