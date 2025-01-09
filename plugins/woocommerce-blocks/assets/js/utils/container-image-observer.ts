interface ImageSize {
	width: number;
	url: string;
}

interface ObserverOptions {
	onSizeChange?: ( element: Element, newSize: ImageSize ) => void;
}

export class ContainerImageObserver {
	private elements: Map< Element, ImageSize[] >;
	private lastSizes: Map< Element, ImageSize >;
	private options: Map< Element, ObserverOptions >;
	private resizeObserver: ResizeObserver;

	constructor() {
		this.elements = new Map();
		this.lastSizes = new Map();
		this.options = new Map();
		this.resizeObserver = new ResizeObserver( ( entries ) => {
			entries.forEach( ( entry ) => {
				this.handleResize( entry.target );
			} );
		} );
	}

	/**
	 * Parse srcset string into ImageSize array
	 */
	private parseSrcset( srcset: string ): ImageSize[] {
		return srcset
			.split( ',' )
			.map( ( src ) => {
				const [ url, width ] = src.trim().split( ' ' );
				return {
					url: url.trim(),
					width: parseInt( width.replace( 'w', '' ), 10 ),
				};
			} )
			.sort( ( a, b ) => a.width - b.width ); // Sort by width ascending
	}

	/**
	 * Get sizes from element data attributes
	 */
	private getSizesFromElement( element: Element ): ImageSize[] {
		const srcset = element.getAttribute(
			'data-wc-container-observer-srcset'
		);
		if ( ! srcset ) {
			return [];
		}
		return this.parseSrcset( srcset );
	}

	/**
	 * Find the most appropriate image size for a given container width
	 */
	private findAppropriateSize(
		containerWidth: number,
		sizes: ImageSize[]
	): ImageSize {
		// Find the first image size that's larger than the container
		for ( const size of sizes ) {
			if ( size.width >= containerWidth ) {
				return size;
			}
		}
		// If no size is big enough, use the largest available
		return sizes[ sizes.length - 1 ];
	}

	/**
	 * Handle resize events for an element
	 */
	private handleResize( element: Element ): void {
		const containerWidth =
			element.parentElement?.clientWidth ?? element.clientWidth;
		const sizes = this.getSizesFromElement( element );

		if ( sizes.length === 0 ) {
			return;
		}

		const lastSize = this.lastSizes.get( element );
		const newSize = this.findAppropriateSize( containerWidth, sizes );

		// Only update if the size has changed
		if ( ! lastSize || lastSize.width !== newSize.width ) {
			this.lastSizes.set( element, newSize );

			// Call the callback if provided (for Interactivity API)
			const options = this.options.get( element );
			if ( options?.onSizeChange ) {
				options.onSizeChange( element, newSize );
			} else if ( element instanceof HTMLImageElement ) {
				// Default behavior for global script usage
				element.src = newSize.url;
			}
		}
	}

	/**
	 * Start observing an element
	 */
	public observe( element: Element, options: ObserverOptions = {} ): void {
		if ( ! element.hasAttribute( 'data-wc-container-observer-srcset' ) ) {
			return;
		}

		// Store options for this element
		this.options.set( element, options );

		this.resizeObserver.observe( element );
		// Initial size check
		this.handleResize( element );
	}

	/**
	 * Stop observing an element
	 */
	public unobserve( element: Element ): void {
		this.resizeObserver.unobserve( element );
		this.elements.delete( element );
		this.lastSizes.delete( element );
		this.options.delete( element );
	}

	/**
	 * Disconnect the observer and clear all observations
	 */
	public disconnect(): void {
		this.resizeObserver.disconnect();
		this.elements.clear();
		this.lastSizes.clear();
		this.options.clear();
	}
}
