import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed } from "lucide-react";

interface PreahVihearFullDayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreahVihearFullDayTourPopup = ({ isOpen, onClose }: PreahVihearFullDayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Full Day to Preah Vihear Temple
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Full Day (10–12 hours)</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Departure: 5:30 AM</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Preah Vihear Province</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                Journey to the breathtaking Preah Vihear Temple, a UNESCO World Heritage Site perched atop a 525-meter cliff in the Dângrêk Mountains. This magnificent 11th-century temple offers unparalleled panoramic views over the plains of Cambodia and Thailand, along with exceptional Khmer architectural masterpieces.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Depart early from Siem Reap for the scenic drive north through rural Cambodia. Pass through local villages and enjoy the changing landscape as you head towards the Dângrêk mountain range. Stop along the way for breakfast at a local restaurant.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mt-3 text-base">
                Upon arrival, take a 4x4 vehicle or motorcycle taxi up the mountain to reach the temple entrance. Explore all five gopuras (entrance pavilions) connected by a grand causeway leading to the summit sanctuary. Marvel at the intricate carvings, lintels, and pediments depicting Hindu mythology.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mt-3 text-base">
                At the summit, take in the spectacular views stretching across the Cambodian plains below. Enjoy lunch at the base of the mountain before the return journey to Siem Reap, arriving in the early evening.
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Experienced English-speaking tour guide</li>
                  <li className="text-base">• Air-conditioned vehicle</li>
                  <li className="text-base">• Lunch</li>
                  <li className="text-base">• All entrance fees (including 4x4 fee)</li>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" /> Recommended
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Camera with extra batteries</li>
                  <li className="text-base">• Comfortable walking shoes</li>
                  <li className="text-base">• Light rain jacket</li>
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

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Hot and dry weather is expected throughout this tour. The mountain top can be slightly cooler and windier than the plains below. Midday temperatures are likely to be very hot at lower elevations.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. Local restaurants near Preah Vihear serve traditional Khmer dishes with fresh ingredients from the surrounding countryside.
              </p>
            </div>

            <Separator />

            <div className="text-center">
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
