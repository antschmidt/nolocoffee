<script>
	import Open from '../images/open-sign-svgrepo-com.svelte';
	import Closed from '../images/closed-svgrepo-com.svelte';
	let isOpen = async () => {
		const response = await fetch('https://nolo.coffee/open');
		const open = await response.text();
		return open;
	};
    import Carousel from '../carousel.svelte'
</script>

<div id="main">
	<h1>Tony's Coffee</h1>
    <h3>in Nolo Flats</h3>
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
    <Carousel />
</div>

<style>
	#main {
		display: flex;
        flex-direction: column;
        align-items: center;
        /* width: 100vw; */
        grid-template-columns: 1fr;

	}
	.open {
		width: 70px;
        height: 70px;
	}
    
    h3 {
        height: 1em;
    }
</style>
