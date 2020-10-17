<template>
  <div id="buttonWrapper">
    <!-- TODO: change sponsor link -->
    <a
      id="sponzaButton"
      href="mailto:logistics@nwplus.io?subject=nwHacks Sponsorship"
    >
      Become a Sponsor
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "bulma/bulma.sass";

#sponzaButton {
  background: rgba(6, 26, 44, 0.76);
  border: 20px solid rgba(6, 26, 44, 0.76);
  border-radius: 33px;
  color: white;
  transition-duration: 0.2s;
}

#sponzaButton:hover {
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
}

@include until($desktop) {
  #sponzaButton {
    font-size: 12px;
    border-width: 15px;
  }
}
</style>
