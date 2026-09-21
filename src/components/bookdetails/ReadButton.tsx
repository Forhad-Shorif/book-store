'use client'
import { IBook } from '@/booktypes/types';
import { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { toast } from 'react-toastify';

const Readbutton = ({ book }: {book: IBook}) => {
    const {readBooks,setReadBooks} = useContext(BooksContext)

    const handleReadBook = () => {
        const Data = readBooks.find((Books)=> Books.bookId === book.bookId)
        if(!Data){
              setReadBooks([...readBooks,book])
        toast.success(`You have read ${book.bookName}`)
        } 
    }
    return (
        <button onClick={()=> handleReadBook()} className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white px-7 rounded-xl font-semibold transition-all duration-300">
            Read
        </button>
    );
};

export default Readbutton;