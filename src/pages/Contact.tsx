import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  GraduationCap,
  Building,
  Send
} from "lucide-react";

const inquiryTypes = [
  { id: "demo", label: "Request Demo", icon: Building2 },
  { id: "partnership", label: "Partnership Inquiry", icon: GraduationCap },
  { id: "government", label: "Government/Tender", icon: Building },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState("demo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-accent via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Let's Discuss Your Needs
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you're a facility manager, government official, or corporate buyer, 
                we're here to help you implement smart hygiene monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  
                  {/* Inquiry Type Selector */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`flex items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                            selectedType === type.id
                              ? "border-primary bg-accent text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <type.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          required
                          placeholder="Your name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                          Organization *
                        </label>
                        <Input
                          id="organization"
                          required
                          placeholder="Company / Institution name"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="facilities" className="block text-sm font-medium text-foreground mb-2">
                        Number of Facilities
                      </label>
                      <Input
                        id="facilities"
                        placeholder="Approximate number of washrooms"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your requirements..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@swachhsense.in"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>contact@swachhsense.in</span>
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span>+91 123 456 7890</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span>Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-lg font-semibold mb-3">Business Models</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-1">B2B Model</h4>
                      <p className="text-primary-foreground/80">
                        For corporates, hospitals, malls, and private institutions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">B2G Model</h4>
                      <p className="text-primary-foreground/80">
                        For municipal corporations and government facilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to inquiries within 24 hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
