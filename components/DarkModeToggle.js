// import { useState, useEffect } from 'react';

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <button
//       onClick={() => setIsDarkMode(!isDarkMode)}
//       className="fixed top-3 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
//     >
//       {isDarkMode ? '🌙' : '☀️'}
//     </button>
//   );
// };

// export default DarkModeToggle;

import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle('dark', isDarkMode);
  // }, [isDarkMode]);

  // return (
  //   <button
  //     onClick={() => setIsDarkMode(!isDarkMode)}
  //     className="fixed top-3 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full shadow-md hover:scale-105 transition-transform"
  //   >
  //     {isDarkMode ? '🌙' : '☀️'}
  //   </button>
  // );
};

export default DarkModeToggle;
