import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Cache files specified in the precache manifest
precacheAndRoute(self.__WB_MANIFEST);

// Cache images
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images-cache",
  })
);

// Cache API responses
registerRoute(
  ({ url }) => url.origin === "https://api.pexels.com",
  new StaleWhileRevalidate({
    cacheName: "api-cache",
  })
);
