import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = {
  injectables: {
    title: "Injectables",
    items: [
      { name: "BOTOX Treatments", desc: "Smooth fine lines and wrinkles with precision" },
      { name: "JUVÉDERM Treatments", desc: "Restore volume and youthful contours" },
      { name: "Lip Fillers", desc: "Natural-looking lip enhancement" },
      { name: "Sculptra Treatments", desc: "Collagen stimulation for lasting results" },
    ],
  },
  skin: {
    title: "Skin Treatments",
    items: [
      { name: "VI Precision Plus Peels", desc: "Advanced chemical peel for hyperpigmentation" },
      { name: "BioRePeel", desc: "No-downtime bio-stimulating peel" },
      { name: "PRX T33 Peel", desc: "Deep hydration and skin tightening" },
      { name: "Chemical Peels", desc: "Customized for your skin type" },
      { name: "Dermaplaning", desc: "Smooth, radiant skin instantly" },
      { name: "Acne Treatment", desc: "Targeted solutions for clear skin" },
      { name: "Men's Grooming Facial", desc: "Designed for men's skincare needs" },
      { name: "Luxury Facials", desc: "Indulgent treatments for glowing skin" },
      { name: "Customized Facials", desc: "Tailored to your unique skin goals" },
    ],
  },
  laser: {
    title: "Laser & Advanced",
    items: [
      { name: "Aerolase", desc: "Acne, rosacea, facial veins, melasma" },
      { name: "Laser Hair Reduction", desc: "Permanent hair reduction for all skin types" },
      { name: "Laser Resurfacing", desc: "Skin texture and scar improvement" },
      { name: "Laser Tattoo Removal", desc: "Safe and effective removal" },
      { name: "Laser Skin Tightening", desc: "Firmer, more youthful skin" },
      { name: "RF Microneedling / SkinPen", desc: "Collagen induction for skin rejuvenation" },
    ],
  },
  signature: {
    title: "Signature Treatments",
    items: [
      { name: "Hydrafacial MD", desc: "Multi-step hydration and extraction" },
      { name: "Glo2 Facial System", desc: "Oxygenation and luminous results" },
    ],
  },
};

const CREDENTIALS = [
  "Advanced Clinical Skin Specialist",
  "CIDESCO Internationally Certified",
  "Medical Assistant",
  "Certified Laser Specialist",
  "Licensed Aesthetician",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-3xl" />
            {/* Lake shimmer line */}
            <div className="absolute bottom-0 left-0 right-0 h-px lake-shimmer" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Best of the Lake 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              <span className="text-white">Advanced Clinical</span><br />
              <span className="text-gold-gradient">Aesthetician</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 font-light mb-3 tracking-wide">
              Acne · Aging · Skin Correction Expert
            </p>
            <p className="text-base text-gray-500 mb-10">
              Laser · Hydrafacial · Microneedling
            </p>

            <p className="text-sm text-gold/70 mb-10 tracking-[0.1em]">
              ✨ Customized treatments. Real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book" className="px-8 py-3.5 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all">
                Book Appointment
              </a>
              <a href="#services" className="px-8 py-3.5 border border-white/20 text-white text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all">
                View Services
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] text-gray-600 uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </section>

        {/* ── Aerolase Feature ── */}
        <section id="aerolase" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] bg-charcoal rounded-lg overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">Aerolase Image</p>
                    <p className="text-[10px] text-gray-600 mt-1">600 × 450</p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Featured Treatment</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6">Meet Aerolase <span className="text-gold">✨</span></h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  This advanced laser treatment targets <strong className="text-white">acne, redness, pigmentation, and signs of aging</strong> — all while being safe for every skin type.
                </p>
                <div className="space-y-3 mb-8">
                  {["Acne & Rosacea", "Facial Veins", "Melasma & Pigmentation", "Skin Tightening & Anti-Aging"].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-sm text-gray-300">{t}</span>
                    </div>
                  ))}
                </div>
                <a href="#book" className="inline-block px-6 py-2.5 border border-gold text-gold text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-black transition-all">
                  Book Aerolase Treatment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        {/* ── Services ── */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-3">Our Services</h2>
            </div>

            {Object.entries(SERVICES).map(([key, category]) => (
              <div key={key} className="mb-16 last:mb-0">
                <h3 className="text-xs tracking-[0.2em] text-gold uppercase mb-6 pb-2 border-b border-white/5">
                  {category.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((service) => (
                    <div key={service.name} className="service-card group p-5 bg-charcoal/50 border border-white/5 rounded-lg hover:border-gold/20">
                      <h4 className="text-sm font-medium text-white mb-1 group-hover:text-gold transition-colors">{service.name}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12 text-center">
              <a href="#book" className="inline-block px-8 py-3 bg-gold text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-all">
                Book Your Treatment
              </a>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        {/* ── About / Credentials ── */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Your Aesthetician</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-6">Miriah Adams</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  With over <strong className="text-white">18 years</strong> in the aesthetics industry, Miriah brings unparalleled expertise to every treatment. Recognized as the <strong className="text-gold">Best Aesthetician</strong> by Lake Lifestyles Magazine&apos;s Best of the Lake 2026, she combines advanced clinical knowledge with a personalized approach to deliver real results.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every treatment plan is customized — because your skin is unique. Whether you&apos;re addressing acne, signs of aging, or simply want to maintain your glow, Miriah&apos;s expertise ensures you receive the most effective, evidence-based care.
                </p>
              </div>

              <div>
                {/* Awards */}
                <div className="p-6 bg-charcoal border border-gold/20 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🏆</span>
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
                      <div key={cred} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-gray-300">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>

        {/* ── Book Appointment (Vagaro) ── */}
        <section id="book" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Ready?</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4">Book Your Appointment</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Schedule your consultation or treatment online. Same-day appointments often available.
            </p>

            {/* Vagaro Embed Placeholder */}
            <div className="bg-charcoal border border-white/5 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">Vagaro Booking Widget</p>
                <p className="text-xs text-gray-600">Replace this placeholder with your Vagaro embed code</p>
                <p className="text-[10px] text-gray-700 mt-2">Embed URL: https://www.vagaro.com/theozarkaesthetician</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Or call <a href="tel:+17282270765" className="text-gold hover:text-gold-light transition-colors">(728) 227-0765</a> to schedule
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 px-6 bg-charcoal/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
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
              <div className="bg-charcoal border border-white/5 rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl mb-3 block">🗺️</span>
                  <p className="text-xs text-gray-400">Google Maps Embed</p>
                  <p className="text-[10px] text-gray-600 mt-1">1000 US-54, Camdenton, MO 65020</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}