<template>
  <div class="portfolio-header" :class="{ 'is-color': isActive }">
    <div class="hd-center">
      <div class="hd-wrap">
        <h1 class="logo"><a href="#">Kim <br>Jihee</a></h1>
        <nav class="gnb-nav">
          <ul class="gnb-menu">
            <li class="gnb-list" v-for="item in gnbList" :key="item">
              <a href="javascript:void(0)" class="gnb-link" @click="goMenu(item)">{{ item }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      isActive: false,
      gnbList: ['about', 'works', 'contact'],
    }
  },
  mounted () {
    this.worksAni();
    this.txtScroll();
    this.goMenu();
    this.handleScroll();
  },
  methods: {
    // works-section 애니메이션
    // 나중에 좀 더 보기
    worksAni() {
      let worksSection = document.querySelector('.works-section');
      window.addEventListener('scroll', function() {
        let sectionRect = worksSection.getBoundingClientRect();
        if (sectionRect.top * 0.5 <= window.innerHeight && sectionRect.bottom >= 0) {
          worksSection.classList.add('is-active');
        } else {
          worksSection.classList.remove('is-active');
        }
      });
    },
    // gnb메뉴 text-section 지났을 때 클래스 추가
    txtScroll() {
      let header = document.querySelector('.portfolio-header');
      let textSection = document.querySelector('.text-section');

      window.addEventListener('scroll', function() {
        let sectionRect = textSection.getBoundingClientRect();

        if (sectionRect.top - 42 <= 0 && sectionRect.bottom >= 0) {
          header.classList.add('is-color');
        } else {
          header.classList.remove('is-color');
        }
      });
    },
    goMenu(section) {
      const targetSection = document.querySelector(`#${section}-section`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll () {
      let lastScrollY = 0;

      window.addEventListener("scroll", function () {
          let header = document.querySelector(".portfolio-header");
          let currentScrollY = window.scrollY;

          if (currentScrollY === 0 || currentScrollY < lastScrollY || currentScrollY < 84) {
              header.classList.remove("is-scroll");
          } else if (currentScrollY > lastScrollY) {
              header.classList.add("is-scroll");
          }

          lastScrollY = currentScrollY;
      });
    },
  },
};
</script>

