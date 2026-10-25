import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'ExpiryHQ - Privacy Policy | UACInfo LLP',
  description: 'Privacy Policy for the ExpiryHQ application by UACInfo LLP.',
};

export default function ExpiryHQPrivacyPolicy() {
  return (
    <div className="mt-24 mb-24 px-6 lg:px-16">
      <main className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <header className="text-center bg-[#1C2D41] text-white py-8 rounded-t-lg">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Private & Secure
          </span>
          <h1 className="text-3xl font-bold">ExpiryHQ App - Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-300">Last Updated: October 25, 2026 | Effective Date: October 25, 2026</p>
        </header>

        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-sm">
          <strong>Summary:</strong> In its current release, ExpiryHQ operates on-device without requiring user accounts or collecting personal tracking data. All inventory and expiry data is stored locally. If optional cloud synchronization or multi-device accounts are introduced in future releases, this policy will be updated with full disclosure and consent options.
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">1. Introduction</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), developed and published by <strong>UACInfo LLP</strong>, provides fast, streamlined inventory and expiration date tracking for pharmacies, retail stores, agriculture supply businesses, and households. We are committed to transparency and respecting your data privacy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">2. Current Data Collection: No Personal Data Required</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            In the current version of ExpiryHQ:
          </p>
          <ul className="mt-3 list-inside list-disc text-lg text-gray-700 space-y-2">
            <li><strong>No registration required:</strong> You can use all core tracking features immediately without creating an account or providing an email address, phone number, or credentials.</li>
            <li><strong>No advertising identifiers:</strong> We do not collect ad tracking IDs, IMEI numbers, or hardware identifiers.</li>
            <li><strong>No location tracking:</strong> We do not access GPS, coarse location, or Wi-Fi network location data.</li>
            <li><strong>No behavioral telemetry:</strong> We do not log keystrokes, personal user habits, or behavioral analytics.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">3. On-Device Local Storage Only</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            All data you input into ExpiryHQ—including tracked items, categories, expiration dates, reminders, and preferences—is stored exclusively on your device within the operating system&apos;s sandboxed local application storage. 
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Your data is never transmitted to our servers or any cloud backend. If you uninstall the application or clear its local application data through your device settings, all locally stored data will be permanently removed.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">4. Network and Internet Access</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ is fully operational offline without any active internet connection. The app does not ping remote servers in the background.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">5. Third-Party Services and Advertising</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ is completely ad-free. We do not embed third-party advertising SDKs, behavioral analytics providers, social media trackers, or third-party marketing services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">6. Device Permissions</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ only requests standard device permissions necessary for its core utility (such as local notifications to alert you when items are expiring, if enabled by you). We never request access to your contacts, camera, microphone, photos, or location.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">7. Children&apos;s Privacy</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ does not collect personal data from anyone, including children under the age of 13. The application is completely safe for audiences of all ages.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">8. Future Cloud Features & Policy Updates</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            As ExpiryHQ evolves, we may introduce optional online capabilities such as cloud backup, user accounts, multi-device synchronization, or collaborative team inventory for commercial shops and pharmacies.
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            If and when these optional features are introduced, this Privacy Policy and relevant in-app consent disclosures will be updated to clearly explain what data is collected, how it is encrypted, and how you can export or delete your data at any time.
          </p>
        </section>

        <section className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">9. Contact Information</h2>
          <p className="mt-4 text-lg text-gray-700">If you have any questions or concerns regarding this Privacy Policy, please contact:</p>
          <div className="mt-4 space-y-2 text-lg text-gray-700">
            <p><strong>Company:</strong> UACInfo LLP</p>
            <p><strong>Email:</strong> <a href="mailto:admin@uacinfo.com" className="text-[#1C2D41] underline">admin@uacinfo.com</a> / <a href="mailto:contact@uacinfo.com" className="text-[#1C2D41] underline">contact@uacinfo.com</a></p>
            <p><strong>Address:</strong> 95/121A new Sohbatiya Bagh Allahabad UP (211006)</p>
            <p><strong>Website:</strong> <a href="https://uacinfo.com/" target="_blank" rel="noopener noreferrer" className="text-[#1C2D41] underline">https://uacinfo.com/</a></p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
            <Link href="/expiryhq" className="text-primary-600 hover:underline">
              &larr; Back to ExpiryHQ
            </Link>
            <Link href="/privacy_policy" className="text-gray-600 hover:underline">
              UACInfo General Privacy Policy &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
