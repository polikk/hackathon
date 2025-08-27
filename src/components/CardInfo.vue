}
}
<template>
  <n-space vertical style="margin-bottom: 15px;">
    <n-card style="width: 600px;">
      <div class="header">
        <n-skeleton v-if="loading" text width="100%" />
        <NavdsLinkPanel v-else :href="href">
          <template #title>{{ titleSlot }}</template>
          <template #status >
            <span class="status" :style="{ background: getStatusColor(statusSlot), height: '32px', display: 'inline-flex' }">{{ statusSlot }}</span>
          </template>
          <template #updated>{{ updatedSlot }}</template>
        </NavdsLinkPanel>
      </div>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NSkeleton, NSpace, NSwitch } from 'naive-ui';
import NavdsLinkPanel from './NavdsLinkPanel.vue';

const props = defineProps<{
  title?: string
  likes?: number
  href?: string
  titleSlot?: string
  statusSlot?: string
  updatedSlot?: string
}>();

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
  

const loading = ref(false);
const href = computed(() => {
  if (props.href) return props.href;
  if ((props as any).id) return `/case/${(props as any).id}`;
  return '/hjelpemidler/dinehjelpemidler/soknad/4322-brukerpassbytte_innsendt';
});
const titleSlot = computed(() => props.titleSlot ?? props.title ?? 'Bytte av hjelpemiddel');
const statusSlot = computed(() => props.statusSlot ?? (props.likes != null ? props.likes + ' Likes' : '42 Likes'));
const updatedSlot = computed(() => props.updatedSlot ?? 'Oppdatert 8. mars 2023');

</script>
<style scoped>
.header{
    font-size: 1.2rem;
}
.status{
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}
</style>