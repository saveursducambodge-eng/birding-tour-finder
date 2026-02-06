import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin, Bird } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlights = [
  "Grey-headed Fish-eagle",
  "Spot-billed Pelican",
  "Oriental Darter",
  "Great Cormorant",
  "Indian Cormorant",
  "Little Cormorant",
  "Great Egret",
  "Purple Heron",
  "Whiskered Tern",
  "Green-billed Malkoha",
  "Greater Coucal",
  "Pied Kingfisher",
  "Blue-tailed Bee-eater",
  "Indian Roller",
];

const TripReportSVC2014 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
            Trip Report
          </Badge>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">
            SVC Birdwatching Trip Report
          </h1>
          <p className="text-muted-foreground text-lg mb-6">Prek Toal, Siem Reap, Cambodia</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-forest" />
              <span>11th October 2014</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-nature-forest" />
              <span>Young Bird Club, SVC Guides</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-nature-forest" />
            <span className="text-sm">Prek Toal Bird Sanctuary</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Written by: Ladong (Guide Training)</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
            Trip Report
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p className="text-justify">
              We left from Sam Veasna Center at 6:00 am to go to Mechrey where we got a boat to Prek Toal village. From SVC to Mechrey we went by car, it took about 45 minutes, and from Mechrey to Prek Toal we went by boat. During the car ride to Mechrey, we did a presentation about the itinerary of Prek Toal.
            </p>
            <p className="text-justify">
              We arrived at Mechrey at 6:45 am and then started bird watching during the boat trip to Prek Toal. We saw Chinese Pond-heron, Great Egrets, Intermediate Egrets, Little Egrets, Black Drongo, Great Cormorant, Indian Cormorant, Little Cormorant, Oriental Darter, Grey-headed Fish-eagle, Green-billed Malkoha, Greater Coucal, Pied Kingfisher, Common Kingfisher, Blue-tailed Bee-eater, Rock Pigeon, Pied Fantail, Southern Jungle Crow, Brown Shrike, Olive-backed Sunbird, House Sparrow, and Eurasian Tree Sparrow.
            </p>
            <p className="text-justify">
              We did bird watching until 8:30 am and then stopped to have breakfast on the boat after we passed Mechrey Pagoda about 3km. After breakfast, we did a presentation about Tonle Sap Lake, then continued bird watching until we reached Prek Toal village.
            </p>
            <p className="text-justify">
              We arrived at Prek Toal village at 9:30 am. We saw the crocodile farm, fish farm, chicken farm, and then stopped at the Environment Research Station to get passes and pick up a ranger. After that, we continued to the bird sanctuary.
            </p>
            <p className="text-justify">
              We arrived at the Bird Sanctuary at 10:30 am and did bird watching for around two hours. We saw the nests of cormorants and darters (the chicks of cormorants are black and darters are white). We stopped for lunch on the boat at the bird sanctuary. At 2:00 pm, we left the bird sanctuary to return to Siem Reap.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <Bird className="w-8 h-8 text-nature-forest" />
            Bird Highlights
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

      {/* Itinerary */}
      <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
            Itinerary
          </h2>
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <Badge className="bg-nature-forest text-white shrink-0">Day 1</Badge>
              <h3 className="font-serif text-xl font-bold text-primary">11th October 2014 – Prek Toal</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-justify">
                Morning birding around Prek Toal Bird Sanctuary and afternoon return to Siem Reap.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Prek Toal Bird Sanctuary – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Boat Trip to Prek Toal – Image coming soon</span>
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
            Bird Checklist (50 Species)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ducks">
              <AccordionTrigger className="text-lg font-semibold">Whistling-ducks, Ducks & Pygmy-geese</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Indian Spot-billed Duck (Anas poecilorhyncha)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="storks">
              <AccordionTrigger className="text-lg font-semibold">Storks</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Asian Openbill (Anastomus oscitans)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cormorants">
              <AccordionTrigger className="text-lg font-semibold">Cormorants & Darters</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Little Cormorant (Phalacrocorax niger)</div>
                  <div>Indian Cormorant (Phalacrocorax fuscicollis)</div>
                  <div>Great Cormorant (Phalacrocorax carbo)</div>
                  <div>Oriental Darter (Anhinga melanogaster)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="herons">
              <AccordionTrigger className="text-lg font-semibold">Bitterns, Herons & Egrets</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Yellow Bittern (Ixobrychus sinensis)</div>
                  <div>Black Bittern (Dupetor flavicollis)</div>
                  <div>Grey Heron (Ardea cinerea)</div>
                  <div>Purple Heron (Ardea purpurea)</div>
                  <div>Great Egret (Ardea alba)</div>
                  <div>Intermediate Egret (Mesophoyx intermedia)</div>
                  <div>Little Egret (Egretta garzetta)</div>
                  <div>Chinese Pond-heron (Ardeola bacchus)</div>
                  <div>Javan Pond-heron (Ardeola speciosa)</div>
                  <div>Eastern Cattle Egret (Bubulcus coromandus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pelicans">
              <AccordionTrigger className="text-lg font-semibold">Pelicans</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Spot-billed Pelican (Pelecanus philippensis)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="raptors">
              <AccordionTrigger className="text-lg font-semibold">Raptors</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Grey-headed Fish-eagle (Ichthyophaga ichthyaetus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="terns">
              <AccordionTrigger className="text-lg font-semibold">Terns</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Whiskered Tern (Chlidonias hybrida)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pigeons">
              <AccordionTrigger className="text-lg font-semibold">Pigeons & Doves</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Rock Dove (Columba livia)</div>
                  <div>Spotted Dove (Streptopelia chinensis)</div>
                  <div>Red Collared-dove (Streptopelia tranquebarica)</div>
                  <div>Zebra Dove (Geopelia striata)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuckoos">
              <AccordionTrigger className="text-lg font-semibold">Cuckoos, Malkohas & Coucals</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Plaintive Cuckoo (Cacomantis merulinus)</div>
                  <div>Green-billed Malkoha (Rhopodytes tristis)</div>
                  <div>Greater Coucal (Centropus sinensis)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kingfishers">
              <AccordionTrigger className="text-lg font-semibold">Kingfishers & Bee-eaters</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Common Kingfisher (Alcedo atthis)</div>
                  <div>Pied Kingfisher (Ceryle rudis)</div>
                  <div>Indian Roller (Coracias benghalensis)</div>
                  <div>Blue-tailed Bee-eater (Merops philippinus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="woodpeckers">
              <AccordionTrigger className="text-lg font-semibold">Woodpeckers</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Rufous Woodpecker (Micropternus brachyurus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="passerines">
              <AccordionTrigger className="text-lg font-semibold">Passerines (Songbirds)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Pied Fantail (Rhipidura javanica)</div>
                  <div>Black Drongo (Dicrurus macrocercus)</div>
                  <div>Southern Jungle Crow (Corvus macrorhynchos)</div>
                  <div>Racket-tailed Treepie (Crypsirina temia)</div>
                  <div>Brown Shrike (Lanius cristatus)</div>
                  <div>Olive-backed Sunbird (Cinnyris jugularis)</div>
                  <div>House Sparrow (Passer domesticus)</div>
                  <div>Eurasian Tree Sparrow (Passer montanus)</div>
                  <div>White-vented Myna (Acridotheres grandis)</div>
                  <div>Common Myna (Acridotheres tristis)</div>
                  <div>Black-collared Starling (Gracupica nigricollis)</div>
                  <div>White-shouldered Starling (Sturnus sinensis)</div>
                  <div>Oriental Magpie-Robin (Copsychus saularis)</div>
                  <div>Pied Bushchat (Saxicola caprata)</div>
                  <div>Asian Brown Flycatcher (Muscicapa dauurica)</div>
                  <div>Yellow-vented Bulbul (Pycnonotus goiavier)</div>
                  <div>Streak-eared Bulbul (Pycnonotus blanfordi)</div>
                  <div>Barn Swallow (Hirundo rustica)</div>
                  <div>Pin-striped Tit-babbler (Macronous gularis)</div>
                  <div>Dark-necked Tailorbird (Orthotomus atrogularis)</div>
                  <div>Common Tailorbird (Orthotomus sutorius)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default TripReportSVC2014;
