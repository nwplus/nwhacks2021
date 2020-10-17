<template>
  <div class="about-container">
    <div class="about-content">
      <img :src="aboutPlank" class="about-header">
      <p class="about-p1">
        Last year, Learn and Build Day events were held months apart.
        This year, we plan on running the event as a virtual conference weekend,
        with a focus on learning and workshops on the first day, and building and hacking on the second day.
      </p>
      <p class="about-p2">
        This year, due to the COVID-19 pandemic, we will be holding our event in a virtual format.
        As the health and safety of our attendees is our top priority, we will continue to keep an eye on the current
        situation within BC and provide updates through our website and social media channels should anything change.
      </p>
    </div>
  </div>
</template>

<script>
import aboutPlank from '../assets/sprite/svg/about__welcome_plank.svg'

export default {
  data: function () {
    return {
      aboutPlank
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

$body-font: "Source Sans Pro", sans-serif;

// Desktop CSS
.about-container {
  display: flex;
  justify-content: center;
  position: relative;
  // Background image
  background-image: url('../assets/sprite/png/about__background.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 85.5vw;
}

.about-content {
  position: absolute;
  padding-top: 30%;
}

.about-bg {
  width: 100%;
}

.about-p1, .about-p2 {
  text-align: center;
}

.about-header {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.about-p1, .about-p2 {
  // Spacing
  margin: 1em auto 0 auto;
  max-width: 60ch;
  padding: 0 2em;
  // Text
  font-family: $body-font;
  // Override SCSS compiler, use literal
  font-size: 1.5vw;
  color: white;
}

// Mobile CSS
@include until($tablet) {
  .about-container {
    background-image: url('../assets/sprite/png/about__background_m.png');
    min-height: 200vw;
    margin-top: -6px;
    background-color: transparent;
  }
  .about-content {
    padding-top: 50%;
  }
  .about-p1, .about-p2 {
    font-size: 3vw;
    max-width: 45ch; // close to window
  }
}
</style>
