import NavBar from "@/components/NavBar";
import { Calendar as CalendarIcon, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Calendar() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground" data-testid="heading-calendar">
            Event Calendar
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" data-testid="button-view-grid">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" data-testid="button-view-list">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-12 text-center">
          <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CalendarIcon className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">Calendar View Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Visualize your race schedule across the year. See event density, plan your training blocks, and never miss a registration deadline.
          </p>
        </div>
      </main>
    </div>
  );
}
