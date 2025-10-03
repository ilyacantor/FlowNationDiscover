import EventResults from '../EventResults';

export default function EventResultsExample() {
  const mockEvents = [
    {
      id: "1",
      title: "Boston Marathon 2025",
      type: "Marathon",
      date: "2025-04-21",
      location: "Boston, MA",
      distance: "26.2 miles",
      tags: ["Marathon", "Road", "Qualifier"],
      source: "baa",
      url: "#",
    },
    {
      id: "2",
      title: "Ironman Lake Placid",
      type: "Triathlon",
      date: "2025-07-27",
      location: "Lake Placid, NY",
      distance: "140.6 miles",
      tags: ["Triathlon", "Ironman", "Full Distance"],
      source: "ironman",
      url: "#",
    },
    {
      id: "3",
      title: "New York City Marathon",
      type: "Marathon",
      date: "2025-11-02",
      location: "New York, NY",
      distance: "26.2 miles",
      tags: ["Marathon", "Road", "World Major"],
      source: "nyrr",
      url: "#",
    },
  ];

  return (
    <div className="p-4 max-w-4xl">
      <EventResults events={mockEvents} userLocation="10001" />
    </div>
  );
}
