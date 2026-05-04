'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, ImageIcon, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMsg, setErrorMsg] = useState('');

  // Pre-fill form with current user data once session loads
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setImage(user.image || '');
    }
  }, [user]);

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setErrorMsg('');

    try {
      await authClient.updateUser({
        name: name.trim() || undefined,
        image: image.trim() || undefined,
      });
      setStatus('success');
      // Redirect back to profile after short delay
      setTimeout(() => router.push('/profile'), 1500);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200/50">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-amber-500" />
          <p className="text-base-content/60 text-sm font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200/50 px-4">
        <div className="text-center max-w-sm">
          <h2 className="text-2xl font-bold text-base-content mb-2">Not Signed In</h2>
          <p className="text-base-content/60 mb-6 text-sm">Please log in to update your profile.</p>
          <Link href="/login" className="btn btn-primary btn-sm">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">

        {/* Back link */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-amber-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Profile
        </Link>

        {/* Card */}
        <div className="bg-base-100 rounded-3xl border border-base-200 shadow-xl overflow-hidden">

          {/* Banner */}
          <div className="relative h-28 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Title inside banner */}
            <div className="absolute inset-0 flex items-center px-8">
              <h1 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-sm">
                Update Profile
              </h1>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-8">

            {/* Live avatar preview */}
            <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-base-200/50 border border-base-200/80">
              <div className="relative w-16 h-16 rounded-full ring-2 ring-amber-400/50 ring-offset-2 ring-offset-base-100 bg-violet-200 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                {image ? (
                  <Image
                    src={image}
                    alt="Preview"
                    fill
                    className="object-cover"
                    onError={() => {}}
                  />
                ) : (
                  <span className="text-xl font-bold text-violet-700">
                    {getInitials(name)}
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-base-content text-sm">
                  {name || 'Your Name'}
                </p>
                <p className="text-xs text-base-content/50 mt-0.5">Live preview</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdate} className="space-y-5">

              {/* Name input */}
              <div className="form-control">
                <label className="label pb-1.5" htmlFor="update-name">
                  <span className="label-text font-semibold text-base-content/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-500" />
                    Full Name
                  </span>
                </label>
                <input
                  id="update-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Abdullah Al Rafi"
                  className="input input-bordered w-full rounded-xl focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Image URL input */}
              <div className="form-control">
                <label className="label pb-1.5" htmlFor="update-image">
                  <span className="label-text font-semibold text-base-content/80 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-amber-500" />
                    Profile Photo URL
                  </span>
                </label>
                <input
                  id="update-image"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full rounded-xl focus:border-amber-400 focus:outline-none transition-colors"
                />
                <label className="label pt-1">
                  <span className="label-text-alt text-base-content/40">
                    Paste a direct image URL. Leave blank to keep current photo.
                  </span>
                </label>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Profile updated successfully! Redirecting…
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-error/10 border border-error/20 text-error text-sm font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading || status === 'success'}
                className="btn w-full rounded-xl bg-amber-500 hover:bg-amber-600 text-white border-0 font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Updating…
                  </>
                ) : (
                  'Update Information'
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpdateProfilePage;
