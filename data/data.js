function draw(ctx , y , x , length , ampluted , frequancy){
    ctx.clearRect(0,0,700,700)
    ctx.beginPath()
    ctx.moveTo(0, y)
    for(let i = 0 ; i < x  ; i++){
        ctx.lineTo(i, y + Math.sin(i*length)*(ampluted*Math.sin(frequancy)) - i +18)
    }
    ctx.fillStyle = "white"
    ctx.lineTo(x+300,y)
    ctx.fill()
    ctx.closePath()
}
export default draw