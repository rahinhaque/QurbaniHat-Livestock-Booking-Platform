'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import navbarLogo from '@/assets/navbar.png';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { authClient } from '@/lib/auth-client';
import { BeatLoader } from 'react-spinners';
import { router } from 'better-auth/api';

const links = [
  { label: 'Home', href: '/' },
  { label: 'All Animals', href: '/allanimals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);


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
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-base-200/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {user ? (
                <li className="mt-2 border-t border-base-200 pt-2">
                  <button
                    onClick={async () =>
                      await authClient.signOut({
                        fetchOptions: {
                          onSuccess: () => {
                            router.push("/login");
                          },
                        },
                      })
                    }
                    className="rounded-lg text-error hover:bg-error/10 text-left"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="mt-2 border-t border-base-200 pt-2">
                    <Link
                      href="/login"
                      className="rounded-lg hover:bg-base-200/70"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="rounded-lg bg-primary text-primary-content hover:opacity-90"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
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
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "hover:bg-base-200/70"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                      pathname === link.href
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
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
          {isPending && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-muted/20">
              <BeatLoader size={6} color="#d97706" />
            </div>
          )}
          {user && (
            <div className="tooltip tooltip-bottom" data-tip="View Profile">
              <Link href="/profile">
                <div className="flex items-center gap-2.5 px-2 sm:px-3.5 py-1.5 rounded-full border border-border/40 bg-muted/50 transition-colors hover:bg-muted/80 cursor-pointer">
                  {/* online dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

                  {/* avatar */}
                  <div className="w-7 h-7 rounded-full bg-violet-200 flex items-center justify-center text-[11px] font-medium text-violet-800 shrink-0 overflow-hidden">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user?.name || "User"}
                        width={28}
                        height={28}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      user?.name?.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() || "U"
                    )}
                  </div>

                  {/* text */}
                  <div className="hidden sm:flex flex-col leading-tight text-left">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                      Welcome back
                    </span>
                    <span className="text-[15px] italic font-serif text-foreground">
                      {user?.name}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}
          {user ? (
            <button
              onClick={async () =>
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/login");
                    },
                  },
                })
              }
              className="btn btn-outline btn-sm hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:inline-flex"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="btn btn-outline btn-sm hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:inline-flex"
            >
              Login
            </Link>
          )}
          <AnimatedThemeToggler
            variant="star"
            className="btn btn-ghost btn-circle hidden border border-base-300/70 bg-base-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-base-200/80 lg:inline-flex"
            aria-label="Toggle theme"
          />
          {!user && (
            <Link
              href="/signup"
              className="btn btn-primary btn-sm group relative hidden overflow-hidden border-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 lg:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;