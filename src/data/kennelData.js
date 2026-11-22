// GRK Kennel Data - Vijayawada, Andhra Pradesh
// Offerings: Pet Food, Pet Accessories, Pet Bedding, Pet Boarding, Puppies for Sale

export const KENNEL_INFO = {
  name: "GRK Kennel",
  tagline: "Canine Care, Boarding & Certified Lineage",
  city: "Vijayawada",
  state: "Andhra Pradesh",
  address: "Kanuru–Enikepadu Link Road, Near Auto Nagar Extension, Vijayawada, Andhra Pradesh 520007",
  phone: "+91 94943 28999",
  whatsappNumber: "919494328999",
  email: "care@grkkennel.in",
  hours: "Monday – Sunday: 08:30 AM – 07:30 PM",
  visitingNote: "Kennel visits and litter viewings are scheduled by appointment to maintain calm shelter routines.",
};

export const PUPPIES = [
  {
    id: "pup-golden-retriever",
    breed: "Golden Retriever",
    lineage: "Show-Line Pedigree (KCI Registered)",
    age: "8 Weeks",
    gender: "2 Males, 1 Female Available",
    temperament: "Gentle, eager-to-please, affectionate with children",
    coat: "Dense Golden Cream",
    vaccinationStatus: "1st DHPPi & Deworming Completed",
    microchipReady: true,
    price: "₹32,000 – ₹38,000",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    diet: "Royal Canin Maxi Starter + Goat Milk Supplement",
    parentsInfo: "Sire: Champion Duke of Hyderabad; Dam: Bella of Krishna Valley",
    highlights: ["Mother-weaned past 60 days", "Microchipped with transfer paperwork", "7-Day health guarantee certificate"]
  },
  {
    id: "pup-labrador-retriever",
    breed: "Labrador Retriever",
    lineage: "Working & Family Line (KCI Certified)",
    age: "9 Weeks",
    gender: "1 Male, 2 Females Available",
    temperament: "High stamina, loyal, responsive to obedience training",
    coat: "Classic Butter Yellow & Chocolate",
    vaccinationStatus: "Core Puppy 7-in-1 Administered",
    microchipReady: true,
    price: "₹24,000 – ₹28,000",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=900&q=80",
    diet: "Farmina N&D Puppy Medium + Boiled Egg White Regimen",
    parentsInfo: "Sire: Major of Vijayawada; Dam: Zara vom Deccan",
    highlights: ["Robust bone structure", "Dewormed every 14 days", "Free 1st-month diet chart included"]
  },
  {
    id: "pup-german-shepherd",
    breed: "German Shepherd (GSD)",
    lineage: "Original German Bloodline (Straight Back)",
    age: "8.5 Weeks",
    gender: "2 Males Available",
    temperament: "Alert, protective, high intelligence, disciplined",
    coat: "Rich Black & Tan",
    vaccinationStatus: "1st Booster & Rabies Pre-Schedule",
    microchipReady: true,
    price: "₹30,000 – ₹35,000",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=900&q=80",
    diet: "Pro Plan Large Athletic Puppy + Bone Broth Infusion",
    parentsInfo: "Sire: V-Rated Rex vom Godavari; Dam: Tara of Amaravati",
    highlights: ["Sound temperament testing", "No excessive sloped back", "Early house-breaking initiated"]
  },
  {
    id: "pup-beagle",
    breed: "Beagle (Tricolor)",
    lineage: "Compact Companion Line (KCI Documented)",
    age: "9 Weeks",
    gender: "1 Male, 1 Female Available",
    temperament: "Curious, cheerful, pack-oriented, gentle bark",
    coat: "Standard Black, Tan & White",
    vaccinationStatus: "DHPPi + Corona Shot Done",
    microchipReady: true,
    price: "₹26,000 – ₹30,000",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    diet: "Arden Grange Puppy Rich in Fresh Chicken",
    parentsInfo: "Sire: Cooper of Vizag; Dam: Daisy of Guntur",
    highlights: ["Apartment-friendly size", "Socialized with other dogs", "Microchip documentation complete"]
  },
  {
    id: "pup-shih-tzu",
    breed: "Shih Tzu",
    lineage: "Imperial Toy Line (Silky Double Coat)",
    age: "10 Weeks",
    gender: "2 Females Available",
    temperament: "Playful lap companion, low-allergen shedding",
    coat: "White & Honey Gold",
    vaccinationStatus: "Fully Vaccinated for 1st Stage",
    microchipReady: true,
    price: "₹22,000 – ₹27,000",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80",
    diet: "Royal Canin Mini Puppy Kibble + Wet Gravy",
    parentsInfo: "Sire: Leo of Chennai; Dam: Mia of Vijayawada",
    highlights: ["Hypoallergenic silky coat", "Thorough dental check done", "Includes starter grooming brush"]
  }
];

export const BOARDING_TIERS = [
  {
    id: "standard-suite",
    title: "Standard Air-Cooled Suite",
    subtitle: "Private indoor room with climate air-cooling and shaded run access",
    pricePerDay: "₹650",
    features: [
      "Individual 8ft x 6ft sanitized indoor suite",
      "Air-cooled ventilation for Vijayawada summers",
      "3 daily supervised exercise walks on grass",
      "2 measured meals following your home diet",
      "Daily WhatsApp photo & health update",
      "Fresh RO drinking water changed thrice daily"
    ],
    recommendedFor: "Adult dogs accustomed to routine home stays"
  },
  {
    id: "deluxe-paddock-suite",
    title: "Deluxe Garden Paddock Suite",
    subtitle: "Spacious suite with attached private outdoor shaded verandah",
    pricePerDay: "₹950",
    popular: true,
    features: [
      "Extra-large 12ft x 10ft suite with grass view",
      "Full climate control with split air conditioning",
      "4 outdoor paddock exercise & playtime sessions",
      "Premium nutrition (boiled chicken + kibble or veg mash)",
      "Daily 30-sec WhatsApp video call / clips to pet parent",
      "Nightly orthopedic bedding and soothing background sound",
      "Complimentary coat brushing and ear check daily"
    ],
    recommendedFor: "High-energy breeds, Golden Retrievers, German Shepherds"
  },
  {
    id: "senior-special-suite",
    title: "Senior & Medical Care Suite",
    subtitle: "Quiet zone with specialized non-slip flooring and round-the-clock supervision",
    pricePerDay: "₹1,200",
    features: [
      "Low-impact orthopedic foam bed with ramp access",
      "Strict medication administration on your vet's clock",
      "Gentle joint-mobility walks on soft natural lawn",
      "Senior digestive diet preparation (soft stews, broths)",
      "Dedicated caretaker assigned 24 hours",
      "Direct priority ambulance & veterinary partner access",
      "Twice-daily video updates to owners"
    ],
    recommendedFor: "Senior canines (8+ yrs), post-op dogs, or puppies under special watch"
  }
];

export const BOARDING_SCHEDULE = [
  {
    time: "06:30 AM",
    title: "Morning Lawn Run & Fresh RO Hydration",
    detail: "Dogs are escorted individually to the shaded natural grass paddock for 45 minutes of morning relief, sniffing, and supervised ball play.",
    icon: "Sunrise"
  },
  {
    time: "08:30 AM",
    title: "Measured Breakfast & Medication Administration",
    detail: "Customized morning meal prepared in sterile stainless steel bowls based on each guest's home dietary profile, followed by oral supplements or medication.",
    icon: "Utensils"
  },
  {
    time: "10:30 AM",
    title: "Air-Cooled Indoor Rest & Midday Nap",
    detail: "Post-breakfast quiet period inside sanitized, air-cooled private rooms. Soft music reduces separation anxiety while caretakers perform suite sanitization.",
    icon: "Bed"
  },
  {
    time: "01:30 PM",
    title: "Cognitive Play & Fresh Water Inspection",
    detail: "Light interaction session with natural rubber puzzle toys, gentle human brushing, and cool drinking water refills.",
    icon: "Sparkles"
  },
  {
    time: "04:45 PM",
    title: "Afternoon Paddock Exercise & Grooming",
    detail: "Second active outdoor session as the Vijayawada sun cools down. Paddock agility, frisbee fetching, and a 10-minute brush-down to remove grass seeds.",
    icon: "Activity"
  },
  {
    time: "06:45 PM",
    title: "Evening Dinner Service",
    detail: "Second balanced meal served according to owner guidelines, followed by a calm 15-minute leash digestive stroll.",
    icon: "Coffee"
  },
  {
    time: "08:30 PM",
    title: "Night Settling, CCTV Surveillance & Lights Out",
    detail: "Final bedding fluffing, nighttime wellness check by the resident kennel master, and transition to night security with 24/7 CCTV monitoring.",
    icon: "Moon"
  }
];

export const PET_FOODS = [
  {
    id: "food-puppy-starter",
    title: "Canine Growth Formula Starter Kibble",
    brand: "GRK Nutrition Selection",
    category: "Puppy (Up to 12 Months)",
    weight: "3 kg / 10 kg",
    price: "₹1,850",
    priceNumeric: 1850,
    protein: "30% Crude Protein",
    keyFeature: "DHA for neurological development and enriched colostrum for gut immunity.",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    ingredients: "Deboned chicken, whole brown rice, dried egg product, fish oil, beet pulp, calcium phosphate"
  },
  {
    id: "food-adult-active",
    title: "Active Breed Performance Kibble",
    brand: "Field & Kennel Special",
    category: "Adult (1 to 7 Years)",
    weight: "10 kg / 15 kg",
    price: "₹3,450",
    priceNumeric: 3450,
    protein: "26% Crude Protein",
    keyFeature: "Optimal omega 3:6 ratio for lustrous coat under tropical Indian humidity.",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80",
    ingredients: "Fresh mutton meal, whole oats, sweet potatoes, flaxseed, dried chicory root, chelated minerals"
  },
  {
    id: "food-hypoallergenic",
    title: "Hypoallergenic Lamb & Rice Sensitive Formula",
    brand: "Pure Care Veterinary Blend",
    category: "Sensitive Digestions & Skin",
    weight: "3 kg / 12 kg",
    price: "₹2,600",
    priceNumeric: 2600,
    protein: "24% Single-Source Lamb",
    keyFeature: "Zero wheat, zero corn, zero poultry by-products to prevent itching and loose stools.",
    image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?auto=format&fit=crop&w=800&q=80",
    ingredients: "Australian lamb meal, polished rice, pea starch, cold-pressed sunflower oil, rosemary extract"
  },
  {
    id: "food-joint-senior",
    title: "Senior Mobility & Joint Care Stew Kibble",
    brand: "Longevity Canine",
    category: "Senior (7+ Years)",
    weight: "3 kg / 10 kg",
    price: "₹2,200",
    priceNumeric: 2200,
    protein: "22% Lean Turkey & Salmon",
    keyFeature: "Infused with 1200mg Glucosamine & Chondroitin for hip and stifle joint support.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    ingredients: "Turkey meal, deboned salmon, barley, green-lipped mussel powder, cranberry, turmeric root"
  }
];

export const PET_BEDDING = [
  {
    id: "bed-elevated-cot",
    title: "Climate Elevated Cooling Mesh Cot",
    material: "Breathable PVC mesh on powder-coated steel frame",
    sizes: "Medium (30x20 in) | Large (42x30 in) | XL (50x36 in)",
    price: "₹1,850 – ₹2,650",
    priceNumeric: 1850,
    bestFor: "Vijayawada hot weather, outdoor lawns, preventing damp skin hot-spots",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    features: ["Elevates 7 inches off floor heat", "Washable with garden hose", "Rust-resistant frame, holds up to 65 kg"]
  },
  {
    id: "bed-orthopedic-canvas",
    title: "Orthopedic Memory Foam Canvas Lounge Bed",
    material: "High-density medical memory foam with 450 GSM cotton canvas cover",
    sizes: "Large (40x30x4 in) | XXL (48x36x5 in)",
    price: "₹3,200 – ₹4,400",
    priceNumeric: 3200,
    bestFor: "Golden Retrievers, GSDs, Labradors, dogs with hip dysplasia",
    image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80",
    features: ["Removable zipper cover for machine wash", "Waterproof internal liner", "Heavy cotton canvas resists light scratching"]
  },
  {
    id: "bed-waterproof-crate-mat",
    title: "Heavy-Duty Quilted Waterproof Crate Pad",
    material: "Ripstop canvas face, absorbent core, non-skid rubber base",
    sizes: "24 in | 36 in | 42 in",
    price: "₹1,150 – ₹1,650",
    priceNumeric: 1150,
    bestFor: "Puppy crate training, travel car seats, kennel floor lining",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    features: ["Stops moisture seeping to floor", "Fits standard wire travel crates", "Reinforced double-stitched perimeter"]
  },
  {
    id: "bed-calming-donut",
    title: "Deep-Sleep Calming Nest Bed",
    material: "High-loft polyfill with plush faux fleece bolster ring",
    sizes: "Small (20 in) | Medium (28 in)",
    price: "₹1,450 – ₹1,950",
    priceNumeric: 1450,
    bestFor: "Shih Tzus, Beagles, young puppies who crave a sense of burrowing security",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead7f363?auto=format&fit=crop&w=800&q=80",
    features: ["Raised rim supports neck and head", "Anti-anxiety cocoon design", "Non-skid bottom keeps bed anchored"]
  }
];

export const PET_ACCESSORIES = [
  {
    id: "acc-leather-lead",
    title: "Braided Full-Grain Leather Leash & Collar Set",
    spec: "6 Feet length | Solid Brass Heavy Snap Clip",
    price: "₹1,650",
    priceNumeric: 1650,
    material: "Vegetable-tanned Indian bridle leather, solid brass hardware",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
    description: "Built for handling strong breeds. Woven grip softens with age without burning hands on sudden pulls."
  },
  {
    id: "acc-ergonomic-harness",
    title: "No-Pull Tactical Chest Harness",
    spec: "Dual-leash attachment rings (Chest & Back)",
    price: "₹1,400",
    priceNumeric: 1400,
    material: "Reinforced oxford nylon with reflective stitching and padded chest plate",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    description: "Reduces neck strain by distributing leash pressure across the ribcage. Quick-release buckles."
  },
  {
    id: "acc-stainless-bowls",
    title: "Weighted Non-Tip Stainless Steel Feeding Station",
    spec: "Set of 2 (1.8 Liters each) | Silicon Base Ring",
    price: "₹950",
    priceNumeric: 950,
    material: "Food-grade 304 stainless steel with matte brushed exterior",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    description: "Wide weighted base prevents enthusiastic eaters from flipping their water or food during meal times."
  },
  {
    id: "acc-rubber-chews",
    title: "Indestructible Natural Rubber Training Ball & Bone",
    spec: "High-density puncture-proof rubber compound",
    price: "₹650",
    priceNumeric: 650,
    material: "BPA-free natural tree rubber, textured dental ridges",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    description: "Satisfies natural gnawing instinct while massaging gums and cleaning tartar from puppy and adult canine teeth."
  },
  {
    id: "acc-grooming-kit",
    title: "Canine Coat Undercoat Rake & Bristle Comb",
    spec: "Dual-sided stainless steel rounded teeth",
    price: "₹750",
    priceNumeric: 750,
    material: "Polished beechwood handle with anti-static stainless steel pins",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    description: "Safely thins seasonal shedding undercoats on Labradors and Retrievers without scratching sensitive skin."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    author: "Suresh Reddy",
    location: "Bhavanipuram, Vijayawada",
    service: "Pet Boarding (12 Days Stay)",
    pet: "Rocky — German Shepherd (3 Yrs)",
    quote: "Finding clean, disciplined boarding in Vijayawada was a challenge until we visited GRK. The daily WhatsApp video clips gave us total peace of mind while we were out of town. Rocky returned energetic and healthy.",
    date: "October 2026"
  },
  {
    id: "test-2",
    author: "Ananya & Vikram Sharma",
    location: "Benz Circle, Vijayawada",
    service: "Puppy Adoption",
    pet: "Milo — Golden Retriever Puppy",
    quote: "We spent 3 months searching for an ethical breeder who genuinely cared for the litter's mother. GRK invited us to meet the dam, showed full KCI papers, and guided us with the right food and bedding from day one.",
    date: "September 2026"
  },
  {
    id: "test-3",
    author: "Dr. K. Mohan Rao",
    location: "Gunadala, Vijayawada",
    service: "Nutrition & Orthopedic Bedding",
    pet: "Simba — Senior Labrador (9 Yrs)",
    quote: "The elevated mesh bed solved Simba's hot-spot skin flare-ups during the summer. Their grain-free joint support food is fresh, and the staff's canine knowledge is genuinely grounded in veterinary care.",
    date: "August 2026"
  }
];

export const ETHICAL_STANDARDS = [
  {
    number: "01",
    title: "Zero Commercial Puppy Mill Sourcing",
    description: "Every puppy born or placed through GRK Kennel comes from documented parents with health histories. We never broker unknown litters or support abusive mass breeding."
  },
  {
    number: "02",
    title: "Mandatory 60-Day Mother Weaning",
    description: "No puppy leaves our care before 8 full weeks of age. Early socialization with the mother and littermates is critical for lifelong behavioral stability and immunity."
  },
  {
    number: "03",
    title: "Climate-Engineered Facility Infrastructure",
    description: "Vijayawada experiences severe heat. Our boarding suites are thermal-insulated, air-cooled, and supplemented with shaded green turf paddocks to prevent heat exhaustion."
  },
  {
    number: "04",
    title: "Full Lifecycle Partnership",
    description: "Adopting or boarding with GRK is a permanent relationship. We provide lifelong guidance on food transitions, vaccination calendars, and safe boarding whenever you travel."
  }
];
