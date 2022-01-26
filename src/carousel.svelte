<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

    import './carousel.css'

	// import './style.css';

	// import Swiper core and required modules
	import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper';

	// install Swiper modules
	SwiperCore.use([Keyboard, Pagination, Navigation]);

	import images from './images.json';
	const photos = images.result.images.map((image) => image.variants[0]);
</script>

<Swiper
	slidesPerView={1}
	spaceBetween={30}
	keyboard={{
		enabled: true
	}}
	pagination={{
		clickable: true
	}}
	navigation={true}
	class="mySwiper"
>
	{#each photos as photo, index}<SwiperSlide
			><img src={photo} alt={`latte art ${index}`} /></SwiperSlide
		>{/each}
</Swiper>

<style>

</style>
<!-- <script>
	import {fade} from 'svelte/transition'

	const carouselPhotos = photos
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
    const prev = () => {
        index = (index + 1) % carouselPhotos.length
    }
</script>

<style>
	img, button {
        position: sticky;
        max-height: 80%;
        max-width: 80%;

	}
</style>
<div>
<button on:click={prev}>{`<`}</button>
{#each [carouselPhotos[index]] as src (index)}
	<img transition:fade {src} alt="" />	
{/each}

<button on:click={next}>></button>
</div> -->
