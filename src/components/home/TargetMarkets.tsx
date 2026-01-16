import { 
  GraduationCap, 
  Building2, 
  Train, 
  Hotel, 
  ShoppingBag,
  Building
} from "lucide-react";

const markets = [
  { icon: GraduationCap, name: "Schools & Colleges" },
  { icon: Building2, name: "Hospitals" },
  { icon: Building, name: "Municipal Toilets" },
  { icon: Train, name: "Airports & Stations" },
  { icon: ShoppingBag, name: "Malls & Retail" },
  { icon: Hotel, name: "Hotels & Corporates" },
];

export const TargetMarkets = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Designed for Every Public Space
          </h2>
          <p className="text-lg text-muted-foreground">
            SwachhSense adapts to various environments where public hygiene matters most.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover-lift group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                <market.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="text-sm font-medium text-foreground">{market.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
