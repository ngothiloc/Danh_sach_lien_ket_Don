"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

const Node = ({ value }) => (
  <motion.div
    className="flex items-center justify-center w-14 h-14 text-xl font-bold bg-blue-500 text-white rounded-full shadow-md"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    {value}
  </motion.div>
);

const danhsachlienketdon = () => {
  const [nodes, setNodes] = useState([]);

  const addNum = () => {
    setNodes((prev) => [...prev, crypto.getRandomValues(new Uint32Array(1))[0] % 100]);
  };

  const removeNum = () => {
    if (nodes.length > 0) {
      setNodes(nodes.slice(1));
    }
  };

  const sortNums = () => {
    setNodes([...nodes].sort((a, b) => a - b));
  };

  const reverseNums = () => {
    setNodes([...nodes].reverse());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex gap-4 mb-6">
        <Button onClick={addNum}>Thêm số</Button>
        <Button onClick={removeNum}>Xóa số đầu</Button>
        <Button onClick={sortNums}>Sắp xếp</Button>
        <Button onClick={reverseNums}>Đảo ngược</Button>
      </div>
      <div className="flex items-center gap-6">
        {nodes.map((value, index) => (
          <div key={index} className="flex items-center">
            <Node value={value} />
            {index < nodes.length - 1 && <ArrowRight className="w-6 h-6 text-gray-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default danhsachlienketdon;