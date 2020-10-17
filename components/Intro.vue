<template>
  <div class="intro-container">
    <div class="intro-content">
      <img :src="introPlank" class="intro-header">
      <p class="intro-p1">
        UBC Local Hack Day revolves around <b>inclusivity, diversity, and accessibility</b> — we want you to bring your unique perspectives and experiences to the table!
      </p>
      <p class="intro-p2">
        Over the past 3 years, UBC’s Local Hack Day focused on encouraging beginners and people who are curious about technology to work on a project that focuses on these three main pillars.
      </p>
    </div>
  </div>
</template>

<script>
import introPlank from '../assets/sprite/svg/intro__welcome_plank.svg'

export default {
  data: function () {
    return {
      introPlank
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$body-font: "Source Sans Pro", sans-serif;

// Desktop CSS
.intro-container {
  position: relative;
  background-image: url('../assets/sprite/png/intro__background.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 85.5vw;
}

.intro-content {
  padding-top: 15%;
  position: absolute;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin: auto;
  // Must have specific width
  width: 50%;
}

.intro-bg {
  width: 100%;
  background: linear-gradient(180deg, #485B67 1%, #243745, #566770 75%, #072639 91%);
}

.intro-header {
  display: block;
  margin: auto;
  //width: 80%;
}

.intro-p1, .intro-p2 {
  // Spacing
  max-width: $tablet;
  margin: 1em auto 0 auto;
  // Text
  text-align: center;
  font-family: $body-font;
  font-size: 1.5vw;
  color: white;
}

@include until($tablet) {
  .intro-container {
    background-image: url('../assets/sprite/png/intro__background_m.png');
    min-height: 150vw;
  }
  .intro-p1, .intro-p2 {
    font-size: 3vw;
  }
}
</style>
