import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, CheckCircle, XCircle, Sun, UtensilsCrossed, Star, Lightbulb, ShieldAlert, Backpack, Mountain, Ship, Landmark } from "lucide-react";

interface EssentialCambodia5DayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EssentialCambodia5DayTourPopup = ({ isOpen, onClose }: EssentialCambodia5DayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden max-w-4xl max-h-[90vh] p-0 shadow-none">
        <ScrollArea className="max-h-[90vh] p-6 text-justify text-lg">
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                🌿 5-Day Siem Reap Discovery Tour
              </h2>
              <p className="text-muted-foreground text-base mt-1">Temples • Culture • Nature • Local Life</p>
              <div className="flex flex-wrap gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 Days / 4 Nights</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Available year-round</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Siem Reap</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Tour Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                This 5-day journey explores the best of Siem Reap, combining the iconic temples of Angkor Wat, hidden jungle ruins, floating villages on Tonlé Sap Lake, and nature experiences like Phnom Kulen National Park.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify text-base mt-2">
                It's the perfect balance of history, culture, and adventure for first-time visitors.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-serif font-semibold text-foreground text-lg">Full Itinerary</h3>
            </div>

            {/* Day 1 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2 flex items-center gap-2">
                <Landmark className="w-4 h-4" /> Day 1 – Angkor Wat Sunrise & Main Temples
              </h4>
              <div className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>04:30 AM – Early Pickup</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Sunrise at Angkor Wat</li>
                  <li>One of the most iconic travel experiences in Southeast Asia</li>
                </ul>
                <p><strong>Morning Visits</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Angkor Thom (ancient city)</li>
                  <li>Bayon Temple (smiling faces)</li>
                  <li>Ta Prohm (jungle temple)</li>
                </ul>
                <p><strong>12:30 PM – Lunch Break</strong></p>
                <p><strong>Afternoon</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Baphuon Temple</li>
                  <li>Terrace of the Elephants</li>
                </ul>
                <p><strong>04:30 PM – Return Hotel</strong></p>
                <p className="italic text-sm">👉 Visiting early helps avoid crowds and heat</p>
              </div>
            </div>

            <Separator />

            {/* Day 2 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">🌿 Day 2 – Grand Circuit & Banteay Srei</h4>
              <div className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>08:00 AM – Departure</strong></p>
                <p><strong>Morning Temples</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Preah Khan Temple</li>
                  <li>Neak Pean</li>
                  <li>Ta Som</li>
                </ul>
                <p><strong>Lunch Break</strong></p>
                <p><strong>Afternoon</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Banteay Srei</li>
                </ul>
                <p className="italic text-sm">👉 Famous for pink sandstone carvings (finest in Angkor)</p>
                <p><strong>05:00 PM – Return</strong></p>
              </div>
            </div>

            <Separator />

            {/* Day 3 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2 flex items-center gap-2">
                <Ship className="w-4 h-4" /> Day 3 – Floating Village & Local Life
              </h4>
              <div className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>08:30 AM – Departure</strong></p>
                <p><strong>Visit: Kampong Phluk</strong></p>
                <p><strong>Activities</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Boat ride on Tonlé Sap Lake</li>
                  <li>Explore stilt houses & flooded forest</li>
                  <li>Learn about fishing communities</li>
                </ul>
                <p className="italic text-sm">👉 Tonlé Sap is Southeast Asia's largest freshwater lake</p>
                <p><strong>Afternoon</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Visit local markets & countryside villages</li>
                </ul>
                <p><strong>Evening (Optional)</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Phare Circus show</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Day 4 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2 flex items-center gap-2">
                <Mountain className="w-4 h-4" /> Day 4 – Kulen Mountain & Waterfall
              </h4>
              <div className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>08:00 AM – Departure to Phnom Kulen National Park</strong></p>
                <p><strong>Activities</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Visit River of 1000 Lingas</li>
                  <li>Reclining Buddha temple</li>
                  <li>Swim at Kulen Waterfall</li>
                </ul>
                <p className="italic text-sm">👉 Kulen is considered the birthplace of the Khmer Empire</p>
                <p><strong>03:30 PM – Return to Siem Reap</strong></p>
              </div>
            </div>

            <Separator />

            {/* Day 5 */}
            <div>
              <h4 className="font-serif text-md font-semibold text-primary mb-2">🌅 Day 5 – Hidden Temples & City Tour</h4>
              <div className="text-muted-foreground leading-relaxed text-base space-y-2">
                <p><strong>Option A: Hidden Temples</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Beng Mealea (jungle temple)</li>
                </ul>
                <p><strong>Option B: City & Culture</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Artisans Angkor workshop</li>
                  <li>Old Market & Pub Street</li>
                  <li>Local pagoda visit</li>
                </ul>
                <p><strong>Afternoon</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Free time / shopping / spa</li>
                </ul>
                <p><strong>End of Tour</strong></p>
              </div>
            </div>

            <Separator />

            {/* Pricing */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">💰 Pricing Tiers</h4>
              <div className="text-muted-foreground text-base space-y-3">
                <div>
                  <p className="font-medium text-foreground">🚗 Private Tour (5 Days Package)</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>1–2 persons: $450 – $650</li>
                    <li>3–5 persons: $650 – $900</li>
                    <li>6–10 persons: $900 – $1,300</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">👥 Group Tour</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Per person: $180 – $350</li>
                  </ul>
                </div>
                <p className="italic text-sm">👉 Prices vary depending on: Hotel category, Transport type, Guide service</p>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" /> Includes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Hotel pickup & drop-off</li>
                  <li>• Private air-conditioned vehicle</li>
                  <li>• Professional English-speaking guide</li>
                  <li>• Drinking water & cold towels</li>
                  <li>• Boat ticket (floating village)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive" /> Excludes
                </h4>
                <ul className="text-muted-foreground space-y-1 text-base">
                  <li>• Angkor Pass ($37–$62 depending days)</li>
                  <li>• Kulen National Park ticket</li>
                  <li>• Meals & drinks</li>
                  <li>• Personal expenses</li>
                  <li>• Tips & travel insurance</li>
                </ul>
              </div>
            </div>

            <Separator />

            {/* Best Time */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" /> Best Time to Visit
              </h4>
              <div className="text-muted-foreground text-base space-y-1">
                <p>✅ <strong>Peak Season (Best):</strong> November – February — Cool, dry, ideal for temples</p>
                <p>☀️ <strong>Hot Season:</strong> March – May — Very hot but fewer crowds</p>
                <p>🌧️ <strong>Green Season:</strong> June – October — Lush landscapes, fewer tourists</p>
              </div>
            </div>

            <Separator />

            {/* Highlights */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" /> Highlights
              </h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>⭐ Sunrise at Angkor Wat</li>
                <li>⭐ 2 full days exploring Angkor temples</li>
                <li>⭐ Floating village on Tonlé Sap</li>
                <li>⭐ Kulen Mountain waterfall & nature</li>
                <li>⭐ Hidden jungle temples</li>
                <li>⭐ Authentic Cambodian local life</li>
              </ul>
            </div>

            <Separator />

            {/* Travel Tips */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" /> Travel Tips
              </h4>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>💡 Buy a 3-day Angkor Pass (best value)</li>
                <li>💡 Start early to avoid heat</li>
                <li>💡 Wear comfortable shoes</li>
                <li>💡 Dress respectfully (temple rules)</li>
                <li>💡 Bring sunscreen & insect repellent</li>
              </ul>
            </div>

            <Separator />

            {/* Essential Items */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Backpack className="w-4 h-4 text-primary" /> Essential Items
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground text-base">
                <div>
                  <p className="font-medium text-foreground mb-1">Recommended</p>
                  <ul className="space-y-1">
                    <li>• Camera with extra batteries</li>
                    <li>• Small backpack</li>
                    <li>• Cash for breakfast</li>
                    <li>• Sun protection (hat, sunscreen)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Leave at Hotel</p>
                  <ul className="space-y-1">
                    <li>• Passport (bring a copy)</li>
                    <li>• Airline tickets</li>
                    <li>• Excess cash</li>
                    <li>• Valuable jewelry</li>
                  </ul>
                </div>
              </div>
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

            {/* Terms */}
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-primary" /> Terms & Conditions
              </h4>
              <p className="text-muted-foreground text-base font-medium mb-1">Journey Cambodia's Terms & Conditions</p>
              <ul className="text-muted-foreground space-y-1 text-base">
                <li>• Booking confirmation required in advance</li>
                <li>• Free cancellation: 24–48 hours before tour</li>
                <li>• Child policy: discounts available</li>
                <li>• Tour operates year-round</li>
                <li>• Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            <Separator />

            <div className="text-center">
              <a href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Essential%20Cambodia%205-Day%20Tour.%20Could%20you%20please%20provide%20more%20details%3F" target="_blank" rel="noopener noreferrer">
                <Button variant="nature" size="lg" className="w-full md:w-auto">Book Now via WhatsApp</Button>
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EssentialCambodia5DayTourPopup;
