import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

const App: React.FC = () => {
  return (
    <div id="canvas-container">
      <Canvas >
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
