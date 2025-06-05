<script lang="ts">
	let text = $state(` •  Absolutely no racism, homophobia, transphobia, etc ♡
 •  No major traumadumping ♡
 •  No backseating unless I ask for help ♡
 •  No spamming ♡
 •  No fancy texts (𝔢𝔵𝔞𝔪𝔭𝔩𝔢, 𝓮𝔁𝓪𝓶𝓹𝓵𝓮) ♡
 •  I am not, and cannot be, your therapist. ♡
 •  Follow Twitch TOS at all times ♡
 •  And last but not least, have fun and be silly ♡`)
</script>

<link rel="stylesheet" href="https://jdan.github.io/98.css/98.css" />
<div class="window" style="width: 320px">
	<div class="title-bar">
		<div class="title-bar-text">
			<img style="display: center" width="14" height="14" src="/img/notepad.png" />
			<font size="2"> Notepad - Channel_Rules.txt </font>
		</div>
		<div class="title-bar-controls">
			<button aria-label="Minimize"></button>
			<button aria-label="Maximize"></button>
			<button aria-label="Close"></button>
		</div>
	</div>
	<div class="field-row-stacked" style="font-family:Times New Roman;width  320px;font-size: 16em">
		<textarea id="text20" rows="20" bind:value={text}></textarea>
	</div>
</div>
