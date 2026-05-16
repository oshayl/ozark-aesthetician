'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Gem, Trophy, Calendar, MapPin, Droplets, Zap, Microscope, Heart, Star, Sun, Flame, Clock, Sparkle, Eye, Scissors, Syringe, PlusCircle, Layers } from 'lucide-react';

const CREDENTIALS = [
  "Advanced Clinical Skin Specialist",
  "CIDESCO Internationally Certified",
  "Medical Assistant",
  "Certified Laser Specialist",
  "Licensed Aesthetician",
];

const SERVICES = [
  {
    id: 'medical-skin',
    label: 'Medical-Grade Skin Treatments',
    icon: Sparkle,
    image: '/images/services/skin-treatments.jpg',
    items: [
      'Medical Grade Skincare Product Consultation',
      'The Ozark Signature Facial',
      "Men's Luxury Grooming Facial",
      'Signature HydraFacial MD',
      'Deluxe HydraFacial MD',
      'Platinum HydraFacial MD',
      'HydraFacial MD (Back)',
      'Signature DiamondGlow',
      'Advanced/Luxury DiamondGlow',
      'DiamondGlow Express',
      'Back Facial',
      'Clear Skin Acne Program',
      'Clear Skin Advanced Acne Program',
      { name: 'Extractions ONLY', note: 'Free if combined with any facial' },
    ],
  },
  {
    id: 'repechage',
    label: 'Répechage Luxury Facials',
    icon: Gem,
    image: '/images/services/repechage.jpg',
    items: [
      'Répechage Vita Cura 5-Phase Firming Facial',
      'Répechage Four-Layer Facial',
    ],
  },
  {
    id: 'microneedling',
    label: 'Microneedling',
    icon: Zap,
    image: '/images/services/microneedling.jpg',
    items: [
      'SkinPen Microneedling Face',
      'SkinPen Microneedling Face \u0026 Neck',
      'SkinPen Microneedling Face Series of 3 Package',
      'SkinPen Microneedling Face \u0026 Neck Package of 3',
      'SkinPen Microneedling Body',
    ],
  },
  {
    id: 'peels',
    label: 'Peels',
    icon: Droplets,
    image: '/images/services/peels.jpg',
    items: [
      'The Glow Lift / Red Carpet Peel',
      'BioRePeel (No Downtime Peel)',
      'Acne Peel',
      'Pigment Peel',
      'Body Peel',
    ],
  },
  {
    id: 'dermaplane',
    label: 'Dermaplane',
    icon: Layers,
    image: '/images/services/dermaplane.jpg',
    items: [
      'Express Dermaplane',
      'Luxury Dermaplane Facial',
    ],
  },
  {
    id: 'waxing',
    label: 'Waxing',
    icon: Scissors,
    compact: true,
    image: '/images/services/waxing.jpg',
    items: [
      'Brow Shaping', 'Brow Maintenance', 'Lips', 'Chin',
      'Full Face', 'Lip and Chin', 'Side-Burns',
      'Underarms', 'Full Arms', 'Half Arms',
      'Full Legs', 'Half Legs', 'Chest', 'Stomach',
      'Back', 'Bikini', 'Brazilian', 'Full Body',
    ],
  },
  {
    id: 'brows-lashes',
    label: 'Brows \u0026 Lashes',
    icon: Eye,
    image: '/images/services/brows-lashes.jpg',
    items: [
      'Eyebrow Lamination',
      'Lamination + Tint',
      'Lamination + Tint + Wax/Shaping',
      'Eyebrow Tinting',
      'Eyelash Tinting',
      'Brow + Lash Tint',
    ],
  },
  {
    id: 'botox',
    label: 'Botox Cosmetics',
    icon: Syringe,
    image: '/images/services/botox.jpg',
    items: [
      { name: 'Botox', note: 'Select days per physician visit' },
    ],
  },
  {
    id: 'add-ons',
    label: 'Add-On Treatments',
    icon: PlusCircle,
    image: '/images/services/add-ons.jpg',
    items: [
      'Dermaplane Add-On',
      'Peel Add-On',
      'Growth Factors / Peptides',
      'LED Light Therapy',
      'Exosome Therapy',
      'High Frequency',
      'Extended Extractions',
      'Lymphatic Drainage Facial Massage',
    ],
  },
];

const COMING_SOON = {
  label: 'Advanced Laser Services',
  items: [
    'RF Microneedling',
    'CO₂ Laser Resurfacing',
    'Pico Laser Tattoo Removal',
    'Acne Reduction No Downtime Laser Treatment',
    'IPL / BBL (Sun damage, pigment irregularities, rosacea, facial veins)',
    'Gentle Resurfacing for tighter pores & smoother skin',
  ],
};



function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={className}>{children}</div>
    </div>
  );
}

function ServiceSection({ cat, index }: { cat: typeof SERVICES[number]; index: number }) {
  const Icon = cat.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={`group relative overflow-hidden ${isEven ? '' : ''}`}>
      {/* Section divider line */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
          {/* Media / Image */}
          <div className={`w-full md:w-1/2 relative ${isEven ? '' : ''}`}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-charcoal">
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-dark to-charcoal">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-gold/40" />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] text-gold/30 uppercase">{cat.label}</span>
                    <span className="text-[9px] tracking-[0.15em] text-gray-600 uppercase">Media Coming Soon</span>
                  </div>
                </div>
              )}
              {/* Gold corner accent */}
              <div className={`absolute ${isEven ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-24 h-24`}>
                <div className={`absolute ${isEven ? 'bottom-3 left-3' : 'bottom-3 right-3'} w-12 h-px bg-gold/30`} />
                <div className={`absolute ${isEven ? 'bottom-3 left-3' : 'bottom-3 right-3'} w-px h-12 bg-gold/30`} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-4' : 'md:pr-4'}`}>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">{cat.items.length} Service{cat.items.length !== 1 ? 's' : ''}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">{cat.label}</h3>
            </div>
            <ul className={`space-y-2.5 ${cat.compact ? 'grid grid-cols-2 gap-x-6 gap-y-2.5' : ''}`}>
              {cat.items.map((item, i) => {
                const name = typeof item === 'string' ? item : item.name;
                const note = typeof item === 'string' ? null : item.note;
                return (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold/25 group-hover/item:bg-gold transition-colors shrink-0" />
                    <span className="text-[13px] text-gray-300 leading-snug group-hover/item:text-white transition-colors">{name}</span>
                    {note && <span className="text-[10px] text-gold/40 ml-1 self-center">({note})</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[120px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px lake-shimmer" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-0">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 mb-2 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Best of the Lake 2026</span>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="mb-2">
                <img src="/images/logo/logo-white.png" alt="The Ozark Aesthetician" className="w-[28rem] md:w-[44rem] lg:w-[56rem] mx-auto" />
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <p className="text-lg md:text-xl text-gold font-light mb-2 tracking-wide">
                Advanced Skin & Laser Treatments
              </p>
              <p className="text-base text-white mb-6">
                Laser Rejuvenation · Corrective Facials · Advanced Skincare
              </p>
            </RevealSection>

            <RevealSection delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVF3oikrklc1sIDB0VG7CXINPtAnDMVA4yNapI3NoQG1fDQ/K2ePvGait+Y/ayqZ4WLHCBUEDqMuESjI9fp1DDP9CBJ9GZ+zwCkdfgr0hQV0gtR6SPbTefAPX8LG2WnJ01k3cHXGsXHW7woUSHyRLI/fdwFUcIgqRay4W0ppU8kibhERfSXPQ2V9ipp/xM5VMAxL/Qz6gc77ThzVdg90DGzv91RlJ8k4PezUSl7FvaV4ae71SVL3lbfsY61I1kp2iEit9YjGqiYlna8SHZNE/tRmUOI3OC+AW+nXzz4ln2drf0Jp3pylgDU2qzAtovgrfvutl0YECfvOFa9zkdTJKdTbGRoq8LeDGib+uerjCEB/VaA1kmejr1Z2x6n1dxZgEBsOjaz1icfKsBmOxYgtna9U8VvaiGOXShTPdUx03Dna6czhnfahe6+ed8sWiHvUF6g==" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                  Book Appointment
                </a>
                <a href="#services" className="px-8 py-3.5 border border-white/20 text-white text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300">
                  View Services
                </a>
              </div>
            </RevealSection>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ animationDuration: '2s' }}>
            <span className="text-[10px] tracking-[0.2em] text-gray-600 uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Hydrafacial Feature ── */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/spa/spa-1.png" alt="" className="w-full h-full object-cover opacity-[0.06] grayscale" />
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* ── Header ── */}
            <RevealSection>
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 border border-gold/30 text-gold text-[10px] tracking-[0.25em] uppercase font-medium mb-6">Signature Treatment</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-4">Hydrafacial MD</h2>
                <div className="w-16 h-px bg-gold mx-auto mb-6" />
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  A non-invasive, results-driven facial that deeply cleanses, exfoliates, extracts impurities, and hydrates — revealing your skin&apos;s natural luminosity in a single session.
                  <strong className="text-white"> No downtime. Just glow.</strong>
                </p>
              </div>
            </RevealSection>

            {/* ── Image + Key Benefits ── */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <RevealSection>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.06] group">
                  <img src="/images/spa/hydrafacial.png" alt="Hydrafacial MD treatment" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Glass overlay label */}
                  <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/30 rounded-lg border border-white/10 px-4 py-3">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Hydrafacial MD</p>
                    <p className="text-gray-300 text-[11px] mt-0.5">Cleanses · Exfoliates · Extracts · Hydrates</p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Key Benefits</span>
                  <div className="mt-5 space-y-4">
                    {[
                      { text: 'Deep cleansing & exfoliation', detail: 'Removes dead skin cells and debris for a fresh, refined surface.' },
                      { text: 'Hydration & radiant glow', detail: 'Intense moisture infusion leaves skin plump, dewy, and luminous.' },
                      { text: 'Improves uneven tone & texture', detail: 'Evens out discoloration and smooths rough patches for a polished finish.' },
                      { text: 'Clears blackheads & congestion', detail: 'Gentle vortex extraction purges pores without irritation.' },
                      { text: 'Reduces fine lines & wrinkles', detail: 'Plumps and firms with targeted serum delivery.' },
                      { text: 'Great for acne-prone & dehydrated skin', detail: 'Safe, effective, and customizable for every skin type.' },
                    ].map((b) => (
                      <div key={b.text} className="group cursor-default">
                        <div className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <div>
                            <p className="text-sm text-white font-medium group-hover:text-gold transition-colors duration-300">{b.text}</p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{b.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* ── Perfect For ── */}
            <RevealSection delay={200}>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-16">
                <span className="text-[10px] tracking-[0.25em] text-gold/60 uppercase font-medium mr-2">Perfect for</span>
                {["Dull or tired skin", "Congested pores", "Uneven texture", "Dehydrated skin"].map((item) => (
                  <span key={item} className="text-xs text-gray-400 flex items-center gap-1.5"><span className="text-gold/70 text-[8px]">✦</span>{item}</span>
                ))}
              </div>
            </RevealSection>

            {/* ── CTA ── */}
            <RevealSection delay={300}>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Experience the treatment that delivers visible results from the very first session.</p>
                <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVF3oikrklc1sIDB0VG7CXINPtAnDMVA4yNapI3NoQG1fDQ/K2ePvGait+Y/ayqZ4WLHCBUEDqMuESjI9fp1DDP9CBJ9GZ+zwCkdfgr0hQV0gtR6SPbTefAPX8LG2WnJ01k3cHXGsXHW7woUSHyRLI/fdwFUcIgqRay4W0ppU8kibhERfSXPQ2V9ipp/xM5VMAxL/Qz6gc77ThzVdg90DGzv91RlJ8k4PezUSl7FvaV4ae71SVL3lbfsY61I1kp2iEit9YjGqiYlna8SHZNE/tRmUOI3OC+AW+nXzz4ln2drf0Jp3pylgDU2qzAtovgrfvutl0YECfvOFa9zkdTJKdTbGRoq8LeDGib+uerjCEB/VaA1kmejr1Z2x6n1dxZgEBsOjaz1icfKsBmOxYgtna9U8VvaiGOXShTPdUx03Dna6czhnfahe6+ed8sWiHvUF6g==" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                  Book Your Hydrafacial
                </a>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Best of the Lake Award ── */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[140px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealSection>
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <img
                    src="/images/award/lakes-best-2026.webp"
                    alt="Best of the Lake 2026 — Best Aesthetician"
                    className="w-48 md:w-56 h-auto drop-shadow-[0_0_40px_rgba(201,168,76,0.25)]"
                  />
                  <div className="absolute -inset-4 rounded-full bg-gold/[0.06] blur-2xl -z-10 animate-pulse" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif mb-3">Best Aesthetician</h2>
                <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">Best of the Lake 2026 — Lake Lifestyles Magazine</p>
                <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                  Thank you to everyone who voted and trusted us with your skin. This recognition belongs to our clients — we're grateful for the support and the opportunity to keep raising the bar.
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Services ── */}
        <section id="services" className="py-24 px-6 relative overflow-hidden">
          <div className="relative z-10">
            <RevealSection>
              <div className="text-center mb-20">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">What We Offer</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3">Our Services</h2>
                <p className="text-gray-500 text-sm mt-3">Scroll through our complete menu</p>
              </div>
            </RevealSection>

            {SERVICES.map((cat, ci) => (
              <RevealSection key={cat.id} delay={ci * 80}>
                <ServiceSection cat={cat} index={ci} />
              </RevealSection>
            ))}

            {/* Coming Soon */}
            <RevealSection delay={SERVICES.length * 80}>
              <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
              </div>
              <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                  <div className="w-full md:w-1/2 relative">
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-charcoal">
                      <img src="/images/services/laser.jpg" alt="Advanced Laser Services" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-[9px] tracking-[0.15em] uppercase font-medium">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-6">{COMING_SOON.label}</h3>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {COMING_SOON.items.map((item, i) => (
                        <div key={i} className="group/item flex items-start gap-3">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold/25 group-hover/item:bg-gold transition-colors shrink-0" />
                          <span className="text-[13px] text-gray-300 leading-snug group-hover/item:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={SERVICES.length * 80 + 100}>
              <div className="text-center mt-20">
                <a
                  href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVF3oikrklc1sIDB0VG7CXINPtAnDMVA4yNapI3NoQG1fDQ/K2ePvGait+Y/ayqZ4WLHCBUEDqMuESjI9fp1DDP9CBJ9GZ+zwCkdfgr0hQV0gtR6SPbTefAPX8LG2WnJ01k3cHXGsXHW7woUSHyRLI/fdwFUcIgqRay4W0ppU8kibhERfSXPQ2V9ipp/xM5VMAxL/Qz6gc77ThzVdg90DGzv91RlJ8k4PezUSl7FvaV4ae71SVL3lbfsY61I1kp2iEit9YjGqiYlna8SHZNE/tRmUOI3OC+AW+nXzz4ln2drf0Jp3pylgDU2qzAtovgrfvutl0YECfvOFa9zkdTJKdTbGRoq8LeDGib+uerjCEB/VaA1kmejr1Z2x6n1dxZgEBsOjaz1icfKsBmOxYgtna9U8VvaiGOXShTPdUx03Dna6czhnfahe6+ed8sWiHvUF6g=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  Book Your Treatment
                </a>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── About / Credentials ── */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <RevealSection>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Your Aesthetician</span>
                  <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6">Miriah Adams</h2>
                  <div className="relative w-80 h-48 mx-auto md:mx-0 mb-8 rounded-lg overflow-hidden border-2 border-gold/30">
                    <img src="/images/about/miriah-adams.jpg" alt="Miriah Adams" className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    With over <strong className="text-white">18 years</strong> in the aesthetics industry, Miriah brings unparalleled expertise to every treatment. Recognized as the <strong className="text-gold">Best Aesthetician</strong>{' '}by Lake Lifestyles Magazine&apos;s Best of the Lake 2026, she combines advanced clinical knowledge with a personalized approach to deliver real results.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every treatment plan is customized — because your skin is unique. Whether you&apos;re addressing acne, signs of aging, or simply want to maintain your glow, Miriah&apos;s expertise ensures you receive the most effective, evidence-based care.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div>
                  <div className="relative rounded-lg overflow-hidden mb-6 border border-white/5">
                    <img src="/images/spa/building.png" alt="The Ozark Aesthetician studio" className="w-full h-48 object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-xs text-gold tracking-[0.2em] uppercase">The Studio</p>
                      <p className="text-[10px] text-gray-400">Lake of the Ozarks, MO</p>
                    </div>
                  </div>

                  {/* Award Card */}
                  <div className="p-6 bg-charcoal border border-gold/20 rounded-lg mb-6 hover:border-gold/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="w-7 h-7 text-gold" />
                      <div>
                        <div className="text-sm font-medium text-gold">Best of the Lake 2026</div>
                        <div className="text-xs text-gray-500">Lake Lifestyles Magazine</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Voted Best Aesthetician at the Lake of the Ozarks</p>
                  </div>

                  {/* Credentials */}
                  <div className="p-6 bg-charcoal/50 border border-white/5 rounded-lg">
                    <h4 className="text-xs tracking-[0.2em] text-gold uppercase mb-4">Credentials</h4>
                    <div className="space-y-3">
                      {CREDENTIALS.map((cred) => (
                        <div key={cred} className="flex items-center gap-3 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 transition-all duration-300 group-hover:w-2.5 group-hover:h-2.5" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Book Appointment ── */}
        <section id="book" className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/drone-2.png" alt="" className="w-full h-full object-cover opacity-[0.07] grayscale" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <RevealSection>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Ready?</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4">Book Your Appointment</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Schedule your consultation or treatment online. Same-day appointments often available.
              </p>
            </RevealSection>

            <RevealSection delay={150}>
              <a
                href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVF3oikrklc1sIDB0VG7CXINPtAnDMVA4yNapI3NoQG1fDQ/K2ePvGait+Y/ayqZ4WLHCBUEDqMuESjI9fp1DDP9CBJ9GZ+zwCkdfgr0hQV0gtR6SPbTefAPX8LG2WnJ01k3cHXGsXHW7woUSHyRLI/fdwFUcIgqRay4W0ppU8kibhERfSXPQ2V9ipp/xM5VMAxL/Qz6gc77ThzVdg90DGzv91RlJ8k4PezUSl7FvaV4ae71SVL3lbfsY61I1kp2iEit9YjGqiYlna8SHZNE/tRmUOI3OC+AW+nXzz4ln2drf0Jp3pylgDU2qzAtovgrfvutl0YECfvOFa9zkdTJKdTbGRoq8LeDGib+uerjCEB/VaA1kmejr1Z2x6n1dxZgEBsOjaz1icfKsBmOxYgtna9U8VvaiGOXShTPdUx03Dna6czhnfahe6+ed8sWiHvUF6g=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4.5 bg-gold text-black text-sm font-medium tracking-[0.2em] uppercase hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25 transition-all duration-300"
              >
                Book Online
              </a>
            </RevealSection>

            <RevealSection delay={250}>
              <p className="mt-8 text-sm text-gray-500">
                Or call <a href="tel:+17282270765" className="text-gold hover:text-gold-light transition-colors">(728) 227-0765</a> to schedule
              </p>
            </RevealSection>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/lake-of-the-ozarks.png" alt="" className="w-full h-full object-cover opacity-[0.06] grayscale" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <RevealSection>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Find Us</span>
                  <h2 className="text-3xl font-serif mt-3 mb-6">Visit the Studio</h2>
                  <div className="space-y-4 text-gray-400">
                    <div>
                      <p className="text-white text-sm font-medium">The Ozark Aesthetician</p>
                      <p className="text-sm">1000 US-54</p>
                      <p className="text-sm">Camdenton, MO 65020</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] text-gold uppercase mb-1">Phone</p>
                      <a href="tel:+17282270765" className="text-sm hover:text-gold transition-colors">(728) 227-0765</a>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] text-gold uppercase mb-1">Email</p>
                      <a href="mailto:theozarkaesthetician@gmail.com" className="text-sm hover:text-gold transition-colors">theozarkaesthetician@gmail.com</a>
                    </div>
                  </div>
                </div>
              </RevealSection>
              <RevealSection delay={200}>
                <div className="rounded-lg overflow-hidden min-h-[300px] border border-white/5 hover:border-gold/20 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160!2d-92.7936!3d38.0085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c4e4b5e1a8e4b3%3A0x123456789abcdef!2s1000+US-54%2C+Camdenton%2C+MO+65020!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Ozark Aesthetician location"
                  />
                </div>
              </RevealSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}