import { IBook } from '@/booktypes/types';
import Readbutton from '@/components/bookdetails/ReadButton';
import Image from 'next/image';
import WishListButton from '@/components/bookdetails/WishlistButton';
import React from 'react';
import fs from 'fs';
import path from 'path';

interface Booktype {
  params: Promise<{
    id: string;
  }>;
}

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

const page = async ({ params }: Booktype) => {
  const { id } = await params;
  const bookdata = await getBooks();
  
  // String কাস্টিং ব্যবহার করা সবচেয়ে নিরাপদ
  const book = bookdata.find((b: IBook) => String(b.bookId) === String(id));

  if (!book) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Book Not Found!</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-12 px-4 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-xl">
        
        {/* Left Side: Image Section */}
        <div className="lg:col-span-5 bg-slate-100/80 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden group">
          <div className="relative h-[380px] w-full max-w-[260px] drop-shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              unoptimized
              priority
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Right Side: Details Section */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-success text-white font-semibold text-xs px-3 py-2">
                {book.category}
              </span>
              <span className="flex items-center gap-1 text-sm font-bold text-amber-500 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                ★ {book.rating}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {book.bookName}
            </h1>
            <p className="text-slate-500 font-medium mt-1.5 text-base">
              By: <span className="text-slate-700 font-semibold">{book.author}</span>
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Tags */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700 text-sm">Tag:</span>
            <div className="flex flex-wrap gap-2">
              {book.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Review Description */}
          <div>
            <h3 className="font-bold text-slate-800 text-sm mb-1">Review:</h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
              {book.review}
            </p>
          </div>

          <hr className="border-slate-200" />

          {/* Additional Metadata */}
          <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 max-w-sm">
            <div>
              <span className="text-slate-400">Number of Pages:</span>
            </div>
            <div className="font-bold text-slate-800">{book.totalPages}</div>

            <div>
              <span className="text-slate-400">Publisher:</span>
            </div>
            <div className="font-bold text-slate-800">{book.publisher}</div>

            <div>
              <span className="text-slate-400">Year of Publishing:</span>
            </div>
            <div className="font-bold text-slate-800">{book.yearOfPublishing}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <Readbutton book={book} />
            <WishListButton book={book} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default page;