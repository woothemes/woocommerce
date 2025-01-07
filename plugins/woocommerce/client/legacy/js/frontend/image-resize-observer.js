// Initialize ResizeObserver to watch gallery containers
const galleryObserver = new ResizeObserver(entries => {
	entries.forEach(entry => {
		const container = entry.target;
		const img = container.querySelector('img[data-product-image="container-responsive"]');
		
		if (!img) {
			return;
		}

		const containerWidth = entry.contentRect.width;
		const srcset = img.dataset.srcset;
		
		if (!srcset) {
			// Fallback to original image if no srcset available
			const originalSrc = img.getAttribute('data-original-image-src');
			if (originalSrc && img.src !== originalSrc) {
				img.src = originalSrc;
			}
			return;
		}

		try {
			// Parse srcset into array of objects
			const sources = srcset.split(',').map(src => {
				const [url, width] = src.trim().split(' ');
				return {
					url,
					width: parseInt(width.replace('w', ''))
				};
			});

			// Sort sources by width to ensure we get the next size up if exact match not found
			sources.sort((a, b) => a.width - b.width);

			// Find the most appropriate image size
			const appropriateSource = sources.find(source => source.width >= containerWidth) || sources[sources.length - 1];

			// Update the image source if it's different
			if (img.src !== appropriateSource.url) {
				img.src = appropriateSource.url;
			}
		} catch (error) {
			// Fallback to original image if there's any error processing srcset
			const originalSrc = img.getAttribute('data-original-image-src');
			if (originalSrc && img.src !== originalSrc) {
				img.src = originalSrc;
			}
		}
	});
});

// Find and observe all product gallery containers
function initializeGalleryObserver() {
	const galleryContainers = document.querySelectorAll('.woocommerce-product-gallery__image');

	if (!window.ResizeObserver) {
		// Fallback for browsers without ResizeObserver support
		galleryContainers.forEach(container => {
			const img = container.querySelector('img[data-product-image="container-responsive"]');
			if (img) {
				const originalSrc = img.getAttribute('data-original-image-src');
				if (originalSrc) {
					img.src = originalSrc;
				}
			}
		});
		return;
	}

	galleryContainers.forEach(container => galleryObserver.observe(container));
}

(function() {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeGalleryObserver);
	} else {
		initializeGalleryObserver();
	}

	window.addEventListener('unload', () => {
		galleryObserver.disconnect();
	});
})();