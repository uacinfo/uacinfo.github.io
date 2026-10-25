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
            100% Offline & Private
          </span>
          <h1 className="text-3xl font-bold">ExpiryHQ App - Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-300">Last Updated: October 25, 2026 | Effective Date: October 25, 2026</p>
        </header>

        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 text-sm">
          <strong>Summary:</strong> ExpiryHQ is a 100% offline-first application. We do not collect, transmit, share, or monetize any of your personal data, inventory items, or usage telemetry. Everything stays exclusively on your device.
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">1. Introduction</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ExpiryHQ (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), developed and published by <strong>UACInfo LLP</strong>, is committed to respecting and protecting your privacy. This Privacy Policy explains how information is handled when you use the ExpiryHQ mobile and web applications.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">2. Zero Personal Data Collection</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We do not collect any personal information when you use ExpiryHQ:
          </p>
          <ul className="mt-3 list-inside list-disc text-lg text-gray-700 space-y-2">
            <li><strong>No accounts or logins:</strong> You are not required to create an account, register, or provide an email address, phone number, or credentials.</li>
            <li><strong>No device identifiers:</strong> We do not collect advertising IDs, IMEI numbers, MAC addresses, or IP logs.</li>
            <li><strong>No location tracking:</strong> We never request or access GPS, coarse location, or Wi-Fi location data.</li>
            <li><strong>No telemetry or analytics:</strong> We do not track keystrokes, sessions, clicks, or user behavioral metrics.</li>
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
          <h2 className="text-2xl font-semibold text-[#1C2D41]">8. Changes to This Privacy Policy</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We may update our Privacy Policy periodically to reflect enhancements or regulatory requirements. Any modifications will be posted to this page with an updated &ldquo;Last Updated&rdquo; date.
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
