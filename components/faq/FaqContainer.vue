<template>
  <div>
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
</template>

<script>
import expandArrow from '../../assets/sprite/svg/faq__expand_arrow.svg'

export default {
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      expandArrow
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
@import "bulma/bulma.sass";

$neon-blue: #BCE4EC;
$body-font: "HK Grotesk";

//Desktop CSS:
.accordion {
  background-color: #322764;
  color: $neon-blue;
  cursor: pointer;
  padding: 30px 50px;
  width: 100%;
  text-align: left;
  outline: none;
  border: 3px solid #D0FFFF;
  border-radius: 10px;
  line-height: 30px;
  font-style: normal;
  font-size: 24px;
  font-family: $body-font;
  font-weight: bold;
  box-sizing: border-box;
  .arrow {
    float: right;
    padding-top: 7px;
    transition: 200ms ease;
  }
  &.active {
    .arrow {
      transform: scaleY(-1);
    }
    border-bottom: none;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-bottom: -1px;
    padding-bottom: 10px;
  }
}

button > * {
  pointer-events: none;
}

.panel {
  padding: 0px 38px 30px 50px;
  background-color: #322764;
  display: none;
  overflow: hidden;
  border: 3px solid #D0FFFF;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 18px;
  margin: auto;
  margin-bottom: 2%;
  width: 100%;
  color: $neon-blue;
}

.faq {
    position: relative;
    z-index: 2;
    width: 90%;
    margin: auto;
    padding: 20px 0px 3vh 5px;
    color: $body-color;
    font-size: 12px;
    line-height: 15px;
}

</style>
