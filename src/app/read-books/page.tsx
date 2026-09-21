'use client';

import React, { useContext } from 'react';
import { IBook } from '@/booktypes/types';
import { BooksContext } from '@/context/BooksContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560', '#775DD0', '#00E396'];

// Triangle Bar Shape Generator
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// Custom Triangle Bar Component
const TriangleBar = (props: any) => {
  const { x = 0, y = 0, width = 0, height = 0, index = 0, isActive } = props;
  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={isActive ? 2 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      className="transition-all duration-300 ease-out hover:opacity-85"
    />
  );
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  if (!readBooks || readBooks.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <p className="text-2xl font-semibold text-gray-500">
          No read books available to show statistics.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Pages Read Custom Analysis
      </h2>
      
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 25,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#4B5563', fontSize: 12 }} 
              interval={0}
            />
            <YAxis tick={{ fill: '#4B5563' }} />
            <Tooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar 
              dataKey="pages" 
              shape={<TriangleBar />} 
              label={{ position: 'top', fill: '#374151', fontSize: 13, fontWeight: 'bold' }} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReadBooks;