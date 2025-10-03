import { useRef } from "react";
import FeaturedEventCard from "./FeaturedEventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedEventsCarousel({ events }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground" data-testid="heading-featured-events">
          Featured Events
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-border rounded-md hover:bg-accent/10 transition-colors"
            data-testid="button-carousel-left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-border rounded-md hover:bg-accent/10 transition-colors"
            data-testid="button-carousel-right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        data-testid="container-featured-carousel"
      >
        {events.map((event) => (
          <FeaturedEventCard
            key={event.id}
            title={event.title}
            type={event.type}
            date={event.date}
            location={event.location}
            image={event.image}
            url={event.url}
          />
        ))}
      </div>
    </div>
  );
}
