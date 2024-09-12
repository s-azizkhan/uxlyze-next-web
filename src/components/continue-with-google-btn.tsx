"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ContinueWithGoogleBtn = ({ text }: { text?: string }) => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => router.push("/api/auth/signin")}
      >
        <FaGoogle className="mr-2 size-4" />
        {text || "Continue with Google"}
      </Button>
    </>
  );
};

export default ContinueWithGoogleBtn;
