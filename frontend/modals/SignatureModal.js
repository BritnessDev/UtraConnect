import React, { useRef } from 'react';

function SignatureModal() {
  const canvasRef = useRef(null);

  function handleMouseDown(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
  }

  function handleMouseUp(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    canvas.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleClear() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function handleSave() {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    debugger
    // do something with the image data, e.g. send it to the server
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        style={{ border: '1px solid black' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default SignatureModal;