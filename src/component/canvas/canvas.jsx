import { useEffect, useRef } from "react"

import "../canvas/canvas.css"
import React from "react"



const wave = {
    y: innerHeight/2,
    ampluted :20,
    length:0.1,
}

function Canvas ({draw}) {
    const Ref = useRef(null)
    useEffect(()=>{
        const canvas = Ref.current
        const ctx = canvas.getContext("2d")
        let animatedframe ;
        let frequancy = 0.01
        function render(){
            ctx.clearRect(0,0,innerWidth,innerHeight)
            frequancy+=0.01
            draw(ctx ,canvas.height , canvas.width ,wave.length,wave.ampluted,frequancy)
            animatedframe = window.requestAnimationFrame(render)
        }
        
        render()
        
        return () => {
            cancelAnimationFrame(animatedframe)
        }
    },[draw])
    return (
        <canvas ref={Ref} width={700} height={700} ></canvas>
    )
}
export default Canvas