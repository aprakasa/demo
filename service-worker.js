/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1b3e19140c5bde59ec883cf649cc99bd"
  },
  {
    "url": "assets/css/2.styles.809f3b7a.css",
    "revision": "748f831b72fbc073871cf831cef332d2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.4c51e6cf.js",
    "revision": "7d0d5ed1a81af548e8c4c07cca782061"
  },
  {
    "url": "assets/js/1.a7adb42c.js",
    "revision": "d6cb52e5991c734e587c8d4d28869ce6"
  },
  {
    "url": "assets/js/app.59117def.js",
    "revision": "8e5e9dcebe35b05b3d9db691b1d78bbf"
  },
  {
    "url": "index.html",
    "revision": "85bd064266cd4568b99a65ce17d109df"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "setup/index.html",
    "revision": "7a68558b99fb9b92ab0b49c36f06fd5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
