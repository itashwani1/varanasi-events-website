import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-gold-light/80">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gold mb-3">🪷 GangaArtiEvent.in</h3>
            <p className="text-sm leading-relaxed">
              Book VIP Ganga Aarti, Wedding ceremonies, Temple Darshan & sacred Sanskar rituals in the holy city of Varanasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Wedding Aarti Ceremony</li>
              <li>Ganga Aarti Ceremony</li>
              <li>Upnayan Sanskar</li>
              <li>Temple & Aarti Darshan Services</li>
              <li>Festival & Special Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                Assi - Lanka Rd, Varanasi, Uttar Pradesh 221005
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+917485002623" className="hover:text-gold transition-colors">+91 74850 02623</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:chaubeyabhishek080@gmail.com" className="hover:text-gold transition-colors">chaubeyabhishek080@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 text-center text-xs text-gold-light/50">
          <p>© {new Date().getFullYear()} GangaArtiEvent.in - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
