'use client'

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left">

                {/* Brand & Info */}
                <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">📚</span>
                        <h2 className="text-2xl font-black text-white tracking-wide">
                            Book<span className="text-emerald-500">Vibe</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Discover your next favorite book from our curated collection of bestsellers, timeless classics, and hidden gems ready to elevate your reading space.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                            <a
                                key={social}
                                href={`#${social}`}
                                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm capitalize text-xs"
                            >
                                {social[0].toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Details link */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-bold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-8 after:h-0.5 after:bg-emerald-500">
                        Quick Links
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                        <li><Link href="/allbooks" className="hover:text-emerald-400 transition-colors">All Books</Link></li>
                        <li><Link href="/listed-books" className="hover:text-emerald-400 transition-colors">Listed Books</Link></li>
                        <li><Link href="/read-books" className="hover:text-emerald-400 transition-colors">Read Books</Link></li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-bold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-8 after:h-0.5 after:bg-emerald-500">
                        Customer Care
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                        <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
                        <li><a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* news */}
                <div className="space-y-4 flex flex-col items-center md:items-start w-full">
                    <h3 className="text-white font-bold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-8 after:h-0.5 after:bg-emerald-500">
                        Stay Updated
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-xs md:max-w-none">
                        Subscribe to get special discounts and book updates.
                    </p>
                    <form className="flex flex-col gap-2 w-full max-w-sm md:max-w-none" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors text-center md:text-left"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/*buttom side Copiright*/}
            <div className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center">
                <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>

                <div className="flex items-center gap-2">
                    <p className="flex items-center gap-1">
                        Crafted with <span className="text-emerald-500">♥</span> for Book Lovers
                    </p>

                    {/* My naming side */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-slate-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Creator: <strong className="text-emerald-400 font-semibold">Forhad Shorif</strong></span>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;