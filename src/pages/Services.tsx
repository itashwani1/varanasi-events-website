import { motion } from "framer-motion";
import { Heart, Sparkles, PartyPopper, ArrowRight, Flower2, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroWedding from "@/assets/hero-wedding.jpg";

const services = [
  {
    icon: Heart,
    title: "Wedding Aarti Ceremony",
    desc: "Sacred wedding rituals and divine Ganga Aarti arrangements to make your special day spiritually unforgettable.",
    details: ["Wedding Ganga Aarti", "Mandap & Ritual Setup", "Experienced Priests", "Vedic Mantra Chanting", "Puja Samagri Arrangement", "Photography & Videography"],
  },
  {
    icon: Sparkles,
    title: "Ganga Aarti Ceremony",
    desc: "Experience the divine Ganga Aarti on the ghats of Varanasi, organized with exclusive VIP seating and personalized rituals.",
    details: ["VIP ghat seating", "Personalized puja", "Flower & diya arrangements", "Priest coordination", "Boat ride add-on", "Photography"],
  },
  {
    icon: Flower2,
    title: "उपनयन संस्कार (Upnayan Sanskar)",
    desc: "वैदिक विधि द्वारा पवित्र यज्ञोपवीत संस्कार का आयोजन, अनुभवी पंडितों के साथ।",
    details: ["वैदिक मंत्रोच्चार", "विवाह कार्यक्रम", "मंत्र जाप", "गृह प्रवेश", "Vedic Mantra Chanting", "Complete Puja Samagri"],
  },
  {
    icon: Landmark,
    title: "मंदिर एवं आरती दर्शन सेवा",
    desc: "वाराणसी आने वाले श्रद्धालुओं के लिए मंदिर दर्शन एवं विशेष गंगा आरती दर्शन की व्यवस्था।",
    details: ["VIP गंगा आरती दर्शन", "काशी विश्वनाथ मंदिर दर्शन", "स्थानीय मार्गदर्शक", "प्राथमिक प्रवेश सहायता", "नाव द्वारा आरती दर्शन", "होटल पिकअप सुविधा"],
  },
  {
    icon: PartyPopper,
    title: "Festival & Special Events",
    desc: "Diwali parties, Holi celebrations, Dev Deepawali events — bring any festival to life with our expert planning.",
    details: ["Festival-specific decor", "Cultural performances", "Food & sweets", "Fireworks coordination", "Guest management", "Traditional rituals"],
  },
];

const Services = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <img src={heroWedding} alt="Wedding mandap" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Our Services</h1>
        </motion.div>
      </div>
    </section>

    {/* Services List */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors overflow-hidden bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                      {s.details.map((d) => (
                        <span key={d} className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
                          {d}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(s.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Inquire Now <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
