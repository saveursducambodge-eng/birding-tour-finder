import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImagePreloader from "./components/ImagePreloader";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import GalleryPage from "./pages/GalleryPage";
import ConservationPage from "./pages/ConservationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ImagePreloader>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/conservation" element={<ConservationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </BrowserRouter>
      </ImagePreloader>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;