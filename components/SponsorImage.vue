<template>
  <a :href="formatURL(item.link)" class="link" target="_blank" rel="noopener noreferrer">
    <img
      :class="{[item.tier]: true}"
      :src="item.imgURL"
      :alt="item.name"
    >
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatURL(url) {
      if (!url.includes('http')) {
        return `http://${url}`
      } else {
        return url
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "bulma/bulma.sass";

  img {
    display: block;
    transition-duration: 0.2s;
  }

  img:hover {
    transform: scale(1.08);
  }

  .platinum {
    max-width: 900px;
    max-height: 260px;
  }

  .gold {
    max-width: 700px;
    max-height: 240px;
  }

  .silver {
    max-width: 600px;
    max-height: 220px;
  }

  .bronze {
    max-width: 500px;
    max-height: 200px;
  }

  .inKind {
    max-width: 300px;
    max-height: 150px;
  }

  //Mobile CSS:
  @include until($desktop) {
    img {
      display: inline;
      max-width: 200px !important;
      max-height: 100px !important;
    }
  }
</style>
