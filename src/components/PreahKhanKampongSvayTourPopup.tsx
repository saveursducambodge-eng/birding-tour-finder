import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, MapPin, CheckCircle, XCircle, Sun, UtensilsCrossed, Camera, ShieldAlert } from "lucide-react";

interface PreahKhanKampongSvayTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreahKhanKampongSvayTourPopup = ({ isOpen, onClose }: PreahKhanKampongSvayTourPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 space-y-8">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
                Full-Day Tour to Preah Khan Kampong Svay Adventure
              </DialogTitle>
            </DialogHeader>

            {/* Overview */}
            <p className="text-muted-foreground text-base leading-relaxed text-justify">
              Explore one of Cambodia's largest and least-visited Angkorian complexes, hidden deep in the jungle. This ancient city, also known as "Bakan," was a major religious, industrial, and strategic center of the Khmer Empire, connected to Angkor by the royal road network.
            </p>

            {/* Duration */}
            <div className="flex flex-wrap gap-4 text-base">
              <span className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4 text-primary" /> Full Day (10–12 hours)</span>
              <span className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> Best departure from Siem Reap or Kampong Thom</span>
            </div>

            {/* Itinerary */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🗓️ Full Itinerary</h3>
              <div className="space-y-4 text-base text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">06:30 AM – Hotel Pickup</p>
                  <p className="text-justify">Early departure from Siem Reap (recommended due to distance). Travel by private vehicle through rural Cambodia. Optional stop for coffee / local market.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">10:30 AM – Arrival at Preah Khan Kampong Svay</p>
                  <p className="text-justify">Meet local guide (optional but recommended). Introduction to the ancient city of Bakan.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">🏛️ Temple Exploration</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 text-justify">
                    <li><strong>Main Temple Complex (Central Sanctuary)</strong> – Walk through massive outer enclosure (one of the largest in Angkorian era). Explore ancient corridors, towers, and carvings. Learn about Mahayana Buddhist influence and "pure land" concept.</li>
                    <li><strong>Prasat Preah Stung</strong> – Unique four-faced tower (Bayon-style architecture). Symbol of a powerful Khmer provincial city.</li>
                    <li><strong>Prasat Preah Thkol (Mebon Temple)</strong> – Located on an island in the baray (ancient reservoir). Scenic and rarely visited.</li>
                    <li><strong>Prasat Damrei (Elephant Temple)</strong> – Pyramid structure with elephant statues. Similar style to Angkor temples but more remote.</li>
                    <li><strong>Ancient Baray & Moat System</strong> – Massive water reservoir (approx. 3 km long). Demonstrates advanced Khmer engineering.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">🌿 Jungle Experience</p>
                  <p className="text-justify">Walk through quiet forest paths. Enjoy untouched archaeological landscape. Very few tourists — peaceful exploration.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">01:30 PM – Lunch Break</p>
                  <p className="text-justify">Picnic lunch near temple area or local restaurant in nearby village.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">02:30 PM – Continue Exploration / Free Time</p>
                  <p className="text-justify">Photography and deeper exploration. Optional visit to nearby villages.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">03:30 PM – Return Journey</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">07:30 PM – Hotel Drop-off (Siem Reap)</p>
                  <p>End of tour.</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">💰 Pricing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">🚗 Private Tour</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>1–2 persons: $180–$220</li>
                    <li>3–5 persons: $220–$280</li>
                    <li>6–10 persons: $300–$380</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">👥 Group Tour</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Per person: $60–$100</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">Prices vary depending on vehicle type, road conditions, and guide service.</p>
                </div>
              </div>
            </div>

            {/* Includes / Excludes */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Includes</h4>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li>Hotel pickup & drop-off</li>
                  <li>Private air-conditioned vehicle (or 4WD if needed)</li>
                  <li>English-speaking guide</li>
                  <li>Entrance fee</li>
                  <li>Drinking water & cold towels</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2"><XCircle className="w-4 h-4 text-red-600" /> Excludes</h4>
                <ul className="space-y-1 text-base text-muted-foreground">
                  <li>Meals & drinks</li>
                  <li>Personal expenses</li>
                  <li>Tips (guide & driver)</li>
                  <li>Travel insurance</li>
                </ul>
              </div>
            </div>

            {/* Essential Items */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🎒 Essential Items</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Recommended</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Camera with extra batteries</li>
                    <li>Small backpack</li>
                    <li>Cash for breakfast</li>
                    <li>Sun protection (hat, sunscreen)</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Leave at Hotel</h4>
                  <ul className="space-y-1 text-base text-muted-foreground">
                    <li>Passport (bring a copy)</li>
                    <li>Airline tickets</li>
                    <li>Excess cash</li>
                    <li>Valuable jewelry</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📅 Best Time to Visit</h3>
              <div className="space-y-2 text-base text-muted-foreground">
                <p><strong className="text-foreground">✅ Best Season:</strong> November – February (cool & dry) 🌿 — Comfortable weather for long walks.</p>
                <p><strong className="text-foreground">🌧️ Green Season:</strong> June – October — Beautiful jungle scenery but road can be muddy (4WD recommended).</p>
                <p><strong className="text-foreground">☀️ Hot Season:</strong> March – May — Very hot, early departure essential.</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">⭐ Highlights</h3>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• Largest single religious complex of Angkorian era</li>
                <li>• Remote & untouched (very few tourists)</li>
                <li>• Unique mix of Buddhism, industry, and urban planning</li>
                <li>• Massive baray and hydraulic system</li>
                <li>• Authentic jungle temple experience</li>
              </ul>
            </div>

            {/* Travel Tips */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">💡 Travel Tips</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Wear strong walking shoes</li>
                <li>• Bring mosquito repellent</li>
                <li>• Carry snacks (limited facilities)</li>
                <li>• Start early (long travel distance)</li>
                <li>• Consider 4WD in rainy season</li>
              </ul>
            </div>

            {/* Optional Add-ons */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📌 Optional Add-ons</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Combine with Koh Ker Temple (2-day tour)</li>
                <li>• Add Beng Mealea on return route</li>
                <li>• Overnight stay in Preah Vihear province</li>
              </ul>
            </div>

            {/* Weather */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🌤️ Weather</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Hot and dry weather is expected throughout this tour. There is always the possibility of a shower or two, given the world's changing climate, but it is likely to be dry most, if not all, of the time. Midday temperatures are likely to be very hot, but most of the woodland sites we visit have low humidity. Wetland sites, however, can be fairly humid by their very nature. The tour has been paced so that we have plenty of time and are not forced to be birding throughout the heat of the day to see most of the birds.
              </p>
            </div>

            {/* Food */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">🍜 Food</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Khmer cuisine is similar to most Southeast Asian cooking, but rather less spicy. The traditional cuisine of the country is recovering after much of the knowledge being lost through the years of war here, but staff at the lodges we visit cook a wide variety of good local food. The former French influence manifests itself in the fact that good bread is available in many areas, and for those who like beer, there is a surprisingly wide range of local brews to try.
              </p>
            </div>

            {/* Terms & Conditions */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">📋 Terms & Conditions</h3>
              <ul className="space-y-1 text-base text-muted-foreground">
                <li>• Booking confirmation required in advance</li>
                <li>• Free cancellation: 24–48 hours before tour</li>
                <li>• Child policy: discounts available</li>
                <li>• Tour operates year-round</li>
                <li>• Refunds will be processed within 5–10 business days</li>
              </ul>
            </div>

            {/* Book Now */}
            <div className="text-center pt-4 pb-2">
              <a
                href="https://wa.me/85581555191?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Day%20to%20Preah%20Khan%20Kampong%20Svay%20tour.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Book Now via WhatsApp
              </a>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PreahKhanKampongSvayTourPopup;
