import { createApp } from "vue";
import App from "./App.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import LayoutHeader from "./views/components/layouts/LayoutHeader.vue"
import LayoutFooter from "./views/components/layouts/LayoutFooter.vue"
import routers from "./router/index.js"; // router import
import 'aos/dist/aos.css';  // AOS 스타일 파일 불러오기
import AOS from 'aos';       // AOS 라이브러리 불러오기
import Lenis from '@studio-freight/lenis'

// AOS 초기화
AOS.init({
  duration: 1000,  // 애니메이션 지속 시간
  once: false,      // 한 번만 애니메이션 적용
});

// 위 createApp 코드 아래처럼 변경
const app = createApp(App);
app.use(routers); // router 추가
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component('LayoutHeader', LayoutHeader); // 글로벌 헤더 컴포넌트 추가
app.component('LayoutFooter', LayoutFooter); // 글로벌 헤더 컴포넌트 추가
app.mount("#app");

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

