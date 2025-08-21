import { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, MeshStandardMaterial } from "three";
import { Text } from "@react-three/drei";

function Planet({planetName, textureUrl, position, rotationSpeed, planetSize, onClick}){

    const name = planetName
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const texture = useLoader(TextureLoader, textureUrl);

    useFrame(() => {
        meshRef.current.rotation.y += rotationSpeed;
    })

    return(
        <group position={position}>
            <mesh 
                ref={meshRef} 
                onClick={onClick}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
            <sphereGeometry args={planetSize} />
            <meshStandardMaterial 
                map={texture}
                emissive={hovered ? "white" : "black"} 
                emissiveIntensity={hovered ? 0.01 : 0}
            />
            </mesh>

            {hovered && (
                <Text
                    position={[position[0], -planetSize[0] - .5, position[2]]} // slightly below planet
                    fontSize={0.5}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    >
                    {planetName}
                </Text>
                )
            }
        </group>
    );
}
export default Planet;