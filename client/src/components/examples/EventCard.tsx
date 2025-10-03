import EventCard from '../EventCard';

export default function EventCardExample() {
  return (
    <div className="p-4 max-w-3xl">
      <EventCard
        title="Boston Marathon 2025"
        date="April 21, 2025"
        location="Boston, MA"
        tags={["Marathon", "Road", "Qualifier"]}
        url="#"
      />
    </div>
  );
}
