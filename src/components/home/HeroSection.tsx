import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Activity, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Smart Hygiene for a{" "}
              <span className="gradient-text">Cleaner India</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              SwachhSense uses IoT sensors to monitor air quality in public toilets, 
              triggering automatic purification and alerting staff for timely cleaning. 
              Real-time data, healthier spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/how-it-works">
                  <Play className="w-5 h-5" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Odour Detection</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">&lt;30s</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-gradient-to-br from-card to-accent rounded-3xl p-8 shadow-card border border-border/50">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">Live Status</h3>
                    <p className="text-sm text-muted-foreground">Washroom A-101</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                    Clean
                  </div>
                </div>

                {/* Sensor Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/80 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">NH₃</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">12 ppm</div>
                    <div className="text-xs text-success">Normal</div>
                  </div>

                  <div className="bg-background/80 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">H₂S</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">0.5 ppm</div>
                    <div className="text-xs text-success">Safe</div>
                  </div>

                  <div className="bg-background/80 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cloud className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">TVOC</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">180 ppb</div>
                    <div className="text-xs text-success">Good</div>
                  </div>

                  <div className="bg-background/80 rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Activity className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Humidity</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">45%</div>
                    <div className="text-xs text-success">Optimal</div>
                  </div>
                </div>

                {/* Last Cleaned */}
                <div className="flex items-center justify-between p-4 bg-accent rounded-xl border border-primary/20">
                  <span className="text-sm text-muted-foreground">Last Cleaned</span>
                  <span className="text-sm font-medium text-foreground">Today, 2:30 PM</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Air Quality</div>
                  <div className="text-xs text-muted-foreground">Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
