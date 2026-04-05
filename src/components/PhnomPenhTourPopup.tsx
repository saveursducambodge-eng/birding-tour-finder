import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed } from "lucide-react";

interface PhnomPenhTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhnomPenhTourPopup = ({ isOpen, onClose }: PhnomPenhTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                2-Day Tours in Phnom Penh
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2 Days / 1 Night</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Phnom Penh</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                Discover Cambodia's vibrant capital city over two action-packed days. From the magnificent Royal Palace and Silver Pagoda to the sobering Tuol Sleng Genocide Museum and Killing Fields, this tour provides a comprehensive exploration of Phnom Penh's rich history, stunning architecture, and dynamic modern culture.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1: Royal Palace & Historical Sites</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Begin at the stunning Royal Palace and Silver Pagoda complex, home to the Emerald Buddha and a floor of 5,000 silver tiles. Visit the National Museum, showcasing the world's finest collection of Khmer sculpture. Afternoon visit to the sobering Tuol Sleng Genocide Museum (S-21) and the Choeung Ek Killing Fields memorial. Evening stroll along the scenic Riverside promenade.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 2: Markets, Temples & Departure</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Morning visit to the bustling Central Market (Phsar Thmei) with its iconic Art Deco dome. Explore Wat Phnom, the hilltop temple that gives the city its name. Visit the Russian Market (Tuol Tom Poung) for souvenirs and local crafts. Optional visit to the Independence Monument and Koh Pich (Diamond Island). Depart in the afternoon.
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
                  <li className="text-base">• Daily lunch</li>
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
                  <li className="text-base">• Flights/transport to Phnom Penh</li>
                  <li className="text-base">• Dinner</li>
                  <li className="text-base">• Personal expenses</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Phnom Penh is hot and humid year-round with temperatures averaging 30–35°C. The dry season (November–April) is the most comfortable time to visit. Carry an umbrella or light rain jacket during the wet season.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Phnom Penh offers an incredible food scene, from traditional Khmer dishes to French-influenced cuisine, street food, and international restaurants along the Riverside. Don't miss trying Nom Banh Chok (Khmer noodles) and fresh Mekong River fish.
              </p>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%202-Day%20Tours%20in%20Phnom%20Penh.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PhnomPenhTourPopup;
