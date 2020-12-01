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
      <img :src="sponsorBackground" class="sponsorBackground" alt="Our Sponsors">
    </div>
    <p class="footer-text">
      Based at the University of British Columbia, nwPlus is the organization behind your favourite student hackathons
      in Vancouver, Canada. Learn something new at UBC Local Hack Day, make new friends across the Pacific Northwest
      and around the globe at nwHacks, and join an empowering community of women* in tech at cmd-f.
    </p>
  </div>
</template>

<script>
import sponsorBackground from 'assets/sprite/png/sponsor__background.png'
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
  data: function () {
    return {
      sponsorBackground: sponsorBackground
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
  position: absolute;
  top: -0.5%;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.footer-text {
  width: 60%;
  margin: 25px auto;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 72%;
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
  margin-top: 2%;
  text-align: center;
  min-height: 100vw;
}

#sponsorList {
  padding-top: 20%;
  position: absolute;
  // Centering an absolute element
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  // Must have specific width
  width: 60%;
}

//Mobile CSS:
@include until($tablet) {
  h1 {
    font-size: 10vw;
  }
  .sponsorBackground {
    display: none;
  }
  .sponsorCategory {
    flex-direction: column;
  }
  .sponsorWrapper {
    max-width: 300px;
    margin: 15px;
  }
  #sponsorList {
    padding-top: 5%;
  }
}
</style>
