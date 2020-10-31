<template>
  <div class="intro-container">
    <div class="intro-content">
      <p class="intro-p1">
        Last year we connected over 800 of the brightest developers, engineers, and designers in the Pacific Northwest collaborate and create amazing projects. This year we want to take it to the next level and connect even more hackers across the globe from the comfort of your home. **nwHacks is going online**!
      </p>
      <p class="intro-p2">
        Whether you're a seasoned hacker or a tech newbie, nwHacks welcomes you; just bring an open mind and an insatiable desire to learn, and we’ll take care of the rest. Create a product, learn new skills, and have fun with friends, old and new - all in 24 hours.
      </p>
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
.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #E2B8A6;
  // background-image: url('../assets/sprite/png/intro__background.png');
  // background-repeat: no-repeat;
  // background-size: 100vw;
  min-height: 50vw;
}

.intro-content {
  display: flex;
  flex-direction: column;
  // padding-top: 15%;
  position: absolute;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin: auto;
  padding: 1em;
  // Must have specific width
  width: 75%;
  background-color: #322764;
  border: 1em solid black;
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
  margin: 1em auto 1em auto;
  // Text
  text-align: left;
  font-family: $body-font;
  font-size: 1.5vw;
  color: #D0F1FF;
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
