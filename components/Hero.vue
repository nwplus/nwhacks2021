<template>
  <div class="hero-section">
    <img :src="nwHacksLogo" class="hero-logo">
    <div class="hero-apply">
      <button>
        APPLY NOW
      </button>
    </div>
  </div>
</template>

<script>
import nwHacksLogo from '../assets/sprite/svg/hero__logo.svg'

export default {
  props: {},
  data: function () {
    return {
      nwHacksLogo
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.isTimeout = true
    }, 300)
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
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 81vw;
  position: relative;
  text-align: center;
  color: white;
  font-family: $body-font;
  font-size: 14px;
  line-height: 18px;
  overflow-x: hidden;
}

.hero-logo {
  width: 971px;
  height: 339px;
}

.hero-apply {
  margin-top: 5%;
  button {
    width: 296.41px;
    height: 78px;
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
    button {
      width: 150px;
      height: 39px;
    }
  }

}
</style>
