import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", eventType: "", date: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with form data
    const message = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email || 'Not provided'}\n` +
      `*Event Type:* ${form.eventType}\n` +
      `*Preferred Date:* ${form.date || 'Not specified'}\n` +
      `*Budget Range:* ${form.budget || 'Not specified'}\n` +
      `*Message:* ${form.message || 'No message'}`
    );

    const whatsappUrl = `https://wa.me/917485002623?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    toast({ 
      title: "Opening WhatsApp...", 
      description: "Please send the pre-filled message to complete your inquiry." 
    });
    
    // Reset form
    setForm({ name: "", phone: "", email: "", eventType: "", date: "", budget: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 pt-28 bg-maroon-dark text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4">
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold">Contact Us</h1>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 74850 02623" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Event Type *</Label>
                    <Select value={form.eventType} onValueChange={(v) => setForm({ ...form, eventType: v })}>
                      <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="ganga-aarti">Ganga Aarti</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="festival">Festival Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </div>
                </div>
                <div>
                  <Label>Budget Range</Label>
                  <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                    <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                      <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                      <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                      <SelectItem value="above-10l">Above ₹10,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your event..." rows={4} />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Send className="w-4 h-4 mr-2" /> Send Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">Assi - Lanka Rd, Varanasi, Uttar Pradesh 221005</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+917485002623" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 74850 02623</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:chaubeyabhishek080@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">chaubeyabhishek080@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-muted rounded-lg p-6 border border-secondary/20">
                <h3 className="font-heading font-semibold text-foreground mb-2">Quick Response via WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Get an instant reply. Chat with us directly on WhatsApp!</p>
                <a
                  href="https://wa.me/917485002623?text=Hi%2C%20I%27m%20interested%20in%20your%20event%20planning%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[hsl(142,70%,35%)] text-white hover:bg-[hsl(142,70%,30%)] font-semibold">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8!2d82.9994!3d25.2847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e321!2sAssi+Ghat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varanasi Events Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
