import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
                <span className="text-gold font-serif text-sm font-medium">OA</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-medium tracking-[0.2em] text-gold">THE OZARK</div>
                <div className="text-[9px] tracking-[0.3em] text-gray-400">AESTHETICIAN</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Advanced clinical aesthetician &amp; laser specialist. Customized treatments. Real results.
            </p>
            <div className="mt-3 inline-block px-3 py-1 border border-gold/30 text-gold text-[10px] tracking-[0.15em] uppercase">
              Best of the Lake 2026
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-4 font-medium">Services</h4>
            <div className="space-y-2">
              {["BOTOX & Fillers", "Hydrafacial MD", "Microneedling", "Chemical Peels", "Dermaplaning", "Customized Facials"].map((s) => (
                <a key={s} href="#services" className="block text-sm text-gray-400 hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-4 font-medium">Visit</h4>
            <address className="not-italic text-sm text-gray-400 leading-relaxed space-y-1">
              <p>1000 US-54</p>
              <p>Camdenton, MO 65020</p>
              <p className="mt-3"><a href="tel:+17282270765" className="hover:text-gold transition-colors">(728) 227-0765</a></p>
              <p><a href="mailto:theozarkaesthetician@gmail.com" className="hover:text-gold transition-colors">theozarkaesthetician@gmail.com</a></p>
            </address>
            <a href="#book" className="mt-4 inline-block px-5 py-2 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all">
              Book Appointment
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} The Ozark Aesthetician. All rights reserved.</p>
          <p className="text-xs text-gray-600">Lake of the Ozarks, Missouri</p>
        </div>
      </div>
    </footer>
  );
}