"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from '@/booktypes/types'
import { useContext, useState } from "react";
import ListedBookCards from "@/components/shared/ListedBookCards";

const ListedBooks = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];
        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks
    }
    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishlist)

    return (
        <div className="container mx-auto py-[20px] max-w-6xl px-4">
            <h2 className="my-4 bg-amber-100/60 rounded-3xl py-12 font-bold text-3xl md:text-4xl text-center text-slate-800">
                Listed Books
            </h2>
            <div className='items-center text-center'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                >
                    <option value="" disabled>Pick an option</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Pages</option>
                    <option value="year">Year</option>
                </select>
            </div>

            <div className="tabs tabs-border mt-8">
                <input type="radio" name="my_tabs_2" className="tab text-lg font-semibold" aria-label="Read Books" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-4 md:p-8 mt-4">
                    {readBooks.length > 0 ? (
                        sortedReadBooks.map((book: IBook) => (
                            <ListedBookCards key={book.bookId} books={book} />
                        ))
                    ) : (
                        <p className="text-center py-10 text-gray-500">No read books found</p>
                    )}
                </div>

                <input type="radio" name="my_tabs_2" className="tab text-lg font-semibold" aria-label="Wishlist Books" />
                <div className="tab-content border-base-300 bg-base-100 p-4 md:p-8 mt-4">
                    {wishlist.length > 0 ? (
                        sortedWishlist.map((book: IBook) => (
                            <ListedBookCards key={book.bookId} books={book} />
                        ))
                    ) : (
                        <p className="text-center py-10 text-gray-500">No wishlist books found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;