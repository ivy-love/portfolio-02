<template>
  <div class="portfolio-footer">
    <div class="ft-center">
      <div class="ft-link-grp">
        <a
          href="#"
          class="ft-link"
          v-for="(sectionId, name) in footerList"
          :key="name"
          @click="footerGoMenu(sectionId)"
        >{{ name }}</a>
      </div>
      <p class="copylight"> Copyright ⓒ Kim Jihee All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      // footerList: ['HOME', 'ABOUT', 'WORK', 'CONTACT'],
      footerList: {
        HOME: 'intro-section',
        ABOUT: 'about-section',
        WORK: 'works-section',
        CONTACT: 'contact-section',
      },
    }
  },
  mounted() {
    // this.footerGoMenu();
  },
  methods: {
    footerGoMenu(sectionId) {
      // 클릭된 섹션 ID에 해당하는 요소를 찾아서 부드럽게 스크롤
      const targetSection = document.querySelector(`#${sectionId}`);

      console.log(targetSection);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  }
};
</script>

