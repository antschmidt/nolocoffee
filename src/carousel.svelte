<script>
	import {fade} from 'svelte/transition'
	import images from './images.json'
    const photos = images.result.images.map(image => image.variants[0])
	const carouselPhotos = photos
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style>
	img, button {
        max-height: 50vh;
	}
</style>

{#each [carouselPhotos[index]] as src (index)}
	<img transition:fade {src} alt="" />	
{/each}

<button on:click={next}>Next!</button>
