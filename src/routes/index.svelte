<script>
	import Open from '../images/open-sign-svgrepo-com.svelte';
	import Closed from '../images/closed-svgrepo-com.svelte';
	let isOpen = async () => {
		const response = await fetch('https://nolo.coffee/open');
		const open = await response.text();
		return open;
	};
</script>

<div id="main">
	<h1>Nolo Coffee - 503</h1>
	<p class="open">
		{#await isOpen()}
			loading
		{:then open}
			{#if open === 'true'}
				<Open />
			{:else}
				<Closed />
			{/if}
		{:catch}
			<Closed />
		{/await}
	</p>
	<a
		data-flickr-embed="true"
		href="https://www.flickr.com/photos/wanderingwondering/albums/72177720296195392"
		title="latte art"
		><img
			src="https://live.staticflickr.com/65535/51832976279_3d82049c47.jpg"
			width="640"
			height="480"
			alt="latte art"
		/></a
	><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</div>

<style>
	#main {
		display: flex;
        width: 100vw;
        flex-direction: column;
        align-items: center;
	}
	.open {
		max-width: 20vw;
	}
</style>
