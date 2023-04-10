import { Canvas } from '@react-three/fiber';
import { Environment, Center, OrbitControls } from '@react-three/drei';
import Room from './Room';
import CameraRig from './CameraRig';

const CanvasModel = () => {
	return (
		<Canvas 
				flat 
				camera={{ 
					fov: 35,
					position: [ 1, 2, 6 ],
					far:100000,
					near:0.1
					}} 
					>

			  {/* <Environment preset="city" /> */}
            <CameraRig>
                <Center>
                   <Room/>
                </Center>
            </CameraRig>
		</Canvas>
	);
};

export default CanvasModel;
