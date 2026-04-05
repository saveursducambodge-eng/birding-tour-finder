import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed } from "lucide-react";

interface PreahKhanKampongSvayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreahKhanKampongSvayTourPopup = ({ isOpen, onClose }: PreahKhanKampongSvayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Full Day to Preah Khan Kampong Svay
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
                Discover one of Cambodia's most remote and impressive temple complexes — Preah Khan Kampong Svay. This vast, jungle-engulfed site was once a major city of the Khmer Empire, spanning over 5 square kilometers. Far from the tourist crowds, this hidden gem offers an authentic exploration experience through ancient ruins, massive walls, and atmospheric forest settings.
              </p>
            </div>

            <Separator />

            {/* Itinerary */}
            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Your journey begins early with departure from Siem Reap, heading east through the Cambodian countryside. Along the way, enjoy views of rural villages, rice paddies, and local life. The drive takes approximately 3–4 hours through scenic landscapes.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mt-3 text-base">
                Upon arrival at Preah Khan Kampong Svay, explore the vast temple complex including the central sanctuary, the Baray (reservoir), Prasat Preah Stung with its four-faced towers, and Prasat Damrei (Elephant Temple). Wander through jungle-covered corridors and discover intricate carvings hidden among the roots of ancient trees.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mt-3 text-base">
                Enjoy a packed lunch at the temple site before continuing your exploration. In the afternoon, visit nearby villages and learn about local customs before beginning the scenic drive back to Siem Reap, arriving in the early evening.
              </p>
            </div>

            <Separator />

            {/* Includes & Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Experienced English-speaking tour guide</li>
                  <li className="text-base">• Air-conditioned vehicle</li>
                  <li className="text-base">• Packed lunch and water</li>
                  <li className="text-base">• All entrance fees</li>
                  <li className="text-base">• Bottled water and cold towels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Accommodation</li>
                  <li className="text-base">• Personal expenses</li>
                  <li className="text-base">• Travel insurance</li>
                </ul>
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
                  <li className="text-base">• Camera with extra batteries</li>
                  <li className="text-base">• Comfortable walking shoes</li>
                  <li className="text-base">• Insect repellent</li>
                  <li className="text-base">• Sun protection (hat, sunscreen)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-primary" /> Leave at Hotel
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Passport (bring a copy)</li>
                  <li className="text-base">• Valuable jewelry</li>
                  <li className="text-base">• Excess cash</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Weather */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity.
              </p>
            </div>

            <Separator />

            {/* Food */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food.
              </p>
            </div>

            <Separator />

            {/* Booking */}
            <div className="text-center">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Day%20to%20Preah%20Khan%20Kampong%20Svay%20tour.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="nature" size="lg" className="w-full md:w-auto">
                  Book Now via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PreahKhanKampongSvayTourPopup;
