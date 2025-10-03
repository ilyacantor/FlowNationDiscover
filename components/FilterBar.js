import { useState } from "react";
import { Calendar, MapPin, Tag, Ruler, Search } from "lucide-react";

export default function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
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

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-background rounded-lg p-6 border border-border" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Event Date"
            value={filters.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-input rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="input-filter-date"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Event Location"
            value={filters.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-input rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="input-filter-location"
          />
        </div>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Event Type"
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-input rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="input-filter-type"
          />
        </div>
        <div className="relative">
          <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Distance"
            value={filters.distance}
            onChange={(e) => handleChange("distance", e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-input rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="input-filter-distance"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Event Name"
            value={filters.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-input rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            data-testid="input-filter-name"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-filter-reset"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:brightness-95 active:brightness-90 transition-all"
          data-testid="button-filter-apply"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
