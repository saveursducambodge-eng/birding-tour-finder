import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, MapPin, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface TourIntroPopupProps {
  isOpen: boolean;
  onClose: () => void;
}
const TourIntroPopup = ({
  isOpen,
  onClose
}: TourIntroPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);
  const handleMeetGuideClick = () => {
    onClose();
    // Navigation will be handled by Link component
  };
  if (!isOpen) return null;
  const tourHighlights = [{
    icon: <MapPin className="w-5 h-5" />,
    title: "Giant Ibis Discovery",
    description: "Witness Cambodia's national bird in its natural habitat"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    title: "18 Unique Tours",
    description: "From half-day adventures to multi-day expeditions, custom tours available"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Expert Guide Chamnan",
    description: "15+ years of birding experience in Cambodia"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Conservation Focus",
    description: "Supporting bird protection and habitat preservation"
  }];
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">
                Welcome to Pearaing Birding Trails
              </h2>
              <p className="text-muted-foreground">
                Discover the magnificent birds of Cambodia with expert guidance
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Giant Ibis Highlight */}
          <div className="bg-gradient-nature rounded-lg p-6 mb-6">
            <Badge className="mb-3 bg-nature-forest text-white">Featured Experience</Badge>
            <h3 className="font-serif text-xl font-semibold mb-2 text-primary">
              Pearaing Biodiversity Conservation - Cambodia's
            </h3>
            <p className="text-sm text-muted-foreground">
              ​Pearaing Birding Trails offers immersive birding and wildlife trips with unique access to conservation sites across Cambodia. Our tours support local communities and promote responsible eco-tourism while showcasing Cambodia’s rich biodiversity.
Pearaing Biodiversity Conservation is an officially government-registered organization in Cambodia. We offer visitors unique access to birding and wildlife sites nationwide, with a mission to sustain Cambodia’s wildlife and communities through responsible ecotourism.

            </p>
          </div>

          {/* Tour Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {tourHighlights.map((highlight, index) => <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border bg-card">
                <div className="text-primary mt-1">{highlight.icon}</div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </div>
              </div>)}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/tours" className="flex-1">
              <Button className="w-full" onClick={onClose}>
                Explore Our Tours
              </Button>
            </Link>
            <Link to="/about" className="flex-1">
              <Button variant="outline" className="w-full" onClick={onClose}>
                Meet Our Guide
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default TourIntroPopup;