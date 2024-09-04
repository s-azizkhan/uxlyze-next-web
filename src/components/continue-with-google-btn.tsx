import { FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";

const ContinueWithGoogleBtn = ({ text }: { text?: string }) => {
  return (
    <>
      <Button variant="outline" className="w-full">
        <FaGoogle className="mr-2 size-4" />
        {text || "Continue with Google"}
      </Button>
    </>
  );
};

export default ContinueWithGoogleBtn;
