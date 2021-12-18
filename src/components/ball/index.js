import React from "react";
import {useLoader} from '@react-three/fiber';

import GlowDot from '../.././assests/textures/glow_dot.jpg';
import Gradiant from '../.././assests/textures/gradiant.jpg';
import Plust from '../.././assests/textures/plust.jpg';
import ToyCar from '../.././assests/textures/toy_car.jpg';
import { TextureLoader } from "three";





export function Ball(props) {

   const [colorBall, glowBall, toyBall, plusBall] = useLoader(
      TextureLoader, [Gradiant, GlowDot, ToyCar, Plust]
      );


   return (
      <>
         <ambientLight intensity ={.5}  />
         <mesh>
          <sphereGeometry args={[1, 32, 32]}/>
          <meshPhongMaterial colorBall={colorBall} />
          <meshStandardMaterial map={plusBall} />
         </mesh>
      </>
   );
}