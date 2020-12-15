<template>
  <nav>
    <nav v-if="open">
      <div id="sidebar">
        <a href="https://www.nwplus.io/" target="_blank" rel="noopener">
          <img id="nwplus-logo" :src="nwLogo" alt="nwPlus logo">
        </a>
        <a v-on:click="toggle" class="menu-icon" href="#">
          <img id="close" :src="close" alt="close menu">
        </a>
        <div v-on:click="toggle" class="sidebar-menu">
          <a v-scroll-to="'#about'" href="#" class="navbar-item">About</a>
          <a v-if="faq" v-scroll-to="'#faq'" href="#" class="navbar-item">FAQ</a>
          <a v-if="sponsors" v-scroll-to="'#sponza'" href="#" class="navbar-item">Sponsors</a>
          <a href="https://www.notion.so/nwplus/PUBLIC-nwHacks-2021-Mentor-Syllabus-82ca879b387e41728ecdad0ab8ca25e9" rel="noopener" target="_blank" class="navbar-item">Mentors</a>
          <a href="https://2020.nwhacks.io/" rel="noopener" target="_blank" class="navbar-item">2020</a>
        </div>
      </div>
    </nav>
    <nav
      v-if="!open"
      :style="{visibility: visible, opacity: opacity}"
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <a id="mlh-trust-badge" href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black" target="_blank">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg" alt="Major League Hacking 2021 Hackathon Season" style="width:100%">
      </a>
      <a v-on:click="toggle" class="menu-icon" href="#">
        <img id="hamburger" :src="hamburger" alt="hamburger menu">
      </a>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start" />
        <div class="navbar-end">
          <div class="buttons">
            <a v-scroll-to="'#about'" href="#" class="navbar-item">About</a>
            <a v-if="faq" v-scroll-to="'#faq'" href="#" class="navbar-item">FAQ</a>
            <a v-if="sponsors" v-scroll-to="'#sponza'" href="#" class="navbar-item">Sponsors</a>
            <a
              href="https://www.notion.so/nwplus/PUBLIC-nwHacks-2021-Mentor-Syllabus-82ca879b387e41728ecdad0ab8ca25e9"
              rel="noopener"
              target="_blank"
              class="navbar-item"
            >Mentors</a>
            <a
              href="https://2020.nwhacks.io/"
              rel="noopener"
              target="_blank"
              class="navbar-item"
            >2020</a>
          </div>
          <a href="https://www.nwplus.io/" target="_blank" rel="noopener">
            <img
              id="navbar-logo"
              class="navbar-item"
              src="~@/assets/nwlogos/nwplus-logo.png"
              alt="nwPlus logo"
            >
          </a>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
import hamburger from '../assets/sprite/svg/navbar__hamburger.svg'
import close from '../assets/sprite/svg/navbar__close.svg'
import nwLogo from '../assets/nwlogos/nwplus-logo.svg'
export default {
  props: {
    faq: {
      required: true,
      type: Boolean
    },
    sponsors: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      visible: screen.width > 768 ? 'hidden' : 'visible',
      opacity: screen.width > 768 ? '0' : '1',
      open: false,
      close,
      hamburger,
      nwLogo,
      scrollFunc: () => {}
    }
  },
  mounted() {
    this.scrollFunc = this.handleScroll()
    window.addEventListener('scroll', this.scrollFunc)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFunc)
  },
  methods: {
    toggle() {
      this.open = !this.open
      // Fix screen while menu is opened
      if (!this.open) {
        document.body.style.position = ''
      } else {
        document.body.style.position = 'fixed'
      }
    },
    handleScroll() {
      if (screen.width > 768) {
        let lastScroll = 0
        return (event) => {
          const scroll =
            window.pageYOffset || document.documentElement.scrollTop
          if (scroll <= 0) {
            this.visible = 'visible'
            this.opacity = '1'
          } else if (scroll > lastScroll) {
            this.visible = 'hidden'
            this.opacity = '0'
          } else {
            this.visible = 'visible'
            this.opacity = '1'
          }
          lastScroll = scroll
        }
      } else {
        return (event) => {
          const scroll =
            window.pageYOffset || document.documentElement.scrollTop
          if (scroll <= 80) {
            this.visible = 'visible'
            this.opacity = '1'
          } else {
            this.visible = 'hidden'
            this.opacity = '0'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$white: #ffffff;

.navbar {
  font-family: Source Sans Pro;
  font-weight: normal;
  background: none;
  color: rgba(1, 1, 1, 0);
  position: fixed;
  top: 0%;
  width: 100%;
  padding: 0;
  visibility: visible;
  transition: 0.5s ease-in-out;
  height: 12.5vh;
}
.navbar-item {
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  padding: 0px 32px;
  color: $white;
  padding-top: 15px;
}
.navbar-item::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: $white;
  transition: width 0.3s;
}
.navbar-item:hover::after {
  width: 100%;
}
a.navbar-item:hover,
a.navbar-item:focus,
a.navbar-item:focus-within {
  background: none;
  color: $white;
}
.buttons {
  margin-right: 78px;
  margin-top: -15px;
}
#navbar-logo {
  max-height: none;
  height: 45px;
  width: auto;
  box-sizing: border-box;
  padding: 2px 0 0 0;
  right: 100%;
  top: 25%;
}
#mlh-trust-badge {
  display:block;
  max-width:70px;
  min-width:50px;
  position:fixed;
  left:50px;
  top:0;
  width:10%;
  z-index:999
}
.a {
  font-size: 24px;
}
.is-active .buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
}
.is-active .buttons .navbar-item {
  color: #fff;
}
.menu-icon {
  display: none;
}
@include until($desktop) {
  .navbar {
    background: none;
  }
  #navbar-logo {
    height: 30px;
  }
}
@include until($tablet) {
  #sidebar {
    position: fixed;
    top: 0;
    z-index: 100;
    height: 100%;
    width: 100vw;
    background: #1e313f;
    overflow: hidden;
    .sidebar-menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      .navbar-item {
        text-align: center;
      }
    }
    #nwplus-logo {
      margin: 25px 25px 0;
    }
  }
  .menu-icon {
    display: block;
    float: right;
    padding: 25px;
  }
  #mlh-trust-badge {
    left:25px;
    max-width:50px;
    min-width:30px;
    width: 6%;
  }
}
@include until($mobile) {
  #mlh-trust-badge {
    left:25px;
    max-width:40px;
    min-width:20px;
  }
}
</style>
