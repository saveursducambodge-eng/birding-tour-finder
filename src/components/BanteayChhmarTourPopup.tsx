import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Sun, Utensils, MessageCircle, Users, CheckCircle, XCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BanteayChhmarTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BanteayChhmarTourPopup = ({ isOpen, onClose }: BanteayChhmarTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-base">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Itinerary
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Overview */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Full Day Adventure to Spean Toap Bridge, Banteay Chhmar & Banteay Toap Temple
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Full Day (10–12 hours)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Banteay Meanchey</span>
              </div>
              <p className="text-muted-foreground">
                Explore the hidden treasures of northwest Cambodia, far from the crowds. This journey takes you to the ancient jungle temples of Banteay Chhmar Temple, the mysterious Banteay Toap Temple, and the historic Spean Toap Bridge — a rare Angkor-era stone bridge.
              </p>
            </div>

            <Separator />

            {/* Tour Overview */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Tour Overview</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Duration: Full Day (10–12 hours)</li>
                <li>Departure: 6:30 AM – 7:00 AM</li>
                <li>Starting Point: Siem Reap / Battambang / Phnom Penh (customizable)</li>
                <li>Travel Style: Private / Small Group</li>
                <li>Distance: ~160–220 km (depending on starting location)</li>
              </ul>
            </div>

            <Separator />

            {/* Detailed Itinerary */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Detailed Itinerary</h3>
              <div className="space-y-4">
                {/* Morning */}
                <div>
                  <h4 className="font-semibold text-foreground">🌅 Morning</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>06:30 – 07:00 AM – Hotel pickup</li>
                    <li>Meet your guide and depart early to avoid heat</li>
                    <li>Scenic countryside drive through rural Cambodia</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">🌉 09:30 AM – Stop at Spean Toap Bridge</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Explore one of the longest ancient laterite bridges</li>
                    <li>Learn about Angkor road networks and history</li>
                    <li>Photo opportunities</li>
                  </ul>
                </div>

                {/* Late Morning */}
                <div>
                  <h4 className="font-semibold text-foreground">🏛️ 10:30 AM – 01:00 PM – Visit Banteay Chhmar Temple</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Hidden Angkorian complex surrounded by jungle</li>
                    <li>See Bayon-style faces and bas-reliefs</li>
                    <li>Visit: Hall of Dancers, Enclosure walls, Ancient reservoirs (barays)</li>
                  </ul>
                </div>

                {/* Lunch */}
                <div>
                  <h4 className="font-semibold text-foreground">🍽️ 01:00 PM – 02:00 PM – Lunch Break</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Local Khmer lunch at a nearby village</li>
                    <li>Simple, authentic countryside experience</li>
                  </ul>
                </div>

                {/* Afternoon */}
                <div>
                  <h4 className="font-semibold text-foreground">🏛️ 02:00 PM – 03:30 PM – Visit Banteay Toap Temple</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Quiet, less-visited temple</li>
                    <li>Surrounded by forest and peaceful landscapes</li>
                    <li>Great for photography and birdlife</li>
                  </ul>
                </div>

                {/* Return */}
                <div>
                  <h4 className="font-semibold text-foreground">🚗 03:30 PM – 06:30 PM – Return Journey</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Drive back to your hotel</li>
                    <li>Optional stops for photos or local markets</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tour Highlights */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" /> Tour Highlights
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Off-the-beaten-path Angkor temples</li>
                <li>Authentic rural Cambodia experience</li>
                <li>Ancient Angkor bridge (rare site)</li>
                <li>No crowds – peaceful exploration</li>
                <li>Great for photography & birdwatching</li>
              </ul>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Pricing (Indicative)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Group Size</th>
                      <th className="text-left py-2 font-semibold text-foreground">Price per Person (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2 pr-4">1 Person</td><td className="py-2">$180 – $220</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">2 People</td><td className="py-2">$110 – $140</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">3–4 People</td><td className="py-2">$85 – $110</td></tr>
                    <tr><td className="py-2 pr-4">5+ People</td><td className="py-2">$70 – $90</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-2">Prices vary depending on vehicle type and starting location.</p>
            </div>

            <Separator />

            {/* Essential Items */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">🎒 Essential Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4 text-base">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Recommended</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Camera with extra batteries</li>
                    <li>Small backpack</li>
                    <li>Cash for breakfast</li>
                    <li>Sun protection (hat, sunscreen)</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-base">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Leave at Hotel</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Passport (bring a copy)</li>
                    <li>Airline tickets</li>
                    <li>Excess cash</li>
                    <li>Valuable jewelry</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Includes */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" /> Includes
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Professional English-speaking guide</li>
                <li>Private vehicle (AC car/van)</li>
                <li>Hotel pickup & drop-off</li>
                <li>Drinking water & cold towels</li>
                <li>All entrance fees</li>
                <li>Lunch</li>
              </ul>
            </div>

            {/* Excludes */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" /> Excludes
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Personal expenses</li>
                <li>Travel insurance</li>
                <li>Tips & gratuities</li>
              </ul>
            </div>

            <Separator />

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary" /> Best Time to Visit
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">☀️ November – February</h4>
                  <p>Cool & dry (best)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">🌡️ March – May</h4>
                  <p>Hot but clear skies</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">🌿 June – October</h4>
                  <p>Green landscapes, occasional rain</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Travel Tips */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">🎒 Travel Tips</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Wear light clothing + comfortable shoes</li>
                <li>Bring sunscreen, hat & insect repellent</li>
                <li>Carry small cash (USD or KHR)</li>
                <li>Camera recommended (very photogenic sites)</li>
                <li>Respect local culture and temple rules</li>
              </ul>
            </div>

            <Separator />

            {/* Why Choose This Tour */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">⭐ Why Choose This Tour?</h3>
              <p className="text-muted-foreground">
                Unlike Angkor Wat, this tour offers a rare, untouched experience — perfect for travelers seeking authentic Cambodia, history, and nature in one day.
              </p>
            </div>

            <Separator />

            {/* Weather */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary" /> Weather
              </h3>
              <p className="text-muted-foreground">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
              </p>
            </div>

            <Separator />

            {/* Food */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" /> Food
              </h3>
              <p className="text-muted-foreground">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            <Separator />

            {/* Terms & Conditions */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">📋 Terms & Conditions</h3>
              <p className="text-muted-foreground font-medium">Journey Cambodia's Terms & Conditions</p>
              <p className="text-muted-foreground mt-2 font-medium">Cancellation Policy:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                <li>Booking confirmation required in advance</li>
                <li>Free cancellation: 24–48 hours before tour</li>
                <li>Child policy: discounts available</li>
                <li>Weather conditions may affect schedule</li>
                <li>Tour operates year-round</li>
              </ul>
            </div>

            <Separator />

            {/* Book Now */}
            <div className="text-center">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Day%20Adventure%20to%20Spean%20Toap%20Bridge%2C%20Banteay%20Chhmar%20%26%20Banteay%20Toap%20Temple%20Tour.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="nature" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Book This Tour via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BanteayChhmarTourPopup;
