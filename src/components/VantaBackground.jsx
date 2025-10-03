import { useEffect, useRef } from 'react';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Initialize Vanta Fog effect when component mounts
    if (!vantaEffect.current && window.VANTA) {
      vantaEffect.current = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x212424,
        midtoneColor: 0x232626,
        lowlightColor: 0x14c9f2,
        baseColor: 0x1080f,
        blurFactor: 0.6,
        speed: 1.0,
        zoom: 1.0
      });
    }

    // Cleanup function to destroy Vanta effect
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={{ width: '100%', minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default VantaBackground;
