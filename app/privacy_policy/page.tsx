// app/privacy-policy/page.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="mt-24 mb-24 px-6 lg:px-16">
      <main className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <header className="text-center bg-[#1C2D41] text-white py-8 rounded-t-lg">
          <h1 className="text-3xl font-bold">VetScholar App & uacinfo.com - Privacy Policy</h1>
          <p className="mt-2 text-sm">Last Updated: 16-Feb-2025 | Effective Date: 16-Feb-2025</p>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-[#1C2D41] mt-6">Personal Data</h3>
          <p className="mt-4 text-lg text-gray-700">
            We may collect personally identifiable information, such as your name, email address, and phone number when you register or interact with the App.
          </p>

          <h3 className="text-xl font-semibold text-[#1C2D41] mt-6">Usage Data</h3>
          <p className="mt-4 text-lg text-gray-700">
            We automatically collect information about how you interact with our App (“Usage Data”). This may include your device type, operating system, app version, pages visited, and other diagnostic data.
          </p>

          <h3 className="text-xl font-semibold text-[#1C2D41] mt-6">Cookies and Similar Technologies</h3>
          <p className="mt-4 text-lg text-gray-700">
            We may use cookies or similar tracking technologies to monitor activity on our App and store certain information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">2. How We Use Your Information</h2>
          <p className="mt-4 text-lg text-gray-700">
            We use the collected data for various purposes:
          </p>
          <ul className="mt-4 list-inside list-disc text-lg text-gray-700">
            <li>To provide and maintain the App, including to monitor usage.</li>
            <li>To improve the App and understand how it is used to enhance our services.</li>
            <li>To communicate with you, for customer support, updates, and promotional information.</li>
            <li>To comply with legal obligations and enforce our terms and policies.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">3. Sharing Your Information</h2>
          <p className="mt-4 text-lg text-gray-700">
            We do not sell or trade your personal data. We may share information with:
          </p>
          <ul className="mt-4 list-inside list-disc text-lg text-gray-700">
            <li>Service Providers: Who perform services on our behalf.</li>
            <li>Legal Authorities: When required by law or in response to valid requests.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">4. Data Security</h2>
          <p className="mt-4 text-lg text-gray-700">
            We take the security of your data seriously. While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">5. Your Data Protection Rights</h2>
          <p className="mt-4 text-lg text-gray-700">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="mt-4 list-inside list-disc text-lg text-gray-700">
            <li>Access: You can request access to your personal data.</li>
            <li>Correction: You may request correction of any inaccurate or incomplete data.</li>
            <li>Deletion: You may request the deletion of your data under certain circumstances.</li>
            <li>Objection/Restriction: You may object to or request restriction on the processing of your personal data.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">6. Third-Party Services</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of those third parties.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">7. Children’s Privacy</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our App does not address anyone under the age of 13. We do not knowingly collect personal data from children. If you believe that a child has provided us with personal data, please contact us immediately.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">8. Changes to This Privacy Policy</h2>
          <p className="mt-4 text-lg text-gray-700">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated “Last updated” date. Your continued use of the App after any changes indicates your acceptance of the new policy.
          </p>
        </section>

        <section className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">9. Contact Information</h2>
          <p className="mt-4 text-lg text-gray-700">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p className="mt-2 text-lg text-gray-700">Email: <a href="mailto:admin@uacinfo.com" className="text-[#1C2D41]">admin@uacinfo.com</a></p>
          <p className="mt-2 text-lg text-gray-700">Address: 95/121A new Sohbatiya Bagh Allahabad UP (211006)</p>
          <p className="mt-2 text-lg text-gray-700">
            Website: <a href="https://uacinfo.com/" target="_blank" rel="noopener noreferrer" className="text-[#1C2D41]">https://uacinfo.com/</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
