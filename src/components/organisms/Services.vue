<template>
  <div class="services">
    <Service
      title="Front End"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt qui nisi eos aut esse, quas rem error at dolor, ullam, asperiores quia ipsum provident nobis temporibus adipisci quaerat veritatis iusto?"
    />
    <Service
      title="Back End"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt qui nisi eos aut esse, quas rem error at dolor, ullam, asperiores quia ipsum provident nobis temporibus adipisci quaerat veritatis iusto?"
    />
    <Service
      title="Manutenção"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt qui nisi eos aut esse, quas rem error at dolor, ullam, asperiores quia ipsum provident nobis temporibus adipisci quaerat veritatis iusto?"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'
export default defineComponent({
  components: { Service }
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
