import {
  Building2,
  Heart,
  Home,
  MapPin,
  Phone,
  Ruler,
  Share2,
} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { PriceChart } from "../components/PriceChart";
import units from "../data/units";
import { Unit } from "../types";

export default function UnitDetails() {
  const { id } = useParams();
  const unit = units.find((unit) => unit.id === id) as Unit;
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [phone, setPhone] = React.useState("");

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact request to the backend
    console.log("Contact request sent with phone:", phone);
    setShowContactForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Gallery */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src={unit.image}
          alt={unit.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 space-x-2">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="mt-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{unit.name}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{unit.address}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">
              ${unit.price.toLocaleString()}
            </p>
            <Link
              to={`/developers/${unit.developer.id}`}
              className="inline-flex items-center mt-2 text-gray-600 hover:text-primary"
            >
              <Building2 className="h-5 w-5 mr-2" />
              {unit.developer.name}
            </Link>
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Home className="h-6 w-6 text-secondary mb-2" />
            <p className="text-sm text-gray-600">Type</p>
            <p className="font-semibold">{unit.type}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Ruler className="h-6 w-6 text-secondary mb-2" />
            <p className="text-sm text-gray-600">Area</p>
            <p className="font-semibold">{unit.area} m²</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Building2 className="h-6 w-6 text-secondary mb-2" />
            <p className="text-sm text-gray-600">Levels</p>
            <p className="font-semibold">{unit.levels}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">{unit.description}</p>
        </div>

        <PriceChart data={unit.priceHistory} />

        {/* Contact Developer Button */}
        <div className="mt-8">
          {!showContactForm ? (
            <button
              onClick={() => setShowContactForm(true)}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Developer
            </button>
          ) : (
            <form
              onSubmit={handleContact}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Enter your phone number
              </h3>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <div className="mt-4 flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
