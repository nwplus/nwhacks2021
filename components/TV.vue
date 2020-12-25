<template>
  <div class="tv-content">
    <ul>
      <li v-for="member in shuffledTeam" :key="member.name">
        <a :href="member.link === '' ? 'https://www.nwplus.io' : member.link">
          <img
            :src="member.imgPath === '' ? require('@/static/team/robot.png') : member.imgPath"
            :alt="member.name"
            class="team-member-img"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
class TeamMember {
  constructor(name, imgPath, link) {
    this.name = name
    this.imgPath = imgPath
    this.link = link
  }
}

export default {
  name: 'TV',
  data() {
    return {
      team: [
        new TeamMember('Adel Akbar', require('@/static/team/adel.png'), 'https://www.linkedin.com/in/adelakbar/'),
        new TeamMember('Alex Hernandez', require('~/static/team/alex.jpg'), 'https://www.linkedin.com/in/alexdshernandez/'),
        new TeamMember('Alexander Lin', require('@/static/team/alexander.jpeg'), 'https://www.linkedin.com/in/alxanderlin/'),
        new TeamMember('Alice Kim', require('~/static/team/alice.jpg'), 'https://www.linkedin.com/in/yehee'),
        new TeamMember('Allison Chiang', require('@/static/team/allison.png'), 'https://www.linkedin.com/in/allison-chiang/'),
        new TeamMember('Andy Kwan', '', ''),
        new TeamMember('Anlin Chen', require('@/static/team/anlin.jpeg'), 'https://www.linkedin.com/in/anlin-chen/'),
        new TeamMember('Anne Guo', require('~/static/team/anne.jpg'), 'https://www.linkedin.com/in/anneguo3/'),
        new TeamMember('Audri Saulters', require('~/static/team/audri.jpg'), 'https://www.linkedin.com/in/audri-saulters/'),
        new TeamMember('Benjamin Cheung', require('@/static/team/benjamin.jpg'), 'https://www.linkedin.com/in/mrbenc88/'),
        new TeamMember('Berger Pan', require('@/static/team/berger.jpg'), 'https://bergerpan.com/'),
        new TeamMember('Bonny Yu', require('~/static/team/bonny.png'), 'https://www.linkedin.com/in/bonnyyu00/'),
        new TeamMember('Carmen Xu', require('~/static/team/carmen.jpg'), 'https://www.linkedin.com/in/carmen-xu/'),
        new TeamMember('Cayenne Chen', '', ''),
        new TeamMember('Christy Lo', require('~/static/team/christy.jpg'), 'https://www.linkedin.com/in/lo-christy/'),
        new TeamMember('Daniel Ryu', '', ''),
        new TeamMember('Daniel Shmidov', require('@/static/team/daniel.jpg'), 'https://www.linkedin.com/in/danielshmidov/'),
        new TeamMember('Derek Chen', '', ''),
        new TeamMember('Elaine Au-Yang', '', ''),
        new TeamMember('Giolio Rossi', '', ''),
        new TeamMember('Ian Mah', require('@/static/team/ian.jpg'), 'https://www.linkedin.com/in/ianmah/'),
        new TeamMember('Jacky Zhao', require('@/static/team/jacky.png'), 'https://jzhao.xyz/'),
        new TeamMember('Jacob Ng', require('@/static/team/jacob.jpg'), 'https://linkedin.com/ln/jacobng1'),
        new TeamMember('Jenny Pan', require('@/static/team/jenny.jpeg'), 'https://www.linkedin.com/in/pan-jenny/'),
        new TeamMember('Jessica Wu', require('~/static/team/jessica.jpg'), 'https://www.linkedin.com/in/jvssicawu/'),
        new TeamMember('Jill Bao', '', ''),
        new TeamMember('John Song (Jaehun)', require('@/static/team/john.jpg'), 'https://www.linkedin.com/in/jaehunjohnsong/'),
        new TeamMember('Joice Tang', '', ''),
        new TeamMember('JP Garcia', '', ''),
        new TeamMember('Karan Vasdev', require('@/static/team/karan.jpeg'), 'https://www.linkedin.com/in/karan-vasdev/'),
        new TeamMember('Kevin Wu', require('@/static/team/kevinw.jpg'), 'https://www.linkedin.com/in/kevin-wu-b3931b198/'),
        new TeamMember('Kevin Zou', require('@/static/team/kevinz.jpeg'), 'https://www.linkedin.com/in/kevin-zou/'),
        new TeamMember('Maggie wang', require('~/static/team/maggie.jpg'), 'https://www.linkedin.com/in/maggie-wang-5549711a5/'),
        new TeamMember('Marisa Chan', require('@/static/team/marisa.jpg'), 'https://www.linkedin.com/in/chanmarisa/'),
        new TeamMember('Mary Gan', '', ''),
        new TeamMember('Michael DeMarco', require('@/static/team/michael.jpg'), 'https://michaeldemar.co'),
        new TeamMember('Michelle Kim', require('@/static/team/michelle.jpg'), 'https://www.linkedin.com/in/michelle-yeojin-kim/'),
        new TeamMember('Nicholas Wong', '', 'https://www.linkedin.com/in/nicholas-wong-a0a51510a/'),
        new TeamMember('Philip Zhang', require('@/static/team/philip.jpeg'), 'www.linkedin.com/in/philipyzhang'),
        new TeamMember('Philman Yeung', require('@/static/team/philman.png'), 'https://www.philmanyeung.com/'),
        new TeamMember('Rebecca Baron', require('@/static/team/rebeccab.jpg'), 'https://www.linkedin.com/in/rebecca-baron/'),
        new TeamMember('Rebecca Xie', require('@/static/team/rebeccax.jpg'), 'https://www.linkedin.com/in/r-xie/'),
        new TeamMember('Ryan Mehri', require('@/static/team/ryan.jpeg'), 'https://www.linkedin.com/in/ryan-mehri/'),
        new TeamMember('Sandy Co', require('~/static/team/sandy.jpg'), 'https://sandykl.co/'),
        new TeamMember('Shirley Zeng', require('@/static/team/shirley.jpg'), 'https://www.linkedin.com/in/shirley-zeng/'),
        new TeamMember('Shu Ting Hu', require('@/static/team/shuting.jpg'), 'https://www.linkedin.com/in/shu-ting-hu/'),
        new TeamMember('Sophie Berger', require('@/static/team/sophie.jpeg'), 'https://www.linkedin.com/in/sophiemb/'),
        new TeamMember('Stephanie Chen', require('@/static/team/stephanie.jpg'), 'https://www.linkedin.com/in/stephaniejnc'),
        new TeamMember('Suzanne Pang', require('@/static/team/suzanne.png'), 'https://www.linkedin.com/in/suzannepang2/'),
        new TeamMember('Tiffany Yap', require('@/static/team/tiffany.jpg'), 'https://tiffanycyap.com/'),
        new TeamMember('Victoria Kim', require('@/static/team/victoriak.jpg'), 'https://www.linkedin.com/in/victoriasekim/'),
        new TeamMember('Victoria Lim', require('@/static/team/victorial.jpg'), 'https://www.linkedin.com/in/victoria-l-a393481ab'),
        new TeamMember('Vincent Chiang', require('~/static/team/vincent.png'), 'https://www.linkedin.com/in/vincent-chiang/')
      ]
    }
  },
  computed: {
    shuffledTeam() {
      const shuffled = this.team
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
      }
      return shuffled
    }
  }
}
</script>

<style lang="scss" scoped>
@import "bulma/bulma.sass";

ul {
  white-space: nowrap;
  overflow-x: auto;
}

ul::-webkit-scrollbar {
  background: none;
}

ul::-webkit-scrollbar-thumb {
  background-color: #C87682;
  border-radius: 10px;
  width: 7vw;
}

li {
  display: inline;
}

.team-member-img {
  width: 8vw;
  height: 8vw;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 10px;
}

@include until($tablet) {
  .team-member-img {
    width: 13vw;
    height: 13vw;
  }

  ul::-webkit-scrollbar-thumb {
    width: 15vw;
  }
}
</style>
