import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Ship, Camera, Sun, Utensils, MessageCircle, Users, CheckCircle, XCircle, Backpack } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KompongKhleangTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const KompongKhleangTourPopup = ({ isOpen, onClose }: KompongKhleangTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh] p-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              Itinerary
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Tour Overview */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Kompong Khleang Floating Village Tour</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Half-Day (Approx. 4–5 hours)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />Departure: 8:00 AM or 2:00 PM</span>
              </div>
              <p className="text-muted-foreground text-justify">
                Discover one of the most authentic and less touristy floating villages on Tonlé Sap Lake. Kompong Khleang offers a fascinating glimpse into traditional Cambodian life, where communities live on towering stilt houses and floating homes that adapt to the changing water levels of Southeast Asia's largest freshwater lake.
              </p>
            </div>

            <Separator />

            {/* Detailed Itinerary */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Detailed Itinerary</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">08:00 AM / 02:00 PM – Hotel Pickup</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Your friendly English-speaking guide and driver will pick you up from your hotel in Siem Reap. Begin your journey with a scenic 1-hour drive through the countryside, passing rice fields, local villages, and daily rural life.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">09:00 AM / 03:00 PM – Arrival at Kompong Khleang Village</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Arrive at Kompong Khleang, a traditional lakeside community known for its impressive stilted houses, some reaching up to 10 meters high during the dry season. Take time to walk through the village, observe local life, and interact with residents. Your guide will explain how the community adapts between the dry and wet seasons.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Ship className="w-4 h-4" />09:30 AM / 03:30 PM – Boat Trip on Tonlé Sap Lake
                  </h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Board a local boat for a relaxing cruise through canals and out onto the vast Tonlé Sap Lake.
                  </p>
                  <ul className="text-muted-foreground text-sm mt-2 space-y-1 ml-4">
                    <li>• <strong>Wet season:</strong> Explore floating houses, schools, and shops</li>
                    <li>• <strong>Dry season:</strong> See stilted homes and fishing activities</li>
                  </ul>
                  <p className="text-muted-foreground text-sm text-justify mt-2">
                    Enjoy beautiful landscapes and learn about the ecosystem and fishing culture that sustain local livelihoods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">11:00 AM / 05:00 PM – Return to Village & Local Exploration</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Return to the village and continue exploring. You may visit a local home, small market, or pagoda depending on the time and conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">12:00 PM / 06:00 PM – Return to Siem Reap</h4>
                  <p className="text-muted-foreground text-sm text-justify">
                    Drive back to your hotel, arriving around midday or early evening.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Included Activities */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Included Activities</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />Countryside drive and local market visit</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />Kompong Khleang village exploration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />Boat trip on Tonlé Sap Lake</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" />Local culture and lifestyle experience</li>
              </ul>
            </div>

            <Separator />

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />Includes
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Professional English-speaking tour guide</li>
                  <li>• Private air-conditioned vehicle</li>
                  <li>• Boat ride ticket</li>
                  <li>• All entrance fees</li>
                  <li>• Bottled water & cold towels</li>
                  <li>• Hotel pickup and drop-off</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />Excludes
                </h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Meals and drinks</li>
                  <li>• Personal expenses</li>
                  <li>• Tips & gratuities</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" />Tour Price
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• 1–2 persons: <strong className="text-primary">USD 110 per person</strong></li>
                <li>• 3–5 persons: <strong className="text-primary">USD 150 per person</strong></li>
                <li>• 6+ persons: <strong className="text-primary">USD 45 per person</strong></li>
              </ul>
              <p className="text-muted-foreground text-xs mt-1">(Prices may vary depending on season and group size)</p>
            </div>

            <Separator />

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5" />Best Time to Visit
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• <strong>Wet Season (June–November):</strong> Best for seeing floating houses and boat life</li>
                <li>• <strong>Dry Season (December–May):</strong> Unique views of tall stilt houses and rural landscapes</li>
              </ul>
            </div>

            <Separator />

            {/* Why Choose This Tour */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5" />Why Choose This Tour
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Less crowded than other villages</li>
                <li>• Authentic local experience</li>
                <li>• Great for photography and cultural learning</li>
                <li>• Insight into Cambodia's floating communities</li>
              </ul>
            </div>

            <Separator />

            {/* Booking */}
            <div className="text-center">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Kompong%20Khleang%20Floating%20Village%20Tour.%20Could%20you%20please%20provide%20more%20details%3F"
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

export default KompongKhleangTourPopup;
