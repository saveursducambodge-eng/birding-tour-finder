import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Sun, Utensils, MessageCircle, Users, CheckCircle, XCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BengMealeaTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BengMealeaTourPopup = ({ isOpen, onClose }: BengMealeaTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Itinerary
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Overview */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Half-Day Tour To Beng Mealea Temple</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Half Day (4.5–5 hours)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Siem Reap Province</span>
              </div>
              <p className="text-muted-foreground">
                Discover one of the most untouched temples of the Khmer Empire. Beng Mealea is a jungle-covered temple from the Angkor Wat era, largely unrestored, often called the "Indiana Jones temple" for its wild, adventurous feel.
              </p>
            </div>

            <Separator />

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Half-Day Morning Itinerary & Schedule</h3>
              <div className="space-y-4">
                <div className="border-0">
                  <h4 className="font-semibold text-foreground">🕢 7:30 AM – Hotel Pickup (Siem Reap)</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Meet your English-speaking guide and driver</li>
                    <li>Depart by private air-conditioned vehicle</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">🚗 7:30 – 9:00 AM – Drive to Beng Mealea</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Distance: ~65 km from Siem Reap</li>
                    <li>Enjoy scenic countryside views: rice fields, traditional villages, local daily life</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">🏛️ 9:00 – 11:00 AM – Explore Beng Mealea Temple</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Walk along wooden pathways through the jungle ruins</li>
                    <li>Discover one of the most untouched temples of the Khmer Empire</li>
                  </ul>
                  <p className="text-muted-foreground mt-2 font-medium">Highlights:</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Collapsed galleries and massive stone blocks</li>
                    <li>Tree roots growing over temple walls</li>
                    <li>Hidden corridors and carvings</li>
                    <li>Quiet, less crowded atmosphere</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">🚗 11:00 AM – Return to Siem Reap</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>12:30 PM – Hotel Drop-Off</li>
                    <li>End of tour</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Duration */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Duration
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Half Day (4.5–5 hours total)</li>
                <li>Driving: ~3 hours round trip</li>
                <li>Temple visit: ~2 hours</li>
              </ul>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Pricing
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Private Tour</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>1–2 people: $65 – $85 USD</li>
                    <li>3–4 people: $75 – $95 USD</li>
                    <li>5–8 people: $95 – $130 USD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Small Group Tour</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>$40 – $65 USD per person</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-1">Prices depend on vehicle type and guide inclusion</p>
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
                <li>English-speaking tour guide</li>
                <li>Private air-conditioned vehicle</li>
                <li>Professional driver</li>
                <li>Hotel pickup & drop-off</li>
                <li>Drinking water & cold towels</li>
              </ul>
            </div>

            {/* Excludes */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" /> Excludes
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Temple entrance fee (Angkor Pass required)</li>
                <li>Meals</li>
                <li>Personal expenses</li>
                <li>Travel insurance</li>
                <li>Tips</li>
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
                  <h4 className="font-semibold text-foreground">🌅 Early Morning (Best Time of Day)</h4>
                  <p>Cooler temperatures, soft light for photography, fewer visitors</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">☀️ Dry Season (November – April)</h4>
                  <p>Easier access and comfortable weather</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">🌿 Green Season (May – October)</h4>
                  <p>Lush jungle and dramatic scenery, fewer tourists. Beng Mealea is especially beautiful during the rainy season with vibrant greenery.</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Highlights */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" /> Highlights
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Authentic jungle temple experience</li>
                <li>Less crowded than Angkor Wat</li>
                <li>Easy half-day trip from Siem Reap</li>
                <li>Perfect for adventure lovers and photographers</li>
              </ul>
            </div>

            <Separator />

            {/* Travel Tips */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">🎒 Travel Tips</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Wear comfortable walking shoes (uneven stones)</li>
                <li>Bring insect repellent</li>
                <li>Carry your Angkor Pass</li>
                <li>Watch your step—some areas are partially collapsed</li>
                <li>Bring camera for unique jungle shots</li>
              </ul>
            </div>

            <Separator />

            {/* Why Choose This Tour */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">⭐ Why Choose This Tour?</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Short and flexible (perfect if you have limited time)</li>
                <li>Unique contrast to Angkor's restored temples</li>
                <li>Safe and accessible with wooden walkways</li>
              </ul>
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
                <li>Cancellations within 24 hours or no-shows are non-refundable</li>
                <li>Amendments must be made at least 24 hours in advance</li>
                <li>Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            <Separator />

            {/* Book Now */}
            <div className="text-center">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Half-Day%20Beng%20Mealea%20Temple%20Tour.%20Could%20you%20please%20provide%20more%20details%3F"
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

export default BengMealeaTourPopup;
