<template>
  <div>
    <transition name="fade" mode="in-out">
      <LoadPage />
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Main from '@/components/Main'

const AsyncComponent = () => ({
  component: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Main)
    }, 1000)
  }),
  loading: Loading,
  delay: 1
})

export default {
  name: 'IndexVue',
  components: {
    LoadPage: AsyncComponent
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
