import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Activity, 
  Radio, 
  Bell, 
  Wind, 
  ClipboardCheck, 
  Cloud,
  Gauge,
  History,
  Smartphone,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Check
} from "lucide-react";

const mainFeatures = [
  {
    icon: Activity,
    title: "Real-Time Odour Detection",
    description: "Continuous monitoring of air quality using precision sensors that detect NH₃, H₂S, and volatile organic compounds in real-time.",
    benefits: ["Instant readings", "High accuracy", "24/7 monitoring"],
  },
  {
    icon: Radio,
    title: "Multi-Sensor Integration",
    description: "Combines data from multiple specialized sensors including gas detectors, humidity sensors, and temperature monitors.",
    benefits: ["Comprehensive coverage", "Cross-validation", "Redundancy"],
  },
  {
    icon: Bell,
    title: "Threshold-Based Alerts",
    description: "Configurable warning and critical alert levels that trigger notifications when conditions exceed safe limits.",
    benefits: ["Custom thresholds", "Escalation rules", "Priority levels"],
  },
  {
    icon: Wind,
    title: "Automatic Air Purification",
    description: "Intelligent automation that activates air purifiers and ventilation systems when odour levels exceed thresholds.",
    benefits: ["Instant response", "Energy efficient", "Smart scheduling"],
  },
  {
    icon: ClipboardCheck,
    title: "Staff Acknowledgement System",
    description: "Mobile-enabled confirmation system where cleaning staff can acknowledge alerts and confirm task completion.",
    benefits: ["Accountability", "Time tracking", "Performance metrics"],
  },
  {
    icon: Cloud,
    title: "Cloud-Based Logging",
    description: "All sensor data is securely stored in the cloud for historical analysis, compliance, and reporting purposes.",
    benefits: ["Data security", "Easy access", "Scalable storage"],
  },
];

const additionalFeatures = [
  { icon: Gauge, title: "Hygiene Status Tracking", description: "Visual status indicators for each monitored washroom" },
  { icon: History, title: "Cleaning History", description: "Complete logs of all cleaning activities and timestamps" },
  { icon: Smartphone, title: "Mobile Notifications", description: "SMS and app-based alerts for staff and managers" },
  { icon: Shield, title: "Role-Based Access", description: "Secure login with admin, manager, and staff roles" },
  { icon: Zap, title: "Real-Time Dashboard", description: "Live updates with instant data refresh" },
  { icon: BarChart3, title: "Analytics Reports", description: "Daily, weekly, and monthly hygiene reports" },
];

const sensorThresholds = [
  { gas: "NH₃ (Ammonia)", warning: "25 ppm", critical: "50 ppm", source: "Urine decomposition" },
  { gas: "H₂S (Hydrogen Sulfide)", warning: "10 ppm", critical: "20 ppm", source: "Sewage & waste" },
  { gas: "TVOCs", warning: "500 ppb", critical: "1000 ppb", source: "Various organic compounds" },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-accent via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                Features
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Complete Hygiene Monitoring Solution
              </h1>
              <p className="text-lg text-muted-foreground">
                From real-time detection to automated responses, SwachhSense provides 
                everything you need for effective public toilet hygiene management.
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-3xl p-8 shadow-card border border-border/50 hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sensor Thresholds */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sensor Thresholds
                </h2>
                <p className="text-muted-foreground">
                  Scientifically calibrated detection limits for accurate hygiene assessment.
                </p>
              </div>

              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Gas Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Warning Level</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Critical Level</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {sensorThresholds.map((threshold, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{threshold.gas}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded-full bg-warning/20 text-warning text-sm font-medium">
                              {threshold.warning}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium">
                              {threshold.critical}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{threshold.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                * Humidity levels above 60% amplify severity calculations for more accurate assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Additional Capabilities
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Ready to See It in Action?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Schedule a personalized demo to see how SwachhSense can transform 
                your facility's hygiene management.
              </p>
              <Button variant="heroOutline" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
