'use client'
import { IBook } from '@/booktypes/types';
import { BooksContext } from '@/context/BooksContext';

import { useContext } from 'react';
import { toast } from 'react-toastify';


const WishListButton = ({ book }: {book: IBook}) => {
    const {wishlist,setWishlist} = useContext(BooksContext)

    const handleAddToWishlist = () => {
     const Data = wishlist.find((Books) => Books.bookId === book.bookId);
     if(!Data){
         setWishlist([...wishlist,book])
        toast.success(`You have read ${book.bookName}`)
     }     
    }
    return (
        <button onClick={()=> handleAddToWishlist()} className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white px-7 rounded-xl font-semibold transition-all duration-300">
         Add to WishList
        </button>
    );
};

export default WishListButton;