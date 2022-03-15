import { useImperativeHandle, useEffect, forwardRef, useRef } from 'react';
import './canvas.css';

const Canvas = forwardRef(( {draw}, ref ) => { 
  const canvas = useRef();
  
  useImperativeHandle(ref, ()=>{
    return {
      width: canvas.current.clientWidth,
      height: canvas.current.clientHeight
    }
  })
  
  useEffect(() => {
    const context = canvas.current.getContext('2d'); 
    if (typeof draw === 'function') {
      canvas.current.width = canvas.current.clientWidth;
      canvas.current.height = canvas.current.clientHeight;
      draw(context); 
    }

  })

  return (
    <canvas
      ref={canvas}
      className='canvas'
    />
  )
})

export default Canvas;