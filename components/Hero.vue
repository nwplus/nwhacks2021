<template>
  <div class="hero-section">
    <div class="hero-apply">
      <!-- <img :src="applyBtnClicked" v-if="clicked" @mouseup="toggle" class="hero-btn">
      <img :src="applyBtn" @mousedown="apply" v-else class="hero-btn"> -->
      <div class="hero-btn" />
    </div>
  </div>
</template>

<script>
import applyBtn from '../assets/sprite/svg/hero__btn.svg'
import applyBtnClicked from '../assets/sprite/svg/hero__btn_clicked.svg'

export default {
  props: {
    // clicked: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data: function () {
    return {
      applyBtn,
      applyBtnClicked,
      clicked: false
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.isTimeout = true
    }, 300)
  },
  methods: {
    apply: function () {
      this.toggle()
      console.log(this.clicked)
    },
    toggle: function () {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import "bulma/bulma.sass";

$body-font: "Source Sans Pro", sans-serif;

// Desktop CSS
.hero-section {
  padding-top: 5%;
  background-image: url("~@/assets/sprite/svg/hero__background.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 124vw;
  position: relative;
  text-align: center;
  color: white;
  font-family: $body-font;
  font-size: 14px;
  line-height: 18px;
  overflow-x: hidden;
}

.hero-apply {
  margin-top: 5%;
  .hero-btn {
    background-image: url("~@/assets/sprite/svg/hero__btn.svg");
    position: absolute;
    margin: auto;
    top: 30.5vw;
    left: 0;
    right: 0;
    width: 297px;
    height: 78px;
    &:active {
      background-image: url("~@/assets/sprite/svg/hero__btn_clicked.svg");
    }
  }
}

// Mobile CSS
@include until($tablet) {
  .hero-section {
    min-height: 165vw;
    font-size: 12px;
    line-height: 10px;
  }

  .hero-logo {
    width: 350px;
    height: 160px;
  }

  .hero-apply {
    margin-top: 5%;
  }
}
</style>
