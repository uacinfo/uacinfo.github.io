'use client';

import React from 'react';
import Image from 'next/image';

const VetContent = () => {
  return (
    <div className="mt-24 mb-24 px-6 lg:px-16">
      <main className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <header className="text-center bg-[#1C2D41] text-white py-8 rounded-t-lg">
          <h1 className="text-3xl font-bold">VetScholar App</h1>
          <p className="mt-2 text-lg">Your trusted platform for veterinary education.</p>
        </header>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">About the App</h2>
          <p className="mt-4 text-lg text-gray-700">
            The VetScholar App provides resources, study materials, and scholarship information for veterinary students.
          </p>

          {/* Google Play Badge Without Link */}
          <div className="mt-6 flex justify-center">
            <a href='https://play.google.com/store/apps/details?id=com.uacinfo.vetScholar'>
            <Image src="/images/vetcontent/google-play-badge.png" alt="Google Play Badge" width={180} height={60} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VetContent