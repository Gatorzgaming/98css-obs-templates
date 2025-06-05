<script lang="ts">
	import { onMount } from 'svelte';

	let followerCount = $state(0);
	let goal = $state(50);

	let isLoading = $state(true);
	let error = $state<string | null>(null);

	const progressBarWidth = $derived(Math.min((followerCount / goal) * 100, 100));

	async function updateFollowerCount() {
		const response = await fetch('/api/twitch/followers');
		if (response.ok) {
			const data = await response.json();
			followerCount = data.total;
		} else {
			let shouldReload = false;
			switch (response.status) {
				case 401:
					error = 'Please Login to Twitch';
					shouldReload = true;
					break;
				case 503:
					error = 'The server is loading...';
					shouldReload = true;
					break;
				default:
					error = 'Failed to fetch follower count';
					break;
			}
			if (shouldReload) {
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}
		}
		isLoading = false;
	}

	onMount(async () => {
		const url = new URL(window.location.href);
		const goalParam = url.searchParams.get('goal');
		if (goalParam) {
			goal = parseInt(goalParam);
		}

		updateFollowerCount();
		setInterval(updateFollowerCount, 5000);
	});
</script>

<link rel="stylesheet" href="https://jdan.github.io/98.css/98.css" />
{#if isLoading}
	<p>Loading...</p>
{:else if error}
	<p>{error}</p>
{:else}
	<div class="window" style="width: 163px">
		<div class="title-bar">
			<div class="title-bar-text">Follower Goal {followerCount} / {goal}</div>
			<div class="title-bar-controls">
				<button aria-label="Close"></button>
			</div>
		</div>
		<div class="window-body">
			<p>
				<b> </b>
			</p>

			<div class="progress-indicator">
				<span class="progress-indicator-bar" style="width: {progressBarWidth}%"></span>
			</div>
		</div>
	</div>
{/if}
