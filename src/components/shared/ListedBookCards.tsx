import { IBook } from '@/booktypes/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCards = ({ books }: { books: IBook }) => {
    return (
        <div className="flex flex-col md:flex-row bg-base-100 border border-base-200 rounded-3xl p-6 mb-6 shadow-sm hover:shadow-md transition-all duration-300 gap-6 items-center">
            <div className="w-full md:w-64 h-60 bg-base-200/70 rounded-2xl flex-shrink-0 flex items-center justify-center p-4">
                <Image
                    src={books.image}
                    alt={books.bookName}
                    width={250}
                    height={300}
                    priority
                    unoptimized
                    className="h-full w-auto object-contain drop-shadow-xl"
                />
            </div>

            <div className="flex-1 w-full flex flex-col justify-between h-full">
                <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-bold text-sm text-base-content">Tag</span>
                        {books.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="badge border-0 bg-emerald-50 text-emerald-600 font-medium px-4 py-3 text-xs rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Title & Author */}
                    <h3 className="text-2xl font-bold text-base-content mb-2">
                        {books.bookName}
                    </h3>
                    <p className="text-sm font-medium text-base-content/70 mb-4">
                        By : {books.author}
                    </p>

                    {/* Extra Info Row (Publisher, Year, Pages) */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-base-content/70 border-b border-base-200 pb-4 mb-4">
                        <span className="flex items-center gap-2">
                            <span>📅</span> Year of Publishing: <strong className="text-base-content">{books.yearOfPublishing}</strong>
                        </span>
                        <span className="flex items-center gap-2">
                            <span>🏢</span> Publisher: <strong className="text-base-content">{books.publisher}</strong>
                        </span>
                        <span className="flex items-center gap-2">
                            <span>📄</span> Page: <strong className="text-base-content">{books.totalPages}</strong>
                        </span>
                    </div>
                </div>

                {/* Bottom Row: Category, Rating & Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="badge border-0 bg-blue-50 text-blue-600 font-semibold px-4 py-3 rounded-full text-xs">
                            Category: {books.category}
                        </span>
                        <span className="badge border-0 bg-amber-50 text-amber-600 font-semibold px-4 py-3 rounded-full text-xs">
                            Rating: {books.rating}
                        </span>
                    </div>

                    <Link href={`/books/${books.bookId}`}>
                        <button className="btn btn-success bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 font-semibold border-0 text-sm">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ListedBookCards;