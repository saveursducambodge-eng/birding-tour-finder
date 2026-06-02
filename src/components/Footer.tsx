import { Phone, Mail, MapPin, Send } from "lucide-react";
import partnerLogo from "@/assets/partner-logo.jpg";
import facebookLogo from "@/assets/social/facebook.png.asset.json";
import youtubeLogo from "@/assets/social/youtube.webp.asset.json";
import tripadvisorLogo from "@/assets/social/tripadvisor.png.asset.json";
import getyourguideLogo from "@/assets/social/getyourguide.png.asset.json";
import viatorLogo from "@/assets/social/viator.png.asset.json";
const Footer = () => {
  return <footer className="bg-gradient-to-r from-nature-forest via-nature-forest-light to-nature-forest text-white mt-16 border-t-4 border-nature-sky/50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
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
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Pearaing Conservation Tours</h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Discover the incredible biodiversity of Cambodia with our expert guides. Our guide has over 10 years of experience leading birding tours across Cambodia, with extensive knowledge of the country’s key birding sites and wildlife. 
            
          </p>
          </div>

          {/* Social Media */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pearaingbirdingtrails" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="Facebook">
                <img src={facebookLogo.url} alt="Facebook" className="w-6 h-6 rounded" />
              </a>
              <a href="https://www.youtube.com/@Tmatboeybirdingtours" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="YouTube">
                <img src={youtubeLogo.url} alt="YouTube" className="w-6 h-6 rounded" />
              </a>
              <a href="https://t.me/giantibistours" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="Telegram">
                <Send className="w-6 h-6" />
              </a>
              <a href="https://www.tripadvisor.com/Attraction_Review-g297390-d12290404-Reviews-Pearaing_Biodiversity_Conservation_Center-Siem_Reap_Siem_Reap_Province.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="TripAdvisor">
                <img src={tripadvisorLogo.url} alt="TripAdvisor" className="w-6 h-6 rounded" />
              </a>
              <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="GetYourGuide">
                <img src={getyourguideLogo.url} alt="GetYourGuide" className="w-6 h-6 rounded" />
              </a>
              <a href="https://www.viator.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nature-sky transition-colors duration-200" aria-label="Viator">
                <img src={viatorLogo.url} alt="Viator" className="w-6 h-6 rounded" />
              </a>
            </div>
          </div>

          {/* Our Partner */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">OUR PARTNER</h3>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-nature-sky/50">
              <img src={partnerLogo} alt="Partner Logo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Made by */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-nature-sand">Website</h3>
            <p className="text-xs sm:text-sm text-white/90">
              Made with{" "}
              <span className="text-red-400 text-sm sm:text-base">❤️</span>{" "}
              by{" "}
              <a href="https://webalp.ch" target="_blank" rel="noopener noreferrer" className="text-nature-sky hover:text-nature-sand transition-colors duration-200 underline decoration-transparent hover:decoration-current font-medium">
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
    </footer>;
};
export default Footer;