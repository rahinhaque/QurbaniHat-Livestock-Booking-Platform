'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "@/assets/banner.png";

const banner = () => {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-slate-950">
      <motion.div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl"
        animate={{
          x: [0, 120, -20, 0],
          y: [0, 80, 140, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl"
        animate={{
          x: [0, -120, 20, 0],
          y: [0, 110, 30, 0],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.08),transparent_26%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950/30" />

      <div className="relative mx-auto grid min-h-[78vh] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="badge badge-success badge-outline px-4 py-3 text-xs tracking-wider text-white">
            EID UL ADHA SPECIAL LIVESTOCK HAAT
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Trusted Online <span className="text-emerald-300">Qurbani Haat</span> for Your Family
          </h1>

          <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            Discover healthy cows, goats, and sheep from verified farms. Compare options, view details, and book your
            preferred animal with confidence before Eid.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/allanimals" className="btn btn-primary btn-md">
              Browse All Animals
            </Link>
            <Link href="/about" className="btn btn-outline btn-md text-white hover:bg-white hover:text-slate-900">
              About Us
            </Link>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-3 pt-2">
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur">
              <p className="text-xl font-bold text-white">500+</p>
              <p className="text-xs text-slate-200">Listed Animals</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur">
              <p className="text-xl font-bold text-white">120+</p>
              <p className="text-xs text-slate-200">Trusted Farms</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-3 text-center backdrop-blur">
              <p className="text-xl font-bold text-white">24/7</p>
              <p className="text-xs text-slate-200">Support</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md">
            <Image src={bannerImage} className="h-auto w-full rounded-xl object-cover" alt="Qurbani haat banner" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default banner;
