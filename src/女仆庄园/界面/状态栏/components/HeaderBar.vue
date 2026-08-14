<template>
  <div class="header">
    <div class="header-row">
      <span class="date">{{ data.系统.日期 }}</span>
      <span class="time">{{ data.系统.时段 }}</span>
    </div>
    <div class="header-row">
      <span class="stage">{{ data.系统.剧情阶段 }}</span>
      <span class="location">{{ data.系统.场景 }}</span>
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
  background: var(--c-primary);
  color: #fff;
  border-radius: 6px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-weight: bold;
}

.time,
.location {
  color: rgba(255, 255, 255, 0.85);
}

.stage {
  background: var(--c-accent);
  color: #4a3a10;
  font-weight: bold;
  border-radius: 10px;
  padding: 1px 10px;
  font-size: 12px;
}
</style>
