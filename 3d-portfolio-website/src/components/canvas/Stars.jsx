import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/radom/dist/maath-random.esm";
import styled from "styled-components";

const Stars = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000)), {
    radius: 1.2,
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        position={sphere}
        stride={3}
        frustumCulled
        {...props}
      ></Points>
    </group>
  );
};

export default Stars;
