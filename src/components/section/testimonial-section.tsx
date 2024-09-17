import MaxWidthWrapper from "../shared/max-width-wrapper";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { APP_NAME } from "@/config/app.config";
import TitleTopBadge from "../shared/title-top-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageAdd01Icon } from "hugeicons-react";

function FeedbackCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-3xl mx-auto mt-16 text-center"
    >
      <h3 className="text-2xl font-semibold mb-4">
        Be the First to Share Your Experience
      </h3>
      <p className="text-lg mb-6">
        Your feedback is invaluable in shaping {APP_NAME}. Help us improve by
        sharing your thoughts.
      </p>
      <Link href="/submit-feedback" passHref>
        <Button className="rounded-xl" size="lg">
          Submit Your Feedback
          <MessageAdd01Icon className="ml-2 size-4 animate-pulse" />
        </Button>
      </Link>
    </motion.div>
  );
}

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            <TitleTopBadge title={`Help Us Improve ${APP_NAME}`} />

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              We Value Your Feedback
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Your feedback is crucial in shaping the future of {APP_NAME}.
              Share your experience and help us enhance our AI-powered UI/UX
              evaluation platform.
            </motion.p>
          </motion.div>
          <FeedbackCTA />
        </div>
      </motion.section>
    </MaxWidthWrapper>
  );
}
