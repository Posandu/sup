<script lang="ts">
	function generate() {
		fetch("https://openrouter.ai/api/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: "Bearer <OPENROUTER_API_KEY>",
				"HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
				"X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "openai/gpt-3.5-turbo",
				messages: [
					{
						role: "user",
						content: "What is the meaning of life?",
					},
				],
			}),
		});
	}
</script>

<div class="main">
	<div class="sideBar">
		{#each new Array(55) as _, i}
			<a class="chatListItem" href="#i">
				<span>This is chat {i}</span>

				<!-- svelte-ignore a11y_consider_explicit_label -->
				<button class="chatListMoreBtn">
					<svg
						fill="#fff"
						height="14px"
						width="14px"
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 32.055 32.055"
						xml:space="preserve"
					>
						<g>
							<path
								d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
							C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
							s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
							c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
							/>
						</g>
					</svg>
				</button>
			</a>
		{/each}
	</div>

	<div class="content">
		<h1>OpenRouter AI</h1>
		<p>
			OpenRouter AI is a platform that allows you to generate text using the
			GPT-3.5 model from OpenAI.
		</p>
		<button on:click={generate}>Generate</button>
	</div>
</div>

<style>
	.main {
		min-height: 100vh;
		display: flex;
	}

	.sideBar {
		max-width: 250px;
		display: flex;
		flex-direction: column;
		flex: 1;
		max-height: 100vh;
		overflow: auto;
		background: #181c21;
		padding: 8px;
	}

	.chatListItem {
		text-decoration: none;
		padding: 12px 14px;
		color: #d4d4d4;
		display: flex;
		justify-content: space-between;
		border-radius: 8px;
	}

	.chatListItem:hover {
		background: #23282e;
	}
</style>
