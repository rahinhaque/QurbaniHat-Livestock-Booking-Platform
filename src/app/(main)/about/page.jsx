import Image from 'next/image';
import React from 'react';
import ceoImage from '@/assets/ceo.jpg';

const AboutUsPage = () => {
  return (
    <main className="bg-base-100 text-base-content">
      <section className="border-b border-base-300 bg-base-200/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">About Qurbani Haat</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Tradition Meets Technology for a More Meaningful Qurbani
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-base-content/80">
            Qurbani is a sacred Sunnah, a sacrifice filled with blessings and devotion. Our mission is to honor this
            spiritual act while removing the stress of crowded haats, heat, mud, and uncertainty through a reliable
            digital experience.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-3 leading-7 text-base-content/80">
            Qurbani Haat was born from one simple idea: busy urban families should be able to perform Qurbani with
            confidence, dignity, and peace of mind. Traditional markets can be physically exhausting, time-consuming,
            and full of price haggling. We built a platform where families can choose healthy animals from home while
            staying true to Islamic values.
          </p>
        </article>

        <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 leading-7 text-base-content/80">
            We combine ethical livestock sourcing, Shariah-first standards, and transparent technology to make Qurbani
            easier for buyers and fairer for farmers. Our goal is a stress-free and trustworthy experience from
            selection to doorstep delivery.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Quality Assurance & Animal Health</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-base-300 bg-base-100 p-5">
              <h3 className="font-semibold text-primary">Farm-to-Doorstep</h3>
              <p className="mt-2 text-sm leading-7 text-base-content/80">
                Animals are sourced directly from reputable organic farms with proper care standards and responsible
                handling.
              </p>
            </div>
            <div className="rounded-xl border border-base-300 bg-base-100 p-5">
              <h3 className="font-semibold text-primary">Vet-Verified</h3>
              <p className="mt-2 text-sm leading-7 text-base-content/80">
                Every listed animal is checked by certified veterinarians to ensure disease-free condition, healthy
                development, and age eligibility for Qurbani.
              </p>
            </div>
            <div className="rounded-xl border border-base-300 bg-base-100 p-5">
              <h3 className="font-semibold text-primary">Organic Feeding</h3>
              <p className="mt-2 text-sm leading-7 text-base-content/80">
                Livestock is raised on natural fodder without harmful growth hormones, preserving quality and ethical
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Transparency & Digital Experience</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-base-content/80">
              <li>
                <span className="font-semibold text-base-content">Live Weight & Visuals:</span> Each listing includes
                actual photos, videos, and accurate weight details to reduce guesswork.
              </li>
              <li>
                <span className="font-semibold text-base-content">Fixed & Fair Pricing:</span> We reduce middleman
                distortion so farmers and buyers both receive fair value.
              </li>
              <li>
                <span className="font-semibold text-base-content">Clear Policies:</span> Buyers get straightforward
                terms for delivery zones, payment, and support.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Logistics & Delivery Prowess</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-base-content/80">
              <li>
                <span className="font-semibold text-base-content">Specialized Transit:</span> We arrange suitable
                livestock transport so animals travel safely with minimal stress.
              </li>
              <li>
                <span className="font-semibold text-base-content">Scheduled Delivery:</span> Delivery slots are planned
                for the important days leading up to Eid-ul-Adha.
              </li>
              <li>
                <span className="font-semibold text-base-content">Full-Service Option:</span> Slaughtering and meat
                processing support can be offered where service is available.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Why Us?</h2>
            <p className="mt-3 leading-7 text-base-content/80">
              We prioritize health-certified animals, transparent pricing, and 100% Shariah-conscious standards, so
              your Qurbani remains valid, respectful, and worry-free.
            </p>
          </article>

          <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold">The Impact</h2>
            <p className="mt-3 leading-7 text-base-content/80">
              By giving local farmers a digital marketplace, we strengthen rural economies and create a more inclusive
              supply chain where quality producers are rewarded fairly.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
            <div className="overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm">
              <Image
                src={ceoImage}
                alt="Rahin Haque, CEO of Qurbani Haat"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Founder&apos;s Message</h2>
              <p className="mt-1 text-sm font-medium text-primary">Rahin Haque, CEO</p>
              <p className="mt-4 leading-8 text-base-content/85">
                Assalamu Alaikum, I am <span className="font-semibold">Rahin Haque</span>, founder of Qurbani Haat. I
                built this platform so families can fulfill this sacred obligation with less hardship and more
                confidence. Our website helps you compare verified animals, understand real weight and pricing, and
                receive reliable delivery support without the physical pressure of traditional market visits.
              </p>
              <p className="mt-3 leading-8 text-base-content/85">
                We believe trust is our primary currency. If an animal does not match the listed description, we will
                make it right through our support and resolution process.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="border-t border-base-300 bg-base-200/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Our Promise</h2>
          <p className="mt-3 max-w-4xl leading-8 text-base-content/80">
            We promise ethical sourcing, clear communication, and responsive support throughout your Qurbani journey.
            Your faith, trust, and family&apos;s peace of mind are always at the center of everything we do.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;