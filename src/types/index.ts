export interface Unit {
  id: string;
  name: string;
  developer: Developer;
  image: string;
  address: string;
  price: number;
  priceHistory: PriceChange[];
  region: string;
  city: string;
  area: number;
  levels: number;
  type: 'Apartment' | 'Duplex' | 'Villa' | 'Studio'| 'Penthouse' |'Other';
  description: string;
}

export interface Developer {
  id: string;
  name: string;
  logo: string;
  description: string;
  units: Unit[];
}

export interface PriceChange {
  date: string;
  price: number;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: 'launch' | 'market-update' | 'news';
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  interestedDevelopers: string[];
}