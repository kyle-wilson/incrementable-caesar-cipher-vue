<template>
  <div id="app">
    <incrementable-cipher/>
  </div>
</template>

<script>
import IncrementableCipher from './IncrementableCipher.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },

  components: {
    'incrementable-cipher': IncrementableCipher
  }
}
</script>

<style lang="scss">
#app {
  
}
</style>
