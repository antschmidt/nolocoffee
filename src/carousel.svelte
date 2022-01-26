<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	import './carousel.css';

	// import './style.css';

	// import Swiper core and required modules
	import SwiperCore, { Keyboard, Navigation } from 'swiper';

	// install Swiper modules
	SwiperCore.use([Keyboard, Navigation]);

	import images from './images.json';
	const photos = images.result.images.map((image) => image.variants[0]);
</script>

<Swiper
	slidesPerView={1}
	spaceBetween={30}
	keyboard={{
		enabled: true
	}}
	navigation={true}
	class="mySwiper"
>
	{#each photos as photo, index}
		<SwiperSlide>
			<img src={photo} alt={`latte art ${index}`} />
		</SwiperSlide>
	{/each}
</Swiper>
<style>
</style>
