import React from 'react';
import Image from 'next/image';

import wyfeLogoWhite from '../public/wyfe_logo_text_white.svg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="stitched-box p-4 mb-4 text-center">
        <Image src={wyfeLogoWhite} alt="Wyfe Logo" width={400} className="pb-4"/>
        <h2 className="text-2xl font-georgia-italic">Winter 2024</h2>
        <p className="text-xl font-georgia-italic">ciao@wyfe.co.uk</p>
      </div>
    </div>
  );
}
