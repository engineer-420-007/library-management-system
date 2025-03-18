"use client";
import { IKImage, ImageKitProvider } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
    <div className="text-4xl h-full flex justify-center items-center">
      <h1>Library Management System</h1>
      <IKImage path="default-image.jpg" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="2.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="3.jpg" width={100} height={100} alt="Alt text" />
      <IKImage path="4.jpg" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
      <IKImage path="1.webp" width={100} height={100} alt="Alt text" />
    </div>
    </ImageKitProvider>
  );
}
