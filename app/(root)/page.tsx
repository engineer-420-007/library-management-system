"use client";
import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { sampleBooks } from "@/constants";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
const onError = (err: any) => {
  console.log("Error", err);
};

const onSuccess = async (res: any) => {
  const path = await res.filePath;
  console.log(path);
};

export default function Home() {
  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
    <div className="text-4xl h-full flex justify-center items-center">
      {/* <h1>Library Management System</h1> */}


        {/* <IKImage path="default-image.jpg" width={100} height={100} alt="Alt text" /> */}

        <BookOverview {...sampleBooks[0]}/>

        <BookList/>
        
        <IKUpload fileName="test-upload.png" onError={onError} onSuccess={onSuccess} />
        <IKImage path="/test-upload_XuCg-DGXg.png" width="200" height="200" alt="Alt text" />
    </div>

    </ImageKitProvider>
  );
}

