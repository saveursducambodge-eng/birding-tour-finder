import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Sun, Utensils, MessageCircle, Users, CheckCircle, XCircle, Camera, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KohKerBengMealeaTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KohKerBengMealeaTourPopup = ({ isOpen, onClose }: KohKerBengMealeaTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Itinerary
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Overview */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Full-Day Tour – Koh Ker and Beng Mealea Temple Adventure</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Full Day (10–12 hours)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Siem Reap Province</span>
              </div>
              <p className="text-muted-foreground text-justify mb-2">
                Discover two of Cambodia's most spectacular remote temples in one day:
              </p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• <strong>Koh Ker</strong> – a former Khmer capital (10th century) with a pyramid temple and over 180 ruins</li>
                <li>• <strong>Beng Mealea</strong> – a jungle-covered temple from the Angkor Wat era, largely unrestored</li>
              </ul>
              <p className="text-muted-foreground text-justify mt-2">
                This tour combines adventure, history, and off-the-beaten-path exploration.
              </p>
            </div>

            <Separator />

            {/* Full-Day Itinerary */}
            <div className="border-0">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Full-Day Itinerary & Schedule</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">7:00 AM – Hotel Pickup (Siem Reap)</h4>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1 ml-4">
                    <li>• Meet your guide and driver</li>
                    <li>• Depart by private air-conditioned vehicle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">7:00 – 9:00 AM – Drive to Beng Mealea</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Scenic countryside views, rice fields, and villages. Distance: ~65–77 km from Siem Reap.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">9:00 – 11:00 AM – Explore Beng Mealea</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Walk through jungle ruins with wooden walkways.
                  </p>
                  <p className="text-muted-foreground text-sm font-semibold mt-2">Highlights:</p>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1 ml-4">
                    <li>• Collapsed galleries and massive stone blocks</li>
                    <li>• Tree roots growing over temple walls</li>
                    <li>• "Indiana Jones" atmosphere</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-1">Duration: ~2 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">11:00 AM – 12:30 PM – Drive to Koh Ker</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Continue deeper into rural Cambodia. Distance: ~50–60 km from Beng Mealea.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">12:30 – 1:30 PM – Lunch Break</h4>
                  <ul className="text-muted-foreground text-sm mt-1 space-y-1 ml-4">
                    <li>• Local restaurant near Koh Ker</li>
                    <li>• Optional picnic lunch</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Mountain className="w-4 h-4" />1:30 – 3:30 PM – Explore Koh Ker Temple Complex
                  </h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Explore the ancient capital spread across jungle landscape:
                  </p>
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">Prasat Thom (Pyramid Temple)</p>
                      <ul className="text-muted-foreground text-sm ml-4 space-y-1">
                        <li>• 7-tier structure (~36–40m high)</li>
                        <li>• Climb for panoramic forest views</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">Prasat Pram</p>
                      <ul className="text-muted-foreground text-sm ml-4"><li>• Famous tree-covered ruins</li></ul>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">Prasat Krahom</p>
                      <ul className="text-muted-foreground text-sm ml-4"><li>• Red-brick temple</li></ul>
                    </div>
                    <p className="text-muted-foreground text-sm ml-4">• Hidden temples and lingas</p>
                  </div>
                  <p className="text-muted-foreground text-xs mt-2 italic">Koh Ker has over 180 temples across 81 km²</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">3:30 PM – Return to Siem Reap</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">6:30 – 7:00 PM – Hotel Drop-Off</h4>
                  <p className="text-muted-foreground text-sm">End of tour</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Duration */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5" />Duration
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• 10–12 hours total</li>
                <li>• Driving: ~5–6 hours round trip</li>
                <li>• Temple visits: ~4–5 hours</li>
              </ul>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" />Pricing
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground text-sm font-semibold">Private Tour</p>
                  <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                    <li>• 1–2 people: <strong className="text-primary">$130 – $160 USD</strong></li>
                    <li>• 3–4 people: <strong className="text-primary">$150 – $190 USD</strong></li>
                    <li>• 5–8 people: <strong className="text-primary">$190 – $260 USD</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">Small Group Tour</p>
                  <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                    <li>• <strong className="text-primary">$70 – $110 USD</strong> per person</li>
                    <li>• Some tours start from ~$95 depending on group size</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />Includes
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• English-speaking tour guide</li>
                  <li>• Private air-conditioned vehicle</li>
                  <li>• Driver</li>
                  <li>• Hotel pickup & drop-off</li>
                  <li>• Drinking water & cold towels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />Excludes
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Koh Ker entrance fee ($15 USD)</li>
                  <li>• Beng Mealea entrance (Angkor Pass or separate ticket)</li>
                  <li>• Meals (lunch)</li>
                  <li>• Travel insurance</li>
                  <li>• Personal expenses & tips</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5" />Best Time to Visit
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• <strong>Dry Season (November – April):</strong> Cooler weather, easier roads</li>
                <li>• <strong>Green Season (May – October):</strong> Lush jungle at Beng Mealea, fewer tourists</li>
              </ul>
              <p className="text-muted-foreground text-xs mt-1 italic">Beng Mealea is especially beautiful in rainy season with greenery</p>
            </div>

            <Separator />

            {/* Highlights */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5" />Highlights
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Explore a hidden jungle temple (Beng Mealea)</li>
                <li>• Climb a pyramid temple (Koh Ker)</li>
                <li>• Off-the-beaten-path experience (very few crowds)</li>
                <li>• Combine two major sites in one day</li>
              </ul>
            </div>

            <Separator />

            {/* Travel Tips */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Travel Tips</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Start early (long distance)</li>
                <li>• Wear comfortable walking shoes</li>
                <li>• Bring sunscreen, hat, insect repellent</li>
                <li>• Carry cash for entrance fees</li>
                <li>• Private tour recommended (remote locations)</li>
              </ul>
            </div>

            <Separator />

            {/* Why Choose This Tour */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Why Choose This Tour?</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Perfect mix of adventure + history + nature</li>
                <li>• Far less crowded than Angkor Wat</li>
                <li>• Unique contrast: Beng Mealea = jungle ruins, Koh Ker = pyramid + wide landscape</li>
              </ul>
            </div>

            <Separator />

            {/* Weather */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5" />Weather
              </h3>
              <p className="text-muted-foreground text-sm text-justify">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
              </p>
            </div>

            <Separator />

            {/* Food */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5" />Food
              </h3>
              <p className="text-muted-foreground text-sm text-justify">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            <Separator />

            {/* Terms & Conditions */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Terms & Conditions</h3>
              <p className="text-muted-foreground text-sm font-semibold mb-1">Journey Cambodia's Terms & Conditions</p>
              <p className="text-muted-foreground text-sm font-semibold">Cancellation Policy:</p>
              <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                <li>• Cancellations within 24 hours or no-shows are non-refundable</li>
                <li>• Amendments must be made at least 24 hours in advance</li>
                <li>• Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            <Separator />

            {/* Booking */}
            <div className="text-center">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Koh%20Ker%20and%20Beng%20Mealea%20Temple%20Adventure%20Tour.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="nature" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default KohKerBengMealeaTourPopup;
