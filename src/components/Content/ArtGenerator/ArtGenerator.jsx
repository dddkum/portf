import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import './ArtGenerator.scss';

const ArtContainer = styled.canvas`
  display: block;
  margin: 0 auto;
  background: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

const randomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink'];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const generateRandomShape = (ctx, width, height) => {
  const shapeType = Math.floor(Math.random() * 3);
  const shapeColor = randomColor();
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const size = Math.floor(Math.random() * 80) + 20;

  ctx.fillStyle = shapeColor;
  ctx.beginPath();

  if (shapeType === 0) { // прямугольник
    ctx.rect(x, y, size, size);
    ctx.stroke();
} else if (shapeType === 1) { // круг
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.stroke();
} else if (shapeType === 2) { // треугольник
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.closePath();
    ctx.stroke();
}  // так я добавляю фигурки сюда :)



  ctx.fill();
  ctx.closePath();
};

const ArtGenerator = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const canvasRef = useRef(null);

  const generateAbstractArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    setBackgroundColor(randomColor());
    ctx.clearRect(0, 0, width, height);
    const shapeCount = Math.floor(Math.random() * 20) + 5;

    for (let i = 0; i < shapeCount; i++) {
      generateRandomShape(ctx, width, height);
    }
  };

  const saveAsImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'abstract-art.png';
    link.click();
  };

  return (
    <div>
      <div id='arts'>
      <button id='create smpl' onClick={generateAbstractArt}>Создать</button>
      <button id='save smpl' onClick={saveAsImage}>Сохранить как изображение</button>
      </div>
      <ArtContainer
        ref={canvasRef}
        id="art-canvas"
        width={640}
        height={480}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default ArtGenerator;