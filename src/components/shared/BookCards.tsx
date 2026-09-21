import React from 'react';
import Image from 'next/image';
import { IBook } from '@/booktypes/types';
import Link from 'next/link'
interface Booktype {
    book: IBook
}

const BookCards = ({ book }: Booktype) => {
    return (
        <div
            key={book.bookId}
            className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
        >
            {/* Image Section */}
            <div className="relative h-72 w-full bg-slate-100 p-6 flex items-center justify-center overflow-hidden">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={200}
                    height={300}
                    priority
                    unoptimized
                    className="h-full w-auto object-contain drop-shadow-xl"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
                    {book.category}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs font-bold text-slate-700">
                    <span className="text-amber-400">★</span>
                    <span>{book.rating}</span>
                </div>
            </div>

            {/* Card Details */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {book.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-md border border-emerald-100"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Title & Author */}
                <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                    {book.bookName}
                </h3>
                <p className="text-slate-500 text-sm font-medium mt-1">
                    By {book.author}
                </p>

                <hr className="my-4 border-dashed border-slate-200" />

                {/* Footer Info & Button */}
                <div className="mt-auto flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{book.totalPages} Pages</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600">
                        {book.publisher} ({book.yearOfPublishing})
                    </span>
                </div>
                <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 w-full bg-slate-900 hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 shadow-md">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCards;