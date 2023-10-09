import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { OrbitControls } from "@react-three/drei";

export default function ThreeJSComp() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      eventSource={document.getElementById("root")}
    >
      <OrbitControls
        dampingFactor={0.07}
        rotateSpeed={0.08}
        enablePan={false}
        enableRotate={true}
        enableZoom={false}
      />
      <Stars />
    </Canvas>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  const [targetMouseX, setTargetMouseX] = useState(0);
  const [targetMouseY, setTargetMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const deltaRef = useRef(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setTargetMouseX(event.clientX);
      setTargetMouseY(event.clientY);
    });
  }, []);

  useFrame((state, delta) => {
    // Rotate the geometry at a constant speed
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;

    // If the mouse is moving, rotate the geometry according to the mouse movement
    if (
      state.mouse.x !== mousePosition.x ||
      state.mouse.y !== mousePosition.y
    ) {
      // setTimeout(() => {
      //   ref.current.rotation.y += state.mouse.x * 0.004;
      //   ref.current.rotation.x += state.mouse.y * 0.004;
      // }, 1.0);
      ref.current.rotation.y += (state.mouse.x - mousePosition.x) * delta * 0.2;
      ref.current.rotation.x += (state.mouse.y - mousePosition.y) * delta * 0.2;
    }
  });

  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          color="red"
          transparent
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
