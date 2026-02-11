import { motion } from "framer-motion";
import { Award, Users, MapPin, Clock } from "lucide-react";
import aboutImg from "@/assets/about-varanasi.jpg";

const stats = [
  { icon: Award, num: "500+", label: "Events Delivered" },
  { icon: Users, num: "1000+", label: "Happy Clients" },
  { icon: MapPin, num: "50+", label: "Venue Partners" },
  { icon: Clock, num: "12+", label: "Years of Experience" },
];

const usps = [
  { title: "Deep Local Knowledge", desc: "Born and raised in Varanasi, we know every ghat, temple, and venue." },
  { title: "End-to-End Service", desc: "From planning to execution, we handle everything so you don't have to worry." },
  { title: "Cultural Expertise", desc: "We specialize in traditional rituals, ensuring authenticity in every ceremony." },
  { title: "Trusted Vendor Network", desc: "We work with the best caterers, decorators, and artists in the region." },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <img src={aboutImg} alt="Varanasi ghats at golden hour" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-4">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">About Us</h1>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Crafting Celebrations in the City of Light
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded over a decade ago, Varanasi Events has grown from a small family-run business into
              the city's most trusted event planning company. Our passion for creating unforgettable
              experiences is rooted in the rich cultural heritage of Kashi — the eternal city.
            </p>
            <p>
              We specialize in weaving tradition with modern elegance. Whether it's a grand wedding on the
              ghats, a sacred Ganga Aarti ceremony, or a vibrant corporate gathering, we pour our heart
              into every detail. Our team understands the pulse of Varanasi — from the best pandit jis for
              rituals to the finest decorators for mandaps.
            </p>
            <p>
              Our mission is simple: to make your celebration as divine as Varanasi itself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 gradient-maroon">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
            <p className="text-3xl font-heading font-bold text-gold">{s.num}</p>
            <p className="text-sm text-gold-light/80">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* USPs */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-secondary text-sm tracking-[0.2em] uppercase mb-2">Why Us</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Why Choose Varanasi Events</h2>
          <div className="w-20 h-0.5 bg-secondary mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {usps.map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-secondary/20"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{u.title}</h3>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
