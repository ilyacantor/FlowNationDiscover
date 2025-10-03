import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Tag, Ruler, Search } from "lucide-react";

interface FilterBarProps {
  onFilter: (filters: FilterValues) => void;
}

export interface FilterValues {
  date: string;
  location: string;
  type: string;
  distance: string;
  name: string;
}

export default function FilterBar({ onFilter }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterValues>({
    date: "",
    location: "",
    type: "",
    distance: "",
    name: "",
  });

  const handleReset = () => {
    const emptyFilters = {
      date: "",
      location: "",
      type: "",
      distance: "",
      name: "",
    };
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  const handleApply = () => {
    onFilter(filters);
  };

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-background rounded-lg p-6 border border-border" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Event Date"
            value={filters.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="pl-9 rounded-full"
            data-testid="input-filter-date"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Event Location"
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="pl-9 rounded-full"
            data-testid="input-filter-location"
          />
        </div>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Event Type"
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className="pl-9 rounded-full"
            data-testid="input-filter-type"
          />
        </div>
        <div className="relative">
          <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Distance"
            value={filters.distance}
            onChange={(e) => handleChange("distance", e.target.value)}
            className="pl-9 rounded-full"
            data-testid="input-filter-distance"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Event Name"
            value={filters.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="pl-9 rounded-full"
            data-testid="input-filter-name"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          variant="ghost"
          onClick={handleReset}
          className="text-muted-foreground"
          data-testid="button-filter-reset"
        >
          Reset
        </Button>
        <Button
          onClick={handleApply}
          className="bg-primary text-primary-foreground"
          data-testid="button-filter-apply"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
