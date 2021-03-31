<template>
  <h1 class="text-5xl font-bold">Meow CATalog</h1>
  <p v-if="error">Erro แอ๊ด ๆ</p>
  <p v-if="!data">Loading...</p>
  <p v-else>
    <img v-for="catData in data" :key="catData.id" :src="catData.url" />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  margin-top: 60px;
}
</style>