<template>
    <div class="p-4 rounded border shadow-md">
        <img :src="imageUrl" alt="Cat(s)" />
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
