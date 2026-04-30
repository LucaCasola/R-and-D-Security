// src/app/manifest.ts

// PWA manifest configuration for Next.js
// Next.js automatically generates /manifest.webmanifest from this file

import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'R & D Security',
    short_name: 'R & D',
    description: 'Professional Security Services for Your Business',
    start_url: '/',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
  }
}