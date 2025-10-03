import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface FeaturedEventCardProps {
  title: string;
  type: string;
  date: string;
  location: string;
  image?: string;
  url: string;
}

export default function FeaturedEventCard({
  title,
  type,
  date,
  location,
  image,
  url,
}: FeaturedEventCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all flex-shrink-0"
      style={{ width: "280px" }}
      data-testid={`card-featured-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative h-40 bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            data-testid="img-featured-event"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-ring/20">
            <span className="text-muted-foreground text-sm">Event Image</span>
          </div>
        )}
        <Badge
          className="absolute top-2 left-2 bg-primary text-primary-foreground"
          data-testid="badge-event-type"
        >
          {type}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2" data-testid="text-featured-title">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <Calendar className="h-3.5 w-3.5" />
          <span data-testid="text-featured-date">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span data-testid="text-featured-location">{location}</span>
        </div>
      </div>
    </a>
  );
}
