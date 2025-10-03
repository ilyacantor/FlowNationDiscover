import FeaturedEventsCarousel from '../FeaturedEventsCarousel';

export default function FeaturedEventsCarouselExample() {
  const mockEvents = [
    {
      id: "1",
      title: "Ironman World Championship",
      type: "Triathlon",
      date: "October 12, 2025",
      location: "Kona, HI",
      tags: [],
      source: "ironman",
      url: "#",
    },
    {
      id: "2",
      title: "Boston Marathon",
      type: "Marathon",
      date: "April 21, 2025",
      location: "Boston, MA",
      tags: [],
      source: "baa",
      url: "#",
    },
    {
      id: "3",
      title: "Tour de France Challenge",
      type: "Cycling",
      date: "July 5, 2025",
      location: "France",
      tags: [],
      source: "cycling",
      url: "#",
    },
    {
      id: "4",
      title: "Spartan Race Beast",
      type: "Obstacle Race",
      date: "June 15, 2025",
      location: "Vermont",
      tags: [],
      source: "spartan",
      url: "#",
    },
  ];

  return (
    <div className="p-4 max-w-7xl">
      <FeaturedEventsCarousel events={mockEvents} />
    </div>
  );
}
