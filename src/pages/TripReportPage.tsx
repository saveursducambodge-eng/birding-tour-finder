import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, MapPin, Bird } from "lucide-react";

const TripReportPage = () => {
  const highlights = [
    "Painted Stork",
    "Spot-billed Pelican",
    "Oriental Darter",
    "Bengal Florican",
    "Spotted Owlet",
    "Giant Ibis",
    "Black-headed Woodpecker",
    "Blossom-headed Parakeet",
    "Asian Woolly-necked Stork",
    "Lesser Adjutant",
    "Scarlet Minivet",
    "White-shouldered Ibis",
    "Spotted Wood-owl",
    "Greater Flameback",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
              Trip Report
            </Badge>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 max-w-4xl mx-auto">
              Costumed Tour Prek Toal Ramsar Site and 3day2nights Tmat Beoy and Bengal Florican Grasslands Package
            </h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-nature-forest" />
                <span>23rd to 26th November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-nature-forest" />
                <span>2 Clients</span>
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
                Our journey combined a visit to the Prek Toal Ramsar Site on Tonle Sap Lake—the largest lake in Southeast Asia—with a 3D2N tour to see the Bengal Florican, followed by an excursion to Koh Ker Temple, a UNESCO World Heritage Site.
              </p>
              <p className="text-justify">
                We arrived at Tmat Beoy Lodge at 5:30 pm. On the third day, we began with an early morning outing to spot the Giant Ibis, Cambodia's national bird, along with several woodpecker species and other fascinating birds inhabiting the area. Later, we returned to the lodge for more birdwatching around its grounds.
              </p>
              <p className="text-justify">
                In the evening, we embarked on another birding session and were rewarded with sightings of the Spotted Wood-owl and the White-shouldered Ibis, gracefully landing on their roosting tree as dusk settled.
              </p>
              <p className="text-justify">
                On the fourth and final day, we set off to discover more avian wonders, including the Greater Flameback, Burmese Shrike, Crested Treeswift, and many other species. After lunch, we concluded our adventure and returned to Siem Reap, enriched by the incredible diversity of Cambodia's birdlife and cultural heritage.
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

        {/* Day 1 */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Badge className="bg-nature-forest text-white shrink-0">Day 1</Badge>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                23rd November 2025 – Prek Toal Ramsar Site
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We began our tour at 5:30 am, with a car pickup from the hotel to Mechrey Village, where we boarded a boat bound for Prek Toal Village in Koh Chiveang District, Battambang Province. By 7:30 am, we arrived at the Environmental Station, enjoyed breakfast, and purchased tickets for the birdwatching platform.
              </p>
              <p className="text-justify">
                From there, we boarded a community boat to explore the bird nesting trees. Along the way, we spotted remarkable species such as the Spot-billed Pelican, Painted Stork, Dark-necked Tailorbird, Lesser Adjutant, Greater Adjutant, Great Cormorant, and Oriental Darter. After leaving the platform, we continued birding along the flooded forest and bushes.
              </p>
              <p className="text-justify">
                Our next stop was the Saray Souvenir Shop, where women from the village craft beautiful products from water hyacinth, an invasive plant species. Behind the shop, we enjoyed more birding and observed the Yellow-bellied Prinia, Indochinese Roller, Dusky Warbler, Plaintive Cuckoo, and Chinese Pond-heron.
              </p>
              <p className="text-justify">
                Lunch was served at a floating community restaurant. Afterward, we returned by boat to Mechrey Village, then continued by car, stopping along the way for additional birding. Here we encountered species such as the Plaintive Cuckoo, Pied Bushchat, Asian Green Bee-eater, Paddyfield Pipit, Yellow-vented Bulbul, and Black Drongo.
              </p>
            </div>
            {/* Placeholder for images */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Painted Stork – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>View from the platform – Image coming soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Day 2 */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Badge className="bg-nature-forest text-white shrink-0">Day 2</Badge>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                24th November 2025 – Bengal Florican
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-justify">
                We got our baggage on the car by 4:45 am and drove 1.5 hours to get to Prolay Florican Grassland Community. We met our local guides who were waiting for us to witness a majestic Bengal Florican, one of the critically endangered species in Cambodia. We also had a chance to see some wetland species like Chestnut Munia, Bengal Florican, Spotted Owlet, Common Kingfisher, White-throated Kingfisher, Black Drongo, Eastern Marsh Harrier, Little Heron, Scaly-breasted Munia, Egrets, and Taiga Flycatcher.
              </p>
              <p className="text-justify">
                We left Prolay protected area to get lunch on the way at 11:30 am and continued our journey to Koh Ker Temple. We visited some temples such as Pram Temple, Beong Khnar Temple, Damrei Temple (Elephant Temple), and the 7-tier Koh Ker temple. We witnessed some stunning birds such as Greater Yellownape, Black-naped Monarch, Black-hooded Oriole, Bar-winged Flycatcher-Shrike, Dark-necked Tailorbird, and Black-headed Woodpecker.
              </p>
              <p className="text-justify">
                We left Koh Ker Group and arrived at Tmat Beoy Lodge around 5:30 pm. We had dinner and spent the night at the lodge.
              </p>
            </div>
            {/* Placeholder for images */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Bengal Florican in Prolay Protected Area – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Greater Yellownape in Koh Ker Temple – Image coming soon</span>
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
                25th November 2025 – Tmat Beoy
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
            {/* Placeholder for images */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>White-shouldered Ibis – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Spotted Wood-Owl – Image coming soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Day 4 */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <Badge className="bg-nature-forest text-white shrink-0">Day 4</Badge>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                26th November 2025 – Tmat Beoy to Siem Reap
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
            {/* Placeholder for images */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>View of the Forest in Tmat Beoy – Image coming soon</span>
              </div>
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                <span>Birding Activities – Image coming soon</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TripReportPage;
