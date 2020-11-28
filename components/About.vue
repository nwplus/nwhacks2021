<template>
  <div class="about-container">
    <div class="about-content">
      <div class="about-box about-box1">
        <p class="about-p about-p1">
          Due to current Covid-19 circumstances, the specific details of nwHacks are still uncertain.<br><br>However, we can confirm that nwHacks 2021 will happen online, we will use Discord and Twitch as our main communication platform.
        </p>
      </div>
      <div class="about-box about-box2">
        <p class="about-p about-p2">
          Your health and well being is our top priority,  nwHacks and nwPlus will never endorse activities that might put you or others in danger.
        </p>
      </div>
      <div class="about-box about-box3">
        <transition name="slide-fade">
          <p v-if="aboutOne" class="about-p about-p3">
            If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p about-p-bold">logistics@nwplus.io</span>
          </p>
        </transition>
        <transition name="slide-fade">
          <p v-if="aboutTwo" class="about-p about-p3">
            Second Panel: If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p about-p-bold">logistics@nwplus.io</span>
          </p>
        </transition>
        <transition name="slide-fade">
          <p v-if="aboutThree" class="about-p about-p3">
            Third Panel: If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p about-p-bold">logistics@nwplus.io</span>
          </p>
        </transition>
        <transition name="slide-fade">
          <p v-if="aboutFour" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import aboutPlank from '../assets/sprite/svg/about__welcome_plank.svg'

export default {
  data: function () {
    return {
      aboutPlank,
      aboutOne: true,
      aboutTwo: false,
      aboutThree: false,
      aboutFour: false
    }
  },
  mounted() {
    this.updatePanel()
  },
  methods: {
    updatePanel() {
      window.setInterval(() => {
        if (this.aboutOne) {
          this.aboutOne = false
          this.aboutTwo = true
        } else if (this.aboutTwo) {
          this.aboutTwo = false
          this.aboutThree = true
        } else if (this.aboutThree) {
          this.aboutThree = false
          this.aboutFour = true
        } else {
          this.aboutFour = false
          this.aboutOne = true
        }
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

$body-font: "Source Sans Pro", sans-serif;
$offset: 5em;

// Desktop CSS
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // Background image
  background: linear-gradient(180deg, #C4C4C4 0%, #8F8F8F 100%);
  // background-image: url('../assets/sprite/png/about__background.png');
  // background-position: 0 0;
  // background-repeat: no-repeat;
  // background-size: 100vw;
  min-height: 50vw;
}

.about-content {
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-around;
}

.about-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #322764;
  border: 0.5em solid black;
  width: 30%;
  padding: 5em 2em;
}

.about-box3 {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 30vw;
}

.about-bg {
  width: 100%;
}

.about-p {
  text-align: left;
  // Spacing
  max-width: 60ch;
  // Text
  font-family: $body-font;
  // Override SCSS compiler, use literal
  font-size: 1.5vw;
  color: #D0FFFF;
  display: inline;
}

.about-box1 {
  top: 0 * $offset;
}

.about-box2 {
  top: 1 * $offset;
}

.about-box3 {
  top: 2 * $offset;
}

.about-p-bold {
  font-weight: bold;
  margin: 0 auto;
  display: inline;
}

.about-header {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: 2s;
}
.slide-fade-enter {
  transform: translate(0, 250%);
}
.slide-fade-leave-to {
  transform: translate(0, -250%);
}

// .slide-fade-enter-active {
//   transition: all 4s ease-in;
// }
// .slide-fade-leave-active {
//   transition: opacity all 4s ease-out;
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateY(50px);
//   opacity: 0;
// }

// Mobile CSS
@include until($tablet) {
  .about-container {
    min-height: 180vw;
  }
  .about-content {
    flex-direction: column;
  }
  .about-p {
    font-size: 3vw;
    max-width: 45ch; // close to window
  }
  .about-box {
    width: 75%;
    margin: 1em;
  }
}
</style>
