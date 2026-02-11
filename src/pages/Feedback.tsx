import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
    const { toast } = useToast();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        rating: "",
        feedback: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create email body
        const subject = `Feedback from ${form.name}`;
        const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}
Rating: ${form.rating}/5

Feedback:
${form.feedback}
    `.trim();

        // Open email client with pre-filled feedback
        const mailtoLink = `mailto:chaubeyabhishek080@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        toast({
            title: "Thank you for your feedback!",
            description: "Your email client will open to send the feedback.",
        });

        // Reset form
        setForm({ name: "", email: "", phone: "", rating: "", feedback: "" });
    };

    return (
        <>
            {/* Hero */}
            <section className="py-20 pt-28 bg-maroon-dark text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4">
                    <MessageSquare className="w-16 h-16 text-gold mx-auto mb-4" />
                    <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2">Share Your Experience</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold">Feedback</h1>
                </motion.div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-2xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="bg-card rounded-lg border border-secondary/20 p-8 shadow-sm">
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                                We Value Your Feedback
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Your feedback helps us improve our services and serve you better. Please share your thoughts and experiences with us.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                                    <Input
                                        id="phone"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        placeholder="+91 74850 02623"
                                    />
                                </div>

                                <div>
                                    <Label>Rate Your Experience *</Label>
                                    <Select value={form.rating} onValueChange={(v) => setForm({ ...form, rating: v })} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select rating" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                                            <SelectItem value="4">⭐⭐⭐⭐ Very Good</SelectItem>
                                            <SelectItem value="3">⭐⭐⭐ Good</SelectItem>
                                            <SelectItem value="2">⭐⭐ Fair</SelectItem>
                                            <SelectItem value="1">⭐ Needs Improvement</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="feedback">Your Feedback *</Label>
                                    <Textarea
                                        id="feedback"
                                        required
                                        value={form.feedback}
                                        onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                                        placeholder="Tell us about your experience with our services..."
                                        rows={6}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                                >
                                    <Send className="w-4 h-4 mr-2" /> Submit Feedback
                                </Button>
                            </form>

                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <p className="text-sm text-muted-foreground text-center">
                                    📧 Your feedback will be sent to our team via email
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Feedback;
