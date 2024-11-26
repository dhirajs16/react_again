import { easeIn } from "motion";
import { motion } from "motion/react";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: [0, 200, -300], y: [-300, -100] }}
        transition={{ duration: 2, delay: 0.2, ease: easeIn }}
        whileHover={{ scale: 2 }}
        className="text-9xl font-bold text-center cursor-pointer absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2"
      >
        Hello
      </motion.h1>
    </div>
  );
};

export default App;
