import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StepProps {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick?: () => void;
}

const Step: React.FC<StepProps> = ({
  label,
  isActive,
  isCompleted,
  onClick,
}) => (
  <motion.div
    className={cn(
      "flex flex-col items-center cursor-pointer",
      isActive && "text-blue-600",
      isCompleted && "text-green-600"
    )}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <motion.div
      className={cn(
        "w-4 h-4 rounded-full flex items-center justify-center mb-2",
        isActive && "bg-blue-100 ring-2 ring-violet-600",
        isCompleted && "bg-green-100",
        !isActive && !isCompleted && "bg-gray-100"
      )}
      animate={{ scale: isActive ? 1.1 : 1 }}
    >
      {isCompleted ? (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <span
          className={cn(
            "text-sm font-medium",
            isActive ? "text-violet-600" : "text-gray-500"
          )}
        >
          {label[0]}
        </span>
      )}
    </motion.div>
    <span
      className={cn(
        "text-sm font-medium",
        isActive ? "text-violet-600" : "text-gray-500"
      )}
    >
      {label}
    </span>
  </motion.div>
);

interface StepperProps {
  steps: string[];
  activeStep: number;
  className?: string;
  onStepClick?: (stepIndex: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  className,
  onStepClick,
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <Step
            label={step}
            isActive={index === activeStep - 1}
            isCompleted={index < activeStep - 1}
            onClick={() => onStepClick?.(index + 1)}
          />
          {index < steps.length - 1 && (
            <motion.div
              className="flex-grow h-0.5 mx-2"
              initial={false}
              animate={{
                backgroundColor: index < activeStep - 1 ? "#10B981" : "#E5E7EB",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
