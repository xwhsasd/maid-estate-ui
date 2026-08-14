<template>
  <div class="header">
    <div class="header-row">
      <span class="date">❦ {{ data.系统.日期 }}</span>
      <span class="time">{{ data.系统.时段 }}</span>
    </div>
    <div class="header-row">
      <span class="location">{{ data.系统.场景 }}</span>
      <span class="stage">{{ data.系统.剧情阶段 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
const data = store.data;
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(135deg, #3a2f52 0%, #241e33 100%);
  border: 1px solid var(--c-border);
  color: var(--c-text);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-weight: bold;
  letter-spacing: 1px;
}

.time,
.location {
  color: var(--c-text-muted);
  font-size: 12px;
}

.stage {
  background: var(--c-accent-soft);
  border: 1px solid var(--c-accent);
  color: var(--c-accent);
  font-weight: bold;
  border-radius: 999px;
  padding: 1px 12px;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
