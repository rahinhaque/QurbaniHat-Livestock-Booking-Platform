'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Mail, User, ShieldCheck, LogOut, ArrowLeft, Pencil } from 'lucide-react';

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
        },
      },
    });
  };

  // Get initials from name
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200/50">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-amber-500" />
          <p className="text-base-content/60 text-sm font-medium">Loading your profile…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200/50 px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-base-content mb-2">Not Signed In</h2>
          <p className="text-base-content/60 mb-6 text-sm">
            Please log in to view your profile.
          </p>
          <Link
            href="/login"
            className="btn btn-primary btn-sm group relative overflow-hidden border-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-amber-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Profile Card */}
        <div className="bg-base-100 rounded-3xl border border-base-200 shadow-xl overflow-hidden animate__animated animate__fadeInUp animate__fast">

          {/* Hero Banner */}
          <div className="relative h-36 sm:h-44 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10" />
            <div className="absolute top-6 left-1/3 w-16 h-16 rounded-full bg-white/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Avatar — overlaps banner */}
          <div className="px-6 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-14 sm:-mt-16 mb-6">
              {/* Avatar */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-base-100 bg-violet-200 flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user?.name || 'Profile photo'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl font-bold text-violet-700">
                    {getInitials(user?.name)}
                  </span>
                )}
                {/* Online indicator */}
                <span className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-base-100 animate-pulse" />
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <Link
                  href="/profile/update"
                  className="btn btn-sm border border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 gap-2 bg-amber-50"
                >
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-sm border-error/40 text-error hover:bg-error hover:text-white hover:border-error transition-all duration-300 gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>

            {/* User Name & verified badge */}
            <div className="mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-base-content tracking-tight">
                  {user?.name || 'Anonymous User'}
                </h1>
                {user?.emailVerified && (
                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
              <p className="text-base-content/50 text-sm mt-1">QurbaniHat Member</p>
            </div>

            {/* Divider */}
            <div className="border-t border-base-200 mb-6" />

            {/* Info rows */}
            <div className="space-y-4 mb-8">

              {/* Name */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-base-200/50 border border-base-200/80 hover:border-amber-300/60 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                  <User className="w-4 h-4 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-base-content/50 uppercase tracking-widest font-semibold mb-0.5">
                    Full Name
                  </p>
                  <p className="text-base font-semibold text-base-content truncate">
                    {user?.name || '—'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-base-200/50 border border-base-200/80 hover:border-amber-300/60 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Mail className="w-4 h-4 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-base-content/50 uppercase tracking-widest font-semibold mb-0.5">
                    Email Address
                  </p>
                  <p className="text-base font-semibold text-base-content truncate">
                    {user?.email || '—'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer strip */}
          <div className="px-6 sm:px-8 py-4 bg-base-200/40 border-t border-base-200 flex items-center justify-between">
            <p className="text-xs text-base-content/40">
              Member since{' '}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })
                : '—'}
            </p>
            <Link
              href="/allanimals"
              className="text-xs font-semibold text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors"
            >
              Browse Animals →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;