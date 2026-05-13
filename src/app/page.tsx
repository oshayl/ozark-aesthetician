'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, Gem, Trophy, Calendar, MapPin, ChevronDown, Droplets, Zap, Microscope, Heart, Star, Sun } from 'lucide-react';

const CREDENTIALS = [
  "Advanced Clinical Skin Specialist",
  "CIDESCO Internationally Certified",
  "Medical Assistant",
  "Certified Laser Specialist",
  "Licensed Aesthetician",
];

const SERVICE_CATEGORIES = [
  {
    id: 'skin',
    label: 'Skin Treatments',
    icon: Sparkles,
    items: [
      { name: 'VI Precision Plus Peels', desc: 'Advanced chemical peel targeting hyperpigmentation and sun damage for brighter, more even skin.' },
      { name: 'BioRePeel', desc: 'No-downtime bio-stimulating peel that revitalizes without peeling — perfect for busy schedules.' },
      { name: 'PRX T33 Peel', desc: 'Deep hydration and biorevitalization without exfoliation. Glass skin in one session.' },
      { name: 'Chemical Peels', desc: 'Medical-grade peels customized for your skin type and concerns.' },
      { name: 'Dermaplaning', desc: 'Physical exfoliation that removes dead skin and peach fuzz for instant radiance.' },
      { name: 'Acne Treatment', desc: 'Targeted clinical solutions for active breakouts, scarring, and prevention.' },
      { name: "Men's Grooming Facial", desc: "Designed for men's thicker skin and shaving-related concerns." },
      { name: 'Luxury Facials', desc: 'Indulgent multi-step treatments for deep relaxation and glowing results.' },
      { name: 'Customized Facials', desc: 'Tailored to your unique skin goals — never cookie-cutter.' },
    ],
  },
  {
    id: 'signature',
    label: 'Signature Treatments',
    icon: Gem,
    items: [
      { name: 'Hydrafacial MD', desc: 'Multi-step cleansing, exfoliation, extraction, and hydration — instant glow, zero downtime.', featured: true },
      { name: 'Glo2 Facial System', desc: 'Oxygenation and luminous results through patented OxyPod technology.' },
      { name: 'Microneedling (RF / SkinPen)', desc: 'Collagen induction therapy for fine lines, texture, and scarring.' },
      { name: 'Aerolase', desc: 'Gentle 650-microsecond laser for acne, rosacea, facial veins, and melasma — safe for all skin types.' },
    ],
  },
];



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

export default function Home() {
  useEffect(() => {
    const vagaroDiv = document.querySelector('.vagaro');
    if (!vagaroDiv) return;
    const existing = vagaroDiv.querySelector('script[src*="WidgetEmbeddedLoader"]');
    if (existing) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqqDJWuDpGcT3qmV35y6JuPlXiz3avV34mC2PeFJ4mC30m9dSycvCu7gevEhAJDXwOapcUbfY?v=yqHGyZIZKzw3TobGpqXqZMRa9iyy8RVN812BKjE3zWw0#';
    vagaroDiv.appendChild(script);
  }, []);


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

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 mb-10 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Best of the Lake 2026</span>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="mb-10">
                <img src="/images/logo/logo-white.png" alt="The Ozark Aesthetician" className="w-[28rem] md:w-[44rem] lg:w-[56rem] mx-auto" />
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <p className="text-lg md:text-xl text-gold font-light mb-2 tracking-wide">
                Acne · Aging · Skin Correction Expert
              </p>
              <p className="text-base text-white mb-10">
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
                <a href="#book" className="inline-block px-10 py-4 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                  Book Your Hydrafacial
                </a>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" /></div>

        {/* ── Services — Visual Grid + Detail ── */}
        <section id="services" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/drone-1.png" alt="" className="w-full h-full object-cover opacity-[0.04] grayscale" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <RevealSection>
              <div className="text-center mb-16">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">What We Offer</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3">Our Services</h2>
              </div>
            </RevealSection>

            {/* Signature Treatments */}
            <RevealSection delay={100}>
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-medium">Signature Treatments</span>
                </div>
                <div className="space-y-0">
                  {SERVICE_CATEGORIES.find(c => c.id === 'signature')!.items.map((service, i) => (
                    <div
                      key={service.name}
                      className={`group flex items-center justify-between py-4 border-b border-white/5 transition-all duration-300 hover:border-gold/20 ${'featured' in service && service.featured ? 'relative' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300 shrink-0" />
                        <span className="text-base text-white group-hover:text-gold transition-colors duration-300">{service.name}</span>
                        {'featured' in service && service.featured && (
                          <span className="text-[8px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 tracking-[0.1em] uppercase">Featured</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-600 group-hover:text-gold/60 transition-colors duration-300 hidden sm:block">{service.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Skin Treatments */}
            <RevealSection delay={200}>
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-medium">Skin Treatments</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
                  {SERVICE_CATEGORIES.find(c => c.id === 'skin')!.items.map((service, i) => (
                    <div
                      key={service.name}
                      className={`group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-gold/20 transition-all duration-300 ${i >= Math.ceil(SERVICE_CATEGORIES.find(c => c.id === 'skin')!.items.length / 2) ? 'md:border-l md:border-b md:pl-6' : ''}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-300 shrink-0" />
                      <span className="text-sm text-white group-hover:text-gold transition-colors duration-300">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={300}>
              <div className="text-center mt-4">
                <a href="#book" className="inline-block px-8 py-3 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
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
                  <div className="relative w-52 h-52 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden border-2 border-gold/30">
                    <img src="/images/about/miriah-adams.jpg" alt="Miriah Adams" className="w-full h-full object-cover" />
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
        <section id="book" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero/drone-2.png" alt="" className="w-full h-full object-cover opacity-[0.07] grayscale" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <RevealSection>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Ready?</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4">Book Your Appointment</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Schedule your consultation or treatment online. Same-day appointments often available.
              </p>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="w-full max-w-2xl mx-auto">
                <div id='frameTitle' className='embedded-widget-title' style={{fontSize: '23px', color: '#C9A84C', fontFamily: 'Georgia, serif', lineHeight: '24px', padding: '18px 10px 8px', textAlign: 'center', boxSizing: 'border-box'}}></div>
                <div className="vagaro" style={{width: '100%', padding: 0, border: 0, margin: '0 auto', textAlign: 'center'}}><style>{`.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}`}</style><a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;<a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;<a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;<a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a></div>
              </div>
            </RevealSection>

            <p className="mt-6 text-sm text-gray-500">
              Or call <a href="tel:+17282270765" className="text-gold hover:text-gold-light transition-colors">(728) 227-0765</a> to schedule
            </p>
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