import { useEffect } from 'react';

const imagesToPreload = [
  '/assets/volleyball-players-1.jpg',
  '/assets/volleyball-players-2.jpg',
  '/assets/logo-group.png',
  '/assets/logo-vector.png',
  '/assets/eye-icon.png',
];

export default function ImagePreloader() {
  useEffect(() => {
    imagesToPreload.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }, []);

  return null;
}



