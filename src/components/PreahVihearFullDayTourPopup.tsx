import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed, Star, Lightbulb, Mountain, DoorOpen, Eye, Landmark } from "lucide-react";

interface PreahVihearFullDayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreahVihearFullDayTourPopup = ({ isOpen, onClose }: PreahVihearFullDayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Full-Day Tour to Preah Vihear Temple
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full Day (10–12 hours)</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Departure: 6:00 AM</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Preah Vihear Province</span>
              </div>
            </div>

            <Separator />

            {/* Overview */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                Visit one of Cambodia's most spectacular UNESCO World Heritage Sites, dramatically located on a 525-meter cliff in the Dângrêk Mountains. This 11th-century temple dedicated to Shiva stretches along an 800-meter axis with stairways and sanctuaries rising toward the summit.
              </p>
            </div>

            <Separator />

            {/* Itinerary */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Full Itinerary</h3>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">06:00 AM – Hotel Pickup</h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Early departure from Siem Reap</li>
                <li>• Travel through rural countryside</li>
                <li>• Optional coffee/local market stop</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">09:30 AM – Arrival at Preah Vihear Base</h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Transfer to 4WD vehicle (required for steep mountain road)</li>
                <li>• Scenic uphill drive with panoramic views</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">10:30 AM – Explore Preah Vihear Temple</h4>

              <div className="mt-3 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Landmark className="w-3.5 h-3.5 text-primary" /> Main Temple Complex
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-base ml-6">
                    <li>• Walk along the ancient 800-meter causeway</li>
                    <li>• Explore multiple sanctuaries and courtyards</li>
                    <li>• Learn about Khmer Empire history and Hindu influence</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <DoorOpen className="w-3.5 h-3.5 text-primary" /> Gopuras (Entrance Pavilions)
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-base ml-6">
                    <li>• Visit the five gateway towers ascending to the summit</li>
                    <li>• Observe detailed carvings and sandstone architecture</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Mountain className="w-3.5 h-3.5 text-primary" /> Cliff-Top Viewpoint
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-base ml-6">
                    <li>• Enjoy breathtaking views over Cambodia and Thailand plains</li>
                    <li>• One of the most dramatic viewpoints in Southeast Asia</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-primary" /> Sacred Architecture
                  </p>
                  <ul className="text-muted-foreground space-y-1 text-base ml-6">
                    <li>• Discover carvings dedicated to Shiva</li>
                    <li>• Unique layout aligned with the mountain ridge (different from Angkor temples)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">01:30 PM – Lunch Break</h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Local restaurant near the temple area</li>
                <li>• Or picnic lunch with mountain views</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">02:30 PM – Continue Exploration / Relax</h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Free time for photography</li>
                <li>• Optional short hike around the temple area</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">03:30 PM – Return Journey</h4>
              <p className="text-muted-foreground text-base">07:00 PM – Hotel Drop-off (Siem Reap)</p>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-3">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">🚗 Private Tour</h4>
                  <ul className="text-muted-foreground space-y-1 text-base">
                    <li>• 1–2 persons: <span className="font-semibold text-primary">$180 – $220</span></li>
                    <li>• 3–5 persons: <span className="font-semibold text-primary">$230 – $280</span></li>
                    <li>• 6–10 persons: <span className="font-semibold text-primary">$300 – $380</span></li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">👥 Group Tour</h4>
                  <ul className="text-muted-foreground space-y-1 text-base">
                    <li>• Per person: <span className="font-semibold text-primary">$70 – $110</span></li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">Prices vary by vehicle type, guide service, season and road conditions</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Hotel pickup & drop-off</li>
                  <li>• Private air-conditioned vehicle</li>
                  <li>• 4WD transfer to temple summit</li>
                  <li>• English-speaking guide</li>
                  <li>• Entrance fee</li>
                  <li>• Drinking water & cold towels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Meals & drinks</li>
                  <li>• Personal expenses</li>
                  <li>• Tips (guide & driver)</li>
                  <li>• Travel insurance</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-2">Best Time to Visit</h3>
              <div className="space-y-2 text-muted-foreground text-base">
                <p>✅ <span className="font-semibold text-foreground">Best Season:</span> November – February (cool & dry) — Clear skies, best visibility from cliff</p>
                <p>🌧️ <span className="font-semibold text-foreground">Green Season:</span> June – October — Lush landscape, fewer tourists (roads may be muddy)</p>
                <p>☀️ <span className="font-semibold text-foreground">Hot Season:</span> March – May — Very hot, early departure highly recommended</p>
              </div>
            </div>

            <Separator />

            {/* Essential Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" /> Recommended
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Camera with extra batteries</li>
                  <li>• Small backpack</li>
                  <li>• Cash for breakfast</li>
                  <li>• Sun protection (hat, sunscreen)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-primary" /> Leave at Hotel
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Passport (bring a copy)</li>
                  <li>• Airline tickets</li>
                  <li>• Excess cash</li>
                  <li>• Valuable jewelry</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Highlights */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" /> Highlights
              </h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• UNESCO World Heritage Site (since 2008)</li>
                <li>• Dramatic cliff-top temple setting</li>
                <li>• Unique linear temple design (unlike Angkor)</li>
                <li>• Incredible panoramic views</li>
                <li>• Peaceful and less crowded than Angkor</li>
              </ul>
            </div>

            <Separator />

            {/* Travel Tips */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" /> Travel Tips
              </h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Wear comfortable walking shoes</li>
                <li>• Bring sunscreen, hat & water</li>
                <li>• Carry camera (best viewpoints in Cambodia)</li>
                <li>• Be prepared for stairs and walking</li>
                <li>• Passport may be required (border area)</li>
              </ul>
            </div>

            <Separator />

            {/* Weather */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
              </p>
            </div>

            <Separator />

            {/* Food */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            <Separator />

            {/* Terms & Conditions */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-2">Terms & Conditions</h3>
              <p className="text-muted-foreground text-base mb-2">Journey Cambodia's Terms & Conditions</p>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Booking confirmation required in advance</li>
                <li>• Free cancellation: 24–48 hours before tour</li>
                <li>• Child policy: discounts available</li>
                <li>• Tour operates year-round</li>
                <li>• Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            <Separator />

            {/* Book Now */}
            <div className="text-center pb-4">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Day%20to%20Preah%20Vihear%20Temple%20tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PreahVihearFullDayTourPopup;
