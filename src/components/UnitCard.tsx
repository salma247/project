import { ArrowDownRight, ArrowUpRight, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Unit } from "../types";

interface UnitCardProps {
  unit: Unit;
}

export default function UnitCard({ unit }: UnitCardProps) {
  const priceChange =
    unit.priceHistory.length > 1
      ? unit.price - unit.priceHistory[unit.priceHistory.length - 2].price
      : 0;

  return (
    <Link to={`/units/${unit.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <img
            src={unit.image}
            alt={unit.name}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-gray-900">
              {unit.type}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {unit.name}
              </h3>
              <div className="flex items-center mt-1 text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{unit.address}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Building2 className="h-5 w-5 text-secondary" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-900">
                ${unit.price.toLocaleString()}
              </p>
              {priceChange !== 0 && (
                <div
                  className={`flex items-center mt-1 ${
                    priceChange > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {priceChange > 0 ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-sm font-medium">
                    ${Math.abs(priceChange).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {unit.developer.name}
              </p>
              <p className="text-sm text-gray-500">{unit.area} m²</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
