import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";


const App: React.FC = () => {
  return (
    <div id="canvas-container">
      <Canvas 
        gl={{antialias: true}} // by default the antialias is true that removes step effect on the edges
        dpr={[1, 2]} // display pixel ratio minimum 1 and max 2
        >
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
