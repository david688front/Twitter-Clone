import Head from "next/head";
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from "@/styles/Home.module.css";
import Sidebar from "@components/Sidebar";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    // </main>
    
      <div className="bg-black min-h-screen text-[#E7E9EA]">
      <Sidebar/>
      {/* <PostsFeed/>
      <Trending/> */}
      </div>
    
  )
}
