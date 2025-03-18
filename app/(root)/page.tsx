"use client";
import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { sampleBooks } from "@/constants";
import { IKImage, ImageKitProvider } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      <div>
        
        {/* <h1>Library Management System</h1> */}


        {/* <IKImage path="default-image.jpg" width={100} height={100} alt="Alt text" /> */}

        <BookOverview {...sampleBooks[0]}/>

        <BookList/>
        
      </div>
    </ImageKitProvider>
  );
}

