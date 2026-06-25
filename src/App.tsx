import CircularGallery from './components/CircularGallery';
import { useEffect, useState } from 'react';

const customImages = [
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-34-25-033.jpg', text: 'Image 1' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-47-38-445.jpg', text: 'Image 2' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-44-30-046.jpg', text: 'Image 3' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-21-00-573.jpg', text: 'Image 4' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-30-09-096.jpg', text: 'Image 5' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-28-09-701.jpg', text: 'Image 6' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-28-55-272.jpg', text: 'Image 7' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-12-17-867.jpg', text: 'Image 8' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-17-25-287.jpg', text: 'Image 9' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-36-35-803.jpg', text: 'Image 10' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-15-06-073.jpg', text: 'Image 11' },
  { image: 'https://ik.imagekit.io/uleuotkkw/Picsart_26-06-25_16-21-45-998.jpg', text: 'Image 12' }
];

export default function App() {
  const [orientation, setOrientation] = useState<string>('landscape');

  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerHeight > window.innerWidth) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);

    // Try to lock orientation on mobile if supported
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {
        console.log('Screen orientation lock not supported or permission denied');
      });
    }

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  if (orientation === 'portrait' && window.innerWidth <= 768) {
    return (
      <div style={{
        width: '130vw',
        height: '130vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{ color: '#fff', fontSize: '24px', textAlign: 'center', padding: '20px' }}>
          Please rotate your device 
        </div>
        <div style={{ color: '#888', fontSize: '16px', textAlign: 'center' }}>🔄</div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '20px' }}>
      <div style={{ width: '100%', height: '90vh', maxWidth: '1200px', maxHeight: '600px', position: 'relative', background: '#000' }} className="gallery-container">
        <CircularGallery
          items={customImages}                       // Your custom images
          // === Display & Layout ===
          bend={3}                                    // Curve of the gallery (0 = straight, higher = more curved)
          borderRadius={0.05}                        // Border radius of images (0-1)
          
          // === Text ===
          textColor="#ffffff"                        // Text color (currently disabled)
          font="bold clamp(18px, 6vw, 36px) Inter"  // Font styling
          fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          
          // === Scrolling ===
          scrollSpeed={2}                            // How fast to scroll (higher = faster)
          scrollEase={0.03}                          // Smoothness of scroll (0-1, lower = smoother)
          
          // === Image Dimensions (3:4 Aspect Ratio - Perfectly fits 600px frame height) ===
          imageWidth={450}                           // Perfectly fits frame width (3 parts)
          imageHeight={600}                          // Perfectly fits frame height (4 parts)
          imagePadding={2}                           // Space between images
          zoom={2}                                   // Overall zoom level (2 = 2x bigger)
          
          // === Camera ===
          cameraZ={40}                               // Camera distance (closer = more zoomed in)
          cameraFOV={35}                             // Field of view (lower = narrower view)
        />
      </div>
    </div>
  );
}
