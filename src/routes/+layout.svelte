<svelte:head>
	<meta charset="UTF-8">
</svelte:head>

<div class="container">
	<slot />
</div>

<style>
	.container {
		background: transparent;
		display: contents;
	}
</style>
