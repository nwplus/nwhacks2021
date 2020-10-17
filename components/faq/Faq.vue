<template>
  <div class="container">
    <div id="bulletin-title-container" />
    <div id="bulletin-board-container">
      <div class="columns faqs">
        <div class="column is-one-quarter">
          <div v-for="faq in faqBin[0]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
        <div class="column is-one-quarter">
          <div v-for="faq in faqBin[1]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
        <div class="column is-one-quarter">
          <div v-for="faq in faqBin[2]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
        <div class="column is-one-quarter">
          <div v-for="faq in faqBin[3]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
      </div>
      <div id="badges">
        <img id="badge-axe" src="~@/assets/sprite/svg/faq__badge_axe.svg">
        <img id="badge-debug" src="~@/assets/sprite/svg/faq__badge_debug.svg">
        <img id="badge-marshmellow" src="~@/assets/sprite/svg/faq__badge_marshmellow.svg">
      </div>
    </div>
  </div>
</template>

<script>
import FaqNote from '~/components/faq/FaqNote.vue'

export default {
  components: {
    FaqNote
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    faqBin: function () {
      const bin = [
        [],
        [],
        [],
        []
      ]
      this.items.forEach((item, idx) => {
        bin[idx % 4].push(item)
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
}

#bulletin-title-container {
  background-image: url("~@/assets/sprite/svg/faq__wooden_title.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 1;
  display: block;
  margin: auto;
  transform: translate(0%, 75%);
  min-height: 100px;
}

#bulletin-title {
  position: relative;
  z-index: 3;
  display: block;
  margin: auto;
  width: 43%;
  min-height: 80px;
  max-width: 500px;
}

#bulletin-board-container {
  background-image: url("~@/assets/sprite/svg/faq__bulletin_board.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin: auto;
}

.faqs {
  position: static;
  z-index: 10;
  width: 85%;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 10%;
}

.faqnote {
  position: relative;
  transition: transform .2s; /* Animation */
  z-index: 5;
}

.faqnote:hover {
  transform: scale(1.6);
  z-index: 10;
}

#badges {
  float: right;
}

#badge-axe {
  position: absolute;
  bottom: 13%;
  right: 18%;
}

#badge-debug {
  position: absolute;
  bottom: 25%;
  right: 10%;
}

#badge-marshmellow {
  position: absolute;
  bottom: 7%;
  right: 7%;
}

//Mobile CSS:
@include until($desktop) {

#bulletin-title {
  width: 50%;
}

#bulletin-board-container {
  width: 85%;
}

}

@include until($tablet) {

#bulletin-board-container {
  background-image: url("~@/assets/sprite/svg/faq__mobile_bulletin_board.svg");
  background-position: 50% 98%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 92%;
}

#bulletin-title-container {
  width: 75%;
}

#bulletin-title {
  width: 75%;
}

#badges {
  display: none;
}

.faqnote:hover {
  position: relative;
  transform: scale(1.3);
  z-index: 10;
}

}
</style>
