import React from "react";
import Image from 'next/image';
import whatsappIcon from '../../public/whatsapp_white_logo.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white font-georgia-italic p-2 mt-auto">
      {/* Contact info */}
      <div className="flex flex-col items-center space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
          <p className="text-sm md:text-base lg:text-lg">WhatsApp: +44 1234 567 890</p>
          <p className="text-sm md:text-base lg:text-lg">ciao@wyfe.com</p>
        </div>
      </div>

      {/* Footer info */}
      <div className="flex space-x-4 max-w-7xl mx-auto flex justify-center text-xs">
        <p className="mt-0">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        <p className="mt-0">&copy; Wyfe 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
