import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import EventResults from "../components/EventResults";

export default function Events() {
  const [allEvents, setAllEvents] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    location: "",
    type: "",
    distance: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        setAllEvents(data);
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadEvents();
  }, []);

  const filteredEvents = allEvents.filter((event) => {
    if (filters.date) {
      const filterDate = filters.date.toLowerCase();
      const eventDate = new Date(event.date);
      const eventDateStr = eventDate.toLocaleDateString("en-US", { 
        month: "long", 
        year: "numeric" 
      }).toLowerCase();
      const eventMonthYear = `${eventDate.getFullYear()}`.toLowerCase();
      const eventMonth = eventDate.toLocaleDateString("en-US", { month: "long" }).toLowerCase();
      
      if (!event.date.toLowerCase().includes(filterDate) && 
          !eventDateStr.includes(filterDate) &&
          !eventMonthYear.includes(filterDate) &&
          !eventMonth.includes(filterDate)) {
        return false;
      }
    }
    
    if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    if (filters.type && !event.type.toLowerCase().includes(filters.type.toLowerCase())) {
      return false;
    }
    
    if (filters.distance && event.distance && !event.distance.toLowerCase().includes(filters.distance.toLowerCase())) {
      return false;
    }
    
    if (filters.name && !event.title.toLowerCase().includes(filters.name.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6" data-testid="heading-events">
          Browse Events
        </h1>
        
        <FilterBar onFilter={setFilters} />
        
        {isLoading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">Loading events...</div>
          </div>
        ) : (
          <EventResults events={filteredEvents} />
        )}
      </main>
    </div>
  );
}
