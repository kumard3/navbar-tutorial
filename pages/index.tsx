/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Nav from '../components/Nav';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
      <main className="bg-[#020409] text-white min-h-screen">
       {/* <NavBar /> */}
       <Nav />
      </main>
  );
}