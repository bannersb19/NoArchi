import {proxy} from 'valtio'

const state = proxy({

    intro:true,
    color: '#b9c49d',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: '/pattern.jpg',

})

export default state;
