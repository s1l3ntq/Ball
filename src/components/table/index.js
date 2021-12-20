import React from "react";
import { BoxGeometry } from "three";
import { BoxHelper } from "three";
import { BoxBufferGeometry } from "three";
import { Box, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";


export function Table (props) {


    return (


        <>

        <ambientLight intensity ={.5} />

         <mesh>
            <Box args={[1,5,2]} />
            <meshBasicMaterial color= "green" />
         </mesh>
        </>

    );
}
