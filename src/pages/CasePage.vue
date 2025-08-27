<template>
  <div class="case-page">
    <h2>Detaljer for sak</h2>
    <div v-if="isLoading">Laster data...</div>
    <div v-else-if="isError">Kunne ikke hente data</div>
    <div v-else-if="data">
      <n-date-picker v-model:value="selectedDate" type="date" :default-value="defaultDate" style="margin-bottom: 1rem;" />
      <div>Valgt dato: {{ formattedDate }}</div>
      <pre>{{ data }}</pre>
    </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { NDatePicker } from 'naive-ui';

const route = useRoute();
const id = route.params.id;

const { isLoading, isError, data } = useQuery({
  queryKey: ['case', id],
  queryFn: () => axios.get(`/api/NavCaseApi/case/${id}`).then(res => res.data),
  enabled: !!id
});

const defaultDate = computed(() => {
  if (data.value && data.value.date) {
    return new Date(data.value.date).getTime();
  }
  return Date.now();
});
const selectedDate = ref(defaultDate.value);

watch(data, (newVal) => {
  if (newVal && newVal.date) {
    selectedDate.value = new Date(newVal.date).getTime();
  }
});

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  const d = new Date(selectedDate.value);
  const months = [
    '', 'januar', 'februar', 'mars', 'april', 'mai', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'desember'
  ];
  const day = d.getDate();
  const month = months[d.getMonth() + 1];
  const year = d.getFullYear();
  return `Oppdatert ${day}. ${month} ${year}`;
});
</script>

<style scoped>
.case-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
