import FilterBar from '../FilterBar';

export default function FilterBarExample() {
  const handleFilter = (filters: any) => {
    console.log('Filters applied:', filters);
  };

  return (
    <div className="p-4">
      <FilterBar onFilter={handleFilter} />
    </div>
  );
}
