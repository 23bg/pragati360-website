import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Pragati360</h3>
            <p className="text-sm text-gray-600">
              A platform for innovative solutions and digital transformation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm text-gray-600">Email: info@pragati360.com</p>
            <p className="text-sm text-gray-600">Phone: +91-123-456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pragati360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
