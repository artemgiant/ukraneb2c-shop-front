<template>
  <swiper
      :spaceBetween="30"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 1</swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 2
    </swiper-slide >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 3</swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 4
    </swiper-slide
    >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 5</swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 6
    </swiper-slide
    >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 7</swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 8
    </swiper-slide
    >
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg"> 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>
