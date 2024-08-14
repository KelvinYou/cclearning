"use client";

import React from 'react'
import { motion, Variants } from "framer-motion";
import { staggerContainer } from '@/utils/motion';

interface IProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<IProps> = ({ id, title, subtitle, children }) => {
  const containerVariants: Variants = staggerContainer();
  
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='sm:px-16 px-6 sm:pt-4 pt-2 pb-10 max-w-7xl mx-auto' 
    >
      <span id={id}></span>
      {title && <div className='flex justify-center items-center flex-col pb-10'>
        <h1 className='text-3xl font-bold text-primary'>{title}</h1>
        <h2 className='text-xl font-light'>{subtitle}</h2>
      </div>}

      {children}
    </motion.section>
  )
}

export default SectionWrapper