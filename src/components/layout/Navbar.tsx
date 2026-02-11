import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maroon-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-bold text-gold">🪷</span>
            <div className="leading-tight">
              <span className="text-lg md:text-xl font-heading font-bold text-gold">Varanasi Events</span>
              <span className="hidden sm:block text-[10px] text-gold-light tracking-[0.2em] uppercase">
                Weddings & Celebrations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-gold bg-gold/10"
                    : "text-gold-light/80 hover:text-gold hover:bg-gold/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="ml-2 bg-gold text-charcoal hover:bg-gold-light font-semibold">
                Book Now
              </Button>
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+917485002623" className="p-2 text-gold">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gold">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-maroon-dark border-t border-gold/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-gold bg-gold/10"
                    : "text-gold-light/80 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-gold text-charcoal hover:bg-gold-light font-semibold">
                Book Now via WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
