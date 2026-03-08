// ─── Site Metadata ────────────────────────────────────────────────────────────
export const SITE = {
  name:       "The Bunkers Point",
  nameHindi:  "थे बंकर्स पॉइंट",
  tagline:    "The Best Hangout Cafe in Kolar.",
  taglineSub: "Industrial vibes. Honest coffee. 24 hours.",
  phone:      "+91 XXXXX XXXXX",
  address: {
    line1:  "5C4C+VMJ, Priyanka Nagar",
    line2:  "Bairagarh Chichali, Kolar Rd",
    line3:  "Gehun Kheda, Bhopal, MP 462042",
    full:   "5C4C+VMJ, Priyanka Nagar, Bairagarh Chichali, Kolar Rd, Gehun Kheda, Bhopal, MP 462042",
    mapsUrl:"https://maps.google.com/?q=5C4C+VMJ,Priyanka+Nagar,Bairagarh+Chichali,Kolar+Rd,Gehun+Kheda,Bhopal,MP+462042",
    embedUrl:"https://www.google.com/maps?q=5C4C%2BVMJ,+Priyanka+Nagar,+Bairagarh+Chichali,+Kolar+Rd,+Gehun+Kheda,+Bhopal,+MP+462042&output=embed",
  },
  hours: "Open 24 Hours · Every Day",
  priceRange: "₹1 – ₹200 per person",
  services: ["Dine-In", "Takeaway", "Late-Night Vibes"],
};

// ─── Menu Data ────────────────────────────────────────────────────────────────
export interface MenuItem {
  name:  string;
  desc:  string;
  price: string;
  tag?:  string;
}
export interface MenuCategory {
  id:    string;
  label: string;
  emoji: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id:    "coffee",
    label: "Cold Brews & Specials",
    emoji: "☕",
    items: [
      { name: "Bunker Cold Brew",      desc: "24-hr steeped, served over obsidian ice",          price: "₹120", tag: "Fan Fav" },
      { name: "Amber Latte",           desc: "Espresso kissed with salted caramel drizzle",       price: "₹110" },
      { name: "Night Shift Mocha",     desc: "Double shot, dark chocolate, whipped top",          price: "₹130", tag: "Late-Night" },
      { name: "Tactical Cappuccino",   desc: "Bold crema, military-grade microfoam art",          price: "₹90" },
      { name: "Iced Hazelnut Breeze",  desc: "Cold milk, hazelnut syrup, espresso shot",          price: "₹115" },
      { name: "Black Ops Americano",   desc: "Triple ristretto, pure and brutal",                 price: "₹80" },
    ],
  },
  {
    id:    "snacks",
    label: "Snacks & Bites",
    emoji: "🍴",
    items: [
      { name: "Bunker Loaded Toast",   desc: "Crispy sourdough, molten cheese, jalapeños",        price: "₹80",  tag: "Best Seller" },
      { name: "Maggi Battle Box",      desc: "Chef-spiced, egg topping, served scorching hot",    price: "₹60" },
      { name: "Steel Plate Sandwich",  desc: "Triple-layer grilled club with sriracha mayo",      price: "₹100" },
      { name: "French Fry Ammo Box",   desc: "Masala fries with full dipping arsenal",            price: "₹70" },
      { name: "Paneer Tikka Skewers",  desc: "Charred, spiced, served with mint chutney",        price: "₹120" },
      { name: "Bread Pakora Assault",  desc: "Double-stuffed, batter-fried, green chutney",      price: "₹50" },
    ],
  },
  {
    id:    "chai",
    label: "Signature Chai",
    emoji: "🫖",
    items: [
      { name: "Kolar Kadak Chai",      desc: "Strong, heavily spiced, soul-warming brew",         price: "₹20",  tag: "Iconic" },
      { name: "Saffron Doodh Chai",    desc: "Milk chai with saffron strands & cardamom",        price: "₹35" },
      { name: "Midnight Masala Chai",  desc: "Extra ginger, extra pepper, extra soul",            price: "₹25",  tag: "Late-Night" },
      { name: "Bunker Special Chai",   desc: "Secret recipe. Don't ask. Just trust us.",          price: "₹30",  tag: "Secret" },
      { name: "Adrak Tulsi Chai",      desc: "Ginger & holy basil — immunity in a glass",        price: "₹25" },
      { name: "Cutting Chai",          desc: "Half cup, full punch. The classic.",                price: "₹15" },
    ],
  },
];

// ─── Reviews Data ─────────────────────────────────────────────────────────────
export interface Review {
  name:   string;
  avatar: string;
  stars:  number;
  text:   string;
  date:   string;
}

export const REVIEWS: Review[] = [
  { name: "Aditya Rawat",    avatar: "A", stars: 5, text: "The best hangout cafe in Kolar — hands down. We came at 2AM and it was still buzzing with energy. That cold brew? Genuinely life-changing.", date: "2 weeks ago" },
  { name: "Priya Sharma",    avatar: "P", stars: 5, text: "I love how it feels like entering a completely different world the moment you walk in. The bunker vibe is so real and unique. Perfect all-night chill spot.", date: "1 month ago" },
  { name: "Rahul Kushwaha",  avatar: "R", stars: 5, text: "₹200 budget and we had a full-on night out. Chai, loaded toast, snacks, great music — cannot beat The Bunkers Point.", date: "3 weeks ago" },
  { name: "Meera Tiwari",    avatar: "M", stars: 5, text: "Never expected a place like this in Bhopal. The industrial decor combined with warm amber lighting is absolutely stunning. Our permanent hangout now.", date: "1 week ago" },
  { name: "Zaid Hussain",    avatar: "Z", stars: 5, text: "Came after college exams at midnight. Staff was incredibly warm, music was perfect volume. This place truly understands what students need at 3AM.", date: "2 months ago" },
  { name: "Sneha Gupta",     avatar: "S", stars: 5, text: "Unique, affordable, and actually aesthetic — three things you never expect together. The cold brew alone is worth the trip from anywhere in Bhopal.", date: "5 days ago" },
];

// ─── Features for About section ───────────────────────────────────────────────
export const FEATURES = [
  { emoji: "⚡", title: "Open 24/7",         desc: "No last call. Ever. We're here when the rest of the city sleeps." },
  { emoji: "🏗️", title: "Bunker Aesthetic",  desc: "Raw concrete, steel mesh, amber light. A world within a world." },
  { emoji: "💰", title: "Truly Affordable",  desc: "Full meals under ₹200. Chai from ₹15. No compromise on quality." },
  { emoji: "🎵", title: "Curated Ambience",  desc: "Carefully selected music that matches the hour and the mood." },
];
