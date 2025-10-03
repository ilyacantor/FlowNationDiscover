import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Target, Zap, Award } from "lucide-react";

export default function Match() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="heading-match">
            Find Your Perfect Event
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Answer a few questions to get personalized event recommendations based on your goals, experience, and preferences.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Set Your Goals</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about your fitness level, preferred event types, and what you want to achieve.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Our algorithm finds events that match your criteria, considering distance, difficulty, and timing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Achieve Your Best</h3>
                <p className="text-sm text-muted-foreground">
                  Get recommendations that challenge you appropriately and help you reach your endurance goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary text-primary-foreground" data-testid="button-start-matching">
            Start Matching
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Coming soon - Full matching functionality
          </p>
        </div>
      </main>
    </div>
  );
}
