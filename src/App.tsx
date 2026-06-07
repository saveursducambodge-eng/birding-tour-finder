import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import GalleryPage from "./pages/GalleryPage";
import ConservationPage from "./pages/ConservationPage";

import ContactPage from "./pages/ContactPage";
import TempleToursPage from "./pages/TempleToursPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import VideoBlogPage from "./pages/VideoBlogPage";
import GiantIbisPage from "./pages/GiantIbisPage";
import BengalFloricanPage from "./pages/BengalFloricanPage";
import PrekToalPage from "./pages/PrekToalPage";
import SarusCranePage from "./pages/SarusCranePage";
import WhiteShoulderedIbisPage from "./pages/WhiteShoulderedIbisPage";
import GreenPeafowlPage from "./pages/GreenPeafowlPage";
import MekongWagtailPage from "./pages/MekongWagtailPage";
import CambodianTailorbirdPage from "./pages/CambodianTailorbirdPage";
import BirdingSiemReapPage from "./pages/BirdingSiemReapPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/temple-tours" element={<TempleToursPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/conservation" element={<ConservationPage />} />
                
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/video-blog" element={<VideoBlogPage />} />
                <Route path="/giant-ibis" element={<GiantIbisPage />} />
                <Route path="/bengal-florican" element={<BengalFloricanPage />} />
                <Route path="/prek-toal" element={<PrekToalPage />} />
                <Route path="/sarus-crane" element={<SarusCranePage />} />
                <Route path="/white-shouldered-ibis" element={<WhiteShoulderedIbisPage />} />
                <Route path="/green-peafowl" element={<GreenPeafowlPage />} />
                <Route path="/mekong-wagtail" element={<MekongWagtailPage />} />
                <Route path="/cambodian-tailorbird" element={<CambodianTailorbirdPage />} />
                <Route path="/birding-siem-reap" element={<BirdingSiemReapPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;