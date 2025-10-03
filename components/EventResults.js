import EventCard from "./EventCard";

export default function EventResults({ events, userLocation = "10001" }) {
  const groupEventsByMonth = (events) => {
    return events.reduce((acc, event) => {
      const date = new Date(event.date);
      const monthYear = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(event);
      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByMonth(events);
  const monthOrder = Object.keys(groupedEvents).sort((a, b) => {
    const dateA = new Date(groupedEvents[a][0].date);
    const dateB = new Date(groupedEvents[b][0].date);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground" data-testid="text-results-count">
          {events.length} results
        </h2>
        <div className="text-sm text-muted-foreground" data-testid="text-user-location">
          My location: {userLocation}
        </div>
      </div>

      <div className="space-y-6">
        {monthOrder.map((month) => (
          <div key={month}>
            <div
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4 font-semibold"
              data-testid={`heading-month-${month.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {month}
            </div>
            <div className="space-y-3">
              {groupedEvents[month].map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  tags={event.tags}
                  logo={event.logo}
                  url={event.url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
