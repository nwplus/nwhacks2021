<template id="loading-component">
  <div class="background">
    <img src="../assets/sprite/png/loading__reg.png" class="center reg" alt="Pulsing loading logo">
    <img src="../assets/sprite/png/loading__glow.png" class="center glow" alt="Pulsing loading logo">
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

$dark-purple: #15102D;
$animationtime: 5s;

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: $dark-purple;
  z-index: 1000000;
}

.center {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  left: 0;
  right: 0;
  bottom: 35vh;
  min-width: 30vw;
  max-width: 60vw;
  z-index: 5;
}

.glow {
  animation: breathing $animationtime infinite;
  z-index: 10;
}

@keyframes breathing {
  0% {
      opacity: 1;
  }
  50% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}

@include until(798px) {

.center {
  bottom: 45vh;
}

}

</style>
