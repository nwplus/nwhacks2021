<template>
  <div>
    <div class="hero-section">
      <div class="hero-apply">
        <div v-if="registration">
          <a href="https://portal.nwplus.io/application"><img @mouseenter="applyImage = require('@/assets/sprite/svg/hero__btn_clicked.svg')" @mouseleave="applyImage = require('@/assets/sprite/svg/hero__btn.svg')" :src="applyImage" alt="Apply" class="hero-btn"></a>
        </div>
        <img v-else src="~@/assets/sprite/svg/hero__btn_apps_closed.svg" alt="Applications are closed" class="hero-btn">
      </div>
    </div>
    <img
      src="~@/assets/sprite/svg/hero__background_fog.svg"
      alt="triangle with all three sides equal"
      class="hero-fog"
    >
  </div>
</template>

<script>
export default {
  props: {
    registration: {
      required: true,
      type: Boolean
    }
  },
  data: function () {
    return {
      clicked: false,
      applyImage: require('@/assets/sprite/svg/hero__btn.svg')
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
  z-index: 5;
}

.hero-fog {
  width: 100vw;
  position: absolute;
  z-index: 50;
  margin-top: -35%;
}

.hero-apply {
  margin-top: 5%;
  .hero-btn {
    position: absolute;
    margin: auto;
    top: 29vw;
    left: 0;
    right: 0;
    max-width: 297px;
    height: 5%;
    min-height: 52px;
    max-height: 70px;
  }
}

// Mobile CSS
@include until($tablet) {
  .hero-section {
    background-image: url("~@/assets/sprite/svg/hero__background_mobile.svg");
    min-height: 145vw;
    font-size: 12px;
    line-height: 10px;
    z-index: 10;
  }

  .hero-apply {
    margin-top: 5%;
    .hero-btn {
      top: 41.5vw;
      height: 8%;
    }
  }
}

@include until($mobile) {
  .hero-apply {
    .hero-btn {
      width: 130px;
      height: 34.19px;
      top: 38.5vw;
      background-repeat: no-repeat;
      background-size: 130px 34.19px;
    }
  }
}
</style>
