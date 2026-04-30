import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "@/assets/foote.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-base-300 bg-base-200/60">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <Link href="/" className="inline-block rounded-xl">
            <Image
              src={footerLogo}
              alt="QurbaniHat footer logo"
              className="h-16 w-auto rounded-lg object-contain shadow-sm sm:h-20"
            />
          </Link>
          <p className="max-w-xs text-sm text-base-content/80">
            QurbaniHat helps families book healthy livestock with confidence, trusted sellers, and a smooth booking
            experience.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-base-content">Contact Info</h3>
          <ul className="space-y-2 text-sm text-base-content/80">
            <li>Phone: +880 1712-345678</li>
            <li>Email: support@qurbanihat.com</li>
            <li>Address: House 12, Road 5, Dhanmondi, Dhaka</li>
            <li>Hours: Sat - Thu, 9:00 AM - 9:00 PM</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-base-content">About & Social</h3>
          <p className="text-sm text-base-content/80">
            We connect buyers and verified farms so your Qurbani process stays simple, transparent, and reliable.
          </p>

          <div className="flex items-center gap-3">
            <Link href="https://facebook.com" target="_blank" className="btn btn-sm btn-circle btn-outline" aria-label="Facebook">
              f
            </Link>
            <Link href="https://instagram.com" target="_blank" className="btn btn-sm btn-circle btn-outline" aria-label="Instagram">
              i
            </Link>
            <Link href="https://youtube.com" target="_blank" className="btn btn-sm btn-circle btn-outline" aria-label="YouTube">
              y
            </Link>
            <Link href="https://x.com" target="_blank" className="btn btn-sm btn-circle btn-outline" aria-label="X">
              x
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-base-content/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} QurbaniHat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/allanimals" className="hover:text-primary">
              All Animals
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;