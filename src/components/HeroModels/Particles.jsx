import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const createParticles = (count) => {
  const positions = new Float32Array(count * 3);
const speeds = new Float32Array(count);
for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = Math.random() * 10 + 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    speeds[i] = 0.005 + Math.random() * 0.01;
}
return { positions, speeds };
};

const Particles = ({ count = 200 }) => {
    const mesh = useRef();

    const data = useMemo(() => createParticles(count), [count]);

useFrame(() => {
    if (!mesh.current) return;
    const attr = mesh.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
        let y = attr.getY(i);
        y -= data.speeds[i];
      if (y < -5) y = 10; // Reset to top
    attr.setY(i, y);
    }
    attr.needsUpdate = true;
});

return (
    <points ref={mesh}>
    <bufferGeometry>
        <bufferAttribute
        attach="attributes-position"
        count={count}
        array={data.positions}
        itemSize={3}
        />
        </bufferGeometry>
        <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        />
    </points>
);
};

export default Particles;