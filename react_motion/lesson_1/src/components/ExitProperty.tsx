import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ExitProperty = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="h-screen w-screen relative">
      <span>page 2</span>
      <AnimatePresence>
        {show && (
          <motion.div
            className="h-52 w-52 absolute top-1/2 right-1/2 bg-red-600"
            initial={{ x: -200 }}
            animate={{ x: 100, backgroundColor: "cyan" }}
            transition={{ duration: 1, delay: 0.5, ease: "linear" }}
            exit={{ opacity: 0, y: -200 }}
          ></motion.div>
        )}
        <button
          onClick={() => setShow(!show)}
          className="absolute w-52 bottom-0 right-1/2 translate-x-1/2 px-3 py-1 rounded-xl bg-cyan-800"
        >
          {show ? <span>Remove</span> : <span>Add</span>}
        </button>
      </AnimatePresence>
    </div>
  );
};

export default ExitProperty;
