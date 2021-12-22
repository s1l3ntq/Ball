import React from "react";
import {  OrbitControls } from "@react-three/drei";
import { TextureLoader, Vector3 } from "three";


export function Table (props) {

    

    return (


        <>

         <ambientLight intensity ={.5} />


         <mesh
           rotation = {[0, 4.8, 0]} 
           position = {[0, -3, 0]}>
            <boxGeometry args={[1, 1, 0]} />
            <meshBasicMaterial color= "green" />
            <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
             />
         </mesh>
        </>

    );
}
