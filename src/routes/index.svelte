<script>
	import Open from '../images/open-sign-svgrepo-com.svelte';
	import Closed from '../images/closed-svgrepo-com.svelte';
	let isOpen = async () => {
		const response = await fetch('https://nolo.coffee/open');
		const open = await response.text();
		return open;
	};
    import Carousel from '../carousel.svelte'
    import About from '../about.svelte'
    let showAbout = 0
    const toggleAbout = (about) => {
        if(about === 0) return 1
        return 0
    }
    import Info from '../images/info.svelte';
</script>

<div id="main">
	<button class="header-button" on:click={() => showAbout = toggleAbout(showAbout)}><h1>Tony's Coffee</h1></button>
    <h3>in Nolo Flats</h3>
    <i class='apt'>503</i>
    <p class='note'>Hey neighbors, my weekends have been booked making my regular hours of 10-1 on Saturday and Sunday difficult to keep.<br>
        If you ever just want to swing by for a coffee, even if it doesn't say open here, <br>
        just hit me up on Instagram @antschmidt or e-mail me at <a href='mailto:barista@nolo.coffee'>barista@nolo.coffee</email></p>
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
    {#if showAbout === 0}
    <Carousel />
    {:else}
    <About />
    {/if}
</div>

<style>
	#main {
		display: flex;
        flex-direction: column;
        align-items: center;
	}
	.open {
		width: 70px;
        height: 70px;
	}

    .header-button {
        text-decoration: none;
        border: 0px;
        background: transparent;
        height: 2em;
    }
    .header-button h1 {
        position: sticky;
    }

    .note {
        border: 1px solid;
        padding: 10px;
        text-align: center;
    }

    h1 {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    h3 {
        height: 1em;
        margin-bottom: 0;
    }
    .apt {
        font-size: .75em;
        position: unset;
        /* border: 1px black; */
        /* transform-origin: 0 0; */
        /* transform: rotate(-45deg); */
    }
</style>
