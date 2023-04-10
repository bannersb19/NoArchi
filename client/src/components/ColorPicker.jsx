import React from 'react'
import {SketchPicker} from 'react-color'
import state from '../store'
import { useSnapshot } from 'valtio'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={state.color} 
        onChangeComplete={(color)=>state.color = color.hex}
        disableAlpha
        // presetColors={[
        //   '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'
        // ]}
      />
    </div>
  )
}

export default ColorPicker