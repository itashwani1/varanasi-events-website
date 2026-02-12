import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroAarti from "@/assets/hero-ganga-aarti.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import aboutImg from "@/assets/about-varanasi.jpg";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpeg";

const categories = ["All", "Weddings", "Ganga Aarti", "Decor", "Events"];

// Placeholder gallery using generated images
const galleryItems = [
  //{ src: heroAarti, category: "Ganga Aarti", alt: "Ganga Aarti ceremony at Varanasi ghats" },
  { src: img3, category: "Weddings", alt: "Royal wedding mandap decoration" },
  { src: img5, category: "Events", alt: "Varanasi aerial view" },
  { src: img2, category: "Ganga Aarti", alt: "Evening aarti with diyas" },
  { src: img6, category: "Decor", alt: "Marigold and rose mandap decoration" },
  { src: img4, category: "Events", alt: "Ghats during festival" },
  { src: img1, category: "Events", alt: "Ghats during festival" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="py-20 pt-28 bg-maroon-dark text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Our Work</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold">Gallery</h1>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gold" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <img
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
