import React from 'react';
import BookCards from '@/components/shared/BookCards';
import { IBook } from '@/booktypes/types';

const getBooks = async () => {
    try {
        // process ar bikolpo
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || 'http://localhost:3000';
        
        const res = await fetch(`${baseUrl}/booksData.json`);

        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-16 px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                    Explore Our <span className="text-emerald-600">All Book</span>
                </h2>
                <p className="text-slate-500 mt-2 text-lg">
                    Discover your next great read from our handpicked recommendations
                </p>
             
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.slice(0,9).map((book: IBook, ind: number) => { return <BookCards key={ind} book={book} /> })}
            </div>
        </section>
    );
};

export default Books;