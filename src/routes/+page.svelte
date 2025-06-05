<script lang="ts">
    const { data } = $props()
    const { username, userID, fresh } = data
	const links: string[] = Object.keys(import.meta.glob('./*/+page.svelte')).map(
		(path) => path.split('/')[1]
	);
</script>

<div style="display: flex; flex-direction: column;">
	<h1>{username}'s Stream Overlays</h1>

    {#if !userID}
        <p>You are not logged in</p>
        <button onclick={() => {
            window.location.href = "/api/twitch/login"
        }}>Login</button>
    {:else if fresh}
	<h1>You have been logged in! Your Overlays will automatically refresh</h1>
    {/if}

	<h2>Links</h2>
	<div style="display: flex; flex-direction: column; gap: 10px;">
		{#each links as link}
			<a href={link}>{link}</a>
		{/each}
	</div>
</div>
