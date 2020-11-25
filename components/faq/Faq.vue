<template>
  <div class="container">
    <div class="columns faqs">
      <div class="stats">
        <img :src="board" class="board">
        <div>
          <img :src="info" class="info">
        </div>
      </div>
      <img :src="title" alt="FAQ" class="title">
      <div class="column column-left is-half">
        <div v-for="faq in faqBin[0]" :key="`Common-${faq.question}`" class="faqBox">
          <FaqContainer :faq="faq" />
        </div>
      </div>
      <div class="column column-right is-half">
        <div v-for="faq in faqBin[1]" :key="`Common-${faq.question}`" class="faqBox">
          <FaqContainer :faq="faq" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import board from '../../assets/sprite/svg/faq__stats_board.svg'
import info from '../../assets/sprite/svg/faq__stats_info.svg'
import title from '../../assets/sprite/png/faq__digital_title.png'
import FaqContainer from './FaqContainer'

export default {
  components: {
    FaqContainer
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      board,
      info,
      title
    }
  },
  computed: {
    faqBin: function () {
      const bin = [
        [],
        []
      ]
      this.items.forEach((item, idx) => {
        bin[idx % 2].push(item)
      })
      return bin
    }
  }
}
</script>

<style scoped lang="scss">

@import "bulma/bulma.sass";
//Desktop CSS:
.container {
  position: relative;
  background-image: url('../../assets/sprite/svg/faq__background.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-width: 100vw;
  min-height: 150vw;
}

.columns {
  max-width: 80%;
}

.column-left {
  padding-right: 5%;
  padding-top: 0px;
}

.column-right {
  padding-left: 5%;
  padding-top: 0px;
}

.stats {
  // &, & * {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   margin-left: auto;
  //   margin-right: auto;
  // }
  .board, div {
    position: absolute;
    max-width: 50vw;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  div {
    top: 68px;
    width: 688px;
    height: 120px;
    overflow: hidden;
    white-space: nowrap;
    .info {
      bottom: 0;
      margin: auto;
      animation: bannermove 10s linear infinite;
    }
  }
}

.title {
  position: absolute;
  max-width: 25vw;
  left: 0;
  right: 0;
  top: 15vw;
  margin-left: auto;
  margin-right: auto;
}

.faqs {
  position: static;
  z-index: 10;
  width: 100%;
  margin: auto;
  padding-top: 30vw;
  padding-bottom: 9%;
}

.faqBox {
  margin-top: 45px;
  box-shadow: 0px 0px 18px -2px #95F9EB;
  border-radius: 10px;
}

// https://stackoverflow.com/questions/59980269/infinite-horizontal-scrolling-image-loop
@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

//Widescreen CSS:
@include until($widescreen) {

.container {
  background-image: url('../../assets/sprite/svg/faq__background.svg');
  background-position: 0 0;
  background-size: 100% 100%;
}

.column-left {
  padding-right: 2%;
  padding-bottom: 0%;
}

.column-right {
  padding-left: 2%;
  padding-top: 0%;
}

.title {
  max-width: 35vw;
}

}

//Mobile CSS:
@include until(798px) {

.container {
  background-image: url('../../assets/sprite/svg/faq__mobile_background.svg');
  background-position: 0 0;
  padding-bottom: 20vw;
}

.faqs {
  padding-top: 225px;
}

.stats {
  display: none;
}

.title {
  max-width: 300px;
}

}
</style>
