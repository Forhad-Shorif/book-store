import React from 'react';
import { IBook } from '@/booktypes/types';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const moreBooks = async (): Promise<IBook[]> => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'booksData.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return data;
    } catch (error) {
        console.error("Error reading books data:", error);
        return [];
    }
};

const MoreBooks = async () => {
    const BooksData = await moreBooks();

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                    Explore Collection
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
                    All <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Books</span> Collection
                </h1>
                <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                    Discover your next favorite read from our carefully curated list of timeless classics and modern masterpieces.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {BooksData.map((book: IBook) => {
                    return (
                        <div
                            key={book.bookId}
                            className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-200/60 transition-all duration-500 overflow-hidden hover:-translate-y-2 relative"
                        >
                            {/* Image Section */}
                            <div className="relative h-72 w-full bg-gradient-to-b from-slate-50 to-slate-100/80 p-6 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    width={200}
                                    height={300}
                                    priority
                                    unoptimized
                                    className="h-full w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Category Badge */}
                                <span className="absolute top-4 left-4 bg-emerald-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-sm tracking-wide">
                                    {book.category}
                                </span>

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs font-bold text-slate-700 border border-slate-100">
                                    <span className="text-amber-400 text-sm">★</span>
                                    <span>{book.rating}</span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {book.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-slate-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-slate-200/60"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & Author */}
                                <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                                    {book.bookName}
                                </h3>
                                <p className="text-slate-500 text-xs font-medium mt-1">
                                    By <span className="text-slate-700 font-semibold">{book.author}</span>
                                </p>

                                <hr className="my-4 border-dashed border-slate-200" />

                                {/* Footer Info */}
                                <div className="mt-auto flex items-center justify-between text-xs text-slate-500 font-medium mb-5">
                                    <span className="flex items-center gap-1">
                                        📖 {book.totalPages} Pages
                                    </span>
                                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-semibold text-[11px]">
                                        {book.publisher} ({book.yearOfPublishing})
                                    </span>
                                </div>

                                {/* Action Button */}
                                <Link href={`/books/${book.bookId}`} className="w-full">
                                    <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-500/20 active:scale-98 flex items-center justify-center gap-2 group/btn">
                                        <span>View Details</span>
                                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MoreBooks;