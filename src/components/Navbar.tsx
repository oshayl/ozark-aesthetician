'use client';
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Aerolase", href: "#aerolase" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
            <span className="text-gold font-serif text-sm font-medium">OA</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-medium tracking-[0.2em] text-gold">THE OZARK</div>
            <div className="text-[9px] tracking-[0.3em] text-gray-400">AESTHETICIAN</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-xs tracking-[0.15em] text-gray-400 hover:text-gold transition-colors uppercase">
              {item.label}
            </a>
          ))}
          <a href="#book" className="ml-2 px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all">
            Book Now
          </a>
        </div>
        {/* Mobile menu button */}
        <button id="mobile-menu-btn" className="md:hidden text-gold" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-black/95 border-t border-white/5 px-6 py-4">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="block py-2 text-sm tracking-[0.15em] text-gray-400 hover:text-gold transition-colors uppercase">
            {item.label}
          </a>
        ))}
        <a href="#book" className="mt-3 block text-center px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all">
          Book Now
        </a>
      </div>
    </nav>
  );
}