import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Tours", path: "/tours" },
    { name: "Gallery", path: "/gallery" },
    { name: "Conservation", path: "/conservation" },
    { name: "Trip Report", path: "/trip-report" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-colors hover:text-primary shrink-0">
          <img
            alt="Pearaing Birding Tours Logo"
            className="h-7 w-7 sm:h-8 sm:w-8"
            src="/lovable-uploads/1f44ea21-da34-4708-b702-7faa33818cdb.jpg"
          />
          <span className="font-serif font-semibold text-sm sm:text-base lg:text-lg text-primary whitespace-nowrap">
            PEARAING Birding Trails
          </span>
        </Link>

        {/* Desktop Navigation - hidden below lg for better spacing with 7 items */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="default" size="sm" className="ml-2">
              <Binoculars className="w-4 h-4 mr-2" />
              Book Tour
            </Button>
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile/Tablet Navigation Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm transition-all duration-300 ease-in-out z-40",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block py-3 px-4 text-base font-medium transition-all duration-200 rounded-lg",
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50",
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 px-4">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full" size="lg">
                <Binoculars className="w-5 h-5 mr-2" />
                Book Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
