import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin, Bird, Sun, TreeDeciduous } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const highlights = [
  "Sarus Crane",
  "Spot-billed Pelican",
  "Milky Stork",
  "Black-necked Stork",
  "Bengal Florican",
  "Spotted Wood-Owl",
  "Common Barn-owl",
  "Peregrine Falcon",
  "Bronze-winged Jacana",
  "Pheasant-tailed Jacana",
  "Oriental Pratincole",
  "Black-backed Swamphen",
  "Painted Stork",
  "Lesser Adjutant",
];

const TripReportATT2015 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
            Trip Report
          </Badge>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">
            Ang Trapeang Thmor Birding Trip
          </h1>
          <p className="text-muted-foreground text-lg mb-6">Reservoir, Floodplain, Scrub Land, Rice Field, Flooded Forest</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-forest" />
              <span>17th March 2015</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-nature-forest" />
              <span>Langie Coroes Bernd (2 pax)</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-nature-forest" />
              <span className="text-sm">Ang Trapeang Thmor, Cambodia</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-nature-forest" />
              <span className="text-sm">Sunny</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Guide: Dong</p>
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
              We left from the hotel at 5:00 am to go to Ang Trapeang Thmor for birding. We arrived at Phnom Srok at 6:30 am and continued to the Reservoir for birding until 7:30 am. We then had breakfast there.
            </p>
            <p className="text-justify">
              At 8:00 am, we went back to the office of WCS to pick up a ranger and a local guide and did birding around there. We continued to the reservoir to see Sarus Crane and Spotted Wood-Owl. At 10:30 am, we went back to the reservoir and stopped at one place on the reservoir for birding where we spent about one hour.
            </p>
            <p className="text-justify">
              At 12:00 pm, we went back to the office of WCS for lunch and after lunch we had a presentation about the reservoir. At 1:30 pm, we continued to the other place on the reservoir for birding again. We saw more species in the reservoir and then continued to see silk production. At 2:00 pm, we went back to Siem Reap.
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
              <h3 className="font-serif text-xl font-bold text-primary">17th March 2015 – Ang Trapeang Thmor</h3>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                Early morning birding at the reservoir starting at 5:00 am. After breakfast at the site, we picked up a ranger and local guide from the WCS office. The day included extensive birding around the reservoir and floodplain areas, with sightings of Sarus Crane, Spotted Wood-Owl, and numerous waterbird species. Afternoon included a silk production demonstration before returning to Siem Reap.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Ang Trapeang Thmor Reservoir – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Sarus Crane – Image coming soon</span>
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
            Bird Checklist (162 Species)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            <span className="font-semibold">Location Key:</span> R = Reservoir, KS = Keng Som Rung, KT = Kok Thoch, V = Vocalization only
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="gamebirds">
              <AccordionTrigger className="text-lg font-semibold">Gamebirds & Buttonquails</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Chinese Francolin (Francolinus pintadeanus)</div>
                  <div>Small Buttonquail (Turnix sylvaticus) – 2 R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ducks">
              <AccordionTrigger className="text-lg font-semibold">Ducks, Geese & Waterfowl</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Comb Duck (Sarkidiornis melanotos) – R seen</div>
                  <div>Lesser Whistling-duck (Dendrocygna javanica) – R seen</div>
                  <div>Cotton Pygmy-goose (Nettapus coromandelianus) – R seen</div>
                  <div>Indian Spot-billed Duck (Anas poecilorhyncha) – R seen</div>
                  <div>Garganey (Anas querquedula) – R seen</div>
                  <div>Northern Pintail (Anas acuta)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="grebes">
              <AccordionTrigger className="text-lg font-semibold">Grebes</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Little Grebe (Tachybaptus ruficollis) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="storks">
              <AccordionTrigger className="text-lg font-semibold">Storks</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Milky Stork (Mycteria cinerea)</div>
                  <div>Painted Stork (Mycteria leucocephala) – R seen</div>
                  <div>Asian Openbill (Anastomus oscitans) – R seen</div>
                  <div>Black-necked Stork (Ephypiorhynchus asiaticus) – R seen</div>
                  <div>Lesser Adjutant (Leptoptilos javanicus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ibis">
              <AccordionTrigger className="text-lg font-semibold">Ibises</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Black-headed Ibis (Threskiornis melanocephalus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cormorants">
              <AccordionTrigger className="text-lg font-semibold">Cormorants & Darters</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Little Cormorant (Phalacrocorax niger) – R seen</div>
                  <div>Indian Cormorant (Phalacrocorax fuscicollis) – R seen</div>
                  <div>Great Cormorant (Phalacrocorax carbo)</div>
                  <div>Oriental Darter (Anhinga melanogaster) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="herons">
              <AccordionTrigger className="text-lg font-semibold">Bitterns, Herons & Egrets</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Yellow Bittern (Ixobrychus sinensis) – R seen</div>
                  <div>Cinnamon Bittern (Ixobrychus cinnamomeus)</div>
                  <div>Black Bittern (Dupetor flavicollis)</div>
                  <div>Black-crowned Night-heron (Nycticorax nycticorax)</div>
                  <div>Little Heron (Butorides striata)</div>
                  <div>Chinese Pond-heron (Ardeola bacchus) – R seen</div>
                  <div>Javan Pond-heron (Ardeola speciosa)</div>
                  <div>Eastern Cattle Egret (Bubulcus coromandus) – R seen</div>
                  <div>Grey Heron (Ardea cinerea) – R seen</div>
                  <div>Purple Heron (Ardea purpurea) – R seen</div>
                  <div>Great Egret (Ardea alba) – R seen</div>
                  <div>Intermediate Egret (Mesophoyx intermedia) – R seen</div>
                  <div>Little Egret (Egretta garzetta) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cranes">
              <AccordionTrigger className="text-lg font-semibold">Cranes & Bustards</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Sarus Crane (Grus antigone) – KT seen</div>
                  <div>Bengal Florican (Houbaropsis bengalensis)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pelicans">
              <AccordionTrigger className="text-lg font-semibold">Pelicans</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Spot-billed Pelican (Pelecanus philippensis) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="raptors">
              <AccordionTrigger className="text-lg font-semibold">Raptors</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Peregrine Falcon (Falco peregrinus)</div>
                  <div>Black-shouldered Kite (Elanus caeruleus) – KS seen</div>
                  <div>Black Kite (Milvus migrans) – KS seen</div>
                  <div>Brahminy Kite (Haliastur indus)</div>
                  <div>Black-eared Kite (Milvus lineatus)</div>
                  <div>Hen Harrier (Circus cyaneus)</div>
                  <div>Pied Harrier (Circus melanoleucos) – KS seen</div>
                  <div>Western Marsh-harrier (Circus aeruginosus)</div>
                  <div>Eastern Marsh-harrier (Circus spilonotus) – KS seen</div>
                  <div>Rufous-winged Buzzard (Butastur liventer) – KS seen</div>
                  <div>Shikra (Accipiter badius) – KS seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rails">
              <AccordionTrigger className="text-lg font-semibold">Rails, Crakes & Coots</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Ruddy-breasted Crake (Porzana fusca)</div>
                  <div>White-browed Crake (Porzana cinerea)</div>
                  <div>Watercock (Gallicrex cinerea)</div>
                  <div>Black-backed Swamphen (Porphyrio indicus) – R seen</div>
                  <div>Common Moorhen (Gallinula chloropus) – R seen</div>
                  <div>Common Coot (Fulica atra)</div>
                  <div>White-breasted Crake (Amaurornis phoenicurus)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="waders">
              <AccordionTrigger className="text-lg font-semibold">Waders & Shorebirds</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Black-winged Stilt (Himantopus himantopus) – R seen</div>
                  <div>Pacific Golden Plover (Pluvialis fulva)</div>
                  <div>Red-wattled Lapwing (Vanellus indicus) – KS seen</div>
                  <div>Little Ringed Plover (Charadrius dubius) – KS seen</div>
                  <div>Pheasant-tailed Jacana (Hydrophasianus chirurgus) – R seen</div>
                  <div>Bronze-winged Jacana (Metopidius indicus) – R seen</div>
                  <div>Greater Painted-snipe (Rostratula benghalensis)</div>
                  <div>Pintail Snipe (Gallinago stenura) – R seen</div>
                  <div>Common Snipe (Gallinago gallinago)</div>
                  <div>Common Sandpiper (Actitis hypoleucos) – R seen</div>
                  <div>Green Sandpiper (Tringa ochropus)</div>
                  <div>Wood Sandpiper (Tringa glareola) – R seen</div>
                  <div>Common Greenshank (Tringa nebularia) – R seen</div>
                  <div>Marsh Sandpiper (Tringa stagnatilis) – R seen</div>
                  <div>Spotted Redshank (Tringa totanus) – R seen</div>
                  <div>Oriental Pratincole (Glareola maldivarum) – KT seen</div>
                  <div>Ruff – 4 R seen</div>
                  <div>Oriental Plover – 45 KT seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="terns">
              <AccordionTrigger className="text-lg font-semibold">Terns</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Whiskered Tern (Chlidonias hybrida) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pigeons">
              <AccordionTrigger className="text-lg font-semibold">Pigeons & Doves</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Rock Dove (Columba livia) – seen</div>
                  <div>Red Collared-dove (Streptopelia tranquebarica) – seen</div>
                  <div>Spotted Dove (Streptopelia chinensis) – seen</div>
                  <div>Zebra Dove (Geopelia striata) – seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="parakeets">
              <AccordionTrigger className="text-lg font-semibold">Parakeets</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Red-breasted Parakeet (Psittacula alexandri)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuckoos">
              <AccordionTrigger className="text-lg font-semibold">Cuckoos, Malkohas & Coucals</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Plaintive Cuckoo (Cacomantis merulinus) – seen</div>
                  <div>Asian Koel (Eudynamys scolopaceus) – V</div>
                  <div>Green-billed Malkoha (Rhopodytes tristis) – seen</div>
                  <div>Greater Coucal (Centropus sinensis) – KS seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="owls">
              <AccordionTrigger className="text-lg font-semibold">Owls</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Common Barn-owl (Tyto alba) – KS seen</div>
                  <div>Asian Barred Owlet (Glaucidium cuculoides) – KS seen</div>
                  <div>Spotted Owlet (Athene brama) – KS seen</div>
                  <div>Spotted Wood-Owl (Strix seloputo) – KS seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="swifts">
              <AccordionTrigger className="text-lg font-semibold">Swifts</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Germain's Swiftlet (Aerodramus germani)</div>
                  <div>Asian Palm-swift (Cypsiurus balasiensis) – R seen</div>
                  <div>House Swift (Apus affinis)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kingfishers">
              <AccordionTrigger className="text-lg font-semibold">Kingfishers, Bee-eaters & Rollers</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>White-throated Kingfisher (Halcyon smyrnensis)</div>
                  <div>Black-capped Kingfisher (Halcyon pileata)</div>
                  <div>Common Kingfisher (Alcedo atthis) – R seen</div>
                  <div>Pied Kingfisher (Ceryle rudis) – R seen</div>
                  <div>Indian Roller (Coracias benghalensis) – KS seen</div>
                  <div>Little Green Bee-eater (Merops orientalis)</div>
                  <div>Blue-tailed Bee-eater (Merops philippinus) – seen</div>
                  <div>Common Hoopoe (Upupa epops)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="barbets">
              <AccordionTrigger className="text-lg font-semibold">Barbets & Woodpeckers</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Lineated Barbet (Megalaima lineata) – KS seen</div>
                  <div>Coppersmith Barbet (Megalaima haemacephala) – KS seen</div>
                  <div>Spot-breasted Woodpecker (Dendrocopos analis)</div>
                  <div>Black-headed Woodpecker (Picus erythropygius)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="passerines">
              <AccordionTrigger className="text-lg font-semibold">Passerines (Songbirds)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Ashy Minivet (Pericrocotus divaricatus)</div>
                  <div>Small Minivet (Pericrocotus cinnamomeus)</div>
                  <div>Black-naped Oriole (Oriolus chinensis)</div>
                  <div>Black-hooded Oriole (Oriolus xanthornus)</div>
                  <div>Common Iora (Aegithina tiphia)</div>
                  <div>Pied Fantail (Rhipidura javanica) – R seen</div>
                  <div>Black Drongo (Dicrurus macrocercus) – seen</div>
                  <div>Ashy Drongo (Dicrurus leucophaeus) – KS seen</div>
                  <div>Greater Racket-tailed Drongo (Dicrurus paradiseus)</div>
                  <div>Black-naped Monarch (Hypothymis azurea)</div>
                  <div>Southern Jungle Crow (Corvus macrorhynchos) – seen</div>
                  <div>Rufous Treepie (Dendrocitta vagabunda) – KS seen</div>
                  <div>Racket-tailed Treepie (Crypsirina temia) – seen</div>
                  <div>Brown Shrike (Lanius cristatus) – seen</div>
                  <div>Burmese Shrike (Lanius collurioides)</div>
                  <div>Purple Sunbird (Cinnyris asiaticus)</div>
                  <div>Olive-backed Sunbird (Cinnyris jugularis) – seen</div>
                  <div>Scarlet-backed Flowerpecker (Dicaeum cruentatum) – seen</div>
                  <div>Streaked Weaver (Ploceus manyar)</div>
                  <div>Baya Weaver (Ploceus philippinus)</div>
                  <div>White-rumped Munia (Lonchura striata)</div>
                  <div>Scaly-breasted Munia (Lonchura punctulata) – seen</div>
                  <div>House Sparrow (Passer domesticus) – seen</div>
                  <div>Plain-backed Sparrow (Passer flaveolus) – seen</div>
                  <div>Eurasian Tree Sparrow (Passer montanus) – seen</div>
                  <div>Red-throated Pipit (Anthus cervinus)</div>
                  <div>Paddyfield Pipit (Anthus rufulus) – seen</div>
                  <div>Eastern Yellow Wagtail (Motacilla tschutschensis)</div>
                  <div>White Wagtail (Motacilla alba)</div>
                  <div>White-vented Myna (Acridotheres grandis) – seen</div>
                  <div>Common Myna (Acridotheres tristis) – seen</div>
                  <div>Black-collared Starling (Gracupica nigricollis) – KS seen</div>
                  <div>Asian Pied Starling (Gracupica contra)</div>
                  <div>White-shouldered Starling (Sturnus sinensis) – seen</div>
                  <div>Bluethroat (Luscinia svecica)</div>
                  <div>Blue Rock-thrush (Monticola solitarius)</div>
                  <div>Eastern Stonechat (Saxicola maurus) – seen</div>
                  <div>Pied Bushchat (Saxicola caprata) – seen</div>
                  <div>Taiga Flycatcher (Ficedula albicilla)</div>
                  <div>Asian Brown Flycatcher (Muscicapa dauurica) – seen</div>
                  <div>Oriental Magpie-Robin (Copsychus saularis) – V</div>
                  <div>Australasian Bushlark (Mirafra javanica)</div>
                  <div>Indochinese Bushlark (Mirafra erythrocephala)</div>
                  <div>Oriental Skylark (Alauda gulgula)</div>
                  <div>Yellow-vented Bulbul (Pycnonotus goiavier) – seen</div>
                  <div>Streak-eared Bulbul (Pycnonotus blanfordi) – seen</div>
                  <div>Sooty-headed Bulbul (Pycnonotus aurigaster)</div>
                  <div>Common Sand-martin (Riparia chinensis)</div>
                  <div>Barn Swallow (Hirundo rustica) – seen</div>
                  <div>Red-rumped Swallow (Cecropis daurica)</div>
                  <div>Yellow-browed Warbler (Phylloscopus inornatus)</div>
                  <div>Dusky Warbler (Phylloscopus fuscatus) – R seen</div>
                  <div>Pin-striped Tit-babbler (Macronous gularis)</div>
                  <div>Black-browed Reed-warbler (Acrocephalus bistrigiceps)</div>
                  <div>Oriental Reed-warbler (Acrocephalus orientalis) – R seen</div>
                  <div>Lanceolated Warbler (Locustella lanceolata) – R seen</div>
                  <div>Zitting Cisticola (Cisticola juncidis) – V</div>
                  <div>Bright-headed Cisticola (Cisticola exilis)</div>
                  <div>Dark-necked Tailorbird (Orthotomus atrogularis) – V</div>
                  <div>Common Tailorbird (Orthotomus sutorius) – V</div>
                  <div>Yellow-bellied Prinia (Prinia flaviventris)</div>
                  <div>Plain Prinia (Prinia inornata) – R seen</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default TripReportATT2015;
