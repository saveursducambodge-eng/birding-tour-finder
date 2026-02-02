import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { CalendarIcon, Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
const ContactPage = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    tour: string;
    message: string;
    groupSize: string;
    preferredDate: string;
    dateRange?: DateRange;
  }>({
    name: "",
    email: "",
    tour: "",
    message: "",
    groupSize: "",
    preferredDate: "",
    dateRange: undefined
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare email content
    const subject = `Tour Inquiry - ${formData.tour || 'General Inquiry'}`;
    const body = `
Tour Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Selected Tour: ${formData.tour || 'Not specified'}
Group Size: ${formData.groupSize || 'Not specified'} people
Travel Period: ${formData.preferredDate || 'Not specified'}

Message:
${formData.message || 'No additional message'}

---
This inquiry was submitted through the Cambodia Bird Tours website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:pearaingbirdingtrails@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
    toast({
      title: "Email Client Opened!",
      description: "Your email client should now be open with the inquiry details. Please send the email to complete your booking request."
    });
  };
  const handleInputChange = (field: string, value: string | any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const contactInfo = [{
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    details: "+855 89 529 696",
    description: "WhatsApp available"
  }, {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    details: "pearaingbirdingtrails@gmail.com",
    description: "Available 24/7 - Response within 24h"
  }, {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    details: "Siem Reap, Cambodia",
    description: "Tours across Cambodia"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Operating Hours",
    details: "6:00 AM - 6:00 PM",
    description: "7 days a week"
  }];
  const tours = ["Half-Day Birding Near Siem Reap - Pearaing Biodiversity Conservation Center (Half Day - 4 hours)", "Full Bird at Prek Toal Waterbird Sanctuary and Visit Prek Toal Floating village (Full Day - 11 hours)", "Trip full day to Koh Ker & Beng Melea for Bird watching and Temple Tour (Full Day - 12.5 hours)", "Full Birding and Angkor Wat Temple Tour (Full Day - 12.5 hours)", "Birding at Tmatboey - Bengal Florican Grassland and Presh Vihear Temple (3 Days / 2 Nights)", "7 Day Focus Target Tours species - Dream Birding Trip to Cambodia (7 Days / 6 Nights)", "10-Day Birding Trip to Cambodia - Dream Birding Trip to Cambodia (10 Days / 9 Nights)", "Bird Watching Itinerary in Cambodia: 14-Day Tours - Rare Bird Itinerary in Cambodia (14 Days / 13 Nights)", "Bird Watching Itinerary in Cambodia: 15-Day Tours - Rare Bird Itinerary in Cambodia (15 Days / 14 Nights)", "Bird Watching Itinerary in Cambodia: 19-Day Tours - Rare Bird Itinerary in Cambodia (19 Days / 18 Nights)", "Essential Cambodia 8th-23rd March 2026 - Dream Birding Trip to Cambodia (16 Days / 15 Nights)", "Custom Tour Request"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-gradient-nature">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-nature-forest text-white text-xs sm:text-sm">
              Get In Touch
            </Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Plan Your Perfect
              <span className="block text-nature-forest">Birding Adventure</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Ready to explore Cambodia's magnificent birdlife? Contact us to customize your perfect birding experience or get answers to any questions about our tours.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {contactInfo.map((info, index) => <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-nature-forest/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-nature-forest">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-primary text-sm sm:text-base">{info.title}</h3>
                    <p className="font-medium mb-1 text-sm sm:text-base">{info.details}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12 sm:py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <Card className="shadow-float">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-serif text-xl sm:text-2xl text-primary flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    Book Your Tour
                  </CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Fill out the form below and Ladong will get back to you within 24 hours 
                    with a customized itinerary and pricing.
                  </p>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Full Name *
                        </label>
                        <Input required value={formData.name} onChange={e => handleInputChange("name", e.target.value)} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email Address *
                        </label>
                        <Input type="email" required value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Preferred Tour
                      </label>
                      <Select value={formData.tour} onValueChange={value => handleInputChange("tour", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tour or request custom" />
                        </SelectTrigger>
                        <SelectContent>
                          {tours.map(tour => <SelectItem key={tour} value={tour}>
                              {tour}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Group Size
                        </label>
                        <Input type="number" min="1" value={formData.groupSize} onChange={e => handleInputChange("groupSize", e.target.value)} placeholder="Number of people" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Travel Period
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !formData.preferredDate && "text-muted-foreground")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.preferredDate ? formData.preferredDate : <span>Select travel dates</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="range" selected={formData.dateRange} onSelect={range => {
                            if (range?.from && range?.to) {
                              const dateString = `${format(range.from, "PPP")} - ${format(range.to, "PPP")}`;
                              handleInputChange("preferredDate", dateString);
                              handleInputChange("dateRange", range);
                            } else if (range?.from) {
                              handleInputChange("preferredDate", format(range.from, "PPP"));
                              handleInputChange("dateRange", range);
                            }
                          }} numberOfMonths={2} className="pointer-events-auto" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea rows={4} value={formData.message} onChange={e => handleInputChange("message", e.target.value)} placeholder="Tell us about your birding interests, experience level, and any special requests..." />
                    </div>

                    <Button type="submit" size="lg" variant="nature" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map & Additional Info */}
              <div className="space-y-8">

                {/* Quick Response Info */}
                <Card className="bg-nature-forest text-white">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-4">
                      Why Choose PEARAING Birding Trails?
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Badge className="bg-white/20 text-white border-white/30 text-xs mt-0.5">
                          1
                        </Badge>
                        <span>Expert local guide with 15+ years experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge className="bg-white/20 text-white border-white/30 text-xs mt-0.5">
                          2
                        </Badge>
                        <span>Small groups for personalized attention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge className="bg-white/20 text-white border-white/30 text-xs mt-0.5">
                          3
                        </Badge>
                        <span>Highest success rates for rare species sightings</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* WhatsApp Contact */}
                <Card className="border-2 border-nature-sky/30 bg-nature-sky/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2 text-primary">
                      Need Immediate Response?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For urgent inquiries or last-minute bookings, 
                      contact Chamnan directly via WhatsApp
                    </p>
                    <Button variant="outline" className="border-nature-sky text-nature-sky hover:bg-nature-sky hover:text-white" onClick={() => {
                    const message = "Bonjour, je suis intéressé par vos tours d'observation d'oiseaux.";
                    const whatsappUrl = `https://wa.me/85589529696?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp: +855 89 529 696
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 md:px-6 lg:px-8 bg-nature-sand/20">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary">
                      What's included in tour prices?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      All tours include expert guiding, transportation, entrance fees, 
                      bird identification materials, and conservation donation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary">
                      Do I need birding experience?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Not at all! Ladong tailors each tour to your experience level, 
                      from complete beginners to experienced birders.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary">
                      What should I bring?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Comfortable walking shoes, hat, sunscreen, water bottle. 
                      Binoculars can be provided if needed.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary">
                      Best time for birding in Cambodia?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      November to March offers the best weather and highest bird activity, 
                      but tours operate year-round.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-primary">
                      How far in advance should I book?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We recommend 2-4 weeks advance booking, especially during peak season. 
                      Last-minute bookings may be possible.
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default ContactPage;