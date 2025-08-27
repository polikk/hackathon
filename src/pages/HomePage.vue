<template>
      <div class="main">
        <div class="header">
            
        </div>
        <card-info
          v-for="item in data.data"
          v-if="data"
          :key="item.id || item.title || item.href"
          :title-slot="item.title || 'Bytte av hjelpemiddel'"
          :status-slot="item.status"
          :updated-slot="formatUpdated(item.lastUpdated)"
          :href="item.href || undefined"
        />


        <div v-else-if="isLoading">Laster data...</div>
        <div v-else-if="isError">Kunne ikke hente data</div>
      </div>
</template>
<script setup>

import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { onMounted } from 'vue';
const queryClient = useQueryClient();
onMounted(() => {
  queryClient.invalidateQueries({ queryKey: ['user-cases'] });
});
import axios from 'axios';
import CardInfo from '@/components/CardInfo.vue';
import SignPage from './SignPage.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
function formatUpdated(dateStr) {
  if (!dateStr) return 'Oppdatert 8. mars 2023';
  const months = [
    '', 'januar', 'februar', 'mars', 'april', 'mai', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'desember'
  ];
  const d = new Date(dateStr);
  if (isNaN(d)) return 'Oppdatert 8. mars 2023';
  const day = d.getDate();
  const month = months[d.getMonth() + 1];
  const year = d.getFullYear();
  return `Oppdatert ${day}. ${month} ${year}`;
}

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// Status to color mapping utility
function getStatusColor(status) {
  const green = 'rgba(204, 241, 214, 1)';
  const red = 'rgba(255, 194, 194, 1)';
  const yellow = 'rgba(255, 236, 204, 1)';
  const blue = 'rgba(216, 249, 255, 1)';
  switch (status) {
    case 'Mottatt av Nav':
    case 'Godkjent':
    case 'Innvilget':
    case 'Levert':
      return green;
    case 'Avslått':
      return red;
    case 'Under behandling':
    case 'Planlagt utlevert':
    case 'Delvis innvilget':
      return yellow;
    case 'Ferdig behandlet':
    case 'Saken er lukket':
    case 'Hjelpemiddel mottatt kommunalt lager':
      return blue;
    default:
      return blue;}}

const { isLoading, isError, data, error } = useQuery({
  enabled: !!user.value && !!user.value.data.id,
  queryKey: ['user-cases', user.value?.id],
  queryFn: () => axios.get(`/api/NavCaseApi/user/${user.value.data.id}`),
  select: (response) => response.data
});

</script>
<style scoped>
    .main{
        display:flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .header{
        margin-bottom: 30px;
    }
</style>
