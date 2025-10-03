import { useRef } from "react";
import FeaturedEventCard from "./FeaturedEventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@shared/schema";

interface FeaturedEventsCarouselProps {
  events: Event[];
}

export default function FeaturedEventsCarousel({ events }: FeaturedEventsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
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
          <Button
            size="icon"
            variant="outline"
            onClick={() => scroll("left")}
            data-testid="button-carousel-left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => scroll("right")}
            data-testid="button-carousel-right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
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
