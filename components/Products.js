// import React, { useState } from "react";

// const categories = [
//   "Laptop", "AIO PC", "Printers", "CCTV System", "Monitor", "SSD/HDD",
//   "Online UPS", "Scanner", "MFM", "Keypad/Mouse", "Server", "Line Interactive UPS"
// ];

// const products = [
//   { id: 1, name: "Dell Inspiron", category: "Laptop", image: "/laptop.jpg" },
//   { id: 2, name: "HP Pavilion", category: "Laptop", image: "/laptop2.jpg" },
//   { id: 3, name: "Lenovo IdeaPad", category: "Laptop", image: "/laptop3.jpg" },
//   { id: 4, name: "Canon Pixma", category: "Printers", image: "/printer.jpg" },
//   { id: 5, name: "HP LaserJet", category: "Printers", image: "/printer2.jpg" },
//   { id: 6, name: "Samsung CCTV", category: "CCTV System", image: "/cctv.jpg" },
//   { id: 7, name: "WD 1TB", category: "SSD/HDD", image: "/hdd.jpg" },
//   { id: 8, name: "APC 1KVA UPS", category: "Online UPS", image: "/ups.jpg" },
//   { id: 9, name: "Brother MFM", category: "MFM", image: "/mfm.jpg" },
//   { id: 10, name: "Dell Monitor", category: "Monitor", image: "/monitor.jpg" },
//   { id: 11, name: "Intel Xeon Server", category: "Server", image: "/server.jpg" },
//   { id: 12, name: "Logitech Mouse", category: "Keypad/Mouse", image: "/mouse.jpg" },
// ];

// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-full h-40 object-cover rounded-md mb-4"
//     />
//     <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//     <p className="text-sm text-gray-500">{product.category}</p>
//   </div>
// );

// const ProductSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Laptop");

//   const filteredProducts = products
//     .filter((p) => p.category === selectedCategory)
//     .slice(0, 6); // Show only 6

//   return (
//     <section className="px-4 lg:pt-20  sm:px-6 lg:px-10 bg-sky-50 ml-10">
//       <div className="max-w-7xl ">
//         <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
//           <h2 className="text-3xl font-bold text-gray-800">Products</h2>
//           <select
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             value={selectedCategory}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
import React, { useState } from "react";

const categories = [
  "Laptop", "AIO PC", "Printers", "CCTV System", "Monitor", "SSD/HDD",
  "Online UPS", "Scanner", "MFM", "Keypad/Mouse", "Server", "Line Interactive UPS"
];

const products = [
  { id: 1, name: "Dell Inspiron", category: "Laptop", image: "/laptop.jpg" },
  { id: 2, name: "HP Pavilion", category: "Laptop", image: "/laptop2.jpg" },
  { id: 3, name: "Lenovo IdeaPad", category: "Laptop", image: "/laptop3.jpg" },
  { id: 4, name: "brother_DCP-T226", category: "Printers", image: "/printer/brother.png" },
  { id: 5, name: "Canon", category: "Printers", image: "/printer/canon.png" },
  { id: 5, name: "Epson", category: "Printers", image: "/printer/Epson.png" },
  { id: 5, name: "Hp", category: "Printers", image: "/printer/Hp.png" },
  { id: 5, name: "Hp Desk", category: "Printers", image: "/printer/Hp-Deskjet.png" },
  { id: 5, name: "Hp DeskJet", category: "Printers", image: "/printer/H.png" },
  { id: 6, name: "Samsung CCTV", category: "CCTV System", image: "/cctv.jpg" },
  { id: 7, name: "WD 1TB", category: "SSD/HDD", image: "/hdd.jpg" },
  { id: 8, name: "APC 1KVA UPS", category: "Online UPS", image: "/ups.jpg" },
  { id: 9, name: "Brother MFM", category: "MFM", image: "/mfm.jpg" },
  { id: 10, name: "Dell Monitor", category: "Monitor", image: "/monitor.jpg" },
  { id: 11, name: "Intel Xeon Server", category: "Server", image: "/server.jpg" },
  { id: 12, name: "Logitech Mouse", category: "Keypad/Mouse", image: "/mouse.jpg" },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>
    <p className="text-sm text-gray-500 text-center">{product.category}</p>
  </div>
);

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Laptop");

  const filteredProducts = products
    .filter((p) => p.category === selectedCategory)
    .slice(0, 6); // Only show 6 cards

  return (
    <section className="px-4 pt-10 lg:pt-20 pb-16 sm:px-6 lg:px-10 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header & Dropdown */}
        <div className="flex flex-col items-center justify-center mb-10 gap-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
