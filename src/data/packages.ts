export const ALL_PACKAGES = [
  { id: 1, title: "21 Days Economy Saver", days: 21, airline: "Fly Jinnah", makkah: "Fakhir Al Azizia", madina: "Hala Taibah", price: 251000, category: "Economy", image: "/images/p1.jpg" },
  { id: 2, title: "21 Days Executive Saudia", days: 21, airline: "Saudia", makkah: "Fakhir Al Azizia", madina: "Hala Taibah", price: 266500, category: "Premium", image: "/images/p2.jpg" },
  { id: 3, title: "21 Days AirSial Special", days: 21, airline: "AirSial", makkah: "Arafat Golden", madina: "Wahat Al Shark", price: 243000, category: "Economy", image: "/images/p3.jpg" },
  { id: 4, title: "21 Days PIA Classic", days: 21, airline: "PIA", makkah: "Arafat Golden", madina: "Hala Taibah", price: 265000, category: "Standard", image: "/images/p4.jpg" },
  { id: 5, title: "20 Days Islamabad Deal", days: 20, airline: "PIA", makkah: "Arafat Golden", madina: "Wahat Al Shark", price: 258000, category: "Economy", image: "/images/p5.jpg" }
];

export const getFinalPackages = () => {
  return ALL_PACKAGES.map(pkg => ({
    ...pkg,
    price: pkg.price + 10000
  }));
};