<template>
  <div class="page">
    <!-- cursor-small-dot : STRART -->
    <div id="cursor-small-dot" class="cursor-small-dot tab-hide"></div>
    <!-- cursor-small-dot : END -->
    <!-- LayoutHeader START -->
    <LayoutHeader />
    <!-- LayoutHeader : END -->
    <!-- btn-top : START -->
    <button class="btn-top" type="button">
      <i class="icon icon-arrow-top"></i>
    </button>
    <!-- btn-top : END -->
    <!-- loader : START -->
    <div class="loader"></div>
    <!-- loader : END -->
    <!-- intro-section : START -->
    <section id="intro-section" class="intro-section">
      <h2 class="voice-only">인트로 영역</h2>
      <div class="intro-wrapper">
        <div class="bg-img-grp">
          <video
          muted
          autoplay
          loop
          playsinline
          disablePictureInPicture
          controlsList="nodownload"
          class="img"
        >
          <source
            src="../assets/video/video_intro_bg.mp4"
            type="video/mp4"
          >
        </video>
        </div>
        <div class="obj-img-grp">
          <img src="@/assets/images/img_intro_obj.png" alt="" class="img ani-blur" loading="lazy">
        </div>
        <div class="intro-title-grp">
          <h1 class="intro-title" data-aos="fade-up" data-aos-duration="550" data-aos-delay="500">Kim Ji Hee</h1>
          <h1 class="intro-title right" data-aos="fade-up" data-aos-duration="550" data-aos-delay="700">Web Pusblisher</h1>
        </div>
        <div class="scroll-grp">
          <div class="scroll"></div>
          <p class="scroll-txt">Scroll Down</p>
        </div>
      </div>
    </section>
    <!-- intro-section : END -->
    <div class="contents-wrap">
      <!-- about-section : START -->
      <section id="about-section" class="about-section">
        <h2 class="voice-only">
          어바웃 영역
        </h2>
        <div class="about-wrapper">
          <div class="about-title-grp">
            <div class="rolling-title-grp">
              <span v-for="(title, idx) in titles" :key="idx" :class="{ 'is-active': activeIndex === idx, 'is-exiting': exitingIndex === idx }" class="rolling-title">
                {{ title }}
              </span>
            </div>
            <span class="title">Publisher</span>
            <button type="button" class="btn btn-about" onclick="window.open('https://aluminum-okra-bac.notion.site/1d77439c15b880259455d94a91f03020?pvs=4')">Go to Resume</button>
          </div>
          <div class="about-grp">
            <div class="skill-img-wrap">
              <div class="img-grp" v-for="(item, idx) in 18" :key="idx">
                <img :src="require(`@/assets/images/img_skill_icon_${idx + 1}.webp`)" alt="스킬 아이콘" class="img" loading="lazy">
              </div>
            </div>
            <div class="txt-grp">
              <span class="txt">
                웹 디자이너로 IT 업계에 첫 발을 내딛고, 코딩을 통해 브라우저에 결과물을 구현하는 과정에서 흥미를 느껴 웹 퍼블리셔의 길을 걷게 되었습니다. 저는 단순히 디자인을 화면에 옮기는 것에 그치지 않고, 사용자 관점에서 고민하며 더 나은 방향을 제시하는 협업을 추구합니다. 특히, 웹 표준을 준수하며 컴포넌트 단위로 최적화된 마크업을 구현하는 데 집중하고 있으며, 이를 통해 더 나은 결과물을 만들어내기 위해 꾸준히 성장하고자 노력합니다.
              </span>
            </div>
            <div class="about-item-grp">
              <h4 class="about-title">Work Experience</h4>
              <OrgItem v-for="(item, idx) in careerItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
            </div>
            <div class="about-item-grp">
              <h4 class="about-title">Education</h4>
              <OrgItem v-for="(item, idx) in eduItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
            </div>
            <div class="about-item-grp">
              <h4 class="about-title">License</h4>
              <OrgItem v-for="(item, idx) in licItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
            </div>
          </div>
        </div>
      </section>
      <!-- about-section : END -->
      <!-- visual-section : START -->
      <section class="visual-section">
        <h2 class="voice-only">비주얼 영역</h2>
        <div class="visual-inner">
          <div class="visual-wrap tab-hide">
            <div class="visual-grp-row">
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">F</span>
                  <span class="txt">U</span>
                  <span class="txt">E</span>
                  <span class="txt">L</span>
                  <span class="txt">E</span>
                  <span class="txt">D</span>
                </span>
              </div>
              <div class="visual-line-grp">
                <div class="visual-line"></div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon">
                  <img src="@/assets/images/img_sixstar.webp" alt="별모양 이미지" class="img ani-spin02" loading="lazy">
                </div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon">
                  <img src="@/assets/images/img_sixstar.webp" alt="별모양 이미지" class="img ani-spin03" loading="lazy">
                </div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">B</span>
                  <span class="txt blank">Y</span>
                  <span class="txt">P</span>
                  <span class="txt">A</span>
                  <span class="txt">S</span>
                  <span class="txt">S</span>
                  <span class="txt">I</span>
                  <span class="txt">O</span>
                  <span class="txt">N</span>
                </span>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-arrow-grp">
                <div class="visual-arrow">
                  <img src="@/assets/images/img_arrow.webp" alt="별모양 이미지" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">{</span>
                  &nbsp;
                  <span class="txt">F</span>
                  <span class="txt">O</span>
                  <span class="txt">C</span>
                  <span class="txt">U</span>
                  <span class="txt">S</span>
                  <span class="txt">E</span>
                  <span class="txt">D</span>
                </span>
              </div>
              <div class="visual-video">
                <div class="visual-video-inner">
                  <img src="@/assets/images/img_fire.gif" alt="화염 이미지" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon type-01">
                  <img src="@/assets/images/img_dia.webp" alt="다이아 아이콘" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon type-01">
                  <img src="@/assets/images/img_sixstar02.webp" alt="다이아 아이콘" class="img" loading="lazy">
                </div>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-icon-grp">
                <div class="visual-icon circle">
                  <img src="@/assets/images/img_circle.webp" alt="원형 아이콘" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon">
                  <img src="@/assets/images/img_sixstar.webp" alt="다이아 아이콘" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-icon-grp">
                <div class="visual-icon circle">
                  <img src="@/assets/images/img_circle.webp" alt="원형 아이콘" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">O</span>
                  <span class="txt blank">N</span>
                </span>
              </div>
              <div class="visual-video">
                <div class="visual-video-inner second">
                  <img src="@/assets/images/img_tunnel.gif" alt="터널 이미지" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">D</span>
                  <span class="txt">E</span>
                  <span class="txt">E</span>
                  <span class="txt blank">P</span>
                  <span class="txt">I</span>
                  <span class="txt">M</span>
                  <span class="txt">P</span>
                  <span class="txt">A</span>
                  <span class="txt">C</span>
                  <span class="txt">T</span>
                  <span class="txt">.</span>
                </span>
              </div>
            </div>
          </div>
          <div class="visual-wrap tab-show">
            <div class="visual-grp-row">
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">F</span>
                  <span class="txt">U</span>
                  <span class="txt">E</span>
                  <span class="txt">L</span>
                  <span class="txt">E</span>
                  <span class="txt">D</span>
                </span>
              </div>
              <div class="visual-line-grp">
                <div class="visual-line"></div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">B</span>
                  <span class="txt">Y</span>
                </span>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">P</span>
                  <span class="txt">A</span>
                  <span class="txt">S</span>
                  <span class="txt">S</span>
                  <span class="txt">I</span>
                  <span class="txt">O</span>
                  <span class="txt">N</span>
                </span>
              </div>
              <div class="visual-video">
                <div class="visual-video-inner">
                  <img src="@/assets/images/img_fire.gif" alt="화염 이미지" class="img" loading="lazy">
                </div>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">{</span>
                  &nbsp;
                  <span class="txt">F</span>
                  <span class="txt">O</span>
                  <span class="txt">C</span>
                  <span class="txt">U</span>
                  <span class="txt">S</span>
                  <span class="txt">E</span>
                  <span class="txt">D</span>
                </span>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">O</span>
                  <span class="txt">N</span>
                </span>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-video second">
                <div class="visual-video-inner second">
                  <img src="@/assets/images/img_tunnel.gif" alt="터널 이미지" class="img" loading="lazy">
                </div>
              </div>
              <div class="visual-txt">
                <span class="visual-txt-inner">
                  <span class="txt">D</span>
                  <span class="txt">E</span>
                  <span class="txt">E</span>
                  <span class="txt">P</span>
                </span>
              </div>
            </div>
            <div class="visual-grp-row">
              <div class="visual-txt">
                  <span class="visual-txt-inner">
                    <span class="txt">I</span>
                    <span class="txt">M</span>
                    <span class="txt">P</span>
                    <span class="txt">A</span>
                    <span class="txt">C</span>
                    <span class="txt">T</span>
                    <span class="txt">.</span>
                  </span>
              </div>
            </div>
          </div>
          <div class="visual-symbol-grp tab-hide">
            <div v-for="(item, idx) in 4" :key="idx" class="visual-symbol" :class="`type-0${idx + 1}`" data-aos="fade-up" data-aos-duration="500" data-aos-offset="-100" :data-aos-delay="(idx + 1) % 2 === 0 ? 200 : 0">
              <img :src="require(`@/assets/images/img_symbol_${idx + 1}.webp`)" :alt="`심볼 이미지 ${idx + 1}`" class="img"/>
            </div>
          </div>
        </div>
      </section>
      <!-- visual-section : END -->
      <!-- works-section : START -->
      <section id="works-section" class="works-section">
        <h2 class="voice-only">작업 영역</h2>
        <div class="works-inner">
          <span class="line"></span>
          <h3 class="works-intro-title tab-hide" data-aos="fade-up" data-aos-duration="300">WORKS</h3>
          <h3 class="works-intro-title tab-show" data-aos="fade-up" data-aos-duration="500">WORKS</h3>
          <button type="button" class="works-btn-more tab-hide" data-aos="fade-up" data-aos-duration="100" data-aos-delay="500">MORE VIEW +</button>
          <button type="button" class="works-btn-more tab-show" data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">MORE VIEW +</button>
          <div class="works-grp">
            <a href="" class="works-link" v-for="(item, idx) in worksItem" :key="idx">
              <span class="works-num">(0{{ idx + 1}})</span>
              <div href="#" class="works-title">
                <span class="title">{{ item.company }}</span>
                <span class="title mb-hide">{{ item.company }}</span>
              </div>
              <div class="works-desc-grp">
                <p class="works-desc">
                  {{ item.desc }}
                </p>
                <div class="works-skill-grp">
                  <span class="works-skill" v-for="(skill, sIdx) in item.skills" :key="sIdx">#{{ skill }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <!-- works-section : END -->
      <!-- text-section : START -->
      <section class="text-section" ref="section">
        <h2 class="voice-only">텍스트 영역</h2>
        <div class="text-title-grp">
          <strong class="text-title">
            IF YOU WANT TO
            <br>
            WORK TOGETHER
          </strong>
          <span class="line"></span>
          <strong class="text-title">
            LET PASSION
            <br>
            LEAD THE WAY
          </strong>
        </div>

      </section>
      <!-- text-section : END -->
      <!-- horizon-section : START -->
      <section class="horizon-section">
        <h2 class="voice-only">가로 영역</h2>
        <div class="horizon-grp">
          <div class="horizon-img-grp panel">
            <div class="horizon-img">
              <img class="img" src="@/assets/images/img_mountain.webp" alt="산 이미지" loading="lazy">
            </div>
          </div>
          <div class="horizon-txt-grp">
          <div class="horizon-txt panel">
            <span class="txt" v-for="item in horizonTxt" :key="item" v-html="item">
            </span>
          </div>
          </div>
        </div>
      </section>
      <!-- horizon-section : END -->
      <!-- contact-section : START -->
      <section id="contact-section" class="contact-section">
        <h2 class="voice-only">컨텍트 영역</h2>
        <div class="contact-wrap">
          <div class="contact-left">
            <strong class="contact-title">CONTACT</strong>
            <div class="contact-info-wrap">
              <div class="contact-info-grp" v-for="item in contactInfo" :key="item">
                <span class="contact-label">{{ item.label }}</span>
                <span class="contact-info">{{ item.info }}</span>
              </div>
            </div>
            <div class="contact-link-grp mb-hide">
              <a v-for="(item, idx) in contactLinks" :key="idx" :href="item.url" class="contact-link" target='_blank'>
                <img class="img" :src="require(`@/assets/images/img_link_${idx + 1}.webp`)" alt="링크 아이콘" loading="lazy">
              </a>
            </div>
          </div>
          <div class="contact-right">
            <form @submit.prevent="sendEmail">
              <div class="input-flex">
                <div class="input" v-for="item in contactIpt" :key="item">
                  <label :for="item.for" class="label-sm">{{ item.label }}</label>
                  <input :id="item.id" :name="item.name" v-model="formData[item.model]" type="text" :placeholder="item.placeholder" class="inp" autocomplete='off'>
                </div>
              </div>
              <div class="input">
                <label for="message" class="label-sm type-textarea">내용</label>
                <textarea name="message" v-model="message" id="message" cols="30" rows="10" placeholder="문의할 내용을 입력해 주세요" class="textarea" autocomplete='off'></textarea>
              </div>
              <div class="btn-grp">
                <button type="submit" id="emailBtn" class="btn btn-more" value="Send Email">
                  문의하기
                  <i class="icon icon-arrow scroll-horizontal-img"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- contact-section : END -->
    </div>
    <!-- LayoutFooter : START -->
    <LayoutFooter />
    <!-- LayoutFooter : END -->
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
import 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap'
import { Autoplay, FreeMode } from 'swiper/modules';
import OrgItem from './components/OrgItem.vue'

gsap.registerPlugin(ScrollTrigger);


export default {
  name: "Index",
  components: {
    OrgItem
  },
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      message: '',
      modules: [Autoplay, FreeMode],
      titles: ['Passionate', 'Smart', 'Flexible'],
      activeIndex: 0,
      exitingIndex: null,
      intervalId: null,
      careerItems: [
        {
          title: '포켓컴퍼니',
          detail: '웹 퍼블리셔',
          period: '2023.09 - 2024.10'
        },
        {
          title: '(주)씨케이앤비',
          detail: '웹 디자이너 / 대리, 파트장',
          period: '2019.03 - 2021.01'
        },
      ],
      eduItems: [
        {
          title: '리액트 & Node.js',
          period: '2023.04 - 2023.06'
        },
        {
          title: 'jQuery & Javascript',
          period: '2022.04 - 2022.06'
        },
        {
          title: 'jQuery & Javascript',
          period: '2020.10 - 2020.12'
        },
        {
          title: 'HTML & CSS',
          period: '2020.05 - 2020.08'
        },
        {
          title: '웹표준 & 접근성',
          period: '2020.02 - 2020.03'
        },
      ],
      licItems: [
        {
          title: '컴퓨터 그래픽스 운용기능사',
          period: '2018.09'
        },
      ],
      worksItem: [
        {
          company: '브리에이션',
          desc: '핸드폰 견적, 상담, 기기 수령 등의 서비스를 지원하는 중개 플랫폼의 UI 퍼블리싱을 담당했습니다. 메인 페이지, 회원가입, 로그인, 이용약관, 개인정보처리방침 페이지 등의 퍼블리싱 진행함.',
          skills: ['퍼블리싱 70%', 'VUE', 'CSS', 'JAVASCRIPT', 'GSAP'],
          link: '#'
        },
        {
          company: '포켓컴퍼니',
          desc: '사내 서비스 및 브랜드 사이트 다수 퍼블리싱. 프론트 작업과 협업 경험.',
          skills: ['퍼블리싱 80%', 'HTML', 'SCSS', 'JAVASCRIPT', 'VUE'],
          link: '#'
        },
        {
          company: '브리에이션',
          desc: '핸드폰 견적, 상담, 기기 수령 등의 서비스를 지원하는 중개 플랫폼의 UI 퍼블리싱을 담당했습니다. 메인 페이지, 회원가입, 로그인, 이용약관, 개인정보처리방침 페이지 등의 퍼블리싱 진행함.',
          skills: ['퍼블리싱 70%', 'VUE', 'CSS', 'JAVASCRIPT', 'GSAP'],
          link: '#'
        },
      ],
      horizonTxt: [
        '<strong class="point">With a dream</strong>',
        'in my heart,',
        'I take small steps',
        'each day toward',
        'something greater',
      ],
      contactInfo: [
        {
          label: 'T.',
          info: '010-9467-6972'
        },
        {
          label: 'E.',
          info: 'blueskae_@naver.com'
        }
      ],
      contactIpt: [
        {
          for: 'name',
          id: 'name',
          model: 'name',
          label: '성함',
          placeholder: '성함을 입력해 주세요'
        },
        {
          for: 'email',
          id: 'email',
          model: 'email',
          label: '이메일',
          placeholder: '이메일을 입력해 주세요'
        }
      ],
      contactLinks: [
        {
          url:'https://github.com/ivy-love/portfolio'
        },
        {
          url:'https://aluminum-okra-bac.notion.site/0727de3b9b984978992162f1639d558c'
        }
      ]
    }
  },
  mounted() {
    this.visualTxtAni();
    this.worksLineAni();
    this.aboutTxtAni();
    this.worksItemAni();
    this.horizonAni();
    this.bgChagne();
    this.textAnimation();
    this.introAni();
    this.goTopBtn();
    this.cursorDot();
    this.scrollAnimation();
    this.rollingTitleAni();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    // contact-section 문의하기
    sendEmail() {
      if(!this.formData.name) {
        return alert('성함을 입력해 주세요')
      }

      if(!this.formData.email) {
        return alert('이메일을 입력해 주세요')
      }

      const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

      if(!regEmail.test(this.formData.email)) {
        return alert('올바른 이메일 형식을 입력해 주세요')
      }

      if(!this.message) {
        return alert('내용을 입력해 주세요')
      }

      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        message: this.message
      }

      const serviceID = "service_uc9vtui"
      const templateID = "template_w8yaxhk"
      const publicKey = '-qE5UGCxYzOr5sZZN'

      emailjs.send(serviceID, templateID, payload, publicKey)

        .then(() => {
          alert('문의하기가 완료되었습니다.')

          this.formData.name = ''
          this.formData.email = ''
          this.message = ''

        }, (error) => {
          console.log(error)
        })
    },

    // horizon-section 애니메이션
    horizonAni() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".horizon-section",
          start: "center center",
          end: "+=3000",
          scrub: 1,
          pin: true,
        }
      });

      // 이미지 확대
      const isMobile = window.innerWidth <= 600; // 모바일 판단 기준

      tl.to(".horizon-img", {
        width: isMobile ? "100%" : window.innerWidth - 70,
        height: isMobile ? "100%" : window.innerHeight - 60,
        // borderRadius: isMobile ? "0" : "10px",
        duration: 0.3,
        ease: "none"
      });


      // 텍스트 이동
      tl.to(".horizon-txt-grp", {
        xPercent: -100,
        duration: 3,
        ease: "none"
      }, 1);


      // 텍스트 등장 애니메이션
      const lines = gsap.utils.toArray(".horizon-section .txt");

      lines.forEach((line, idx) => {
        tl.fromTo(line,
          {
            opacity: 0,
            yPercent: 100
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 3,
            delay: 3,
            ease: "power2.out"
          },
          2 + idx * 0.5
        );
      });
    },

    // visual-section 애니메이션
    visualTxtAni() {
      const tl = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: ".visual-section",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".visual-section", { opacity: 1, duration: 0 });
          tl.restart(true, false);
        },
        onEnterBack: () => {
          gsap.to(".visual-section", { opacity: 1, duration: 0 });
          tl.restart(true, false);
        },
        onLeave: () => {
          gsap.to(".visual-section", { opacity: 0, duration: 0.4 });
        }
      });

      tl.set(".visual-section", { opacity: 1 });

      tl.to(".visual-section .txt", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.out"
      }, 0);

      tl.fromTo(".visual-line, .visual-arrow", {
        x: '-100%',
      }, {
        x: 0,
        duration: 0.3,
        ease: "linear"
      }, 0);

      tl.fromTo(".visual-icon", {
        x: '-100%',
      }, {
        x: 0,
        duration: 0.3,
        ease: "linear"
      }, 0);

      const isMobile = window.innerWidth <= 600;
      const videoDelay = isMobile ? 0.9 : 0.1;

      tl.fromTo(".visual-video-inner", {
        x: '-100%',
      }, {
        x: 0,
        duration: 0.3,
        ease: "linear"
      }, videoDelay);

      tl.to({}, { duration: isMobile ? 0.6 : 1.2 });


      // 아이콘 회전 애니메이션
      gsap.to(".visual-section .ani-spin02", {
        xPercent: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".visual-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    },

    // works-section 라인 애니메이션
    worksLineAni() {
      ScrollTrigger.create({
        trigger: ".works-section",
        start: "top 80%",
        onEnter: () => {
          document.querySelector(".works-section .line").classList.add("is-active");
        },
        onLeaveBack: () => {
          document.querySelector(".works-section .line").classList.remove("is-active");
        },
      });
    },

    // 스크롤 시 works-item 살짝 올라오는 애니메이션
    worksItemAni() {
      const isMobile = window.innerWidth <= 600;
      const yValue = isMobile ? -40 : -100;

      gsap.utils.toArray(".works-link").forEach((item, idx) => {
        gsap.to(item, {
          yPercent: yValue,
          ease: "none",
          scrollTrigger: {
            trigger: ".works-section",
            start: "top 30%",
            end: "bottom 30%",
            scrub: true
          },
          delay: idx * 1,
        });
      });
    },

    // 스크롤 시 배경색 바꾸기
    bgChagne() {
      gsap.to("body", {
        backgroundColor: "#fff",
        scrollTrigger: {
          trigger: ".works-section",
          start: "bottom 50%",
          end: "bottom",
          scrub: true
        }
      });
    },

    // text-section .text-title 애니메이션
    textAnimation() {
      gsap.utils.toArray(".text-title").forEach((title) => {
        gsap.fromTo(title,
          {
            autoAlpha: 0,
            opacity: 0
          },
          {
            autoAlpha: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: title,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
            }
          }
        );
      });

      // .line 요소에 is-active 클래스 추가
      ScrollTrigger.create({
        trigger: ".text-section .line",
        start: "top 80%",
        onEnter: () => {
          document.querySelector(".text-section .line").classList.add("is-active");
        },
        onLeaveBack: () => {
          document.querySelector(".text-section .line").classList.remove("is-active");
        },
      });
    },

    // about-section 텍스트 애니메이션
    aboutTxtAni() {
      const textElements = gsap.utils.toArray('.about-section .txt');

      textElements.forEach(txt => {
        gsap.to(txt, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: txt,
            start: 'center 80%',
            end: 'center 50%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },

    // 인트로 애니메이션
    introAni() {
      this.$nextTick(() => {
        document.querySelector('.loader').classList.add('is-ready');
      });
    },

    // 최상단으로 올라가는 버튼
    goTopBtn() {
      let btnTop = document.querySelector('.btn-top');
      btnTop.addEventListener('click', function(){
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
      });
    },

    // 스크롤 시 인트로 흐려지는 애니메이션
    scrollAnimation() {
      gsap.fromTo(".intro-section", {
        opacity: 1.15,
      }, {
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top center",
          end: "110% center",
          scrub: true,
          toggleActions: "play none none play",
        }
      });
    },

    // 커서포인터 애니메이션
    cursorDot() {
      const cursorSmallDot = document.getElementById("cursor-small-dot");
      let smallDotPosition = { x: 0, y: 0 };

      const translate3d = (x, y) => `translate3d(${x}px, ${y}px, 0)`;

      const handleMouseMove = (e) => {
        smallDotPosition.x = e.clientX + 5;
        smallDotPosition.y = e.clientY + 5;

        cursorSmallDot.style.transform = translate3d(
          smallDotPosition.x,
          smallDotPosition.y
        );
      };

      const mouseMoveHandler = (e) => {
        window.requestAnimationFrame(() => handleMouseMove(e));
      };

      window.addEventListener("mousemove", mouseMoveHandler);
    },

    // 커서가 a태그를 호버하면 클래스 추가하기
    cursorHover() {
      const cursorSmallDot = document.getElementById("cursor-small-dot");
      const links = document.querySelectorAll('a');

      links.forEach(link => {
        link.addEventListener('mouseover', function() {
          alert("1")
          cursorSmallDot.classList.add('is-hover');
        });

        link.addEventListener('mouseout', function() {
          cursorSmallDot.classList.remove('is-hover');
        });
      });
    },

    // 어바웃섹션 타이틀 롤링 애니메이션
    rollingTitleAni() {
      setInterval(() => {
        this.exitingIndex = this.activeIndex;
        this.activeIndex = (this.activeIndex + 1) % this.titles.length;

        setTimeout(() => {
          this.exitingIndex = null;
        }, 800);
      }, 1500);
    }
  }
};
</script>