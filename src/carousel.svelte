<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
    import "swiper/css/effect-cube";


	import './carousel.css';

	// import './style.css';

	// import Swiper core and required modules
	import SwiperCore, { EffectCube, Keyboard, Navigation } from 'swiper';

	// install Swiper modules
	SwiperCore.use([EffectCube, Keyboard, Navigation]);

	import images from './images.json';
	const photos = images.result.images.map((image) => image.variants[0]);
</script>

<Swiper
effect="{'cube'}" grabCursor="{true}" cubeEffect='{{
    "shadow": true,
    "slideShadows": true,
    "shadowOffset": 20,
    "shadowScale": 0.94
  }}' pagination="{true}" class="mySwiper"
keyboard={{
    enabled: true
}}  >
	{#each photos as photo, index}
		<SwiperSlide>
			<img src={photo} alt={`latte art ${index}`} />
		</SwiperSlide>
	{/each}
</Swiper>
<style>
</style>
