
export interface Post {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  authorId: string;
  rating: number;
  upvotes: number;
  downvotes: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  date: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "Emma Wilson",
    username: "travelemma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    bio: "Adventure seeker and photography enthusiast. Always looking for the next destination!"
  },
  {
    id: "2",
    name: "Alex Thompson",
    username: "globetrotter",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3",
    bio: "Travel blogger exploring hidden gems around the world"
  },
  {
    id: "3",
    name: "Sophie Chen",
    username: "sophieexplores",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Food lover and cultural explorer. Sharing authentic experiences from my travels."
  }
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Hidden Beach Paradise",
    destination: "Tulum, Mexico",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "Discovered this incredible secluded beach with crystal clear waters. The ancient ruins overlooking the ocean create a magical atmosphere. Perfect for those seeking both relaxation and history. The local seafood restaurants nearby serve the freshest catch!",
    authorId: "1",
    rating: 4.8,
    upvotes: 127,
    downvotes: 3,
    coordinates: {
      lat: 20.2114,
      lng: -87.4654
    },
    date: "2025-04-12"
  },
  {
    id: "2",
    title: "Alpine Sunrise Adventure",
    destination: "Swiss Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Hiking up to watch the sunrise over the Alps was absolutely worth the early wake-up call. The trails are well-marked and the mountain huts offer warm meals. Pack layers as the temperature changes quickly with altitude.",
    authorId: "2",
    rating: 4.9,
    upvotes: 214,
    downvotes: 5,
    coordinates: {
      lat: 46.8182,
      lng: 8.2275
    },
    date: "2025-04-18"
  },
  {
    id: "3",
    title: "Ancient Temple Discovery",
    destination: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    description: "Wandered through the bamboo forest to find this serene temple away from the usual tourist paths. Visit early morning to avoid crowds and experience the peaceful atmosphere. The garden design is over 500 years old and changes beautifully with the seasons.",
    authorId: "3",
    rating: 4.7,
    upvotes: 189,
    downvotes: 4,
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    },
    date: "2025-04-05"
  },
  {
    id: "4",
    title: "Coastal Road Journey",
    destination: "Big Sur, California",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    description: "Drove along the Pacific Coast Highway and stopped at this breathtaking viewpoint. The winding road offers incredible ocean views at every turn. Be sure to plan plenty of time for spontaneous stops at the many scenic overlooks.",
    authorId: "2",
    rating: 4.6,
    upvotes: 156,
    downvotes: 7,
    coordinates: {
      lat: 36.2704,
      lng: -121.8081
    },
    date: "2025-03-28"
  },
  {
    id: "5",
    title: "Safari Dream Experience",
    destination: "Serengeti National Park, Tanzania",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    description: "Witnessed the great migration across the Serengeti plains - an absolutely life-changing experience. Our guide was knowledgeable about animal behavior which enhanced the experience. Early morning game drives yielded the most exciting wildlife sightings.",
    authorId: "1",
    rating: 5.0,
    upvotes: 245,
    downvotes: 2,
    coordinates: {
      lat: -2.3333,
      lng: 34.8333
    },
    date: "2025-03-15"
  },
  {
    id: "6",
    title: "Island Hopping Adventure",
    destination: "Phi Phi Islands, Thailand",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "The turquoise waters around these islands are perfect for snorkeling with vibrant coral reefs and tropical fish. Renting a private longtail boat is worth it to avoid the crowded tours and explore at your own pace.",
    authorId: "3",
    rating: 4.5,
    upvotes: 178,
    downvotes: 8,
    coordinates: {
      lat: 7.7407,
      lng: 98.7784
    },
    date: "2025-03-10"
  }
];
