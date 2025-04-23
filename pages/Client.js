// import { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Head from 'next/head';

// const HireMe = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [status, setStatus] = useState({ success: null, message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ success: null, message: '' });

//     try {
//       const response = await fetch('/api/hire', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus({ success: true, message: 'Your request has been sent successfully!' });
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           message: '',
//         });
//       } else {
//         const error = await response.json();
//         setStatus({ success: false, message: error.error || 'Something went wrong.' });
//       }
//     } catch (error) {
//       setStatus({ success: false, message: 'Unable to send your request. Please try again later.' });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100">
//       <Head>
//         <title>Hire Me</title>
//         <meta name="description" content="Contact Arif Uz Zaman for hiring opportunities." />
//       </Head>

//       {/* Header Section */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow pt-20 sm:pt-24 px-6 sm:px-8 flex items-center justify-center mt-20 mb-10">
//         <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Form Section */}
//           <div className="dark:bg-gray-700 bg-white shadow-lg rounded-lg p-6">
//             <h1 className="text-2xl font-bold text-pink-600 mb-6 text-center md:text-left">
//               Hire Me
//             </h1>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 focus:outline-none focus:ring focus:ring-pink-500"
//                 />
//               </div>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Message"
//                 className="w-full border border-gray-300 dark:border-gray-500 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring focus:ring-pink-500"
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>

//             {status.message && (
//               <p
//                 className={`mt-4 text-center ${
//                   status.success ? 'text-green-500' : 'text-red-500'
//                 }`}
//               >
//                 {status.message}
//               </p>
//             )}
//           </div>

//           {/* Info Section */}
//           <div className="dark:bg-gray-700 bg-white text-gray-800 dark:text-white rounded-lg shadow-lg p-6 space-y-6">
//             <div>
//               <h2 className="text-xl font-bold mb-2">Office</h2>
//               <p>Guwahati, Sixmile (781036)</p>
//             </div>
//             <div>
//               <h2 className="text-xl font-bold mb-2">Call</h2>
//               <p>Tel: +91-9395332125</p>
//             </div>
//             <div>
//               <h2 className="text-xl font-bold mb-2">Email</h2>
//               <p>arifzaman700@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer Section */}
//       {/* <footer className="bg-white dark:bg-gray-800 shadow mt-20">
//         <Footer />
//       </footer> */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default HireMe;


// import React from 'react';

// const Clients = () => {
//   const clients = [
//     "Jorhat Engineering College, Jorhat",
//     "Institute of Co-operative Management, Guwahati",
//     "Indian Overseas Bank, Regional Office, Guwahati",
//     "Indian Institute of Technology, Guwahati",
//     "Office the Principal Accountant General, Guwahati",
//     "Assam Engineering Institute, Guwahati",
//     "Bureau of Indian Standard, Guwahati Branch office",
//     "Bodoland University, Kokrajhar",
//     "Khadi and Village Industries Commission, Guwahati",
//     "Finance Department, Govt. of Assam",
//     "Employee's Provident Fund Organisation, Regional Office, Guwahati",
//     "Guwahati High Court",
//     "Rural Electrification Corporation Limited, Regional Office, Guwahati",
//     "Department of Post",
//     "AGC Networks Limited",
//     "Systems and Process",
//     "Central Silk Board",
//     "Assam Co-operative Apex Bank Ltd.",
//     "NEEPCO",
//     "Amtron",
//   ];

//   return (
//     <section className="py-12 bg-gray-100"> {/* Example background and padding */}
//       <div className="container mx-auto px-4"> {/* Centered container */}
//         <h2 className="text-3xl font-bold text-center mb-8">Our Valued Clients</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive grid */}
//           {clients.map((client, index) => (
//             <div key={index} className="bg-white rounded-lg shadow p-4 text-center"> {/* Card styling */}
//               <p className="text-gray-700">{client}</p>
//             </div>
//           ))}
//         </div>
//         {/* Optional: Add a "See More" button if the list is very long */}
//         {/* <div className="mt-8 text-center">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             See More
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from 'react';
// import Image from 'next/image'; // Import Next.js Image component for optimized images

// const Clients = () => {
//   const clients = [
//     {
//       name: "Jorhat Engineering College, Jorhat",
//       image: "/jec.jpg", // Path to your image
//     },
//     {
//       name: "Institute of Co-operative Management, Guwahati",
//       image: "/images/icm_logo.png", // Path to your image
//     },
//     // ... more clients with images
//     {
//       name: "Amtron",
//       image: "/images/amtron_logo.png", // Path to your image
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Valued Clients</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {clients.map((client, index) => (
//             <div key={index} className="bg-white rounded-lg shadow p-4 text-center flex flex-col items-center"> {/* Flex column and center items */}
//               {client.image && ( // Conditionally render image if available
//                 <div className="mb-4 w-24 h-24 rounded-full overflow-hidden"> {/* Image container with rounded corners */}
//                   <Image
//                     src={client.image}
//                     alt={client.name}
//                     width={96} // Adjust width as needed
//                     height={96} // Adjust height as needed
//                     className="object-cover" // Ensures image covers the container
//                   />
//                 </div>
//               )}
//               <p className="text-gray-700">{client.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React, { useState } from "react";
// import Image from "next/image";
// import Head from 'next/head';
// import Header from '../components/Header';
// const Clients = () => {
//   const clients = [
//     {
//       name: "Jorhat Engineering College, Jorhat",
//       image: "/jec.jpg",
//       backContent: "Jorhat Engineering College is a premier engineering institute in Assam.",
//     },
//     {
//       name: "Institute of Co-operative Management, Guwahati",
//       image: "/images/icm_logo.png",
//       backContent: "ICM Guwahati offers management education with a focus on cooperatives.",
//     },
//     {
//       name: "Indian Overseas Bank, Regional Office, Guwahati",
//       image: "/images/iob_logo.png",
//       backContent: "Indian Overseas Bank is a major public sector bank in India.",
//     },
//     {
//       name: "Indian Institute of Technology, Guwahati",
//       image: "/images/iitg_logo.png",
//       backContent: "IIT Guwahati is a renowned technical institute.",
//     },
//   ];

//   return (
//     <div>
//       <Head>
//         <title>Partners</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>
//       <section className="py-12 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Valued Clients</h2>

//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {clients.map((client, index) => (
//               <FlippingCard key={index} client={client} />
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// // 🃏 Flipping Card Component
// const FlippingCard = ({ client }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (

//     <div
//       className="relative w-full h-64 group cursor-pointer"
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       {/* Card Wrapper */}
//       <div
//         className={`absolute w-full h-full transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}
//         style={{ transformStyle: "preserve-3d" }}
//       >

//         {/* Front Side - Image */}
//         <div className="absolute w-full h-full bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center backface-hidden">
//           <Image
//             src={client.image}
//             alt={client.name}
//             width={250}
//             height={250}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Back Side - Content */}
//         <div className="absolute w-full h-full bg-blue-100 shadow-lg rounded-lg flex items-center justify-center p-4 transform rotate-y-180 backface-hidden">
//           <p className="text-gray-700 text-center font-semibold">{client.backContent}</p>
//         </div>

//       </div>
//     </div>

//   );
// };

// export default Clients;



// import React, { useState } from "react";
// import Image from "next/image";
// import Head from "next/head";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Clients = () => {
//   const clients = [
//     {
//       name: "Jorhat Engineering College, Jorhat",
//       image: "/images/jec.jpeg",
//       backContent: "Jorhat Engineering College is a premier engineering institute in Assam.",
//     },
//     {
//       name: "Institute of Co-operative Management, Guwahati",
//       image: "/images/ncct.png",
//       backContent: "ICM Guwahati offers management education with a focus on cooperatives.",
//     },
//     {
//       name: "Indian Institute of Technology, Guwahati",
//       image: "/images/IITG_logo.png",
//       backContent: "IIT Guwahati is a renowned technical institute.",
//     },
//     {
//       name: "Assam Engineering Institute, Guwahati.",
//       image: "/images/aec.png",
//       backContent: "IIT Guwahati is a renowned technical institute.",
//     },
//     {
//       name: "Bodoland University, Kokrajhar.",
//       image: "/images/bodo.png",
//       backContent: "IIT Guwahati is a renowned technical institute.",
//     },
//   ];
//   const bankingFinanceClients = [
//     {
//       name: "Indian Overseas Bank, Regional Office, Guwahati",
//       image: "/images/iob.png", // Replace with actual image path
//       backContent: "Indian Overseas Bank is a major public sector bank.",
//     },
//     {
//       name: "Office of the Principal Accountant General, Guwahati",
//       image: "/images/ag.png", // Replace with actual image path
//       backContent: "The PAG's office manages government accounts and audits.",
//     },
//     {
//       name: "Finance Department, Govt. of Assam",
//       image: "/images/assamfinance.png", // Replace with actual image path
//       backContent: "The Finance Department manages the state's finances.",
//     },
//     {
//       name: "Assam Co-operative Apex Bank Ltd.",
//       image: "/images/apexbank.png", // Replace with actual image path
//       backContent: "The Assam Co-operative Apex Bank supports cooperative ventures.",
//     },
//     // Add more banking/finance clients here
//   ];

//   const governmentClients = [
//     {
//       name: "Employee's Provident Fund Organisation, Regional Office, Guwahati",
//       image: "/images/epfo.png", // Replace with actual image path
//       backContent: "EPFO manages provident fund accounts for employees.",
//     },
//     {
//       name: "Guwahati High Court",
//       image: "/images/highcourt.png", // Replace with actual image path
//       backContent: "The Guwahati High Court is the High Court for Assam and other states.",
//     },
//     {
//       name: "Department of Post",
//       image: "/images/post.png", // Replace with actual image path
//       backContent: "India Post provides postal and other services.",
//     },
//     {
//       name: "Central Silk Board",
//       image: "/images/csb.png", // Replace with actual image path
//       backContent: "The Central Silk Board promotes silk industry development.",
//     },
//     {
//       name: "NEEPCO", // North Eastern Electric Power Corporation
//       image: "/images/neepco.png", // Replace with actual image path
//       backContent: "NEEPCO is a power generation company in the Northeast.",
//     },
//     // Add more government/public sector clients here
//   ];

//   const industryClients = [
//     {
//       name: "Bureau of Indian Standard, Guwahati Branch office",
//       image: "/images/bis.png", // Replace with actual image path
//       backContent: "BIS sets standards for products and services in India.",
//     },
//     {
//       name: "Khadi and Village Industries Commission, Guwahati",
//       image: "/images/kvic.png", // Replace with actual image path
//       backContent: "KVIC promotes khadi and village industries.",
//     },
//     {
//       name: "Rural Electrification Corporation Limited, Regional Office, Guwahati",
//       image: "/images/rec.png", // Replace with actual image path
//       backContent: "REC finances rural electrification projects.",
//     },
//     {
//       name: "AGC Networks Limited",
//       image: "/images/agc.png", // Replace with actual image path
//       backContent: "AGC Networks provides technology solutions.",
//     },
//     {
//       name: "Systems and Process",
//       image: "/images/systemsandprocess.png", // Replace with actual image path
//       backContent: "Systems and Process (add description if known)", // Add a description if you have it.
//     },
//     {
//       name: "Amtron",
//       image: "/images/amtron.png", // Replace with actual image path
//       backContent: "Amtron is an electronics company in Assam.",
//     },
//     // Add more industry/business clients here
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Head>
//         <title>Partners</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/logo.png" />
//       </Head>

//       {/* Fixed Header */}
// <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow overflow-auto pt-20 bg-gray-100 p-8">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Valued Clients <span className="text-yellow-400">Educational Institutions</span></h2>

//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {clients.map((client, index) => (
//               <FlippingCard key={index} client={client} />
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// // 🃏 Flipping Card Component
// const FlippingCard = ({ client }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       className="relative w-full h-64 group cursor-pointer"
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       {/* Card Wrapper */}
//       <div
//         className={`absolute w-full h-full transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Front Side - Image */}
//         <div className="absolute w-full h-full bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center backface-hidden">
//           <Image
//             src={client.image}
//             alt={client.name}
//             width={250}
//             height={250}
//             className="w-full h-full contain px-6 py-2"
//           />
//         </div>

//         {/* Back Side - Content */}
//         <div className="absolute w-full h-full bg-blue-100 shadow-lg rounded-lg flex items-center justify-center p-4 transform rotate-y-180 backface-hidden">
//           <p className="text-gray-700 text-center font-semibold">{client.backContent}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;



import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Case from "/components/CaseStudies";

const Clients = () => {
  const categories = [
    {
      title: "Educational Institutions",
      clients: [
        {
          name: "Jorhat Engineering College, Jorhat",
          image: "/images/jec.jpeg",
          backContent: "Jorhat Engineering College is a premier engineering institute in Assam.",
        },
        {
          name: "Institute of Co-operative Management, Guwahati",
          image: "/images/ncct.png",
          backContent: "ICM Guwahati offers management education with a focus on cooperatives.",
        },
        {
          name: "Indian Institute of Technology, Guwahati",
          image: "/images/IITG_logo.png",
          backContent: "IIT Guwahati is a renowned technical institute.",
        },
        {
          name: "Assam Engineering Institute, Guwahati.",
          image: "/images/aec.png",
          backContent: "IIT Guwahati is a renowned technical institute.",
        },
      ],
    },
    {
      title: "Banking & Finance",
      clients: [
        {
          name: "Indian Overseas Bank, Regional Office, Guwahati",
          image: "/images/iob.png",
          backContent: "Indian Overseas Bank is a major public sector bank.",
        },
        {
          name: "Office of the Principal Accountant General, Guwahati",
          image: "/images/ag.png",
          backContent: "The PAG's office manages government accounts and audits.",
        },
        {
          name: "Finance Department, Govt. of Assam",
          image: "/Client/Finance Department Assam.png",
          backContent: "The Finance Department manages the state's finances.",
        },
      ],
    },
    {
      title: "Government & Public Sector",
      clients: [
        {
          name: "Employee's Provident Fund Organisation, Guwahati",
          image: "/Client/Emlpoyees provident fund.png",
          backContent: "EPFO manages provident fund accounts for employees.",
        },
        {
          name: "Guwahati High Court",
          image: "/Client/GHC.png",
          backContent: "The Guwahati High Court serves Assam and neighboring states.",
        },
        {
          name: "Central Silk Board",
          image: "/Client/Cental Silk Board.png",
          backContent: "The Central Silk Board promotes silk industry development.",
        },
      ],
    },
    {
      title: "Industry & Business",
      clients: [
        {
          name: "Bureau of Indian Standard, Guwahati Branch",
          image: "/Client/Bereaue of india.png",
          backContent: "BIS sets standards for products and services in India.",
        },
        {
          name: "Khadi and Village Industries Commission, Guwahati",
          image: "/Client/Khadi india.png",
          backContent: "KVIC promotes khadi and village industries.",
        },
        {
          name: "Rural Electrification Corporation Limited, Guwahati",
          image: "/Client/REC.png",
          backContent: "REC finances rural electrification projects.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>B2B Systems and Solutions - Profile | Trusted B2B Partnerships Across Industries</title>
        <meta
          name="description"
          content="Explore our diverse portfolio and trusted client base spanning multiple industries. Discover why businesses choose our B2B solutions."
        />
        <meta
          name="keywords"
          content="B2B clients, client portfolio, business profiles, partnerships, trusted companies, industry clients, client showcase"
        />
        <meta name="author" content="B2B Systems and Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>
      <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md">
        <div className="flex  items-center justify-center gap-2 py-4 px-4">
          <img
            src="/images/msme-logo.png"
            alt="MSME Logo"
            className="h-12 w-auto"
          />
          <img
            src="/images/gem-logo.png"
            alt="GEM Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
  {/* Prevent Overlap */}
  <div className="pt-32 sm:hidden" />

      {/* Main Content */}
      <main className="flex-grow overflow-auto  ">
        <Case/>
       <div className="container mx-auto px-4 bg-sky-50 shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Valued Clients</h1>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.clients.map((client, index) => (
                  <FlippingCard key={index} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div> 
        

      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
};

// 🃏 Flipping Card Component
const FlippingCard = ({ client }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Image */}
        <div className="absolute w-full h-full bg-white-50 shadow-lg rounded-lg overflow-hidden flex items-center justify-center backface-hidden">
          <Image
            src={client.image}
            alt={client.name}
            width={250}
            height={250}
            className="w-full h-full contain px-6 py-2"
          />
        </div>

        {/* Back Side - Content */}
        <div className="absolute w-full h-full bg-white-100 shadow-lg rounded-lg flex items-center justify-center p-4 transform rotate-y-180 backface-hidden">
          <p className="text-gray-700 text-center font-semibold">{client.backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;


// import React from "react";

// const TrustedCompanies = () => {
//   const companies = [
//     { name: "HP", logo: "/hp-1.png" },
//     { name: "IBM", logo: "/images/ibm-logo.png" },
//     { name: "EMC2", logo: "/logos/emc2.png" },
//     { name: "Acer", logo: "/logos/acer.png" },
//     { name: "HCL", logo: "/logos/hcl.png" },
//     { name: "Wipro", logo: "/logos/wipro.png" },
//     { name: "Accel Frontline", logo: "/logos/accel-frontline.png" },
//     { name: "Lenovo", logo: "/logos/lenovo.png" },
//     { name: "Dell", logo: "/logos/dell.png" },
//     { name: "Unify (Formerly Siemens India Ltd.)", logo: "/logos/unify.png" },
//     { name: "AGC", logo: "/logos/agc.png" },
//     { name: "Polycom", logo: "/logos/polycom.png" },
//     { name: "Cisco", logo: "/logos/cisco.png" },
//     { name: "Huawei", logo: "/logos/huawei.png" },
//     { name: "D-Link", logo: "/logos/dlink.png" },
//     { name: "Tyco", logo: "/logos/tyco.png" },
//     { name: "Epson", logo: "/logos/epson.png" },
//     { name: "Samsung", logo: "/logos/samsung.png" },
//     { name: "Brothers", logo: "/logos/brothers.png" },
//     { name: "Lipi", logo: "/logos/lipi.png" },
//     { name: "Canon", logo: "/logos/canon.png" },
//     { name: "Ricoh", logo: "/logos/ricoh.png" },
//     { name: "Benq", logo: "/logos/benq.png" },
//     { name: "Panasonic", logo: "/logos/panasonic.png" },
//     { name: "Sharp", logo: "/logos/sharp.png" },
//     { name: "Hitachi", logo: "/logos/hitachi.png" },
//     { name: "Toshiba", logo: "/logos/toshiba.png" },
//     { name: "Numeric", logo: "/logos/numeric.png" },
//     { name: "APC", logo: "/logos/apc.png" },
//     { name: "Orion", logo: "/logos/orion.png" },
//     { name: "Microsoft", logo: "/logos/microsoft.png" },
//   ];

//   return (
//     <div className="py-10 bg-gray-100">
//       <h2 className="text-center text-2xl font-semibold mb-6">Trusted by Top Companies</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
//         {companies.map((company, index) => (
//           <div key={index} className="flex justify-center">
//             <img src={company.logo} alt={company.name} className="h-16 object-contain" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrustedCompanies;
