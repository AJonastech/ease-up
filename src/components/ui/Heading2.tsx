"use client"
import React, { FC, ReactNode } from 'react';
import { motion } from "framer-motion"
interface Heading2Props {
    className?: string;
    children: ReactNode
  }
  
const Heading2:FC<Heading2Props> = ({ children, className }) => {
    return (
      <motion.h2 initial={{y:50, scale:0.9}} whileInView={{y:0, scale:1}} className={`lg:text-3xl text-2xl font-medium ${className}`} >
        {children}
      </motion.h2>
    );
  };

export default Heading2





