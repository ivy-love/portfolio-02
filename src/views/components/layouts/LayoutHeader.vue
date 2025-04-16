<template>
  <div class="portfolio-header" :class="{ 'is-color': isActive }">
    <div class="hd-center">
      <div class="hd-wrap">
        <h1 class="logo"><a @click="$router.push({ name: 'Index' })">Kim <br>Jihee</a></h1>
        <nav class="gnb-nav tab-hide">
          <ul class="gnb-menu">
            <li class="gnb-list" v-for="item in gnbList" :key="item">
              <a href="javascript:void(0)" class="gnb-link" @click="goMenu(item)">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <button type="button" class="btn hd-btn tab-show" :class="{ 'is-active':isToggle }" @click="toggleMoBtn">
          <span class="hd-line"></span>
          <span class="hd-line"></span>
          <span class="hd-line"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      isToggle: false,
      isActive: false,
      gnbList: ['about', 'works', 'contact'],
    }
  },
  mounted () {
    this.toggleMoBtn();
    this.worksAni();
    this.txtScroll();
    this.goMenu();
    this.handleScroll();
  },
  methods: {
    toggleMoBtn() {
      this.isActive = !this.isActive;
    },
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

        if (sectionRect.top <= 0) {
          header.classList.add('is-color');
        } else {
          header.classList.remove('is-color');
        }
      });
    },

    // 위로 가기 버튼
    goMenu(section) {
      const targetSection = document.querySelector(`#${section}-section`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },

    // 스크롤 시 헤더 숨기기
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

