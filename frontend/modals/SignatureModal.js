import React, { useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

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
  
  function handleTouchStart(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
  }
  
  function handleTouchMove(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(event.touches[0].clientX - canvas.offsetLeft, event.touches[0].clientY - canvas.offsetTop);
    ctx.stroke();
  }
  
  function handleTouchEnd(event) {
    event.preventDefault();
    const canvas = canvasRef.current;
    canvas.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
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
    <Row className='mt-4 align-items-end'>
      <Col>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border border-secondary"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
        <div className='mt-3'>
          <Button variant="white" onClick={handleClear}>Clear</Button>
          <Button variant="white" onClick={handleSave} className="ms-3">Save</Button>
        </div>
      </Col>
    </Row>
  );
}

export default SignatureModal;