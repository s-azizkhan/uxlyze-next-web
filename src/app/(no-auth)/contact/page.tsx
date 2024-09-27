"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import ContactForm from "./Form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award01Icon,
  Clock01Icon,
  Mail01Icon,
  MapPinpoint01Icon,
  Rocket01Icon,
  ThumbsUpIcon,
} from "hugeicons-react";
import { IconHeadphones } from "@tabler/icons-react";
import { APP_NAME } from "@/config/app.config";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="pb-24 pt-16"
    >
      <div className="container">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                  Get in Touch
                </h1>
                <p className="text-muted-foreground mt-2 text-lg md:text-xl leading-relaxed">
                  {`Have a question or want to work together? We're here to help.
                  Reach out to us and we'll get back to you as soon as possible.`}
                </p>
              </div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {[
                  {
                    icon: Mail01Icon,
                    title: "Email",
                    content: "uxlyze@gmail.com",
                  },
                  {
                    icon: PhoneIcon,
                    title: "Phone",
                    content: "8368010631",
                  },
                  {
                    icon: MapPinpoint01Icon,
                    title: "Address",
                    content: "Cuttack, Odisha, PIN: 754221",
                  },
                  {
                    icon: Clock01Icon,
                    title: "Hours",
                    content: "24/7 - Always here for you",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-3 shadow-lg">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-md">
                    {`We're excited to hear from you! Fill out the form below and
                    we'll get back to you within one business day.`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-xl overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src="https://illustrations.popsy.co/violet/shaking-hands.svg"
                alt="Contact Us"
                width={600}
                height={400}
                className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </motion.div>
            <motion.div className="space-y-8" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {`Why Choose ${APP_NAME}?`}
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {`At ${APP_NAME}, we're committed to revolutionizing your
                restaurant experience. Our team of experts is dedicated to
                providing cutting-edge AI solutions that elevate your business
                to new heights.`}
              </p>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {[
                  {
                    icon: Award01Icon,
                    title: "Award-Winning",
                    content: "Exceptional service and innovation",
                  },
                  {
                    icon: IconHeadphones,
                    title: "24/7 Support",
                    content: "Always available to assist you",
                  },
                  {
                    icon: Rocket01Icon,
                    title: "Fast Turnaround",
                    content: "Efficient delivery of results",
                  },
                  {
                    icon: ThumbsUpIcon,
                    title: "Client Satisfaction",
                    content: "Consistently praised service",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-card p-4 rounded-lg"
                    variants={itemVariants}
                  >
                    <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-2">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
