import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box2() {
  // const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        dragConstraints={{
          right: 20,
          left: -5,
          top: 5,
          bottom: 5,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
    </div>
  );
}
