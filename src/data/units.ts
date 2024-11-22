import { Unit } from '../types';

const units: Unit[] = [
    {
        id: '1',
        name: 'Luxury Apartment in New Cairo',
        developer: {
            id: '1',
            name: 'Premium Developers',
            logo: 'https://example.com/logo.png',
            description: 'Leading developer in Egypt',
            units: []
        },
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
        address: 'New Cairo, Cairo',
        price: 450000,
        priceHistory: [
            { date: '2023-01-01', price: 400000 },
            { date: '2023-03-01', price: 430000 },
            { date: '2023-06-01', price: 450000 },
            { date: '2023-09-01', price: 420000 },
            { date: '2023-12-01', price: 500000 },
            { date: '2024-03-01', price: 490000 },
            { date: '2024-06-01', price: 550000 }
        ],
        region: 'Cairo',
        city: 'New Cairo',
        area: 200,
        levels: 1,
        type: 'Apartment',
        description: 'Luxurious apartment with modern amenities'
    },
    {
        id: '2',
        name: 'Modern Villa in Sheikh Zayed',
        developer: {
            id: '2',
            name: 'Zayed Developers',
            logo: 'https://example.com/logo2.png',
            description: 'Premium developer in Sheikh Zayed',
            units: []
        },
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
        address: 'Sheikh Zayed City',
        price: 750000,
        priceHistory: [
            { date: '2023-01-01', price: 700000 },
            { date: '2023-07-01', price: 750000 },
            { date: '2024-01-01', price: 800000 },
            { date: '2024-07-01', price: 850000 }
        ],
        region: 'Giza',
        city: 'Sheikh Zayed',
        area: 400,
        levels: 2,
        type: 'Villa',
        description: 'Spacious villa with private garden'
    },
    {
        id: '3',
        name: 'Penthouse in Maadi',
        developer: {
            id: '3',
            name: 'Maadi Developments',
            logo: 'https://example.com/logo3.png',
            description: 'Specialized in premium properties in Maadi',
            units: []
        },
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Maadi Sarayat',
        price: 900000,
        priceHistory: [
            { date: '2023-03-01', price: 850000 },
            { date: '2023-06-01', price: 900000 },
            { date: '2023-09-01', price: 900000 },
        ],
        region: 'Cairo',
        city: 'Maadi',
        area: 350,
        levels: 1,
        type: 'Penthouse',
        description: 'Elegant penthouse with a stunning view'
    },
    {
        id: '4',
        name: 'Townhouse in Al Rehab',
        developer: {
            id: '4',
            name: 'Rehab Real Estate',
            logo: 'https://example.com/logo4.png',
            description: 'Building communities in Al Rehab',
            units: []
        },
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80',
        address: 'Al Rehab City',
        price: 500000,
        priceHistory: [
            { date: '2023-02-01', price: 480000 },
            { date: '2023-08-01', price: 500000 },
            { date: '2024-02-01', price: 520000 }
        ],
        region: 'Cairo',
        city: 'New Cairo',
        area: 250,
        levels: 2,
        type: 'Other',
        description: 'Modern townhouse in a gated community'
    },
    {
        id: '5',
        name: 'Studio in Zamalek',
        developer: {
            id: '5',
            name: 'Urban Zamalek',
            logo: 'https://example.com/logo5.png',
            description: 'Experts in modern urban housing in Zamalek',
            units: []
        },
        image: 'https://plus.unsplash.com/premium_photo-1684175656161-21dddfef1324?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Zamalek, Cairo',
        price: 300000,
        priceHistory: [
            { date: '2023-04-01', price: 290000 },
            { date: '2023-10-01', price: 300000 },
            { date: '2024-04-01', price: 310000 }
        ],
        region: 'Cairo',
        city: 'Zamalek',
        area: 100,
        levels: 1,
        type: 'Studio',
        description: 'Cozy studio in a prime location'
    },
    {
        id: '6',
        name: 'Duplex in Heliopolis',
        developer: {
            id: '6',
            name: 'Heliopolis Developers',
            logo: 'https://example.com/logo6.png',
            description: 'Renowned for high-quality properties in Heliopolis',
            units: []
        },
        image: 'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Heliopolis, Cairo',
        price: 650000,
        priceHistory: [
            { date: '2023-01-01', price: 600000 },
            { date: '2023-07-01', price: 650000 },
            { date: '2024-01-01', price: 700000 }
        ],
        region: 'Cairo',
        city: 'Heliopolis',
        area: 300,
        levels: 2,
        type: 'Duplex',
        description: 'Spacious duplex with a private terrace'
    },
    {
        id: '7',
        name: 'Chalet in North Coast',
        developer: {
            id: '7',
            name: 'Coastal Homes',
            logo: 'https://example.com/logo7.png',
            description: 'Top-tier beachfront properties',
            units: []
        },
        image: 'https://plus.unsplash.com/premium_photo-1676637000264-b9abea8cf2a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'North Coast',
        price: 550000,
        priceHistory: [
            { date: '2023-05-01', price: 500000 },
            { date: '2023-11-01', price: 520000 },
            { date: '2023-09-01', price: 510000 }
        ],
        region: 'North Coast',
        city: 'Sahel',
        area: 150,
        levels: 1,
        type: 'Other',
        description: 'Beachfront chalet with stunning sea views'
    }
];

export default units;