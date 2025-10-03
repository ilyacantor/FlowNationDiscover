import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  tags: string[];
  logo?: string;
  url: string;
}

export default function EventCard({ title, date, location, tags, logo, url }: EventCardProps) {
  return (
    <div
      className="bg-background border border-border rounded-lg p-4 hover-elevate transition-all cursor-pointer"
      data-testid={`card-event-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-ring hover:underline mb-2 block"
            data-testid="link-event-title"
          >
            {title}
          </a>
          <div className="flex flex-col gap-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span data-testid="text-event-date">{date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-event-location">{location}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs"
                data-testid={`badge-event-tag-${index}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Event logo"
              className="h-12 w-12 object-contain rounded"
              data-testid="img-event-logo"
            />
          </div>
        )}
      </div>
    </div>
  );
}
