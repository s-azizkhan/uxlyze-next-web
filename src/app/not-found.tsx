import { ArrowLeft01Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:space-x-12">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="mb-6 text-9xl font-extrabold tracking-tighter text-purple-600 dark:text-purple-400 animate-pulse">
            404
          </h1>
          <p className="mb-10 text-4xl font-bold text-gray-800 dark:text-gray-200">
            {`Oops! You've reached a dead end.`}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <ArrowLeft01Icon className="w-6 h-6 mr-3" />
            Back to Homepage
          </Link>
          <p className="mt-10 text-xl text-gray-600 dark:text-gray-400">
            {`The page you're looking for doesn't exist or has been moved.`}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] transition-all duration-300 ease-in-out hover:scale-105">
            <Image
              src="https://illustrations.popsy.co/violet/crashed-error.svg"
              alt="404 Illustration"
              width={450}
              height={450}
              className="dark:filter dark:invert object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
