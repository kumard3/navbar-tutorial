/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
      <main className="bg-[#020409] text-white min-h-screen">
       <NavBar />
      </main>
  );
}