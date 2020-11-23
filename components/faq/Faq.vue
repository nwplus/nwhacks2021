<template>
  <div class="container">
    <div class="columns faqs">
      <div class="column column-left is-half">
        <div v-for="faq in faqBin[0]" :key="`Common-${faq.question}`" class="faqBox">
          <button
            @click="openShutFaq"
            class="accordion"
          >
            <img :src="expandArrow" alt="expand-arrow" class="arrow">
            <div class="question">
              {{ faq.question }}
            </div>
          </button>
          <div class="panel">
            <p>
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
      <div class="column column-right is-half">
        <div v-for="faq in faqBin[1]" :key="`Common-${faq.question}`" class="faqBox">
          <button
            @click="openShutFaq"
            class="accordion"
          >
            <img :src="expandArrow" alt="expand-arrow" class="arrow">
            <div class="question">
              {{ faq.question }}
            </div>
          </button>
          <div class="panel">
            <p>
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import expandArrow from '../../assets/sprite/svg/faq__expand_arrow.svg'

export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      expandArrow
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
  },
  methods: {
    openShutFaq: (e) => {
      e.target.classList.toggle('active')
      const panel = e.target.nextElementSibling
      if (panel.style.display === 'block') {
        panel.style.display = 'none'
      } else {
        panel.style.display = 'block'
      }
    }
  }
}
</script>

<style scoped lang="scss">
$neon-blue: #BCE4EC;
$body-font: "HK Grotesk";

@import "bulma/bulma.sass";
//Desktop CSS:
.container {
  position: relative;
}

.column-left {
  padding-right: 5%;
}

.column-right {
  padding-left: 5%;
}

.faqs {
  position: static;
  z-index: 10;
  width: 100%;
  margin: auto;
  padding-top: 9%;
  padding-bottom: 9%;
}

//Desktop CSS:
.accordion {
  background-color: #322764;
  color: $neon-blue;
  cursor: pointer;
  padding: 20px 50px;
  width: 100%;
  text-align: left;
  outline: none;
  border: 3px solid #D0FFFF;
  border-radius: 10px;
  line-height: 30px;
  font-style: normal;
  font-size: 23px;
  font-family: $body-font;
  font-weight: bold;
  box-sizing: border-box;
  & .question {
    width: 95%;
  }
  & .arrow {
    float: right;
    padding-top: 7px;
  }
}

.accordion.active {
  border-bottom: none;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0px;
  padding-bottom: 10px;
}

button > * {
  pointer-events: none;
}

.faqBox {
  margin: 30px auto;
  box-shadow: 0px 0px 18px -2px #95F9EB;
  border-radius: 10px;
}

.panel {
  padding: 0px 35px 20px 50px;
  background-color: #322764;
  display: none;
  overflow: hidden;
  border: 3px solid #D0FFFF;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 1px;
  margin: 0 auto;
  margin-bottom: 2%;
  width: 100%;
  color: $neon-blue;
}

//Mobile CSS:
@include until($widescreen) {

.column-left {
  padding-right: 2%;
  padding-bottom: 0%;
}

.column-right {
  padding-left: 2%;
  padding-top: 0%;
}

}

@include until($tablet) {

#bulletin-board-container {
  width: 92%;
}

}
</style>
