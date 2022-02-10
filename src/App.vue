<template>
  <div class="component">
    <Container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons'

export default defineComponent({
  components: { Container }
})
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
