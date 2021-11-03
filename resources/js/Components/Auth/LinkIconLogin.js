import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function LinkIconlogin({ user }) {
  return (
    <Link href={user ? route("user.account") : route("login")} className="sm:bg-primary hover:bg-primary hover:opacity-80 group overflow-hidden text-white flex items-center p-1 rounded-sm">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></Link>
  );
}
