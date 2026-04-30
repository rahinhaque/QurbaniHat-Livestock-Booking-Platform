'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import navbarLogo from '@/assets/navbar.png';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const links = [
  { label: 'Home', href: '/' },
  { label: 'All Animals', href: '/allanimals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-base-200/80 bg-base-100/90 backdrop-blur-md">
      <div className="navbar mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="navbar-start gap-1 sm:gap-2">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle transition-transform duration-200 active:scale-90"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-64 rounded-box border border-base-200 bg-base-100/95 p-2 shadow-xl backdrop-blur"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg transition-colors ${
                      pathname === link.href ? 'bg-primary/10 text-primary' : 'hover:bg-base-200/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-base-200 pt-2">
                <Link href="/login" className="rounded-lg hover:bg-base-200/70">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="rounded-lg bg-primary text-primary-content hover:opacity-90">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-base-200/70 bg-base-100 p-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <Image
              src={navbarLogo}
              alt="QurbaniHat logo"
              priority
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-0.5 lg:gap-1 px-1 text-sm lg:text-[15px] font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative rounded-full px-3 py-2 lg:px-4 transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'hover:bg-base-200/70'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                      pathname === link.href
                        ? 'w-8 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1.5 sm:gap-2">
          <AnimatedThemeToggler
            variant="star"
            className="btn btn-ghost btn-circle border border-base-300/70 bg-base-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-base-200/80 lg:hidden"
            aria-label="Toggle theme"
          />
          <div className="avatar online hidden sm:flex">
            <div className="w-9 rounded-full bg-primary/15 text-primary ring-2 ring-primary/20 transition-transform duration-300 hover:scale-105 lg:w-10">
              <span className="text-xs font-semibold lg:text-sm">U</span>
            </div>
          </div>
          <div
            className="tooltip tooltip-bottom md:hidden"
            data-tip="Account"
          >
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A9.955 9.955 0 0112 15c2.607 0 4.98.996 6.879 2.624M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <Link
            href="/login"
            className="btn btn-outline btn-sm hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:inline-flex"
          >
            Login
          </Link>
          <AnimatedThemeToggler
            variant="star"
            className="btn btn-ghost btn-circle hidden border border-base-300/70 bg-base-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-base-200/80 lg:inline-flex"
            aria-label="Toggle theme"
          />
          <Link
            href="/signup"
            className="btn btn-primary btn-sm group relative hidden overflow-hidden border-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 lg:inline-flex"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;