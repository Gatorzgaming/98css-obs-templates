<link rel="stylesheet" href="https://jdan.github.io/98.css/98.css" />

<div class="window full-viewport">
	<div class="title-bar">
		<div class="title-bar-text">HALF-LIFE 2 - Direct3D 9</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize"></button>
			<button aria-label="Maximize"></button>
			<button aria-label="Close"></button>
		</div>
	</div>
	<div class="window-body">
		<img
			src="https://cdn.glitch.global/c23bed96-f244-4f17-9554-833bb6fa41b8/Untitled.png?v=1736024449377"
			alt="capture output"
			class="fill-image"
		/>
		<p class="fallback-text">
			If you can read this something is broken
			<b> </b>
		</p>
	</div>
</div>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		/* remove page scrollbars */
		overflow: hidden;
		background: #008080; /* a fallback background so the window contrast is visible */
	}

	/* Make 98.css window take the full viewport and never cause scrollbars */
	.full-viewport {
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Make the window body fill remaining space and center content */
	.window-body {
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		overflow: hidden; /* prevent internal scrollbars */
	}

	/* Image fills the window-body and is allowed to stretch */
	.fill-image {
		width: 100%;
		height: 100%;
		/* allow stretching to fill both dimensions */
		object-fit: fill;
		display: block;
		/* remove any max constraints that could cause scrollbars */
		max-width: none;
		max-height: none;
	}

	/* Fallback text: hide visually when image is present, but keep for accessibility */
	.fallback-text {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		white-space: nowrap;
	}
</style>
