import React from 'react';
import { IBook } from '@/booktypes/types';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import BookCards from '../shared/BookCards';

// Localhost and versel tecle
const getBooks = async (): Promise<IBook[]> => {
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

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {booksData.slice(0,9).map((book: IBook) => (
                    <BookCards key={book.bookId} book = {book}/>
                ))}
            </div>

            <div className="flex justify-center items-center mt-12">
                <Link href="/allbooks">
                    <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
                        More Books
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Books;