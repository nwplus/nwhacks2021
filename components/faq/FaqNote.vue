<template>
  <div class="sticky-note">
    <div class="faq">
      <p class="faq-question">
        {{ faq.question }}
      </p>
      <p class="faq-answer">
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import "bulma/bulma.sass";

$body-color: black;

//Desktop CSS:
.sticky-note {
    background-image: url("~@/assets/sprite/png/faq__sticky_note.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 20px;
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

.faq-question {
    font-weight: 600;
    padding-bottom: 3px;
}

.faq-answer {
    font-weight: normal;
}

//Mobile CSS:
@include until($desktop) {
}
</style>
