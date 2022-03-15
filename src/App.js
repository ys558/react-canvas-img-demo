import { useRef } from 'react';
import Canvas from './components/Canvas';

const draw = (context, canvasRef) => {
  const img = new Image();

  img.onload = () => {
    context.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  img.crossOrigin = '';
  img.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20210927%2Fdadcc0817dc247559f14bb9f1e38c85b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649904959&t=2e170b4e8db7ed932c0f41e5e5278d75'
};

function App() {
  const canvasRef = useRef();
  return (
    <Canvas draw={context => draw(context, canvasRef)} ref={canvasRef}/>
  );
}
export default App;