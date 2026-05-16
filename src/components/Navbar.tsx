'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo/logo-white.png" alt="The Ozark Aesthetician" className="h-9 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <a key={item.href} href={item.href} className="text-xs tracking-[0.15em] text-gray-400 hover:text-gold transition-colors uppercase" style={{ animationDelay: `${i * 100}ms` }}>
              {item.label}
            </a>
          ))}
          <a href="#book" className="ml-2 px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all duration-300">
            Book Now
          </a>
        </div>
        <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 border-t border-white/5 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm tracking-[0.15em] text-gray-400 hover:text-gold transition-colors uppercase">{item.label}</a>
          ))}
          <a href="#book" onClick={() => setMenuOpen(false)} className="mt-3 block text-center px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all">Book Now</a>
        </div>
      </div>
    </nav>
  );
}