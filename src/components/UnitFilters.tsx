import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

export default function UnitFilters({ onFilterChange }: FilterProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    region: "",
    city: "",
    type: "",
    minArea: "",
    maxArea: "",
    minPrice: "",
    maxPrice: "",
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      name: value,
    }));
    onFilterChange({ ...filters, name: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-1 mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={filters.name}
            onChange={handleSearchChange}
            placeholder="Search by location or property name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
            <option value="Villa">Villa</option>
            <option value="Studio">Studio</option>
            <option value="Office">Penthouse</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="region"
            value={filters.region}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            <option value="">Region</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <option value="Alexandria">Alexandria</option>
          </select>

          <select
            name="city"
            value={filters.city}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
          >
            <option value="">City</option>
            <option value="New Cairo">New Cairo</option>
            <option value="6th of October">6th of October</option>
            <option value="Sheikh Zayed">Sheikh Zayed</option>
            <option value="Zamalek">Zamalek</option>
            <option value="Al Rehab">Al Rehab</option>
          </select>

          <div className="flex space-x-4 md:col-span-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area (m²)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="minArea"
                  placeholder="Min"
                  value={filters.minArea}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  name="maxArea"
                  placeholder="Max"
                  value={filters.maxArea}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
