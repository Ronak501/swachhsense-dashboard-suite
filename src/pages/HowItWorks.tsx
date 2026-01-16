import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Radio, 
  Cpu, 
  AlertCircle, 
  Wind, 
  Bell, 
  CheckCircle,
  ArrowRight,
  ArrowDown
} from "lucide-react";

const steps = [
  {
    icon: Radio,
    step: "01",
    title: "Sensor Detection",
    description: "High-precision sensors continuously monitor air quality, measuring NH₃, H₂S, TVOCs, humidity, and temperature levels every few seconds.",
    details: [
      "MQ-137 sensor for ammonia detection",
      "MQ-136 sensor for hydrogen sulfide",
      "SGP30 for total VOCs",
      "DHT22 for humidity & temperature",
    ],
  },
  {
    icon: Cpu,
    step: "02",
    title: "Data Processing",
    description: "An ESP32 microcontroller processes sensor readings, applies calibration algorithms, and calculates severity scores based on threshold levels.",
    details: [
      "Real-time data aggregation",
      "Noise filtering & calibration",
      "Severity score calculation",
      "Humidity-based amplification",
    ],
  },
  {
    icon: AlertCircle,
    step: "03",
    title: "Threshold Analysis",
    description: "Processed readings are compared against configurable warning and critical thresholds to determine hygiene status and required actions.",
    details: [
      "Warning level triggers (yellow)",
      "Critical level triggers (red)",
      "Multi-sensor correlation",
      "False positive filtering",
    ],
  },
  {
    icon: Wind,
    step: "04",
    title: "Auto Purification",
    description: "When thresholds are exceeded, the system automatically activates connected air purifiers and ventilation systems to improve air quality.",
    details: [
      "Instant relay activation",
      "Smart power management",
      "Purifier status monitoring",
      "Auto-shutoff when normalized",
    ],
  },
  {
    icon: Bell,
    step: "05",
    title: "Staff Notification",
    description: "Cleaning staff receive immediate alerts via mobile app and SMS, with washroom location, severity level, and recommended actions.",
    details: [
      "Push notifications",
      "SMS alerts as backup",
      "Location mapping",
      "Priority-based routing",
    ],
  },
  {
    icon: CheckCircle,
    step: "06",
    title: "Confirmation & Logging",
    description: "Staff acknowledge alerts and confirm cleaning completion through the mobile app, creating a complete audit trail.",
    details: [
      "One-tap acknowledgement",
      "Completion confirmation",
      "Timestamp logging",
      "Performance tracking",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-accent via-background to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
                How It Works
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                From Detection to Clean Confirmation
              </h1>
              <p className="text-lg text-muted-foreground">
                Our end-to-end system ensures no hygiene issue goes unnoticed. 
                Here's how SwachhSense transforms toilet cleanliness monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-24 bottom-0 w-0.5 bg-border hidden md:block" />
                  )}
                  
                  <div className="flex gap-8 mb-12">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-primary">Step {step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      
                      <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Components</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mb-8 md:hidden">
                      <ArrowDown className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  System Architecture
                </h2>
                <p className="text-muted-foreground">
                  A visual overview of the SwachhSense ecosystem.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Hardware Layer */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <Radio className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Hardware Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">Sensors & Controllers</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Gas Sensors (MQ-137, MQ-136)</li>
                      <li>VOC Sensor (SGP30)</li>
                      <li>Humidity Sensor (DHT22)</li>
                      <li>ESP32 Microcontroller</li>
                      <li>Relay Module for Purifiers</li>
                    </ul>
                  </div>

                  {/* Communication */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Cloud Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">Processing & Storage</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>MQTT / HTTP APIs</li>
                      <li>Real-time Database</li>
                      <li>Threshold Engine</li>
                      <li>Notification Service</li>
                      <li>Analytics Engine</li>
                    </ul>
                  </div>

                  {/* Application */}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Application Layer</h3>
                    <p className="text-sm text-muted-foreground mb-4">User Interfaces</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Manager Dashboard</li>
                      <li>Staff Mobile App</li>
                      <li>Admin Console</li>
                      <li>Report Generator</li>
                      <li>Alert Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Ready to Implement SwachhSense?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Get in touch with our team to discuss deployment options 
                for your facility.
              </p>
              <Button variant="heroOutline" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">
                  Contact Us
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

export default HowItWorks;
