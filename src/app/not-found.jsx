'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import errorImage from '@/assets/error.png';

const notFoundPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] px-4 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-6xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-200">
              ROUTE NOT FOUND
            </div>
            <motion.h1
              className="mt-5 text-6xl font-black leading-none text-white sm:text-7xl"
              animate={{ textShadow: ['0 0 0px #fff', '0 0 14px rgba(34,211,238,0.55)', '0 0 0px #fff'] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              404
            </motion.h1>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">This page wandered off the market map</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              The link may be broken or the page may have been moved. Use the shortcut below to return to Qurbani
              Haat and continue browsing verified livestock listings.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="btn btn-primary btn-md rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(34,211,238,0.35)]"
              >
                Go to Homepage
              </Link>
              <Link href="/allanimals" className="btn btn-outline btn-md rounded-xl text-white">
                Browse Animals
              </Link>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-3 shadow-2xl backdrop-blur-xl">
              <motion.div
                className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <Image src={errorImage} alt="404 error illustration" className="h-auto w-full rounded-2xl object-cover" priority />
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default notFoundPage;