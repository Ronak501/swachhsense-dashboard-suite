import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Activity, 
  Radio, 
  Bell, 
  Wind, 
  ClipboardCheck, 
  Cloud,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous tracking of NH₃, H₂S, TVOCs, humidity, and temperature levels.",
  },
  {
    icon: Radio,
    title: "Multi-Sensor Integration",
    description: "Combines data from multiple sensors for accurate hygiene assessment.",
  },
  {
    icon: Bell,
    title: "Threshold Alerts",
    description: "Configurable warning and critical alerts based on gas concentration levels.",
  },
  {
    icon: Wind,
    title: "Auto Purification",
    description: "Automatically activates air purifiers when odour levels exceed thresholds.",
  },
  {
    icon: ClipboardCheck,
    title: "Staff Acknowledgement",
    description: "Cleaning staff can confirm task completion through mobile app.",
  },
  {
    icon: Cloud,
    title: "Cloud Analytics",
    description: "Historical data logging with daily, weekly, and monthly reports.",
  },
];

export const FeaturesPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Everything You Need for Smart Hygiene Management
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive platform that combines hardware sensors with intelligent software 
            for complete washroom hygiene monitoring and management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/features">
              View All Features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
