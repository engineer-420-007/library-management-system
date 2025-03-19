import { ImageKitProvider, IKUpload } from "imagekitio-next";


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


const ImageUpload = () => {
  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
        <div>
            <IKUpload fileName="test-upload.png" onError={onError} onSuccess={onSuccess} />
        </div>
    </ImageKitProvider>
  )
}

export default ImageUpload