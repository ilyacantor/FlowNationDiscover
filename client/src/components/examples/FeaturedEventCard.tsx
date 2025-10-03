import FeaturedEventCard from '../FeaturedEventCard';

export default function FeaturedEventCardExample() {
  return (
    <div className="p-4">
      <FeaturedEventCard
        title="Ironman World Championship"
        type="Triathlon"
        date="October 12, 2025"
        location="Kona, HI"
        url="#"
      />
    </div>
  );
}
