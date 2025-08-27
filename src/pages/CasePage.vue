<template>
  <div class="case-page">
    <h2>Detaljer for sak</h2>
    <div v-if="isLoading">Laster data...</div>
    <div v-else-if="isError">Kunne ikke hente data</div>
    <div v-else-if="data">
      <pre>{{ data }}</pre>
      <!-- Render your details here -->
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const route = useRoute();
const id = route.params.id;

const { isLoading, isError, data } = useQuery({
  queryKey: ['case', id],
  queryFn: () => axios.get(`/api/NavCaseApi/case/${id}`).then(res => res.data),
  enabled: !!id
});
</script>

<style scoped>
.case-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
