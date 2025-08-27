<template>
  <div class="case-page">
    <h2>Detaljer for sak</h2>
    <n-space vertical>
    <n-slider v-model:value="value" :marks="marks" :step="1" :min="-100" :max="300"/>
    <n-space>
      <n-input-number v-model:value="value" size="small" />
    </n-space>
  </n-space>
</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { NSpace,NSlider,NInputNumber } from 'naive-ui';

const route = useRoute();

const value = ref(0)
const marks = {
  0: 'Today',
}
</script>

<style scoped>
.case-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
