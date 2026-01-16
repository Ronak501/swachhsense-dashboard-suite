import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging cutting-edge IoT technology to solve real-world hygiene challenges.",
  },
  {
    icon: Heart,
    title: "Public Health",
    description: "Committed to improving health outcomes through better sanitation practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in product quality and service delivery.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-accent via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Building a Cleaner, Healthier India
              </h1>
              <p className="text-lg text-muted-foreground">
                SwachhSense is an innovative IoT solution born from the Smart India Hackathon, 
                designed to revolutionize public toilet hygiene monitoring and management.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To create a future where every public restroom in India meets 
                  international hygiene standards through smart technology, contributing 
                  to the nation's health and dignity.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide accessible, affordable, and intelligent hygiene monitoring 
                  solutions that empower facility managers to maintain clean, healthy 
                  public spaces consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alignment Section */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Aligned with National Initiatives
                </h2>
                <p className="text-muted-foreground">
                  SwachhSense supports India's vision for cleaner, smarter cities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    🇮🇳 Swachh Bharat Mission
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our solution directly supports the mission's goal of improving 
                    sanitation infrastructure and maintaining hygiene standards across 
                    public facilities nationwide.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    🏙️ Smart City Initiative
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SwachhSense integrates seamlessly with smart city infrastructure, 
                    providing real-time data analytics and automated responses that 
                    modern cities require.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and commitment to public health.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
                A dedicated group of engineers and innovators passionate about 
                solving real-world problems.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-secondary-foreground/5 rounded-2xl p-8 border border-secondary-foreground/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart India Hackathon Team</h3>
                    <p className="text-secondary-foreground/70">Innovation Lab, 2024</p>
                  </div>
                </div>
                <p className="text-secondary-foreground/80">
                  Our team emerged from the Smart India Hackathon with a mission to 
                  tackle public sanitation challenges using IoT technology. We combine 
                  expertise in embedded systems, cloud computing, and user experience 
                  design to create practical solutions for real-world hygiene problems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
