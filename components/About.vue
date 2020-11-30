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
        <p class="about-p about-p3">
          If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p about-p-bold">logistics@nwplus.io</span>
        </p>
      </div>
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
$offset: 5em;

// Desktop CSS
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // Background image
  background: linear-gradient(180deg, #C4C4C4 0%, #8F8F8F 100%);
  background-image: url('../assets/sprite/png/about__background.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vw;
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

.about-bg {
  width: 100%;
}

.about-p {
  text-align: left;
  // Spacing
  max-width: 30ch;
  // Text
  font-family: $body-font;
  // Override SCSS compiler, use literal
  font-size: 1.5vw;
  color: #D0FFFF;
  display: inline;
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
