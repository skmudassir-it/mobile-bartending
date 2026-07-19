import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faMartiniGlassCitrus,
  faChampagneGlasses,
  faUsers,
  faBriefcase,
  faGraduationCap,
  faGlassWater,
  faToolbox,
  faSignature,
  faMusic,
  faStar,
  faCheckCircle,
  faCalendarCheck,
  faShield,
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  longDescription: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const siteConfig = {
  name: "CraftPour",
  tagline: "Mobile Bartending",
  fullName: "CraftPour Mobile Bartending",
  description: "Premium mobile bartending services for weddings, corporate events, and private parties. Craft cocktails, professional service, unforgettable experiences.",
  phone: "(555) 234-5678",
  email: "hello@craftpour.com",
  address: "Serving the Metro Area & Beyond",
  hours: "Mon-Sat 8AM-8PM · Sun by appointment",
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export const services: ServiceItem[] = [
  {
    slug: "wedding-bartending",
    title: "Wedding Bartending",
    description: "Elegant bar service for your special day. Custom cocktail menus, champagne toasts, and flawless execution from ceremony to send-off.",
    icon: faChampagneGlasses,
    image: "/images/services/wedding-bartending.jpg",
    features: [
      "Custom wedding cocktail menu",
      "Champagne toast service",
      "Full bar setup & breakdown",
      "Professional, tuxedo-attired staff",
      "Signature bride & groom cocktails",
      "Liability insurance included",
    ],
    longDescription: "Your wedding deserves nothing less than perfection. Our wedding bartending service includes a dedicated consultation to design a custom cocktail menu that reflects your taste and love story. From the champagne toast to the last call, our professional bartenders deliver flawless service with elegance and warmth. We handle everything — bar setup, glassware, garnishes, mixers, and breakdown — so you can focus on making memories.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    description: "Impress clients and reward your team with premium bar service at galas, holiday parties, product launches, and networking mixers.",
    icon: faBriefcase,
    image: "/images/services/corporate-events.jpg",
    features: [
      "Branded cocktail creations",
      "Networking-friendly service flow",
      "Full liability coverage",
      "Scalable for 20-500+ guests",
      "Non-alcoholic craft options",
      "COI available for venues",
    ],
    longDescription: "Make your next corporate event unforgettable. We specialize in creating sophisticated bar experiences that align with your brand image — from branded cocktail names to custom drink menus featuring your company colors. Our professional bartenders understand corporate etiquette and maintain a polished, efficient presence that keeps the networking flowing. We carry full liability insurance and can provide certificates of insurance for any venue.",
  },
  {
    slug: "private-parties",
    title: "Private Parties",
    description: "Birthdays, anniversaries, holiday gatherings, and celebrations of all kinds — we bring the bar to you with style and flair.",
    icon: faUsers,
    image: "/images/services/private-parties.jpg",
    features: [
      "Custom drink menu design",
      "Themed cocktail options",
      "Glassware & equipment provided",
      "Flexible service duration",
      "Bartender + barback teams",
      "Setup & cleanup included",
    ],
    longDescription: "Transform your home or venue into a premium cocktail lounge. Whether it's an intimate gathering of 15 or a backyard bash for 150, we design a bar experience tailored to your celebration. Choose from our extensive cocktail library or work with us to create themed drinks that match your party's vibe. We bring everything — bar equipment, glassware, ice, garnishes, and mixers — set it up beautifully, and leave your space spotless when the party ends.",
  },
  {
    slug: "mixology-classes",
    title: "Mixology Classes",
    description: "Hands-on cocktail workshops for team building, date nights, and party entertainment. Learn the art and science behind great drinks.",
    icon: faGraduationCap,
    image: "/images/services/mixology-classes.jpg",
    features: [
      "Hands-on cocktail making",
      "History & technique education",
      "All ingredients & tools provided",
      "2-3 hour interactive sessions",
      "Take-home recipe cards",
      "Group sizes from 6-40",
    ],
    longDescription: "Learn to shake, stir, and muddle like a pro in our engaging mixology classes. Each session covers cocktail fundamentals — balancing flavors, proper techniques, and the stories behind classic drinks — before diving into hands-on creation. Perfect for team-building events, birthday parties, bachelor/bachelorette celebrations, or just a fun night with friends. Everyone leaves with new skills, great memories, and a set of recipe cards to recreate the magic at home.",
  },
  {
    slug: "cocktail-catering",
    title: "Cocktail Catering",
    description: "Full-service beverage catering with premium craft cocktails, curated wine lists, and artisanal non-alcoholic options for any occasion.",
    icon: faMartiniGlassCitrus,
    image: "/images/services/cocktail-catering.jpg",
    features: [
      "Curated seasonal menus",
      "Premium spirits & fresh ingredients",
      "Wine & beer pairing available",
      "Zero-proof craft cocktails",
      "Eco-friendly disposables option",
      "Full event coordination",
    ],
    longDescription: "Elevate your event with our comprehensive cocktail catering service. We source premium spirits, fresh-squeezed juices, house-made syrups, and seasonal produce to craft drinks that are as beautiful as they are delicious. Our beverage program includes curated wine selections, craft beer pairings, and innovative zero-proof cocktails that ensure every guest has an exceptional drink in hand. We coordinate with your caterer and venue for seamless service from start to finish.",
  },
  {
    slug: "bar-setup-rental",
    title: "Bar Setup & Equipment",
    description: "Professional bar equipment rental with optional staffing. Perfect for DIY hosts who want a premium setup without the investment.",
    icon: faToolbox,
    image: "/images/services/bar-setup-rental.jpg",
    features: [
      "Portable bar units (various styles)",
      "Glassware & bar tools",
      "Ice bins & coolers",
      "Delivery, setup & pickup",
      "Optional bartender staffing",
      "Package deals for large events",
    ],
    longDescription: "You've got the drinks — we've got everything else. Our bar setup and equipment rental service provides everything you need to run a professional bar at your event, with or without our staff. Choose from rustic wooden bars, sleek modern units, or classic portable bars. Each rental includes all necessary tools, glassware, ice bins, and accessories. We deliver, set up, and pick up — you just add the alcohol and enjoy your party.",
  },
  {
    slug: "signature-cocktails",
    title: "Signature Cocktail Creation",
    description: "Work with our mixologists to develop custom cocktail recipes that define your event, brand, or venue with unforgettable flavor.",
    icon: faSignature,
    image: "/images/services/signature-cocktails.jpg",
    features: [
      "One-on-one taste consultation",
      "3-5 custom recipes developed",
      "Ingredient sourcing guidance",
      "Batch recipe scaling",
      "Menu design & naming",
      "Staff training available",
    ],
    longDescription: "A signature cocktail transforms an event from ordinary to extraordinary. Our mixologists work with you to understand your preferences, theme, and vision, then develop custom recipes that capture the essence of your celebration or brand. Each consultation includes a tasting session where we refine flavors, discuss presentation, and finalize 3-5 unique cocktails. We provide batch recipes, sourcing guidance, and optional staff training so your signature drinks are executed perfectly every time.",
  },
  {
    slug: "festival-fair-service",
    title: "Festival & Fair Service",
    description: "High-volume bar operations for festivals, fairs, farmers markets, and outdoor events. Fast, efficient, and crowd-pleasing service.",
    icon: faMusic,
    image: "/images/services/festival-fair-service.jpg",
    features: [
      "High-volume bar operations",
      "Quick-serve cocktail menu",
      "Outdoor-ready equipment",
      "Permit & compliance support",
      "Multiple bar station capability",
      "Cash & cashless payment options",
    ],
    longDescription: "Festivals and fairs demand speed without sacrificing quality. Our high-volume bar service is engineered for crowds — streamlined menus, multiple pouring stations, and experienced bartenders who thrive under pressure. We handle the logistics of outdoor service including weather contingencies, power requirements, and waste management. We can also assist with liquor licensing and health department compliance so your event runs smoothly and legally.",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "project-1",
    title: "Johnson Wedding Reception",
    category: "Wedding",
    description: "Full bar service for 180 guests with custom bride & groom cocktails, champagne tower, and late-night espresso martini bar.",
    image: "/images/projects/project-1.jpg",
  },
  {
    slug: "project-2",
    title: "TechCorp Annual Gala",
    category: "Corporate",
    description: "Branded cocktails for 400+ attendees with three bar stations, signature drink menu featuring company colors, and VIP lounge service.",
    image: "/images/projects/project-2.jpg",
  },
  {
    slug: "project-3",
    title: "Miller 50th Birthday Bash",
    category: "Private Party",
    description: "Retro-themed cocktail menu for an 80-person backyard celebration with tiki bar setup and flaming cocktail presentation.",
    image: "/images/projects/project-3.jpg",
  },
  {
    slug: "project-4",
    title: "Startup Mixer Series",
    category: "Corporate",
    description: "Monthly networking mixer program with rotating seasonal cocktail menus, zero-proof options, and branded napkins/stirrers.",
    image: "/images/projects/project-4.jpg",
  },
  {
    slug: "project-5",
    title: "Harvest Festival Main Bar",
    category: "Festival",
    description: "Main bar operation for a 3-day harvest festival serving 2,000+ attendees with apple cider cocktails, mulled wine, and craft beer.",
    image: "/images/projects/project-5.jpg",
  },
  {
    slug: "project-6",
    title: "Creative Agency Team Mixology",
    category: "Mixology Class",
    description: "Hands-on mixology workshop for 25 creatives featuring color-changing cocktails, smoke infusions, and edible garnishes.",
    image: "/images/projects/project-6.jpg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Sarah & Michael Johnson",
    role: "Wedding Clients",
    content: "CraftPour made our wedding reception absolutely perfect. The signature cocktails were a hit, the bartenders were charming and professional, and they handled everything seamlessly. Our guests still talk about the espresso martini bar!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "VP of Events, TechCorp",
    content: "We've used CraftPour for three annual galas now and they consistently exceed expectations. Their branded cocktail program elevated our event and the team's professionalism is unmatched. They've become our go-to for all corporate events.",
    rating: 5,
  },
  {
    name: "Lisa Miller",
    role: "Private Party Host",
    content: "I hired CraftPour for my 50th birthday and it was the best decision. The tiki bar setup transformed our backyard, the cocktails were incredible, and cleanup was so thorough you'd never know 80 people were here. Worth every penny.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Startup Founder",
    content: "CraftPour runs the bar at our monthly networking mixers and they've become an integral part of our community. The seasonal menus keep things fresh and their zero-proof options mean everyone feels included. True professionals.",
    rating: 5,
  },
  {
    name: "Rachel Torres",
    role: "Festival Director",
    content: "Running the main bar at a 3-day festival is no small task, but CraftPour handled it flawlessly. Fast service, zero complaints, and their apple cider cocktails were the talk of the festival. We've already booked them for next year.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential Bar",
    price: "$499",
    description: "Perfect for intimate gatherings and small parties.",
    features: [
      "Up to 4 hours of service",
      "1 professional bartender",
      "Basic bar setup & breakdown",
      "Standard cocktail menu (6 drinks)",
      "Mixers, ice & garnishes included",
      "Plastic glassware",
      "Liability insurance",
    ],
  },
  {
    name: "Premium Bar",
    price: "$899",
    description: "Our most popular package for medium events.",
    features: [
      "Up to 6 hours of service",
      "2 professional bartenders",
      "Premium bar setup & breakdown",
      "Custom cocktail menu (10 drinks)",
      "Signature cocktail creation (2)",
      "Premium glassware rental",
      "Champagne service",
      "Liability insurance",
    ],
    popular: true,
  },
  {
    name: "Grand Experience",
    price: "$1,599",
    description: "Full-service luxury for large celebrations.",
    features: [
      "Up to 8 hours of service",
      "3+ professional bartenders",
      "Multiple bar station setup",
      "Fully custom cocktail program",
      "Signature cocktail creation (5)",
      "Premium glassware & bar tools",
      "Champagne tower service",
      "Barback support staff",
      "Post-event cleanup",
      "COI for venue",
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    q: "What areas do you serve?",
    a: "We serve the entire metro area and surrounding communities within a 50-mile radius. For events beyond this range, travel fees may apply. Contact us for a specific quote based on your venue location.",
  },
  {
    q: "Do you provide the alcohol?",
    a: "Due to liquor licensing regulations, we cannot sell alcohol directly. We provide professional bartending service, equipment, mixers, garnishes, and ice. You purchase the alcohol based on our detailed shopping list tailored to your guest count and menu — we make it simple and stress-free.",
  },
  {
    q: "Are your bartenders licensed and insured?",
    a: "Absolutely. All CraftPour bartenders are TIPS-certified (Training for Intervention ProcedureS) for responsible alcohol service. We carry comprehensive liability insurance and can provide certificates of insurance (COI) for any venue upon request.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2-3 months in advance for weddings and large corporate events, especially during peak season (May-October). For smaller private parties, 3-4 weeks is usually sufficient. Last-minute availability varies — always reach out!",
  },
  {
    q: "What's included in your bar setup?",
    a: "Every package includes a professional portable bar unit, all necessary bar tools (shakers, strainers, jiggers, muddlers), ice bins, garnish trays, pour spouts, bottle openers, and cutting boards. Premium and Grand packages also include glassware rental. We handle full setup before your event and complete breakdown after.",
  },
  {
    q: "Can you create non-alcoholic cocktails?",
    a: "Yes! We're passionate about craft zero-proof cocktails that are just as sophisticated and delicious as their spirited counterparts. Every event menu can include mocktail options, and our mixology classes cover zero-proof techniques. Everyone deserves a great drink in hand.",
  },
];
