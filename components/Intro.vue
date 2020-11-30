<template>
  <div class="intro-container">
    <div class="intro-content">
      <span class="about-text">About</span>
      <p class="intro-p1">
        Last year we connected over 800 of the brightest developers, engineers, and designers in the Pacific Northwest collaborate and create amazing projects. This year we want to take it to the next level and connect even more hackers across the globe from the comfort of your home. **nwHacks is going online**!
      </p>
      <p class="intro-p2">
        Whether you're a seasoned hacker or a tech newbie, nwHacks welcomes you; just bring an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a product, learn new skills, and have fun with friends, old and new - all in 24 hours.
      </p>
    </div>
    <div class="intro-front" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";
$body-font: "Source Sans Pro", sans-serif;

// Desktop CSS
.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #E2B8A6;
  background-image: url('../assets/sprite/png/intro__background.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vw;
}

.intro-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  // Centering an absolute element
  top: 15%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1em;
  // Must have specific width
  width: 75%;
  background-color: #322764;
  border: 1em solid black;
  box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}

.intro-front {
  background-image: url('../assets/sprite/svg/intro__front.svg');
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 100vw;
  width: 100vw;
  z-index: 3;
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
  max-width: 70vw;
  margin: 1em auto 1em auto;
  // Text
  text-align: left;
  font-family: $body-font;
  font-size: 1.5vw;
  color: #D0F1FF;
}

$neon-blue: #D0FFFF;
$about-font: "HK Grotesk";

.about-text {
  // Spacing
  max-width: 70vw;
  margin: 0 auto 0 auto;
  // Text
  text-align: left;
  font-size: 3vw;
  color: $neon-blue;
  font-weight: 600;
}

@include until($tablet) {
  .intro-container {
    // background-image: url('../assets/sprite/png/intro__background_m.png');
    min-height: 150vw;
  }
  .intro-p1, .intro-p2 {
    font-size: 3vw;
  }
}
</style>
