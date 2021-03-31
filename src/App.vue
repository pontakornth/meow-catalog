<template>
  <h1 class="text-5xl font-bold mb-4">Meow CATalog</h1>
  <p class="text-red-500 font-bold mb-4" v-if="error">Error แอ๊ด ๆ {{error}}</p>
  <p class="text-green-500 font-bold mb-4" v-if="!data">Loading cats...</p>
  <p v-else>
    <cat-card v-for="catData in data" :key="catData.id" :imageUrl="catData.url" />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatCard from './components/CatCard.vue'
import useCats from './useCats'

export default defineComponent({
  name: 'App',
  setup() {
    const { data, error } = useCats()
    console.log(data)
    return {
      data,
      error
    }
  },
  components: {
    CatCard,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply py-6;
}
</style>