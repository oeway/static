importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true})
workboxSW.precache([
  {
    "url": "favicon-32x32.png",
    "revision": "7b1da026f1c9dc9d8caadbe4bdb7b2a8"
  },
  {
    "url": "index.html",
    "revision": "5de1ef0fb1ad69499470ffe1d6e2cf76"
  },
  {
    "url": "itkVtkViewer.js",
    "revision": "43e09bbfa6a13d79a1488ea9c2857e40"
  },
  {
    "url": "itkVtkViewerCDN.js",
    "revision": "0a6e45a8a29e01dd8ae17443a45263e2"
  },
  {
    "url": "test.html",
    "revision": "7ae13ed21ff30dda487760df4b24897c"
  }
])

workboxSW.router.registerRoute(
  /\.js|\.png|\.wasm$/,
  workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'staleWhileRevalidateContent',
  cacheExpiration: {
    maxEntries: 50,
    maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    }
  })
);
