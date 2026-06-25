interface CircularGalleryProps {
  items?: Array<{ image: string; text: string }>;
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

declare const CircularGallery: React.FC<CircularGalleryProps>;
export default CircularGallery;
