import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Public Hygiene?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the mission to create cleaner, healthier public spaces. 
            Schedule a demo to see SwachhSense in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-8">
            Supporting Swachh Bharat Mission & Smart City Initiatives
          </p>
        </div>
      </div>
    </section>
  );
};
