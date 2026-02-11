import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Priya & Rahul Sharma", event: "Destination Wedding", text: "Our wedding on the ghats was nothing short of magical. Every single detail was handled with love and precision. The mandap was breathtaking and the Ganga Aarti ceremony left our guests speechless.", rating: 5 },
  { name: "Ankit Gupta", event: "Corporate Conference", text: "We hosted a 200-person conference and the team managed everything flawlessly — from AV setup to catering. Highly professional and culturally enriching experience.", rating: 5 },
  { name: "Meera Devi", event: "60th Birthday Celebration", text: "My mother's 60th birthday was absolutely perfect. The decorations, food, and entertainment were top-notch. Everyone still talks about it!", rating: 5 },
  { name: "Amit & Sneha Verma", event: "Wedding", text: "From the first meeting to the vidaai, the team was incredible. They understood our vision and made it even better. Best wedding planners in Varanasi!", rating: 5 },
  { name: "Rajesh Tiwari", event: "Ganga Aarti Private Ceremony", text: "We organized a private Ganga Aarti for our family reunion. The coordination with priests, the VIP seating, and the boat arrangements — everything was perfect.", rating: 5 },
  { name: "Sunita Agarwal", event: "Festival Event", text: "Our Diwali celebration was organized beautifully. The decorations captured the true spirit of the festival and the cultural performances were a hit.", rating: 4 },
];

const Testimonials = () => (
  <>
    {/* Hero */}
    <section className="py-20 pt-28 bg-maroon-dark text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4">
        <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Client Love</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold">Testimonials</h1>
      </motion.div>
    </section>

    {/* Testimonials Grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full border-secondary/20 bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">"{t.text}"</p>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.event}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
