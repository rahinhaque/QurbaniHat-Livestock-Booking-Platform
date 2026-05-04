import React from 'react';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the QurbaniHat support team for assistance with livestock booking, delivery coordination, or any other inquiries.",
};

const ContactPage = () => {
  return (
    <main className="bg-base-100 text-base-content">
      <section className="border-b border-base-300 bg-base-200/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Contact Qurbani Haat</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">We Are Here to Help Your Qurbani Journey</h1>
          <p className="mt-4 max-w-3xl leading-8 text-base-content/80">
            From pre-purchase questions to delivery coordination, our support team is ready to assist with empathy,
            professionalism, and Shariah-conscious guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Direct Call</h2>
          <p className="mt-3 text-lg font-bold">+880-1712-345678</p>
          <p className="mt-1 text-sm text-base-content/70">Toll Free Support Line</p>
        </article>
        <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">WhatsApp</h2>
          <p className="mt-3 text-lg font-bold">+880-1811-223344</p>
          <p className="mt-1 text-sm text-base-content/70">For live videos and quick updates</p>
        </article>
        <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Email</h2>
          <p className="mt-3 text-lg font-bold">support@qurbanihaat.com</p>
          <p className="mt-1 text-sm text-base-content/70">Formal inquiries and documents</p>
        </article>
        <article className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Farm Location</h2>
          <p className="mt-3 text-lg font-bold">Plot X, Sector Y, Purbachal</p>
          <p className="mt-1 text-sm text-base-content/70">Main Cattle Hub Zone</p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-bold">Multi-Channel Support</h2>
          <p className="mt-2 text-sm leading-7 text-base-content/80">
            Livestock buying needs real discussion around age, health, weight, and delivery timing. Contact us through
            your preferred channel for quick and clear support.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="tel:+8801712345678" className="btn btn-primary btn-sm sm:btn-md">
              Call Hotline
            </a>
            <a
              href="https://wa.me/8801811223344"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm sm:btn-md"
            >
              Chat on WhatsApp
            </a>
            <a href="mailto:support@qurbanihaat.com" className="btn btn-outline btn-sm sm:btn-md">
              Send Email
            </a>
          </div>
        </article>

        <article className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-sm">
          <h2 className="text-xl font-bold">Operational Hours</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-base-content/85">
            <li>
              <span className="font-semibold">Standard Hours:</span> 9:00 AM – 8:00 PM
            </li>
            <li>
              <span className="font-semibold">Peak Season (1st–10th Dhu al-Hijjah):</span> 24/7 Customer Support
            </li>
            <li>
              <span className="font-semibold">Average Response Time:</span> Within 15 minutes on WhatsApp during peak days
            </li>
          </ul>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Farm & Office Locations</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-base-content/80">
            <div>
              <p className="font-semibold text-base-content">Corporate Office</p>
              <p>House 18, Road 7, Dhanmondi, Dhaka 1209</p>
              <a
                href="https://maps.google.com/?q=Dhanmondi+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="link link-primary"
              >
                Open Office Map
              </a>
            </div>
            <div>
              <p className="font-semibold text-base-content">Holding Farm / Collection Hub</p>
              <p>Plot X, Sector Y, Purbachal Cattle Hub Zone</p>
              <a
                href="https://maps.google.com/?q=Purbachal+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="link link-primary"
              >
                Open Farm Map
              </a>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Live Chat & Social</h2>
          <p className="mt-3 text-sm leading-7 text-base-content/80">
            Our live support can instantly answer common questions like delivery fee, available zones, or butchering
            support. For new arrivals, follow our social channels.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="btn btn-accent btn-sm sm:btn-md">Start Live Chat</button>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm sm:btn-md"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm sm:btn-md"
            >
              Instagram
            </a>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-base-300 bg-base-200/30 p-6">
          <h2 className="text-2xl font-bold">Specialized Inquiry Form</h2>
          <p className="mt-2 text-sm leading-7 text-base-content/80">
            Share your query type so we can route your request to the right team faster.
          </p>

          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="form-control w-full">
              <span className="label-text mb-1 text-sm font-medium">Full Name</span>
              <input type="text" className="input input-bordered w-full" placeholder="Enter your name" />
            </label>

            <label className="form-control w-full">
              <span className="label-text mb-1 text-sm font-medium">Phone Number</span>
              <input type="tel" className="input input-bordered w-full" placeholder="+8801XXXXXXXXX" />
            </label>

            <label className="form-control w-full md:col-span-2">
              <span className="label-text mb-1 text-sm font-medium">Inquiry Type</span>
              <select className="select select-bordered w-full" defaultValue="Pre-Purchase Questions">
                <option>Pre-Purchase Questions</option>
                <option>Delivery Coordination</option>
                <option>Vendor/Farmer Inquiry</option>
                <option>Corporate/Donation Orders</option>
              </select>
            </label>

            <label className="form-control w-full md:col-span-2">
              <span className="label-text mb-1 text-sm font-medium">Message</span>
              <textarea
                className="textarea textarea-bordered h-32 w-full"
                placeholder="Write your query (example: Is the cow dewormed? Can I change delivery slot?)"
              />
            </label>

            <div className="md:col-span-2">
              <button type="button" className="btn btn-primary">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-t border-base-300 bg-base-200/40">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
          <a href="#" className="btn btn-outline justify-start">
            Track My Delivery
          </a>
          <a href="#" className="btn btn-outline justify-start">
            Find a Butcher
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;