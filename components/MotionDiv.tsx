"use client";
// It needs to be converted to a client-side component because animations are client-side components and it won't work on NEXTjs
import { motion } from "framer-motion";

export const MotionDiv = motion.div;
