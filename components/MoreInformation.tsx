import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Pointer as Pinterest, BookText as TikTok } from 'lucide-react';
import Image from 'next/image';

function MoreInformation() {
  return (
     <div className="min-h-screen bg-white mt-10">
      <footer className="max-w-7xl mx-auto px-4 py-12 mt-10">
        <div className="flex flex-col lg:flex-row gap-28">
          {/* Newsletter Section */}
          <div className="w-full lg:w-1/5">
            <h3 className="text-md  font-semibold mb-4 text-gray-800">Subscribe To Our Newsletter To Get Updates</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border-b text-gray-800 border-gray-300 pb-2 focus:outline-none focus:border-gray-900"
              />
              <button className="p-2">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-wrap md:flex-nowrap gap-8">
            {/* Men's Store */}
            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-medium mb-4 text-gray-900">{"Men's Store"}</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li><a href="#" className="hover:text-gray-900">Custom Suits</a></li>
                <li><a href="#" className="hover:text-gray-900">Custom Dress Shirts</a></li>
                <li><a href="#" className="hover:text-gray-900">Custom Blazers</a></li>
                <li><a href="#" className="hover:text-gray-900">Custom Pants</a></li>
                <li><a href="#" className="hover:text-gray-900">Overcoats</a></li>
                <li><a href="#" className="hover:text-gray-900">Other products</a></li>
              </ul>
            </div>

            {/* Women */}
            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-medium mb-4 text-gray-900">Women</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li><a href="#" className="hover:text-gray-900">{"Women's Suits"}</a></li>
                <li><a href="#" className="hover:text-gray-900">{"Women's Dress Shirt"}</a></li>
                <li><a href="#" className="hover:text-gray-900">{"Women's Blazers"}</a></li>
                <li><a href="#" className="hover:text-gray-900">{"Women's Dress Pants"}</a></li>
                <li><a href="#" className="hover:text-gray-900">{"Women's Wool Coats"}</a></li>
                <li><a href="#" className="hover:text-gray-900">Other products</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-medium mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                <li><a href="#" className="hover:text-gray-900">How it works</a></li>
                <li><a href="#" className="hover:text-gray-900">Perfect Fit Guarantee</a></li>
                <li><a href="#" className="hover:text-gray-900">Hockerty Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-full md:w-1/4">
              <h3 className="text-sm font-medium mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="hover:text-gray-900">Order fabric samples</a></li>
                <li><a href="#" className="hover:text-gray-900">Track order</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment and Shipping Section */}
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-4 text-gray-800">Payment Methods</h3>
            <div className="flex gap-4">
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8" />
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-8" />
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-8" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-4 text-gray-800">Shipping Partners</h3>
            <div className="flex gap-4">
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/9/9d/DHL_Express_logo.svg" alt="DHL" className="h-8 text-gray-800" />
              <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/b/b0/FedEx_Express.svg" alt="FedEx" className="h-8 text-gray-800" />
            </div>
          </div>
        </div>

        {/* Social Links and Awards */}
        <div className="mt-12 flex flex-wrap justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Pinterest className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <TikTok className="w-5 h-5" />
            </a>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-800">DIGITAL</div>
                <div className="text-xs font-semibold text-gray-800">COMMERCE</div>
                <div className="text-xs font-semibold text-gray-800">AWARD</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MoreInformation;