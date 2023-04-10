import * as THREE from 'three'
import state from '../store';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { OrbitControls, Center, TransformControls, useGLTF} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Decal, useTexture } from '@react-three/drei';


const CameraRig = () => 
{

	//test

	const snap = useSnapshot(state);

	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);


	
	//control hooks
	const bedmcontrols = useRef();
	const drobeControl = useRef();
	const setupControl = useRef();
	const lampControl = useRef();



	//room
	const newWall = useGLTF('./newWall2.glb');
	const {nodes,materials} = useGLTF('./newWall2.glb');


	const bed= useGLTF('./bed.glb');
	const drobe = useGLTF('./drobe.glb');
	const setup = useGLTF('./setup.glb');
	const lamp = useGLTF('./lamp.glb');
	const floor = useGLTF('./floor.glb');
	const colorWall = useGLTF('./colorWall.glb')


	
	
	useFrame((state, delta) => 
	{
		easing.dampC(newWall.materials.Wall.color, snap.color, 0.25, delta)
	});



	const stateString = JSON.stringify(snap);


		
	return (
		//prankush-Noarchi
		<group position-y={0.2} scale={1.2} >
			<Center >
			<mesh
				castShadow
				geometry={nodes.newWall2.geometry}
				scale={0.7}
				material={materials.Wall}
			>
			</mesh>
			
			<mesh
				key={stateString}
				castShadow
				geometry={colorWall.nodes.colorWalls.geometry}
				scale={0.7}
				material={materials.Wall}
			>
				{snap.isFullTexture && (
				<Decal 
					position={[0, 0, 0]}
					rotation={[0, 0, 0]}
					scale={9}
					map={fullTexture}
				/>
				)}
			</mesh>


			<primitive object={floor.scene} scale={0.7}/>
			</Center>


			<primitive ref={drobeControl} object={drobe.scene} scale={0.7} position={[0.95,0.2,0.1]}/>
			<primitive ref={bedmcontrols} object={bed.scene} scale={0.7} position={[0.21,-0.39,-0.64]}/>
			<primitive ref={setupControl} object={setup.scene} scale={0.7} position={[-0.82,-0.21,-0.1]}/>
			<primitive ref={lampControl} object={lamp.scene} scale={0.7} position={[-0.5,-0.48,-0.6]}/>


			//controls
			<TransformControls object={bedmcontrols} depthTest={false} showY={false} size={0.3}/>
			<TransformControls object={drobeControl} depthTest={false} showY={false} size={0.3}/>
			<TransformControls object={setupControl} depthTest={false} showY={false} size={0.3}/>
			<TransformControls object={lampControl} depthTest={false} showY={false} size={0.3}/>
			<OrbitControls
				minAzimuthAngle={-Math.PI / 4}
				maxAzimuthAngle={Math.PI / 4}
				minPolarAngle={Math.PI / 12}
				maxPolarAngle={Math.PI - Math.PI / 2}
				enablePan={false}
				enableDamping={true}
				dampingFactor={0.04}
				makeDefault={true}
			/>


			//lights
			<ambientLight intensity={0.6} castShadow />
			<directionalLight  intensity={1.2} position={[ 1, 2, 0 ]} shadow-radius={5} castShadow />


			//Performance FPS
			{/* <Perf position='top-left'/> */}
			
		</group>
	);
};

export default CameraRig;
