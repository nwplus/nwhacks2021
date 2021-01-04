<template>
  <div id="main-page" v-if="dataReady" style="position: relative; width: 100%;">
    <NavBar id="navbar" :faq="faqFlag" :sponsors="sponsorFlag" :mentorRegistration="mentorFlag" />
    <section id="mainSection">
      <div class="mainContent">
        <Hero :registration="registrationFlag" />
        <About id="about" />
        <FAQ id="faq" v-if="faqFlag" :items="FAQs" :stats="statistics" />
        <Sponza id="sponza" v-if="sponsorFlag" :items="sponsors" :mentorRegistration="mentorFlag" :sponsorRegisteration="sponsorRegisteration" />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Sponza from '@/components/Sponza.vue'
import Footer from '@/components/Footer.vue'
import fireDb from '@/plugins/firebase.js'
import FAQ from '@/components/faq/Faq.vue'

export default {
  components: {
    NavBar,
    Hero,
    About,
    Footer,
    Sponza,
    FAQ
  },
  data() {
    return {
      sponsors: [],
      FAQS: [],
      faqFlag: true,
      sponsorFlag: true,
      registrationFlag: false,
      statistics: {},
      mentorFlag: false,
      dataReady: false,
      sponsorRegisteration: false
    }
  },
  computed: {
    screenWidth() {
      return screen.width
    }
  },
  async mounted() {
    const Sponsors = 'Sponsors'
    const FAQ = 'Faq'
    // data
    const { featureFlags, Statistics } = await fireDb.getWebsiteData()
    const listOfSponsors = await fireDb.getCollection(Sponsors)
    const FaqQuestions = await fireDb.getCollection(FAQ)

    this.sponsors = listOfSponsors
    this.FAQs = FaqQuestions
    this.faqFlag = FaqQuestions.length !== 0 && featureFlags.faqFlag
    this.sponsorFlag = featureFlags.sponsorFlag
    this.registrationFlag = featureFlags.registrationFlag
    this.mentorFlag = featureFlags.mentorFlag
    this.sponsorRegisteration = featureFlags.sponsorRegisteration
    this.statistics = Statistics

    this.dataReady = true
  }
}
</script>

<style lang="scss">
@import "bulma/bulma.sass";

#main-page {
  background: linear-gradient(180deg, #4A414C 8.34%, #061A2C 9.19%, #586971 12%, #172C3E 15%, #172C3E 22%, #67757B 26.66%, #B5B5B5 30.2%, #453F4B 34.08%);
  font-family: $body-font;
  overflow-x: hidden;
}

@include until($tablet) {
  #main-page {
    background: linear-gradient(180deg, #4A414C 10%, #061A2C 12%, #586971 14%, #223040 18%, #223040 21%, #67757B 30%, #B5B5B5 30.2%, #453F4B 34.08%);
  }
}
</style>
