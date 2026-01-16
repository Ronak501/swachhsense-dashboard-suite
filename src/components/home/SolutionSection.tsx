import { Sparkles, Zap, Bell, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "Real-Time Detection",
    description: "Multi-sensor array detects NH₃, H₂S, TVOCs, and humidity levels continuously.",
  },
  {
    icon: Zap,
    title: "Automatic Response",
    description: "Threshold breach triggers instant air purifier activation without manual intervention.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Cleaning staff receive instant notifications with location and severity details.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track hygiene trends, cleaning history, and generate compliance reports.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Our Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              IoT-Powered Hygiene Monitoring That Works
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SwachhSense combines advanced sensor technology with intelligent automation 
              to ensure public toilets maintain optimal hygiene standards around the clock.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - System Flow */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
              <h3 className="font-semibold text-foreground mb-6 text-center">System Workflow</h3>
              
              <div className="space-y-4">
                {[
                  { step: "1", title: "Sensor Detection", desc: "Air quality sensors monitor continuously", color: "bg-primary" },
                  { step: "2", title: "Threshold Analysis", desc: "Compare readings against safe limits", color: "bg-warning" },
                  { step: "3", title: "Auto Purification", desc: "Activate air purifiers when needed", color: "bg-success" },
                  { step: "4", title: "Staff Notification", desc: "Alert cleaning crew via app/SMS", color: "bg-primary" },
                  { step: "5", title: "Confirmation", desc: "Staff confirms cleaning completion", color: "bg-success" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-primary-foreground font-bold text-sm`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                    {index < 4 && (
                      <div className="text-muted-foreground">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
