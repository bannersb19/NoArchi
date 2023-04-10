import React from 'react'
import { useGLTF, Decal, useTexture, TransformControls, OrbitControls } from '@react-three/drei'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useSnapshot } from 'valtio'
import { useRef } from 'react'
import state from '../store'

const Room = () => {

  const snap = useSnapshot(state)
  // const { nodes, materials } = useGLTF('./walls.glb')




  return (
    < >
    		
    </>

  )
}

export default Room