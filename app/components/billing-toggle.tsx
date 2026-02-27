"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

export default function BillingToggle({
  onChange,
}: {
  onChange?: (value: "monthly" | "annual") => void;
}) {
  const [value, setValue] = useState<"monthly" | "annual">("monthly");

  const handleChange = (val: "monthly" | "annual") => {
    setValue(val);
    onChange?.(val);
  };

  return (
    <div className="relative inline-flex  rounded-full p-1">
      {/* Sliding Background */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn(
          "absolute top-1 bottom-1 bg-primary rounded-full shadow",
          value === "annual" ? "left-[31%] w-2/3 " : "left-1 w-[31%]",
        )}
      />

      {/* Buttons */}
      <button
        onClick={() => handleChange("monthly")}
        className={`relative z-10 pl-3 mr-1.5 py-2 text-sm font-medium transition ${
          value === "monthly" ? "text-white" : "text-gray-500"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => handleChange("annual")}
        className={`relative z-10 pl-3 pr-1.5 py-2 text-sm font-medium transition ${
          value === "annual" ? "text-white" : "text-gray-500"
        }`}
      >
        Annually
        <span
          className={cn(
            "ml-1 text-xs px-2 py-0.5 rounded-full",
            value === "annual"
              ? "text-primary bg-white"
              : "text-accent bg-accent/20",
          )}
        >
          2 months free
        </span>
      </button>
    </div>
  );
}
