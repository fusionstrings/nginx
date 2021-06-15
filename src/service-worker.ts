/// <reference path="./service-worker.d.ts" />

window?.addEventListener('load', async function () {
	window?.navigator?.serviceWorker?.register('/service-worker.js').then(registration => {
		console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(error => {
		console.error('ServiceWorker registration failed: ', error);
	})
});