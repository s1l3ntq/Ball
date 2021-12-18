import React from "react";


export function Ball(props) {
   return (
      <>
         <ambientLight intensity ={.5}  />
         <mesh>
          <sphereGeometry args={[1, 32, 32]}/>
          <meshPhongMaterial color="white" />
         </mesh>
      </>
   );
}