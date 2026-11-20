// 旧的 2D 版留下的离线缓存：清掉所有缓存、注销自己、刷新页面。Unity 版自己用浏览器缓存，不用这个。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
