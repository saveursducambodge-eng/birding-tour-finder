import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Users, MapPin, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import LazyImage from "@/components/LazyImage";
import { tours } from "@/pages/ToursPage";

const GreenSeasonBirdingPage = () => {
  const allTours = tours.filter((t: any) => !t.isInformational);

  return (
    <>
      <Helmet>
        <title>Green Season Birding Cambodia | Wet Season Tours | PEARAING</title>
        <meta name="description" content="Green season birding in Cambodia: every tour, photo, description and full itinerary in one place. Lush landscapes, breeding waterbirds and fewer crowds from May to October." />
        <link rel="canonical" href="https://pearaing.com/green-season-birding" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-sage-light to-nature-earth/20">
        <Navigation />

        {/* Hero */}
        <section className="pt-28 pb-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-forest/10 mb-6">
              <Leaf className="w-8 h-8 text-nature-forest" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-nature-forest mb-6">
              Green Season Birding
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From May to October Cambodia turns emerald. Rice paddies fill, the flooded forest of the Tonle Sap
              comes alive, waterbirds nest in huge colonies and the dry forests burst into leaf. Below you will
              find every one of our tours with photos, full descriptions and complete day-by-day itineraries.
            </p>
          </div>
        </section>

        {/* All tours */}
        <section className="pb-16 px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            {allTours.map((tour: any) => (
              <Card key={tour.id} className="overflow-hidden border-sage-light">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-muted">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl text-nature-forest mb-3">{tour.title}</h2>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{tour.duration}</span>
                      <span className="inline-flex items-center gap-1"><Users className="w-4 h-4" />{tour.groupSize}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{tour.difficulty}</span>
                    </div>
                    <div className="text-lg font-semibold text-nature-forest mb-4">{tour.price}</div>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights?.map((h: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">{h}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardContent className="pt-0 px-6 pb-6 space-y-6">
                  {/* Extra photos */}
                  {tour.images && tour.images.length > 1 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {tour.images.slice(1).map((img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${tour.title} photo ${i + 2}`}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {tour.description}
                  </div>

                  {/* Itinerary */}
                  {tour.schedule && (
                    <div>
                      <h3 className="font-serif text-lg text-nature-forest mb-2">Itinerary</h3>
                      <div className="space-y-3">
                        {Object.entries(tour.schedule).map(([day, text]) => (
                          <div key={day} className="border-l-2 border-nature-sage pl-4">
                            <div className="font-semibold text-sm text-nature-forest">{day}</div>
                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{text as string}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Species */}
                  {tour.birdSpecies?.length > 0 && (
                    <div>
                      <h3 className="font-serif text-lg text-nature-forest mb-2">Target Species</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{tour.birdSpecies.join(", ")}</p>
                    </div>
                  )}

                  {/* Included */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {tour.included?.length > 0 && (
                      <div>
                        <h3 className="font-serif text-lg text-nature-forest mb-2">Included</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                          {tour.included.map((x: string, i: number) => <li key={i}>{x}</li>)}
                        </ul>
                      </div>
                    )}
                    {tour.notIncluded?.length > 0 && (
                      <div>
                        <h3 className="font-serif text-lg text-nature-forest mb-2">Not Included</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                          {tour.notIncluded.map((x: string, i: number) => <li key={i}>{x}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {tour.bestSeason && (
                    <p className="text-sm text-gray-700"><span className="font-semibold text-nature-forest">Best season: </span>{tour.bestSeason}</p>
                  )}

                  <Link to="/contact">
                    <Button className="bg-nature-forest hover:bg-nature-sage text-white">
                      Enquire About This Tour
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-nature-forest text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">Bird Cambodia in the Green Season</h2>
            <p className="text-base sm:text-lg mb-8 opacity-90">
              Fewer visitors, lush landscapes and breeding birds. Tell us your dates and we will build the trip around them.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-nature-forest">
                Plan My Green Season Trip
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GreenSeasonBirdingPage;
