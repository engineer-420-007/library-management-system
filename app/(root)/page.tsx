"use client";
import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <div className=" h-full flex flex-col items-center w-full">
        <BookOverview {...sampleBooks[0]}/>
        <BookList/>
    </div>
);
}

