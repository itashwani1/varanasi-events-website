import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Calendar, Sparkles, Flower2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroAarti from "@/assets/hero-ganga-aarti.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";

const heroSlides = [
  { image: heroAarti, title: "Sacred Ganga Aarti Ceremonies", subtitle: "Experience divine celebrations on the holy ghats of Varanasi" },
  { 
    image: heroWedding,
    title: "माँ गंगा की दिव्य आरती \n विवाह एवं विशेष अवसरों के लिए", 
    subtitle: "पारंपरिक विधि • अनुभवी पंडित • पूर्ण वैदिक व्यवस्था" 
  },
];

const services = [
  { icon: Heart, title: "Wedding Aarti Ceremony", desc: "Sacred wedding rituals and divine Ganga Aarti arrangements", link: "/services" },
  { icon: Sparkles, title: "Ganga Aarti Ceremony", desc: "Sacred ceremonies at the iconic Assi Ghat", link: "/services" },
  { icon: Flower2, title: "उपनयन संस्कार (Upnayan Sanskar)", desc: "वैदिक विधि द्वारा पवित्र यज्ञोपवीत संस्कार का आयोजन, अनुभवी पंडितों के साथ।", link: "/services" },
  { icon: Landmark, title: "मंदिर एवं आरती दर्शन सेवा", desc: "श्रद्धालुओं के लिए मंदिर दर्शन एवं विशेष गंगा आरती दर्शन की व्यवस्था", link: "/services" },
];

const testimonials = [
  { name: "Priya & Rahul Sharma", event: "Wedding", text: "They turned our dream wedding into reality. Every detail was perfect, from the mandap to the Ganga Aarti.", rating: 5 },
  { name: "Ankit Gupta", event: "Upnayan Sanskar", text: "The most professional event team in Varanasi. The sacred thread ceremony was conducted with complete Vedic traditions.", rating: 5 },
  { name: "Meera Devi", event: "Birthday Party", text: "My daughter's birthday was magical! The decorations were stunning and everything went smoothly.", rating: 5 },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: currentSlide === i ? 1 : 0 }}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 max-w-3xl"
          >
            <p className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Varanasi's Premier Event Planners
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight whitespace-pre-line">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light font-semibold text-base px-8">
                  Book via WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold text-base px-8">
                  Send Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === i ? "bg-gold" : "bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-secondary text-sm tracking-[0.2em] uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Our Services</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={s.link}>
                  <Card className="group h-full hover:shadow-lg transition-all border-secondary/20 hover:border-secondary/40 bg-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <s.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 gradient-maroon text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Events Managed" },
              { num: "12+", label: "Years Experience" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "50+", label: "Venues Partnered" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold">{s.num}</p>
                <p className="text-sm mt-1 text-gold-light/80">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-secondary text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">What Our Clients Say</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-secondary/20 bg-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Testimonials <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-maroon text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gold mb-4">
              Let's Plan Your Dream Event
            </h2>
            <p className="text-gold-light/80 mb-8 max-w-lg mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life in the spiritual city of Varanasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light font-semibold px-8">
                  WhatsApp Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 font-semibold px-8">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
