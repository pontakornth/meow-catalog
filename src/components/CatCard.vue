<template>
    <div class="p-4 rounded border shadow-md w-3/4 mx-auto mb-4">
        <img :src="imageUrl" alt="Cat(s)"  class="w-full mx-auto"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
    },
    setup() {
        
    },
})
</script>
