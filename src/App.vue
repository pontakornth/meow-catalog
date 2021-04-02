<template>
  <h1 class="text-5xl font-bold mb-4">Meow CATalog</h1>
  <p class="text-red-500 font-bold mb-4" v-if="catError || breedError">Error แอ๊ด ๆ {{error}}</p>
  <p class="text-green-500 font-bold mb-4" v-if="!breedData">Loading breeds...</p>
  <select v-model="selectedBreed" class="w-3/4 my-4 p-4 border" name="breed">
  <option v-for="breed in breedData" :key="breed.id" :value="breed.id">
    {{ breed.name }}
  </option>
  </select>
  <p class="text-green-500 font-bold mb-4" v-if="!catData">Loading cats...</p>
  <p v-else>
    <cat-card v-for="cat in catData" :key="cat.id" :imageUrl="cat.url" />
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CatCard from './components/CatCard.vue'
import useCats, { useCatBreeds } from './useCats'

export default defineComponent({
  name: 'App',
  setup() {
    const { data: catData, error: catError } = useCats()
    const { data: breedData, error: breedError } = useCatBreeds()
    const selectedBreed = ref('')
    console.log(catData)
    return {
      catData,
      catError,
      breedData,
      breedError,
      selectedBreed,
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