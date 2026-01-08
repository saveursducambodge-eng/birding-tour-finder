import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Our Tours",
    path: "/tours"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "Conservation",
    path: "/conservation"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-primary">
          <img alt="Pearaing Birding Tours Logo" className="h-7 w-7 sm:h-8 sm:w-8" src="/lovable-uploads/1f44ea21-da34-4708-b702-7faa33818cdb.jpg" />
          <span className="font-serif font-semibold text-base sm:text-lg text-primary">Pearaing Birding Tours</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <Link key={item.name} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === item.path ? "text-primary" : "text-muted-foreground")}>
              {item.name}
            </Link>)}
          <Link to="/contact">
            <Button variant="default" size="sm" asChild className="ml-4">
              <span>
                <Binoculars className="w-4 h-4 mr-2" />
                Book Tour
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map(item => <Link key={item.name} to={item.path} className={cn("block py-2 text-sm font-medium transition-colors hover:text-primary", location.pathname === item.path ? "text-primary" : "text-muted-foreground")} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
            <Link to="/contact">
              <Button className="w-full mt-4">
                <Binoculars className="w-4 h-4 mr-2" />
                Book Tour
              </Button>
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navigation;