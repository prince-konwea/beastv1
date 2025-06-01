import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import beastIcon from '../assets/beast_games.png';
import Footer from './Footer';

const Apply = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    wallet: '',
    btc: '',
    usdc: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState({ wallet: false, btc: false, usdc: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [field]: false })), 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header with logo */}
      <header className="w-full py-6 bg-black flex justify-center items-center border-b border-gray-800">
        <img src={beastIcon} alt="Beast Games Logo" className="h-12 w-auto" />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Apply for Beast Games</h2>
          {submitted ? (
            <div className="text-green-400 text-center text-lg font-semibold">Thank you for applying! We will contact you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-yellow-400 mb-1 font-semibold">Warning: Send only TRC20 USDT to the below wallet address!</label>
                <label className="block text-gray-300 mb-2" htmlFor="wallet">USDT Wallet Address</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="wallet"
                    name="wallet"
                    value={form.wallet}
                    onChange={handleChange}
                    placeholder="0x1234...abcd (placeholder)"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy('wallet', form.wallet)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-yellow-400 hover:text-yellow-300"
                    tabIndex={-1}
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  {copied.wallet && <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-400 text-xs">Copied!</span>}
                </div>
              </div>
              <div>
                <label className="block text-yellow-400 mb-1 font-semibold">Warning: Send only BTC to the below wallet address!</label>
                <label className="block text-gray-300 mb-2" htmlFor="btc">BTC Wallet Address</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="btc"
                    name="btc"
                    value={form.btc || ''}
                    onChange={handleChange}
                    placeholder="BTC wallet address (placeholder)"
                    className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy('btc', form.btc || '')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-yellow-400 hover:text-yellow-300"
                    tabIndex={-1}
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  {copied.btc && <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-400 text-xs">Copied!</span>}
                </div>
              </div>
              <div>
                <label className="block text-yellow-400 mb-1 font-semibold">Warning: Send only USDC to the below wallet address!</label>
                <label className="block text-gray-300 mb-2" htmlFor="usdc">USDC Wallet Address</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="usdc"
                    name="usdc"
                    value={form.usdc || ''}
                    onChange={handleChange}
                    placeholder="USDC wallet address (placeholder)"
                    className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy('usdc', form.usdc || '')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-yellow-400 hover:text-yellow-300"
                    tabIndex={-1}
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                  {copied.usdc && <span className="absolute right-10 top-1/2 -translate-y-1/2 text-green-400 text-xs">Copied!</span>}
                </div>
              </div>
              <div className="flex items-center justify-between bg-yellow-100 rounded-lg px-4 py-3">
                <span className="text-black font-semibold">Registration Fee</span>
                <span className="text-yellow-600 font-bold text-lg">$50</span>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors text-lg mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
