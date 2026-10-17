'use client';
import { IBook } from '@/booktypes/types';
import { BooksContext } from '@/context/BooksContext';
import Link from 'next/link';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const UnlistedBtn = ({ books, isRead }: { books: IBook; isRead: boolean }) => {

    const { readBooks, setReadBooks, wishlist, setWishlist } = useContext(BooksContext);

    const handleUnlistBook = () => {
        if(isRead){
            setReadBooks(readBooks.filter((book) => book.bookId !== books.bookId));
            toast.success(`${books.bookName} UnReadlisted`);
        } else {
           setWishlist(wishlist.filter((book) => book.bookId !== books.bookId));
              toast.success(`${books.bookName} UnWishlisted`);
        }
    }
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href={`/books/${books.bookId}`}>
                <button className="btn btn-success bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 font-semibold border-0 text-sm">
                    View Details
                </button>
            </Link>
            <button onClick={handleUnlistBook} className="btn btn-error bg-red-500 hover:bg-red-600 text-white rounded-full px-6 font-semibold border-0 text-sm">
                Unlist
            </button>
        </div>
        </div>
    );
};

export default UnlistedBtn;