import "/app/globals.css";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { FiCommand } from "react-icons/fi";

export default function Page() {
  return (
    <div className="">  
      {/* Show spinner when Clerk is loading */}
      <ClerkLoading>
        <ImSpinner9 className="size-15 animate-spin text-gray-500" />
      </ClerkLoading>

      {/* Show SignIn UI after Clerk has loaded */}
      <ClerkLoaded>
        <SignUp />
      </ClerkLoaded>
    </div>
  );
}
