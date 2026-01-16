import { AlertTriangle, Users, Building, HeartPulse } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    stat: "60%",
    label: "of public toilets in India lack proper hygiene monitoring",
  },
  {
    icon: Users,
    stat: "45M+",
    label: "people affected by sanitation-related diseases annually",
  },
  {
    icon: Building,
    stat: "80%",
    label: "of urban toilets have no real-time cleanliness tracking",
  },
  {
    icon: HeartPulse,
    stat: "₹12K Cr",
    label: "annual healthcare costs due to poor sanitation",
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Public Toilet Hygiene Remains a Critical Issue
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Despite Swachh Bharat's progress, maintaining consistent hygiene standards 
            in public toilets is challenging without real-time monitoring and automated responses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/20 flex items-center justify-center mx-auto mb-4">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <div className="text-3xl font-bold mb-2">{problem.stat}</div>
              <p className="text-sm text-secondary-foreground/70">{problem.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
