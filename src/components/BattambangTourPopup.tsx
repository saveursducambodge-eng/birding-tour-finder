import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Camera, ShieldAlert, Sun, UtensilsCrossed } from "lucide-react";

interface BattambangTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BattambangTourPopup = ({ isOpen, onClose }: BattambangTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-h-[90vh] p-6 shadow-none text-justify text-lg">
        <ScrollArea className="max-h-[90vh] p-6 shadow-none text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                2 Nights 3 Days in Battambang
              </h2>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 Days / 2 Nights</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Battambang</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                Explore Battambang, Cambodia's charming second city, known for its French colonial architecture, vibrant arts scene, and the iconic Bamboo Train. This 3-day adventure takes you through ancient temples, bat caves, rural villages, and some of Cambodia's most authentic cultural experiences.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Itinerary</h3>
            </div>

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 1: Siem Reap to Battambang</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Depart from Siem Reap and travel to Battambang via the scenic countryside route. En route, stop at Sisophon for a break. Upon arrival in Battambang, explore the charming colonial town center, visit the Battambang Provincial Museum, and stroll along the Sangker River. Check into your hotel and enjoy the evening at leisure.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 2: Battambang Exploration</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Full day exploring Battambang's highlights. Morning visit to Phnom Sampeau with its killing caves and bat cave (millions of bats emerge at sunset). Ride the famous Bamboo Train through the countryside. Visit Wat Banan, a hilltop temple often compared to a mini Angkor Wat. Afternoon visit to local villages known for rice paper making, fish paste production, and traditional knife-making.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">Day 3: Battambang to Siem Reap</h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Morning visit to Ek Phnom temple ruins and the nearby countryside. Explore the vibrant Battambang morning market for local breakfast and fresh produce. Depart for Siem Reap with a stop at the Pursat area if time permits. Arrive back in Siem Reap by late afternoon.
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
                  <li className="text-base">• Daily breakfast and lunch</li>
                  <li className="text-base">• All entrance fees</li>
                  <li className="text-base">• Bamboo Train ride</li>
                  <li className="text-base">• Bottled water and cold towels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li className="text-base">• Accommodation (available upon request)</li>
                  <li className="text-base">• Dinner</li>
                  <li className="text-base">• Personal expenses</li>
                  <li className="text-base">• Travel insurance</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Weather
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Battambang experiences hot and dry weather similar to Siem Reap. The late afternoon bat emergence at Phnom Sampeau is best enjoyed from October to March.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-primary" /> Food
              </h4>
              <p className="text-muted-foreground leading-relaxed text-justify text-base">
                Battambang is considered the rice bowl of Cambodia and is famous for its delicious oranges and fresh produce. The local food scene is excellent with authentic Khmer cuisine, French-influenced bakeries, and vibrant market food.
              </p>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%202%20Nights%203%20Days%20in%20Battambang%20tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BattambangTourPopup;
