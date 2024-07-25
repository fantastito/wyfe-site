import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-georgia-italic p-4 mt-auto">
      <div className="max-w-7xl mx-auto flex justify-center text-xs">
        <p className="mt-0">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="mt-0">&copy; Wyfe 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
