<template>
  <div class="mainContainer">
    <div class="no-overflow rows is-3-tablet">
      <div v-for="item in sortedEvents" :key="item.order" :class="{ flipped: isFlipped(item) }">
        <div class="events row">
          <div class="image-container">
            <img :src="getImageURL(item)" :alt="`${item.title}, ${item.date}`" class="image">
          </div>
          <div class="blob-container">
            <img :src="arrow" alt="right-arrow" class="arrow">
            <p class="valuesText">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
import arrow from '../assets/sprite/svg/events__arrow.svg'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      arrow
    }
  },
  computed: {
    sortedEvents: function () {
      return orderBy(this.items, 'order')
    }
  },
  methods: {
    isFlipped(item) {
      return item?.title === 'Build Day'
    },
    getImageURL(item) {
      return require(`@/assets/sprite/svg/events__${item.key}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import "bulma/bulma.sass";
$gap: 6%;
$mobile: 415px;
$dark-brown: #56321e;
$brown: #817067;
$white: #ffffff;
$heading-font: "Caveat Brush";
$body-font: "Source Sans Pro", sans-serif;

.mainContainer {
  background-image: url("~@/assets/sprite/png/events__background.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 133vw;
  position: relative;
  &::before {
    display: block;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  @include until($tablet) {
    background-image: url("~@/assets/sprite/png/events__background_sm.png");
    min-height: 237vw;
  }
}

.rows {
  padding: 12% $gap;
  .row {
    .valuesText {
      width: 50vw;
      color: $white;
      font-family: $body-font;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 30px;
      @include until($tablet) {
        font-size: 18px;
        line-height: 24px;
      }
      @include until($mobile) {
        font-size: 12px;
        line-height: 15px;
      }
    }
    .blob-container {
      display: flex;
      align-items: baseline;
    }
    .arrow {
      @include until($tablet) {
        width: 0.75rem;
        margin-right: 7px;
      }
      @include until($mobile) {
        width: 0.5rem;
        margin-right: 5px;
      }
      width: 1rem;
      margin-right: 10px;
    }
    .image {
      @include until($tablet) {
        width: 40vw;
      }
    }
  }
  .flipped {
    .row {
      bottom: 30%;
      position: absolute;
      right: $gap;
    }
  }
}
</style>
