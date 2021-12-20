import React from "react";
import {  OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";


export function Table (props) {


    return (


        <>

        <ambientLight intensity ={.5} />

         <mesh>
            <boxGeometry args={[1,5,2]} />
            <meshBasicMaterial color= "green" />
         </mesh>
        </>

    );
}
