import { Building2, Newspaper, TrendingUp, Users } from "lucide-react";
import UnitCard from "../components/UnitCard";

const featuredUnits = [
  {
    id: "1",
    name: "Luxury Apartment in New Cairo",
    developer: {
      id: "1",
      name: "Premium Developers",
      logo: "https://example.com/logo.png",
      description: "Leading developer in Egypt",
      units: [],
    },
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    address: "New Cairo, Cairo",
    price: 450000,
    priceHistory: [
      { date: "2023-01-01", price: 400000 },
      { date: "2023-06-01", price: 450000 },
    ],
    region: "Cairo",
    city: "New Cairo",
    area: 200,
    levels: 1,
    type: "Apartment",
    description: "Luxurious apartment with modern amenities",
  },
  // Add more featured units here
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[456px] object-cover"
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80"
            alt="Modern building"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Property in Egypt
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover premium real estate opportunities across Egypt. Whether
            you're looking for a new home or an investment property, we've got
            you covered.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Building2, label: "Properties", value: "1,000+" },
          { icon: Users, label: "Happy Clients", value: "5,000+" },
          { icon: TrendingUp, label: "Successful Deals", value: "800+" },
          { icon: Newspaper, label: "Market Updates", value: "Daily" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 text-center"
          >
            <stat.icon className="h-8 w-8 mx-auto text-primary" />
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Featured Properties */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUnits.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>

      {/* Market Insights */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Market Insights
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Latest Trends
            </h3>
            <p className="text-gray-600">
              The Egyptian real estate market continues to show strong growth
              potential, with new developments in key areas driving investment
              opportunities.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Investment Hotspots
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• New Administrative Capital</li>
              <li>• New Cairo</li>
              <li>• 6th of October City</li>
              <li>• North Coast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
