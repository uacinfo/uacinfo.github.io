import React from 'react';

const ManageAccount = () => {
  return (
    <div className="mt-24 mb-24 px-6 lg:px-16">
      <main className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <header className="text-center bg-[#1C2D41] text-white py-6 rounded-t-lg">
          <h1 className="text-3xl font-bold">Manage Your Account</h1>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-[#1C2D41]">How to Delete Your Account</h2>
          <p className="mt-4 text-lg text-gray-700">
            If you wish to delete your account, please follow the steps below.  
            Note that account deletion is <strong>permanent</strong> and cannot be undone.
          </p>

          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-[#1C2D41] rounded-lg">
            <p className="text-lg font-semibold">📩 Send an email to:</p>
            <p className="text-lg text-[#1C2D41] font-medium">
              <a href="mailto:admin@uacinfo.com" className="hover:underline">admin@uacinfo.com</a>
            </p>
          </div>

          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-[#1C2D41] rounded-lg">
            <p className="text-lg font-semibold">📌 Email Subject:</p>
            <p className="text-lg text-gray-700 font-medium">
              <code className="bg-gray-200 p-1 rounded-md">Delete: Account</code>
            </p>
          </div>

          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-[#1C2D41] rounded-lg">
            <p className="text-lg font-semibold">📜 Email Content:</p>
            <p className="text-lg text-gray-700">Your email must include the following details:</p>
            <ul className="list-disc list-inside text-gray-700 text-lg mt-2">
              <li>Your registered email address</li>
              <li>A request confirming that you want to delete your account</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-[#1C2D41] rounded-lg">
            <p className="text-lg font-semibold">⚠️ Important:</p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>The email must be sent from your <strong>registered email address</strong>.</li>
              <li>After receiving your request, we will verify your details before proceeding.</li>
              <li>Once verified, you will receive a confirmation email before final deletion.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageAccount;