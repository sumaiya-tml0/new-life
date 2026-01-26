import type { Product } from "../types/product";


export const dummyProducts: Product[] = [
  // Homeo - Mother Tincture
  { id: 1, name: "Arnica Montana Q", image: "/1.jpg", price: 150, category: "Homeo", subcategory: "Mother Tincture" },
  { id: 2, name: "Calendula Q", image: "/1.jpg", price: 140, category: "Homeo", subcategory: "Mother Tincture" },
  { id: 3, name: "Thuja Q", image: "/1.jpg", price: 160, category: "Homeo", subcategory: "Mother Tincture" },

  // Homeo - Dilution
  { id: 4, name: "Belladonna 30", image: "/1.jpg", price: 80, category: "Homeo", subcategory: "Dilution" },
  { id: 5, name: "Nux Vomica 200", image: "/1.jpg", price: 90, category: "Homeo", subcategory: "Dilution" },
  { id: 6, name: "Pulsatilla 30", image: "/1.jpg", price: 85, category: "Homeo", subcategory: "Dilution" },

  // Homeo - Bio-Chemic
  { id: 7, name: "Calc Phos 6X", image: "/1.jpg", price: 70, category: "Homeo", subcategory: "Bio-Chemic" },
  { id: 8, name: "Ferrum Phos 6X", image: "/1.jpg", price: 70, category: "Homeo", subcategory: "Bio-Chemic" },
  { id: 9, name: "Kali Phos 6X", image: "/1.jpg", price: 75, category: "Homeo", subcategory: "Bio-Chemic" },

  // Homeo - NL Series
  { id: 10, name: "NL-1 Fever", image: "/1.jpg", price: 120, category: "Homeo", subcategory: "NL Series" },
  { id: 11, name: "NL-5 Gastric", image: "/1.jpg", price: 130, category: "Homeo", subcategory: "NL Series" },
  { id: 12, name: "NL-10 Cough", image: "/1.jpg", price: 125, category: "Homeo", subcategory: "NL Series" },

  // Ayurvedic - Churna
  { id: 13, name: "Triphala Churna", image: "/1.jpg", price: 180, category: "Ayurvedic", subcategory: "Churna" },
  { id: 14, name: "Ashwagandha Churna", image: "/1.jpg", price: 200, category: "Ayurvedic", subcategory: "Churna" },
  { id: 15, name: "Haritaki Churna", image: "/1.jpg", price: 150, category: "Ayurvedic", subcategory: "Churna" },

  // Ayurvedic - Vati & Gutika
  { id: 16, name: "Brahmi Vati", image: "/1.jpg", price: 200, category: "Ayurvedic", subcategory: "Vati & Gutika" },
  { id: 17, name: "Chandraprabha Vati", image: "/1.jpg", price: 220, category: "Ayurvedic", subcategory: "Vati & Gutika" },
  { id: 18, name: "Kaishore Guggulu", image: "/1.jpg", price: 250, category: "Ayurvedic", subcategory: "Vati & Gutika" },

  // Ayurvedic - Asava & Arishta
  { id: 19, name: "Ashwagandharishta", image: "/1.jpg", price: 280, category: "Ayurvedic", subcategory: "Asava & Arishta" },
  { id: 20, name: "Draksharishta", image: "/1.jpg", price: 260, category: "Ayurvedic", subcategory: "Asava & Arishta" },

  // Ayurvedic - Rasayana
  { id: 21, name: "Chyawanprash", image: "/1.jpg", price: 350, category: "Ayurvedic", subcategory: "Rasayana" },
  { id: 22, name: "Brahma Rasayana", image: "/1.jpg", price: 400, category: "Ayurvedic", subcategory: "Rasayana" },

  // Unani - Majun
  { id: 23, name: "Majun Dabid-ul-Ward", image: "/1.jpg", price: 220, category: "Unani", subcategory: "Majun" },
  { id: 24, name: "Majun Falasfa", image: "/1.jpg", price: 250, category: "Unani", subcategory: "Majun" },
  { id: 25, name: "Majun Ushba", image: "/1.jpg", price: 200, category: "Unani", subcategory: "Majun" },

  // Unani - Habbe
  { id: 26, name: "Habbe Amber", image: "/1.jpg", price: 180, category: "Unani", subcategory: "Habbe" },
  { id: 27, name: "Habbe Jadwar", image: "/1.jpg", price: 190, category: "Unani", subcategory: "Habbe" }, 

  // Unani - Roghan
  { id: 28, name: "Roghan Badam", image: "/1.jpg", price: 300, category: "Unani", subcategory: "Roghan" },
  { id: 29, name: "Roghan Zaitoon", image: "/1.jpg", price: 280, category: "Unani", subcategory: "Roghan" },

  // Unani - Sharbat
  { id: 30, name: "Sharbat Unnab", image: "/1.jpg", price: 150, category: "Unani", subcategory: "Sharbat" },
  { id: 31, name: "Sharbat Bazoori", image: "/1.jpg", price: 160, category: "Unani", subcategory: "Sharbat" },

  // Herbal - Herbal Juice
  { id: 32, name: "Aloe Vera Juice", image: "/1.jpg", price: 200, category: "Herbal", subcategory: "Herbal Juice" },
  { id: 33, name: "Giloy Juice", image: "/1.jpg", price: 170, category: "Herbal", subcategory: "Herbal Juice" },
  { id: 34, name: "Amla Juice", image: "/1.jpg", price: 180, category: "Herbal", subcategory: "Herbal Juice" },

  // Herbal - Herbal Capsules
  { id: 35, name: "Neem Capsules", image: "/1.jpg", price: 180, category: "Herbal", subcategory: "Herbal Capsules" },
  { id: 36, name: "Tulsi Capsules", image: "/1.jpg", price: 160, category: "Herbal", subcategory: "Herbal Capsules" },
  { id: 37, name: "Moringa Capsules", image: "/1.jpg", price: 200, category: "Herbal", subcategory: "Herbal Capsules" },

  // Herbal - Herbal Syrup
  { id: 38, name: "Tulsi Syrup", image: "/1.jpg", price: 150, category: "Herbal", subcategory: "Herbal Syrup" },
  { id: 39, name: "Cough Syrup", image: "/1.jpg", price: 140, category: "Herbal", subcategory: "Herbal Syrup" },

  // Herbal - Herbal Tea
  { id: 40, name: "Green Tea", image: "/1.jpg", price: 120, category: "Herbal", subcategory: "Herbal Tea" },
  { id: 41, name: "Tulsi Tea", image: "/1.jpg", price: 130, category: "Herbal", subcategory: "Herbal Tea" },
];
