import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Ozark Aesthetician",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: May 2026</p>
        <div className="prose prose-invert prose-sm text-gray-400 space-y-4">
          <p>The Ozark Aesthetician respects your privacy. We collect only the information necessary to provide our services and improve your experience.</p>
          <h3 className="text-white text-base font-medium mt-6">Information We Collect</h3>
          <p>Name, email, phone number, and appointment preferences when you book through our website. This information is used solely for scheduling and communication about your appointments.</p>
          <h3 className="text-white text-base font-medium mt-6">How We Use Your Information</h3>
          <p>To schedule and confirm appointments, communicate about your treatments, and improve our services. We never sell or share your personal information.</p>
          <h3 className="text-white text-base font-medium mt-6">Contact</h3>
          <p>For questions about this policy, contact us at <a href="mailto:theozarkaesthetician@gmail.com" className="text-gold hover:text-gold-light">theozarkaesthetician@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  );
}