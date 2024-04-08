'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import useRouter
export default function Home() {

  
const router = useRouter();
console.log(router);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
 
      <h1 className="text-6xl font-bold text-green-400 align-middle text-nowrap text-center">Welcome to the Restaurant Reviews App</h1>
      <p className="mt-3 text-2xl font-light">Get started by filling out the review form below</p>


{/*  <button onClick={() => router.push('/form')} className="mt-6 text-lg bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded">Start Review</button> */}
      <Link href="/form">
        <p className="mt-6 text-lg bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded">Start Review</p></Link>

    </div>
  );
}
