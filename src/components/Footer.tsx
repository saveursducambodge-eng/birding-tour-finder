import { Phone, Mail, MapPin, Facebook, Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-nature-forest via-nature-forest-light to-nature-forest text-white mt-16 border-t-4 border-nature-sky/50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Contact Information</h3>
            <div className="flex items-center space-x-3 text-sm sm:text-base">
              <Phone className="w-4 h-4 flex-shrink-0 text-nature-sky" />
              <span className="text-white">+855 89 529 696</span>
            </div>
            <div className="flex items-center space-x-3 text-sm sm:text-base">
              <Mail className="w-4 h-4 flex-shrink-0 text-nature-sky" />
              <span className="break-all text-white">pearaingbirdingtrails@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm sm:text-base">
              <MapPin className="w-4 h-4 flex-shrink-0 text-nature-sky" />
              <span className="text-white">Siem Reap, Cambodia</span>
            </div>
          </div>

          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Cambodia Bird Tours</h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Discover the incredible biodiversity of Cambodia with our expert guides. 
              From the majestic Giant Ibis to colorful kingfishers, experience wildlife like never before.
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cambodiabirdingtours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nature-sky transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@Tmatboeybirdingtours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nature-sky transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://t.me/giantibistours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nature-sky transition-colors duration-200"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tripadvisor.co.uk/Attraction_Review-g297390-d15072032-Reviews-Sourire_Khmer-Siem_Reap_Siem_Reap_Province.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-nature-sky transition-colors duration-200"
                aria-label="TripAdvisor"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6.2 14.5c-1.1 1.1-2.7 1.8-4.4 1.8-1.7 0-3.3-.7-4.4-1.8-1.1-1.1-1.8-2.7-1.8-4.4 0-1.7.7-3.3 1.8-4.4 1.1-1.1 2.7-1.8 4.4-1.8 1.7 0 3.3.7 4.4 1.8 1.1 1.1 1.8 2.7 1.8 4.4 0 1.7-.7 3.3-1.8 4.4z"/>
                  <circle cx="13.8" cy="12" r="2.2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Made by */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Website</h3>
            <p className="text-xs sm:text-sm text-white/90">
              Made with{" "}
              <span className="text-red-400 text-sm sm:text-base">❤️</span>{" "}
              by{" "}
              <a 
                href="https://webalp.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-nature-sky hover:text-nature-sand transition-colors duration-200 underline decoration-transparent hover:decoration-current font-medium"
              >
                webalp
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-nature-sky/30 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            © {new Date().getFullYear()} Cambodia Bird Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;