'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CREDENTIALS = [
  "Advanced Clinical Skin Specialist",
  "CIDESCO Internationally Certified",
  "Medical Assistant",
  "Certified Laser Specialist",
  "Licensed Aesthetician",
];

const SERVICE_CATEGORIES = [
  {
    id: 'injectables',
    label: 'Injectables',
    icon: Syringe,
    items: [
      { name: 'BOTOX Treatments', desc: 'Smooth fine lines and wrinkles with precision' },
      { name: 'JUVÉDERM Treatments', desc: 'Restore volume and youthful contours' },
      { name: 'Lip Fillers', desc: 'Natural-looking lip enhancement' },
      { name: 'Sculptra Treatments', desc: 'Collagen stimulation for lasting results' },
    ],
  },
  {
    id: 'skin',
    label: 'Skin',
    icon: Sparkles,
    items: [
      { name: 'VI Precision Plus Peels', desc: 'Advanced chemical peel for hyperpigmentation' },
      { name: 'BioRePeel', desc: 'No-downtime bio-stimulating peel' },
      { name: 'PRX T33 Peel', desc: 'Deep hydration and skin tightening' },
      { name: 'Chemical Peels', desc: 'Customized for your skin type' },
      { name: 'Dermaplaning', desc: 'Smooth, radiant skin instantly' },
      { name: 'Acne Treatment', desc: 'Targeted solutions for clear skin' },
      { name: 'Men\'s Grooming Facial', desc: 'Designed for men\'s skincare needs' },
      { name: 'Luxury Facials', desc: 'Indulgent treatments for glowing skin' },
      { name: 'Customized Facials', desc: 'Tailored to your unique skin goals' },
    ],
  },
  {
    id: 'signature',
    label: 'Signature',
    icon: Gem,
    items: [
      { name: 'Hydrafacial MD', desc: 'Multi-step hydration and extraction', featured: true },
      { name: 'Glo2 Facial System', desc: 'Oxygenation and luminous results' },
      { name: 'Microneedling (RF / SkinPen)', desc: 'Collagen induction for skin rejuvenation' },
      { name: 'Aerolase', desc: 'Acne, rosacea, facial veins, melasma — gentle for all skin types' },
    ],
  },
];

import { Sparkles, Droplets, Gem, Trophy, Calendar, MapPin, Syringe } from 'lucide-react';
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

// ── Animated Section Wrapper ──
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={className}>{children}</div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('injectables');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const activeItems = SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.items || [];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
            {/* Real background image */}
            <img src="/images/hero/skin-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[120px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px lake-shimmer" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Best of the Lake 2026</span>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="mb-8">
                <img src="/images/logo/logo-white.png" alt="The Ozark Aesthetician" className="w-80 md:w-[36rem] lg:w-[48rem] mx-auto" />
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <p className="text-lg md:text-xl text-white font-light mb-2 tracking-wide">
                Acne · Aging · Skin Correction Expert
              </p>
              <p className="text-base text-gold mb-10">
                Hydrafacial · Microneedling · Customized Skincare
              </p>
            </RevealSection>

            <RevealSection delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#book" className="px-8 py-3.5 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
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

        {/* ── Hydrafacial Feature ── */}
        <section id="aerolase" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <RevealSection>
                <div className="relative aspect-[4/3] bg-charcoal rounded-lg overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent group-hover:from-gold/10 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all duration-500">
                        <Gem className="text-gold w-8 h-8" />
                      </div>
                      <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">Hydrafacial MD</p>
                      <p className="text-[10px] text-gray-600 mt-1">600 × 450</p>
                    </div>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Featured Treatment</span>
                  <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6">Hydrafacial MD <Sparkles className="inline w-6 h-6 text-gold" /></h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    The <strong className="text-white">Hydrafacial MD</strong> is a multi-step treatment that cleanses, exfoliates, extracts, and hydrates — all in one session. Suitable for <strong className="text-white">every skin type</strong>, it delivers instant, visible results with zero downtime.
                  </p>
                  <div className="space-y-3 mb-8">
                    {["Deep Cleansing & Exfoliation", "Painless Extraction", "Intense Hydration & Infusion", "Instant Glow, Zero Downtime"].map((t, i) => (
                      <div key={t} className="flex items-center gap-3 group cursor-default">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:w-3 group-hover:bg-gold transition-all duration-300" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{t}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#book" className="inline-block px-6 py-2.5 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all duration-300">
                    Book Hydrafacial
                  </a>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Services — Interactive Tabs ── */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <RevealSection>
              <div className="text-center mb-12">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">What We Offer</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3">Our Services</h2>
              </div>
            </RevealSection>

            {/* Category Tabs */}
            <RevealSection delay={100}>
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setExpandedService(null); }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-[0.1em] uppercase transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? 'bg-gold text-black border-gold'
                        : 'border-white/10 text-gray-400 hover:border-gold/40 hover:text-gold'
                    }`}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </RevealSection>

            {/* Service Items — Accordion */}
            <div className="max-w-3xl mx-auto">
              {activeItems.map((service, i) => (
                <div
                  key={`${activeCategory}-${service.name}`}
                  className="border-b border-white/5 transition-all duration-500"
                  style={{ animationDelay: `${i * 75}ms` }}
                >
                  <button
                    onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                    className="w-full flex items-center justify-between py-4 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-1 h-1 rounded-full transition-all duration-300 ${expandedService === service.name ? 'bg-gold w-2 h-2' : 'bg-gray-600 group-hover:bg-gold'}`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${expandedService === service.name ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                        {service.name}
                      </span>
                      {'featured' in service && service.featured && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 tracking-[0.1em] uppercase">Featured</span>
                      )}
                    </div>
                    <svg className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedService === service.name ? 'rotate-180 text-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedService === service.name ? 'max-h-20 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-gray-400 pl-5 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="#book" className="inline-block px-8 py-3 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                Book Your Treatment
              </a>
            </div>
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
                  {/* Real photo of Miriah */}
                  <div className="relative w-48 h-48 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden border-2 border-gold/30">
                    <img src="/images/about/miriah.jpg" alt="Miriah Adams - The Ozark Aesthetician" className="w-full h-full object-cover" />
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
                  {/* Lake background accent */}
                  <div className="relative rounded-lg overflow-hidden mb-6 border border-white/5">
                    <img src="/images/hero/lake-bg.jpg" alt="Lake of the Ozarks" className="w-full h-48 object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-xs text-gold tracking-[0.2em] uppercase">Lake of the Ozarks</p>
                      <p className="text-[10px] text-gray-400">Camdenton, Missouri</p>
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
                      {CREDENTIALS.map((cred, i) => (
                        <div key={cred} className="flex items-center gap-3 group">
                          <span className="w-1 h-1 rounded-full bg-gold shrink-0 transition-all duration-300 group-hover:w-2 group-hover:h-2" />
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
        <section id="book" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <RevealSection>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Ready?</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4">Book Your Appointment</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Schedule your consultation or treatment online. Same-day appointments often available.
              </p>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="bg-charcoal border border-white/5 rounded-lg p-8 min-h-[400px] flex items-center justify-center hover:border-gold/20 transition-all duration-500">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold hover:scale-110 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-gold" />
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Vagaro Booking Widget</p>
                  <p className="text-xs text-gray-600">Replace this placeholder with your Vagaro embed code</p>
                  <p className="text-[10px] text-gray-700 mt-2">Embed URL: https://www.vagaro.com/theozarkaesthetician</p>
                </div>
              </div>
            </RevealSection>

            <p className="mt-6 text-sm text-gray-500">
              Or call <a href="tel:+17282270765" className="text-gold hover:text-gold-light transition-colors">(728) 227-0765</a> to schedule
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 px-6 bg-charcoal/30">
          <div className="max-w-6xl mx-auto">
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
                <div className="bg-charcoal border border-white/5 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center hover:border-gold/20 transition-all duration-300">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gold" />
                    <p className="text-xs text-gray-400">Google Maps Embed</p>
                    <p className="text-[10px] text-gray-600 mt-1">1000 US-54, Camdenton, MO 65020</p>
                  </div>
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