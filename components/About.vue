<template>
  <div id="about" class="about-container">
    <div class="about-content">
      <span class="about-text">About</span>
      <p class="about-p1">
        Last year we connected over 800 of the brightest developers, engineers, and designers in the Pacific Northwest collaborate and create amazing projects. This year we want to take it to the next level and connect even more hackers across the globe from the comfort of your home. <span class="about-p-bold">nwHacks is going online</span>!
      </p>
      <p class="about-p2">
        Whether you're a seasoned hacker or a tech newbie, nwHacks welcomes you; just bring an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a product, learn new skills, and have fun with friends, old and new - all in 24 hours.
      </p>
    </div>
    <div class="about-panels-content-mobile">
      <p class="about-p1">
        Discord will be our main communication platform.<br>With our nwPlus Bot, activities like team formation, mentor help, sponsor booths, and workshop support will be easier than ever.<br><br>Stay tuned for a video explanation.<br><br>
        Even though everyone is staying home...<br>We want you to be engaged, as if you were here with us in person!<br><br>Tune in to a 24hr livestream of amazing keynotes, fun games, new tech, and much more!<br><br>
        If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p-bold">logistics@nwplus.io</span>
      </p>
    </div>
    <div>
      <div class="about-front" />
      <div class="about-front-mobile" />
      <div class="about-panels-content">
        <div class="about-box about-box1">
          <p class="about-p about-p1">
            Discord will be our main communication platform.<br><br>With our nwPlus Bot, activities like team formation, mentor help, sponsor booths, and workshop support will be easier than ever.<br><br>Stay tuned for a video explanation.
          </p>
        </div>
        <div class="about-box about-box2">
          <p class="about-p about-p2">
            Even though everyone is staying home...<br><br>We want you to be engaged, as if you were here with us in person!<br><br>Tune in to a 24hr livestream of amazing keynotes, fun games, new tech, and much more!
          </p>
        </div>
        <div class="about-box about-box3">
          <p class="about-p about-p3">
            If you have any thoughts on the matter or wish to express your opinion please don't hesitate to send us an email to <span class="about-p about-p-bold">logistics@nwplus.io</span>
          </p>
        </div>
      </div>
    </div>
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
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #E2B8A6;
  background-image: url('../assets/sprite/png/about__background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 225vw;
  z-index: 1;
}

.about-panels-content-mobile {
  display: none;
}

.about-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  // Centering an absolute element
  top: 9%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1em;
  // Must have specific width
  width: 75%;
  background-color: #322764;
  border: 0.5em solid black;
  border-radius: 4px;
}

.about-front {
  background-image: url('../assets/sprite/svg/about__front.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 125vw;
  width: 100vw;
  background-position: 0 0;
  left: 0;
  right: 0;
  position: absolute;
  top: 1.6%;
  z-index: 2;
}

.about-front-mobile {
  display: none;
}

.about-p1, .about-p2 {
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

.about-panels-content {
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: space-around;
  margin-top: 60vw;
}

.about-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #322764;
  border: 0.5em solid black;
  width: 30%;
  padding: 2em 2em;
  border-radius: 4px;
}

.about-bg {
  width: 100%;
}

.about-p {
  text-align: left;
  // Spacing
  max-width: 25ch;
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

@include until($tablet) {
  .about-container {
    background-image: url('../assets/sprite/png/about__background_mobile.png');
    min-height: 300vw;
  }

  .about-content {
    top: 6%;
    width: 85%;
  }

  .about-panels-content-mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    // Centering an absolute element
    left: 0;
    right: 0;
    margin: auto;
    padding: 1em;
    // Must have specific width
    width: 75%;
    background-color: #322764;
    border: 0.5em solid black;
    border-radius: 4px;
    top: 40%;
    z-index: 3;
  }

  .about-front {
    display: none;
  }

  .about-front-mobile {
    display: flex;
    background-image: url('../assets/sprite/svg/about__front_mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 150vw;
    width: 100vw;
    background-position: 0 0;
    left: 0;
    right: 0;
    position: absolute;
    top: 10%;
    z-index: 2;
  }

  .about-panels-content {
    display: none;
  }

  .about-p1, .about-p2 {
    font-size: 3vw;
  }
}
</style>
