import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";
import { Lights, Iphone } from "./";
import { Suspense, useRef } from "react";

export default function ModelView({
  index,
  groupRef,
  size,
  item,
  setRotation,
  controlRef,
}) {
  /* States, Refs, Variables */

  /* Rendering */
  return (
    <View index={index} id={index} className="w-full">
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotation(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <div>Loading...</div>
            </Html>
          }
        >
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}
