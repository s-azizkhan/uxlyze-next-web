import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "hugeicons-react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { APP_NAME } from "@/config/app.config";

const testimonialsContent = [
  {
    name: "Alex Johnson",
    role: "Restaurant Owner",
    company: "Bistro Bliss",
    image: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
    content: `"${APP_NAME} has transformed our restaurant operations. Our menu management is now seamless, and customer feedback has improved significantly!`,
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Café Manager",
    company: "Brew & Chew",
    image: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
    content: `"As a small café, efficiency is key. ${APP_NAME}'s AI-powered system has streamlined our ordering process and boosted our overall productivity.`,
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Head Chef",
    company: "Fusion Flavors",
    image: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
    content: `The AI menu suggestions from ${APP_NAME} have been a game-changer. It's helped us create innovative dishes that our customers love!`,
    rating: 4,
  },
];

function TestimonialCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-6xl mx-auto mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsContent.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MinimalCard className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MinimalCardImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <MinimalCardTitle className="font-semibold">
                    {testimonial.name}
                  </MinimalCardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <MinimalCardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                {`"${testimonial.content}"`}
              </MinimalCardDescription>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </MinimalCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <MaxWidthWrapper>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-14"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-6xl mx-auto text-center"
          >
            <span className="py-1.5 px-5 bg-indigo-100 dark:bg-indigo-900 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-300 text-center inline-block mb-4 transition-all duration-300 hover:bg-indigo-200 dark:hover:bg-indigo-800">
              {`Why ${APP_NAME}?`}
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              The Dining Revolution: Customer Stories
            </h2>
            <div className="flex flex-col justify-center items-center">
              <span className="relative inline-flex justify-center -space-x-4">
                {[1, 6, 3].map((num) => (
                  <Avatar
                    key={num}
                    className="w-10 h-10 border-2 border-white shadow-lg sm:w-12 sm:h-12 md:w-16 md:h-16"
                  >
                    <AvatarImage
                      src={`https://www.shadcnblocks.com/images/block/avatar-${num}.webp`}
                      alt={`Testimonial avatar ${num}`}
                    />
                  </Avatar>
                ))}
              </span>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              >
                Join us as we witness the transformation of the dining industry
                through the power of our AI-powered solutions.
              </motion.p>
            </div>
          </motion.div>
          <TestimonialCards />
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
