import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NavBar from "@/components/NavBar";
import FeaturedEventsCarousel from "@/components/FeaturedEventsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Search, Trophy } from "lucide-react";
import type { Event } from "@shared/schema";

export default function Home() {
  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const featuredEvents = events.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4" data-testid="heading-hero">
            Discover Your Next Endurance Challenge
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find running, cycling, triathlon, and obstacle course races near you. 
            Join thousands of athletes in their pursuit of excellence.
          </p>
          <Link href="/events">
            <Button size="lg" className="bg-primary text-primary-foreground" data-testid="button-browse-events">
              <Search className="mr-2 h-5 w-5" />
              Browse Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-card-border rounded-lg p-6 text-center hover-elevate transition-all">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Advanced Filtering</h3>
            <p className="text-sm text-muted-foreground">
              Find events by date, location, type, and distance with our powerful search tools.
            </p>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-6 text-center hover-elevate transition-all">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Personalized Matches</h3>
            <p className="text-sm text-muted-foreground">
              Get event recommendations tailored to your goals and experience level.
            </p>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-6 text-center hover-elevate transition-all">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Calendar View</h3>
            <p className="text-sm text-muted-foreground">
              Visualize your race schedule and plan your training season with ease.
            </p>
          </div>
        </div>

        {featuredEvents.length > 0 && (
          <FeaturedEventsCarousel events={featuredEvents} />
        )}
      </main>
    </div>
  );
}
