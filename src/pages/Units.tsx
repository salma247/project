import React from 'react';
import UnitCard from '../components/UnitCard';
import UnitFilters from '../components/UnitFilters';
import units from '../data/units';


export default function Units() {
  const [filteredUnits, setFilteredUnits] = React.useState(units);

  const handleFilterChange = (filters: any) => {
    let filtered = units;

    if (filters.type) {
      filtered = filtered.filter(unit => unit.type === filters.type);
    }
    if (filters.region) {
      filtered = filtered.filter(unit => unit.region === filters.region);
    }
    if (filters.city) {
      filtered = filtered.filter(unit => unit.city === filters.city);
    }
    if (filters.minArea) {
      filtered = filtered.filter(unit => unit.area >= Number(filters.minArea));
    }
    if (filters.maxArea) {
      filtered = filtered.filter(unit => unit.area <= Number(filters.maxArea));
    }
    if (filters.minPrice) {
      filtered = filtered.filter(unit => unit.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(unit => unit.price <= Number(filters.maxPrice));
    }
    if (filters.name) {
      filtered = filtered.filter(unit => unit.name.toLowerCase().includes(filters.name.toLowerCase()));
    }

    setFilteredUnits(filtered);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Properties</h1>
        <p className="mt-2 text-gray-600">Discover your perfect property from our extensive collection</p>
      </div>

      <UnitFilters onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUnits.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}