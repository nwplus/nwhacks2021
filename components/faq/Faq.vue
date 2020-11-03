<template>
  <div class="container">
    <div id="bulletin-board-container">
      <div class="columns faqs">
        <div class="column is-one-third">
          <div v-for="faq in faqBin[0]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
        <div class="column is-one-third">
          <div v-for="faq in faqBin[1]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
        <div class="column is-one-third">
          <div v-for="faq in faqBin[2]" :key="`Common-${faq.question}`">
            <FaqNote :faq="faq" class="faqnote" />
          </div>
        </div>
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
        []
      ]
      this.items.forEach((item, idx) => {
        bin[idx % 3].push(item)
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

.columns {
  padding: 30px;
}

.column {
  padding: 10px;
}

#bulletin-board-container {
  background-image: url("~@/assets/sprite/svg/faq__bulletin_board.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.faqs {
  position: static;
  z-index: 10;
  width: 75%;
  margin: auto;
  padding-top: 9%;
  padding-bottom: 9%;
}

.faqnote {
  position: relative;
  transition: transform .35s; /* Animation */
  z-index: 5;
}

.faqnote:hover {
  transform: scale(1.5);
  z-index: 10;
}

//Mobile CSS:
@include until($widescreen) {

#bulletin-board-container {
  width: 100%;
  padding-top: 55px;
  padding-bottom: 55px;
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

.faqnote:hover {
  position: relative;
  transform: scale(1.3);
  z-index: 10;
}

}
</style>
