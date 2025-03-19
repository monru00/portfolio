import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const socialData = [
  { icon: assets.github, link: "https://github.com/monru00" },
  {
    icon: assets.linkedin_icon,
    link: "https://www.linkedin.com/in/mohammed-nesru-a16543309/",
  },
  {
    icon: assets.x_icon,
    link: "https://x.com/monru00",
  },
];

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-16">
      <div className="text-center">
        <div>
          <h1 className="text-center text-2xl text-gray-800 dark:text-white">
            Find Me On
          </h1>
          {/* Simple Contact Icons */}
          <div className="flex justify-center gap-4 mt-4">
            {socialData.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200 "
              >
                <Image
                  src={icon || assets.placeholder} // Fallback to a placeholder if icon is null
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Email Address (below icons) */}
        <div className="w-max flex items-center gap-2 mx-auto mt-6 text-gray-700 dark:text-gray-300">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          contactmohammed00@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-gray-700 dark:text-gray-300">
        <p className="hidden lg:block">Inspired by Muluken Tesema</p>
        <p>© 2025 Mohammed Nesru</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/monru00"
              className="hover:text-gray-900 dark:hover:text-white "
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-nesru-a16543309/"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/monru00"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

// Use npm

// Use a <script> tag
// If you're already using NPM and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (learn more):

// npm install firebase
// Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA7n0UOzUVOp9c6JK1FFh8XdL8Xhbde458",
//   authDomain: "portfolioform-4e18e.firebaseapp.com",
//   projectId: "portfolioform-4e18e",
//   storageBucket: "portfolioform-4e18e.firebasestorage.app",
//   messagingSenderId: "560797203671",
//   appId: "1:560797203671:web:df0cc65d42f9dbcbc80492",
//   measurementId: "G-5XT50161TS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//******************************** */
// const firebaseConfig = {
//   apiKey: "AIzaSyA7n0UOzUVOp9c6JK1FFh8XdL8Xhbde458",
//   authDomain: "portfolioform-4e18e.firebaseapp.com",
//   projectId: "portfolioform-4e18e",
//   storageBucket: "portfolioform-4e18e.firebasestorage.app",
//   messagingSenderId: "560797203671",
//   appId: "1:560797203671:web:df0cc65d42f9dbcbc80492",
//   measurementId: "G-5XT50161TS"
// };
