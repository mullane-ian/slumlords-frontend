import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Container() {
  return (
    <motion.div
      whileTap={{ scale: 0.8, rotate: 180, borderRadius: '100%' }}
      transition={{ type: 'spring', stiffness: 200, duration: 2 }}
      className="Container">
      <span>Hello</span>
    </motion.div>
  );
}
