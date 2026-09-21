import React from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-20">
            {/* Banner bg side style */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 p-8 md:p-14 backdrop-blur-xl border border-slate-800 shadow-2xl">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        
                        {/* Text Content */}
                        <div className="space-y-6 text-center lg:text-left">
                            {/* Top Badge */}
                            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-emerald-400 border border-emerald-500/20">
                                📚 Discover Your Next Favorite Book
                            </span>

                            {/* Heading */}
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                                Books to freshen up <br className="hidden sm:inline" />
                                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                                    your bookshelf
                                </span>
                            </h1>

                            {/* Subtitle / Description */}
                            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                                Explore a curated collection of bestsellers, timeless classics, and hidden gems ready to elevate your reading space.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                                <button className="btn btn-success px-8 py-3 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-600 border-none shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
                                    View The List
                                </button>
                                <button className="btn btn-outline border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative flex justify-center lg:justify-end">
                            {/* image style */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 opacity-20 blur-2xl rounded-2xl" />
                            
                            {/* image design */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 max-w-md w-full">
                                <Image 
                                    src={BannerImage} 
                                    alt="Book Vibe Banner" 
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;