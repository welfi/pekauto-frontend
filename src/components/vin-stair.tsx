"use client";
import { motion } from "framer-motion";

export const VinStairs = () => {
  return (
    <div className="stepContainer mt-[px] text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="step flex flex-col justify-center text-3xl"
      >
        000000221XXXXXX100
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="step flex flex-col justify-center text-3xl"
      >
        VVV01422100001100
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="step flex flex-col justify-center text-3xl"
      >
        000036YY1000001PP
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="step flex flex-col justify-center text-3xl"
      >
        001XXX22100000100
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="step flex flex-col justify-center text-3xl"
      >
        001038221XXXXXX100
      </motion.div>
    </div>
  );
};
