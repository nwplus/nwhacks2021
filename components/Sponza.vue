<template>
  <div>
    <div class="sponza">
      <h1 class="sponsor-title">
        Sponsors
      </h1>
      <div id="sponsorList">
        <div class="sponsorCategory">
          <div v-for="item in listOfPlatinum" :key="item.name" class="sponsorWrapper">
            <SponsorImage :item="item" />
          </div>
        </div>
        <div class="sponsorCategory">
          <div v-for="item in listOfGold" :key="item.name" class="sponsorWrapper">
            <SponsorImage :item="item" />
          </div>
        </div>
        <div class="sponsorCategory">
          <div v-for="item in listOfSilver" :key="item.name" class="sponsorWrapper">
            <SponsorImage :item="item" />
          </div>
        </div>
        <div class="sponsorCategory">
          <div v-for="item in listOfBronze" :key="item.name" class="sponsorWrapper">
            <SponsorImage :item="item" />
          </div>
        </div>
        <div class="sponsorCategory">
          <div v-for="item in listOfInKind" :key="item.name" class="sponsorWrapper">
            <SponsorImage :item="item" />
          </div>
        </div>
      </div>
      <p class="footer-text">
        Based at the University of British Columbia, nwPlus is the organization behind your favourite student hackathons
        in Vancouver, Canada. Learn something new at UBC Local Hack Day, make new friends across the Pacific Northwest
        and around the globe at nwHacks, and join an empowering community of women* in tech at cmd-f.
      </p>
    </div>
  </div>
</template>

<script>
import SponsorImage from '~/components/SponsorImage'

export default {
  components: {
    SponsorImage
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  computed: {
    listOfPlatinum: function () {
      return this.items.filter(item => item.tier === 'platinum')
    },
    listOfGold: function () {
      return this.items.filter(item => item.tier === 'gold')
    },
    listOfSilver: function () {
      return this.items.filter(item => item.tier === 'silver')
    },
    listOfBronze: function () {
      return this.items.filter(item => item.tier === 'bronze')
    },
    listOfInKind: function () {
      return this.items.filter(item => item.tier === 'inKind')
    }
  }
}
</script>

<style scoped lang="scss">
@import "bulma/bulma.sass";

//Desktop CSS:

h1 {
  color: #FDB073;
  font-size: 5vw;
}

.sponsor-title {
  position: relative;
  font-style: normal;
  font-family: $body-font;
  font-weight: 700;
  min-height: 20vh;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.footer-text {
  width: 60%;
  margin: 25px auto;
  font-size: 2vw;
  color: #322764;
  position: absolute;
  bottom: 4.5%;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.sponsorCategory {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.sponsorWrapper {
  margin: 30px;
}

.sponza {
  position: relative;
  background-image: url('../assets/sprite/svg/sponsor__background.svg');
  background-position: 0 0;
  background-size: 100% 100%;
  text-align: center;
  min-height: 225vw;
  min-width: 100vw;
}

.sponsorBackground {
  width: 100vw;
}

#sponsorList {
  margin-top: 9vw;
  position: relative;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  // Must have specific width
  width: 60%;
}

//Mid tier screen CSS:
@include until(1980) {
  .sponsor-title {
    min-height: 20vw;
  }

  #sponsorList {
    margin-top: 3vw;
  }
}
//Mobile CSS:
@include until($widescreen) {
  .sponsor-title {
    min-height: 20vw;
  }

  #sponsorList {
    margin-top: 3vw;
  }
}

//Mobile CSS:
@include until($tablet) {
  h1 {
    font-size: 10vw;
  }

  .sponza {
    background-color: #322764;
    background-size: 0% 0%;
    z-index: 1;
  }

  .sponsor-title {
    background-image: url('../assets/sprite/svg/sponsor__title_background_m.svg');
    background-position: 0 0;
    background-size: 100% 100%;
    padding-top: 2vw;
    min-height: 25vw;
  }

  .footer-text {
    color: white;
  }

  .sponsorCategory {
    flex-direction: column;
  }
  .sponsorWrapper {
    max-width: 300px;
    margin: 15px;
  }
  #sponsorList {
    margin-top: 0;
  }
}
</style>
