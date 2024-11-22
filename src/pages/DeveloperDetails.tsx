import { Bell, BellOff, Building2, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import UnitCard from "../components/UnitCard";
import { Developer } from "../types";

// Mock data - in a real app, this would come from an API
const developer: Developer = {
  id: "1",
  name: "Premium Developers",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
  description:
    "Premium Developers is one of Egypt's leading real estate developers, known for creating innovative and sustainable living spaces that combine luxury with functionality. With over 15 years of experience, we've delivered more than 50 successful projects across prime locations.",
  units: [
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
  ],
};

export default function DeveloperDetails() {
  const { id } = useParams();
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
    // In a real app, this would update the subscription status in the backend
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Developer Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-primary to-purple-600">
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-6">
            <div className="flex items-center space-x-4">
              <img
                src={developer.logo}
                alt={developer.name}
                className="h-20 w-20 rounded-lg border-4 border-white object-cover"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white">
                  {developer.name}
                </h1>
                <div className="flex items-center mt-2 text-white/80">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              <button
                onClick={handleSubscription}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  isSubscribed
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white text-primary hover:bg-gray-50"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <BellOff className="h-5 w-5 mr-2" />
                    Unsubscribe
                  </>
                ) : (
                  <>
                    <Bell className="h-5 w-5 mr-2" />
                    Get Updates
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About {developer.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {developer.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Building2 className="h-5 w-5 text-primary" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-primary" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Available Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {developer.units.map((unit) => (
                <UnitCard key={unit.id} unit={unit} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-primary" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@premiumdev.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-primary" />
                <span>New Cairo, Cairo, Egypt</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
