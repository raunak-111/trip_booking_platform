
export interface Trip {
  id: number;
  destination: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  rating: string;
  ratingCount: number;
  images: string[];
  thumbnailUrl: string;
  amenities: string[];
  itinerary: string[];
  included: string[];
  excluded: string[];
  category: string[];
}

export const trips: Trip[] = [
  {
    id: 1,
    destination: "Bali Paradise Retreat",
    location: "Bali, Indonesia",
    description: "Experience the ultimate tropical getaway on the Island of the Gods. This retreat offers perfect balance between relaxation, culture and adventure in the stunning landscapes of Bali. Explore ancient temples, relax on pristine beaches, and immerse yourself in the vibrant local culture.",
    price: 800,
    duration: "7 days",
    rating: "4.8",
    ratingCount: 342,
    thumbnailUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "5-Star Resort Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Cultural Tours",
      "Spa Treatment",
      "Yoga Sessions"
    ],
    itinerary: [
      "Day 1: Arrival in Bali, Welcome Dinner",
      "Day 2: Visit to Uluwatu Temple, Beach Time",
      "Day 3: Snorkeling at Nusa Dua, Seafood Dinner",
      "Day 4: Ubud Market Tour, Traditional Dance Show",
      "Day 5: Mount Batur Sunrise Trek",
      "Day 6: Relaxation at Beach Resort, Spa Treatment",
      "Day 7: Departure with Beautiful Memories"
    ],
    included: [
      "Luxury accommodation",
      "Daily breakfast",
      "Welcome and farewell dinners",
      "All transfers in private air-conditioned vehicle",
      "English-speaking tour guide",
      "Entrance fees to attractions"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities not mentioned in itinerary"
    ],
    category: ["Beach", "Cultural", "Relaxation"]
  },
  {
    id: 2,
    destination: "Kyoto Cultural Immersion",
    location: "Kyoto, Japan",
    description: "Step back in time and immerse yourself in the ancient traditions of Japan. This journey through historic Kyoto offers an authentic glimpse into Japanese culture, from ornate temples and beautiful gardens to traditional tea ceremonies and local culinary delights.",
    price: 1200,
    duration: "5 days",
    rating: "4.7",
    ratingCount: 286,
    thumbnailUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Traditional Ryokan Stay",
      "Daily Japanese Breakfast",
      "Private Tea Ceremony",
      "Kimono Experience",
      "Guided Temple Tours",
      "Bullet Train Passes"
    ],
    itinerary: [
      "Day 1: Arrival in Kyoto, Traditional Japanese Dinner",
      "Day 2: Tour of Kinkaku-ji Temple and Fushimi Inari Shrine",
      "Day 3: Arashiyama Bamboo Grove, Kimono Experience",
      "Day 4: Nijo Castle, Traditional Tea Ceremony",
      "Day 5: Local Food Tour, Departure"
    ],
    included: [
      "Traditional ryokan accommodation",
      "Daily traditional breakfast",
      "Welcome dinner",
      "Transportation within Kyoto",
      "English-speaking guide",
      "All entrance fees"
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Gratuities for guides and drivers"
    ],
    category: ["Cultural", "City", "Historical"]
  },
  {
    id: 3,
    destination: "Santorini Coastal Escape",
    location: "Santorini, Greece",
    description: "Indulge in the iconic white-washed beauty of Santorini, where azure waters meet dramatic cliffs. This Mediterranean escape offers stunning sunsets, charming villages, and crystal-clear waters. Enjoy local wines, fresh cuisine, and the undeniable romance of one of Greece's most beloved islands.",
    price: 1500,
    duration: "6 days",
    rating: "4.9",
    ratingCount: 412,
    thumbnailUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Cliffside Hotel with Sea View",
      "Daily Breakfast",
      "Wine Tasting Tour",
      "Sunset Sailing Trip",
      "Hot Springs Visit",
      "Airport Transfers"
    ],
    itinerary: [
      "Day 1: Arrival in Santorini, Sunset in Oia",
      "Day 2: Explore Fira, Wine Tasting Experience",
      "Day 3: Sailing Trip Around the Caldera",
      "Day 4: Red Beach and Akrotiri Archaeological Site",
      "Day 5: Free Day for Relaxation and Shopping",
      "Day 6: Departure Day"
    ],
    included: [
      "Boutique hotel accommodation with sea views",
      "Daily breakfast",
      "Sunset sailing cruise",
      "Wine tasting session",
      "All transfers on the island",
      "Local guide for excursions"
    ],
    excluded: [
      "Flights to and from Santorini",
      "Travel insurance",
      "Personal expenses",
      "Additional meals not mentioned",
      "Optional activities"
    ],
    category: ["Beach", "Romantic", "Island"]
  },
  {
    id: 4,
    destination: "Machu Picchu Adventure",
    location: "Cusco, Peru",
    description: "Embark on an unforgettable journey to one of the world's most fascinating archaeological wonders. This adventure takes you through the ancient Inca Trail to the mystical citadel of Machu Picchu, surrounded by breathtaking mountain scenery and rich Peruvian culture.",
    price: 1800,
    duration: "8 days",
    rating: "4.8",
    ratingCount: 368,
    thumbnailUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560356332-c9347ccf7047?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531761535209-180857b9f904?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Guided Inca Trail Trek",
      "Hotel and Camping Accommodations",
      "All Meals During Trek",
      "Train Journey",
      "Porters for Equipment",
      "Entrance Fees"
    ],
    itinerary: [
      "Day 1: Arrival in Cusco, Acclimatization",
      "Day 2: Sacred Valley Tour",
      "Day 3: Begin Inca Trail Trek",
      "Day 4: Continue Trek, Visit Ancient Ruins",
      "Day 5: Final Stretch of Trek",
      "Day 6: Sunrise at Machu Picchu, Guided Tour",
      "Day 7: Free Day in Cusco",
      "Day 8: Departure"
    ],
    included: [
      "All accommodations (hotels and camping)",
      "Professional English-speaking guides",
      "All transportation",
      "Meals during the trek",
      "Camping equipment",
      "Entry tickets to Machu Picchu"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Additional meals in Cusco",
      "Personal hiking gear",
      "Tips for guides and porters"
    ],
    category: ["Adventure", "Hiking", "Historical"]
  },
  {
    id: 5,
    destination: "Safari Adventure",
    location: "Serengeti, Tanzania",
    description: "Witness the breathtaking wildlife of Africa on this unforgettable safari adventure. Experience the annual Great Migration, observe the Big Five in their natural habitat, and connect with local Maasai communities while staying in comfortable safari camps under the vast African sky.",
    price: 2500,
    duration: "7 days",
    rating: "4.9",
    ratingCount: 245,
    thumbnailUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Luxury Tented Camp Accommodation",
      "All Inclusive Meals",
      "Expert Safari Guides",
      "4x4 Safari Vehicles",
      "Maasai Village Visit",
      "Park Entrance Fees"
    ],
    itinerary: [
      "Day 1: Arrival in Arusha, Overnight Stay",
      "Day 2: Transfer to Serengeti National Park",
      "Day 3: Full Day Game Drive in Serengeti",
      "Day 4: Great Migration Experience",
      "Day 5: Ngorongoro Crater Tour",
      "Day 6: Cultural Experience with Maasai Tribe",
      "Day 7: Return to Arusha, Departure"
    ],
    included: [
      "All accommodation",
      "Full board meals",
      "Game drives and guided safaris",
      "Park entrance fees",
      "Professional safari guide",
      "All transportation in safari vehicles"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities"
    ],
    category: ["Safari", "Wildlife", "Adventure"]
  },
  {
    id: 6,
    destination: "Northern Lights Escape",
    location: "Reykjavik, Iceland",
    description: "Chase the mesmerizing Aurora Borealis across Iceland's winter wonderland. This magical journey combines the hunt for the Northern Lights with exploration of Iceland's stunning natural landscapes, including geothermal hot springs, magnificent waterfalls, and dramatic black sand beaches.",
    price: 1700,
    duration: "5 days",
    rating: "4.7",
    ratingCount: 198,
    thumbnailUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610568781018-fdfd0b372fda?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1429516387459-9891b7b96c78?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Northern Lights Hunt with Expert Guides",
      "Boutique Hotel Accommodation",
      "Daily Breakfast",
      "Blue Lagoon Entry",
      "Golden Circle Tour",
      "Transportation in Heated Vehicles"
    ],
    itinerary: [
      "Day 1: Arrival in Reykjavik, City Tour",
      "Day 2: Golden Circle Tour, Evening Northern Lights Hunt",
      "Day 3: South Coast Waterfalls and Black Sand Beach",
      "Day 4: Blue Lagoon Experience, Northern Lights Hunt",
      "Day 5: Free Morning in Reykjavik, Departure"
    ],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Northern Lights tours",
      "Blue Lagoon entry",
      "All tours mentioned in itinerary",
      "Professional English-speaking guide"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Additional meals",
      "Optional activities",
      "Personal expenses"
    ],
    category: ["Nature", "Winter", "Photography"]
  },
  {
    id: 7,
    destination: "Amalfi Coast Retreat",
    location: "Amalfi Coast, Italy",
    description: "Indulge in the dolce vita along Italy's most picturesque coastline. This journey along the Amalfi Coast combines stunning Mediterranean vistas with charming cliffside villages, delicious Italian cuisine, and opportunities to explore the region's rich history and culture.",
    price: 1900,
    duration: "6 days",
    rating: "4.8",
    ratingCount: 317,
    thumbnailUrl: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560775049-08d5758062c4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497287339422-15163ec3f871?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Boutique Hotel with Sea View",
      "Daily Breakfast",
      "Private Boat Tour",
      "Cooking Class",
      "Wine Tasting",
      "Airport Transfers"
    ],
    itinerary: [
      "Day 1: Arrive in Naples, Transfer to Sorrento",
      "Day 2: Explore Positano and Amalfi Town",
      "Day 3: Boat Trip to Capri Island",
      "Day 4: Ravello and Cooking Class",
      "Day 5: Free Day for Relaxation",
      "Day 6: Return to Naples, Departure"
    ],
    included: [
      "Boutique hotel accommodation",
      "Daily breakfast",
      "Capri boat excursion",
      "Italian cooking class",
      "Wine tasting experience",
      "All transfers mentioned in itinerary"
    ],
    excluded: [
      "Flights to and from Naples",
      "Travel insurance",
      "Additional meals",
      "City tax (paid locally)",
      "Personal expenses"
    ],
    category: ["Coastal", "Culinary", "Relaxation"]
  },
  {
    id: 8,
    destination: "Morocco Desert Adventure",
    location: "Marrakech, Morocco",
    description: "Journey from the vibrant markets of Marrakech to the golden dunes of the Sahara Desert. Experience Morocco's diverse landscapes, rich cultural heritage, and warm hospitality as you explore ancient kasbahs, lush oases, and sleep under the stars in a traditional desert camp.",
    price: 1200,
    duration: "8 days",
    rating: "4.6",
    ratingCount: 276,
    thumbnailUrl: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531737212413-667205e1cda7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539020140153-e8c237112144?auto=format&fit=crop&q=80"
    ],
    amenities: [
      "Riad Accommodation in Cities",
      "Luxury Desert Camp Experience",
      "Daily Breakfast and Dinner",
      "Camel Trekking",
      "4x4 Desert Excursion",
      "Local Guides"
    ],
    itinerary: [
      "Day 1: Arrival in Marrakech, Traditional Dinner",
      "Day 2: Marrakech City Tour, Medina Exploration",
      "Day 3: Drive to Ait Ben Haddou and Ouarzazate",
      "Day 4: Todra Gorge and Dades Valley",
      "Day 5: Travel to Merzouga, Camel Trek into Desert",
      "Day 6: Sunrise in Desert, Travel to Fes",
      "Day 7: Fes City Tour",
      "Day 8: Departure"
    ],
    included: [
      "All accommodation (riads and desert camp)",
      "Daily breakfast and dinner",
      "Camel trekking experience",
      "4x4 transportation in desert regions",
      "English-speaking guide",
      "All entrance fees to monuments"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches and drinks",
      "Tips for guides and drivers",
      "Personal expenses"
    ],
    category: ["Desert", "Cultural", "Adventure"]
  }
];
